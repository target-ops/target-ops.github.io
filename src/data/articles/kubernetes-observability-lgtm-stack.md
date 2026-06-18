# Kubernetes Observability: A Production Grafana LGTM Stack with Alloy

Kubernetes observability stops being optional the moment you run more than one cluster. Metrics live in one tool, logs in another, traces nowhere, and every incident turns into a tab-juggling scavenger hunt. At Target-Ops we run a self-hosted **Grafana LGTM stack** — Loki, Grafana, Tempo, and Mimir — fed by a single **Grafana Alloy** agent, and it has become the observability pattern we reach for first on every cluster we operate.

This guide walks through the architecture exactly as we run it in production: a clean split between a lightweight collection agent and a horizontally scalable storage backend, with metrics, logs, and traces stored on S3 and correlated inside one Grafana. You'll see the real Alloy pipeline, the multi-tenant push model that lets many clusters report into a single pane of glass, and the cost and cardinality decisions that keep the whole thing affordable.

Whether you're escaping a five-figure Datadog bill or building observability from scratch, these are the patterns that survive contact with real traffic, real incidents, and real cloud bills.

## Why a Self-Hosted LGTM Stack Matters

The "LGTM" acronym — **L**oki, **G**rafana, **T**empo, **M**imir — describes Grafana's open-source observability suite. Each component owns one signal:

- **Mimir** — long-term, horizontally scalable Prometheus-compatible metrics
- **Loki** — log aggregation that indexes labels, not full text (cheap by design)
- **Tempo** — distributed tracing backed by object storage
- **Grafana** — the single UI that queries all three and stitches them together

The reason to self-host this instead of paying a SaaS vendor isn't just cost, though the cost difference is dramatic at scale. It's **ownership of cardinality and retention**. SaaS observability bills you per series, per GB ingested, per host — so the vendor's pricing model quietly becomes your architecture. When you run the stack yourself on S3, storage is cents per GB, retention is a config value, and a noisy service doesn't generate a surprise invoice. You trade a bill for operational responsibility, and for teams already running Kubernetes that's usually a trade worth making.

The other reason is **correlation**. When metrics, logs, and traces share one query layer and consistent labels, you can jump from a latency spike on a graph to the exact trace that caused it, then to the logs emitted during that trace — in three clicks, without leaving Grafana. We'll come back to this because it's the real payoff.

## Architecture: Agent and Server, Cleanly Split

We package the stack as two Helm charts with a deliberate separation of concerns:

```
monitoring-agent   → collection   (Alloy DaemonSet + kube-state-metrics)
monitoring-server  → backend      (Mimir + Loki + Tempo + Grafana)
```

The **agent** runs on every cluster. It's intentionally thin: one Alloy DaemonSet that scrapes metrics, tails logs, and receives traces, plus kube-state-metrics for cluster-state series. The **server** runs once, on a central cluster, and owns all storage, querying, and visualization.

This split enables a **hub-and-spoke topology**. Remote clusters run only the agent and push their telemetry to the central backend over external endpoints; the central cluster runs both charts and the agent talks to the backend over internal service names:

```hcl
# Remote cluster agent → central backend (external)
mimirUrl:     "https://mimir.observability.example.com"
lokiPushUrl:  "https://loki.observability.example.com"
tempoPushUrl: "https://tempo.observability.example.com"

# Central cluster agent → backend (internal service DNS)
mimirUrl:     "http://monitoring-server-mimir-nginx.monitoring.svc/api/v1/push"
lokiPushUrl:  "http://monitoring-server-loki-gateway.monitoring.svc"
tempoPushUrl: "http://monitoring-server-tempo-distributor.monitoring.svc:4318"
```

Every cluster becomes a **tenant**. The agent stamps each request with an `X-Scope-OrgID` header set to the cluster name, and the backend enables multi-tenancy across all three databases. One Grafana, many clusters, hard isolation between them — with tenant federation available when you genuinely need to query across clusters at once.

## The Collection Layer: One Alloy Agent, Three Signals

Grafana Alloy is the piece that makes this tidy. Older stacks needed Promtail for logs, a Prometheus agent for metrics, and an OpenTelemetry Collector for traces — three DaemonSets, three configs, three things to upgrade. Alloy collapses all of that into one component with a single declarative config.

### Shared, node-scoped discovery

The first optimization is making every Alloy instance discover only the pods on its own node, using a Kubernetes field selector. This avoids every agent watching every pod across the cluster — a real API-server load problem at scale:

```alloy
discovery.kubernetes "pods" {
  role = "pod"
  selectors {
    role  = "pod"
    field = "spec.nodeName=" + env("HOSTNAME")
  }
}
```

That single discovery feeds both the log and metrics pipelines, so there's one watch per node instead of several.

### Logs: structured metadata over full-text indexing

Loki's superpower is that it does *not* index log contents — only labels — which is what keeps it cheap. Alloy collects pod logs through the Kubernetes API (no privileged host mounts) and enriches them before shipping. Two enrichment steps matter most:

```alloy
loki.process "pod_logs" {
  // Stitch multi-line stack traces back into one entry
  stage.multiline {
    firstline     = `^\S`
    max_wait_time = "3s"
    max_lines     = 256
  }

  // Pull the trace ID out of JSON logs for trace↔log correlation
  stage.regex {
    expression = `"(?:trace_id|traceId|traceID)":\s*"(?P<trace_id>[a-f0-9]+)"`
  }

  // Extract log level → attach as structured metadata (not a label)
  stage.structured_metadata {
    values = {
      trace_id = "trace_id",
      level    = "level",
    }
  }

  forward_to = [loki.write.loki.receiver]
}
```

`trace_id` and `level` go into Loki **structured metadata**, not labels. This is the modern Loki pattern: high-cardinality fields you want to filter on but never want as index labels. The `trace_id` becomes the bridge from a log line straight to its trace in Tempo.

We also ship the host systemd journal (kubelet, containerd, kernel OOM events, dmesg) through the same agent, so node-level failures show up alongside application logs.

### Traces: an OTLP pipeline done by the book

Alloy exposes OTLP receivers on the standard ports (4317 gRPC, 4318 HTTP), so any OpenTelemetry-instrumented service points its exporter at the local agent. The processor order follows OpenTelemetry's own guidance — **memory limiter first** for backpressure, **batch last** for efficiency:

```alloy
// receiver → memory_limiter → k8sattributes → attributes → batch → exporter
otelcol.processor.k8sattributes "default" {
  auth_type = "serviceAccount"
  extract {
    metadata = [
      "k8s.namespace.name",
      "k8s.deployment.name",
      "k8s.pod.name",
      "k8s.node.name",
    ]
  }
}
```

The `k8sattributes` processor decorates every span with Kubernetes context — namespace, deployment, pod, node — so traces share labels with metrics and logs. That shared labeling is what makes correlation possible later.

### Metrics: annotations, node stats, and cardinality control

The metrics pipeline scrapes three sources and feeds them all to a single remote-write to Mimir:

1. **Application pods** via the familiar `prometheus.io/scrape: "true"` annotation convention
2. **Node metrics** through Alloy's built-in Unix exporter — no separate node-exporter DaemonSet needed
3. **Kubelet and cAdvisor** through the API-server proxy

cAdvisor in particular is a cardinality firehose, so we drop the metrics nobody dashboards on before they ever hit storage:

```alloy
prometheus.relabel "cadvisor_filter" {
  rule {
    source_labels = ["__name__"]
    regex  = "container_(memory_failures_total|tasks_state|memory_failcnt|last_seen)"
    action = "drop"
  }
}
```

Remote-write ships everything to Mimir with exemplars enabled and a tuned queue, which keeps delivery reliable during traffic spikes:

```alloy
prometheus.remote_write "mimir" {
  endpoint {
    url = "http://monitoring-server-mimir-nginx.monitoring.svc/api/v1/push"
    headers = { "X-Scope-OrgID" = "production-us-east" }
    send_exemplars = true
    queue_config {
      capacity             = 10000
      max_shards           = 50
      max_samples_per_send = 2000
    }
  }
}
```

`send_exemplars = true` is small but important — it's what later lets you click a point on a latency histogram and jump to the trace behind it.

## The Storage Backend: Distributed, S3-Backed, Stateless Where It Counts

All three databases run in their fully distributed (microservices) mode, and all three store their data in S3. That choice drives a deliberately stateless design.

### No persistent volumes — replication plus anti-affinity instead

The ingesters that buffer recent data keep their write-ahead logs on `emptyDir`, **not** PVCs. The data is protected by a replication factor of 3 plus hard pod anti-affinity that guarantees the three replicas land on three different nodes:

```yaml
ingester:
  replicas: 4
  persistence:
    enabled: false   # WAL on emptyDir, protected by RF=3 + hard anti-affinity
  affinity:
    podAntiAffinity:
      requiredDuringSchedulingIgnoredDuringExecution:
        - topologyKey: kubernetes.io/hostname
```

Losing one node loses one replica; the other two carry the data until the ingester reschedules and replays from S3. This avoids EBS volume management, attach/detach delays during node rotation, and the AZ-pinning that PVCs force on you — at the cost of needing the anti-affinity to be *strict*. (Run this without hard anti-affinity and you're one node failure away from data loss. Don't.)

### Retention and limits live in config, not in a contract

Because you own the backend, retention is just a number:

```yaml
# Mimir — metrics
limits:
  ingestion_rate: 100000
  max_global_series_per_user: 1500000
  compactor_blocks_retention_period: 90d

# Loki — logs
limits_config:
  retention_period: 168h        # 7 days

# Tempo — traces
compactor:
  config:
    compaction:
      block_retention: 168h     # 7 days
```

90 days of metrics, 7 days of logs and traces, tunable per tenant via runtime overrides that apply through a ConfigMap with **no pod restart**. Caches (chunks, index, metadata, results) sit in front of the query path to keep dashboards snappy without re-reading S3 on every panel load.

## The Payoff: Correlated Metrics, Logs, and Traces

Storing three signals cheaply is table stakes. The reason to put them behind one Grafana is that they reference each other. Three wiring decisions turn three databases into one investigation surface.

**1. Span metrics from Tempo's metrics-generator.** Tempo watches incoming spans and generates RED metrics (rate, errors, duration) and service-graph data, remote-writing them into Mimir:

```yaml
overrides:
  defaults:
    metrics_generator:
      processors: [service-graphs, span-metrics, local-blocks]
```

This is what powers Grafana's automatic **service map** — a live topology diagram of which service calls which, with error rates on the edges — built entirely from trace data, with zero manual instrumentation of the graph itself.

**2. Traces → logs and traces → metrics**, configured on the Tempo datasource. From any span, one click pivots to the logs emitted during that span's window (matched on `k8s.namespace.name`) or to the RED metrics for that service:

```yaml
tracesToLogsV2:
  datasourceUid: loki
  tags: [{ key: k8s.namespace.name, value: namespace }]
tracesToMetrics:
  datasourceUid: mimir
  queries:
    - name: Related Metrics
      query: sum by (span_name, status_code) (rate(traces_spanmetrics_calls_total{$__tags}[5m]))
```

**3. Logs → traces**, via the `trace_id` we extracted in the Alloy pipeline. Because it's structured metadata on every log line, Grafana renders it as a clickable link straight to the trace.

The result is a genuine three-way loop. A typical incident flow:

1. A Mimir-backed dashboard shows P99 latency climbing.
2. Click the **exemplar** on the histogram → land on a slow trace in Tempo.
3. The service map shows the slow span is a downstream database call.
4. Pivot **trace → logs** → see the connection-pool-exhausted errors from that exact request.

Three clicks, one tab, root cause. That's the whole reason the stack exists.

## Best Practices We Apply Every Time

- **Make labels consistent across signals.** `cluster`, `namespace`, `pod`, and `service` mean the same thing in metrics, logs, and traces. Correlation is only as good as your label hygiene.
- **Use structured metadata for high-cardinality fields** (`trace_id`, `level`, request IDs) — never promote them to Loki index labels.
- **Drop cardinality at the agent, not the backend.** Filtering cAdvisor and unused container metrics in Alloy is far cheaper than storing and compacting them.
- **Set hard pod anti-affinity on every replicated component.** With PVC-less ingesters, anti-affinity *is* your durability guarantee.
- **Give the stack a `priorityClassName`.** Monitoring should be the last thing evicted under node pressure — you need it most when the cluster is unhealthy.
- **Run distributors, ingesters, and gateways with PodDisruptionBudgets** so node drains and upgrades never take a quorum offline.

## Common Pitfalls to Avoid

1. **Forgetting the `X-Scope-OrgID` header.** In a multi-tenant backend, a push without the tenant header is rejected and a query without it returns empty. Most "why is there no data?" tickets trace back to this.
2. **Python log levels showing as `info`.** Python's stdlib logs the field as `levelname`, which Loki doesn't recognize, so everything looks like info. Extract it explicitly into the `level` structured metadata field or you'll miss every error filter.
3. **Node-exporter reporting the pod name as the node.** Running the Unix exporter inside a container makes `uname()` return the pod name, which breaks the node selector on standard dashboards. Relabel `instance`/`nodename` to the real host.
4. **cAdvisor cardinality blowing up Mimir.** Per-container, per-interface, per-filesystem series multiply fast. Drop what you don't dashboard on before remote-write.
5. **Wrong OTLP processor order.** Put `memory_limiter` first (it provides backpressure) and `batch` last (it maximizes throughput). Reversed, you batch data you're about to drop under memory pressure.
6. **PVC-less ingesters without strict anti-affinity.** `emptyDir` + replication factor 3 is safe *only* if those replicas are guaranteed onto different nodes.

## Real-World Example: Many Clusters, One Pane of Glass

We run this pattern across a fleet — development, production, and a separate regional cluster in another AWS region. Each runs only the `monitoring-agent` chart and pushes to a single central backend, each as its own tenant. One Grafana, secured with GitHub OAuth and org-restricted (DevOps team mapped to Admin, everyone else read-only), is the single entry point for every cluster's metrics, logs, and traces.

The operational difference is stark. Adding a new cluster to observability is one Helm install with three endpoint URLs and a cluster name — no new dashboards, no new datasources, no new SaaS seats. An on-call engineer investigating a production alert never asks "which tool has this?" — it's all in one place, already correlated. And the bill is S3 storage plus the compute the stack runs on, which for a fleet this size lands well under what a per-host SaaS plan would charge for a *single* environment.

## Conclusion

A self-hosted Grafana LGTM stack gives you production-grade Kubernetes observability without the per-series billing model dictating your architecture. The agent-and-server split keeps collection lightweight and storage scalable; S3 backing with replicated, PVC-less ingesters keeps it both cheap and resilient; and the multi-tenant push model lets an entire fleet report into one Grafana.

The part that changes how teams actually work isn't any single database — it's the correlation. When Mimir, Loki, and Tempo share consistent labels and Grafana wires them together with exemplars, span metrics, and trace IDs, debugging becomes a three-click pivot from symptom to cause instead of a tour of disconnected tools.

It is more operational responsibility than handing a vendor your telemetry. But for a team already fluent in Kubernetes and Helm, it's a stack you fully own, can tune to your exact retention and cost targets, and can extend to every cluster you'll ever run.

## Next Steps

1. **Stand up the backend first** on a central cluster — Mimir, Loki, Tempo, and Grafana with S3 buckets and multi-tenancy enabled.
2. **Deploy the agent** to that same cluster pointing at internal service DNS, and confirm data flows end to end.
3. **Wire correlation** — enable Tempo's metrics-generator and configure the traces-to-logs and traces-to-metrics links on the datasources.
4. **Roll the agent out to remote clusters**, each with its own tenant ID, and watch them appear in one Grafana.
5. **Tune retention and cardinality** to your budget once real data is flowing.

**Want help designing or migrating to a self-hosted observability stack?** [Contact Target-Ops](/contact) — we build and run this pattern in production and can tailor it to your fleet.

## Related Resources

- [Helm Chart Best Practices: Production-Grade Kubernetes Packaging](/articles/best-practices-helm-chart)
- [Kubernetes Ingress Optimization: Production ingress-nginx Tuning](/articles/mastering-ingress-nginx)
- [K9s Kubernetes CLI: Advanced Productivity Techniques](/articles/k9s-advanced)
- [Infrastructure Automation Solutions](/solutions/infrastructure-automation)
- [Grafana Alloy Documentation](https://grafana.com/docs/alloy/latest/)
- [Grafana Mimir Documentation](https://grafana.com/docs/mimir/latest/)
- [Grafana Loki Documentation](https://grafana.com/docs/loki/latest/)
- [Grafana Tempo Documentation](https://grafana.com/docs/tempo/latest/)

---

*Last updated: June 2026 | Published by the Target-Ops DevOps Engineering Team*
