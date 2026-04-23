# Helm Chart Best Practices: Production-Grade Kubernetes Packaging

Helm chart best practices are the difference between a repeatable deployment and a 3 AM rollback. Charts that look fine in a dev namespace routinely blow up in production: hardcoded values, missing resource limits, templated secrets committed to Git, brittle upgrades that drop data. We've seen all of it.

At Target-Ops we work with Helm charts every day, from single-service deployments to larger internal platforms with many interdependent charts. This guide shares the practices that actually hold up under load, security scans, and the messy reality of multi-environment rollouts — the ones we reach for first when writing or auditing a chart.

Whether you're building your first chart or hardening charts your team has been extending for years, these patterns will help you ship Helm packages that survive contact with production.

## Why Helm Chart Quality Matters in Production

A Helm chart is the contract between your application and every environment it will ever run in — dev, staging, prod, regional failovers, DR sites, customer-specific clusters. A sloppy chart doesn't just cause deployment issues; it becomes a recurring operational tax that compounds with every environment you add.

### The Real Cost of Bad Charts

**Operational debt:**
- Deployments that work in dev but fail in prod due to environment-specific assumptions
- Upgrades that reset ConfigMaps and wipe state
- Missing PodDisruptionBudgets that turn routine node maintenance into outages
- Charts without proper resource limits that cause noisy-neighbor issues

**Security debt:**
- Secrets rendered as plain environment variables, visible in `kubectl describe`
- ServiceAccount tokens auto-mounted where they're not needed
- Container images pinned to `latest`, making rollbacks impossible
- Missing NetworkPolicies leaving blast radius unmanaged

**Developer friction:**
- Undocumented `values.yaml` requiring tribal knowledge to deploy
- Chart changes that silently break downstream consumers
- No version discipline, making "what's deployed where" impossible to answer

Helm sprawl — dozens of charts authored independently over years, with no common patterns — is something you see everywhere. The fix is always the same shape: apply the practices below systematically and consolidate what can be consolidated.

## Chart Structure: Make It Predictable

The Helm CLI enforces a baseline layout — use it, and extend it consistently.

```
mychart/
├── Chart.yaml
├── Chart.lock
├── values.yaml
├── values.schema.json        # JSON Schema for values validation
├── README.md
├── templates/
│   ├── _helpers.tpl          # Named templates / partials
│   ├── NOTES.txt             # Post-install guidance
│   ├── deployment.yaml
│   ├── service.yaml
│   ├── hpa.yaml
│   ├── pdb.yaml
│   ├── serviceaccount.yaml
│   ├── networkpolicy.yaml
│   └── tests/
│       └── test-connection.yaml
├── charts/                   # Subchart dependencies
└── ci/                       # Values files for CI validation
    ├── minimal-values.yaml
    └── full-values.yaml
```

**Non-obvious things that matter:**

- **`values.schema.json`** — JSON Schema validation on values. Catches type errors and missing required fields at `helm install` time instead of in a broken Deployment. Use it.
- **`ci/*.yaml`** — a convention we use internally: minimal and maximal values files that CI installs against a kind cluster to catch regressions.
- **`NOTES.txt`** — post-install instructions rendered after `helm install`. Put your service URLs and credential retrieval commands here so users don't have to read the README during an incident.

## Semantic Versioning: Enforce It in CI

Semver isn't optional for charts consumed by other teams. Adopt the contract:

- **MAJOR** — breaking changes (renamed values, removed resources, incompatible image bumps)
- **MINOR** — backward-compatible new features (new optional values, new resources gated by flags)
- **PATCH** — backward-compatible fixes

Enforce it by:

```bash
# In CI, fail on any chart change that doesn't bump version
helm-docs && git diff --exit-code  # regenerate docs, ensure they match
ct lint --chart-dirs charts/       # chart-testing linter with version check
```

`ct` (chart-testing) has a version-bump check that fails CI if you change templates without bumping `Chart.yaml:version`. This one rule eliminates the most common Helm discipline failure.

## values.yaml: Design for Your Users

`values.yaml` is the API your chart exposes. Treat it as one:

```yaml
# Good: grouped, documented, minimal defaults
image:
  # Container image repository
  repository: example/app
  # Image tag. Always pin explicitly — never use "latest"
  tag: "1.4.2"
  pullPolicy: IfNotPresent

# Number of pod replicas. Set to 0 to disable the workload.
replicaCount: 2

resources:
  # Requests/limits should always be set. Values below are for
  # small-scale dev use — override for production.
  requests:
    cpu: 100m
    memory: 128Mi
  limits:
    cpu: 500m
    memory: 512Mi

# Optional features are off by default
serviceMonitor:
  enabled: false
  interval: 30s

networkPolicy:
  enabled: false
  ingressFrom: []
```

**Rules that pay off:**

- **Group related values** under a parent key (`image.*`, `resources.*`). Flatter structures become unnavigable past ~20 values.
- **Document every value** inline. Values without comments may as well not exist.
- **Opt-in, not opt-out, for optional features.** Disabled by default means consumers make a deliberate choice to enable something that has cost (e.g., ServiceMonitor creating Prometheus scrape load).
- **Never ship a password or token default that works.** If your chart has a `auth.password` value, leave it empty and fail loudly if not set — never default to `admin123`.

## Templates: Use Named Templates and the Standard Labels

Every chart should use a consistent set of labels from the Helm best-practices set:

```yaml
# templates/_helpers.tpl
{{- define "mychart.labels" -}}
helm.sh/chart: {{ include "mychart.chart" . }}
app.kubernetes.io/name: {{ include "mychart.name" . }}
app.kubernetes.io/instance: {{ .Release.Name }}
app.kubernetes.io/version: {{ .Chart.AppVersion | quote }}
app.kubernetes.io/managed-by: {{ .Release.Service }}
app.kubernetes.io/part-of: {{ .Values.partOf | default "mychart" }}
{{- end }}

{{- define "mychart.selectorLabels" -}}
app.kubernetes.io/name: {{ include "mychart.name" . }}
app.kubernetes.io/instance: {{ .Release.Name }}
{{- end }}
```

Then use these consistently in every template:

```yaml
# templates/deployment.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: {{ include "mychart.fullname" . }}
  labels:
    {{- include "mychart.labels" . | nindent 4 }}
spec:
  replicas: {{ .Values.replicaCount }}
  selector:
    matchLabels:
      {{- include "mychart.selectorLabels" . | nindent 6 }}
  template:
    metadata:
      labels:
        {{- include "mychart.selectorLabels" . | nindent 8 }}
```

**Why this matters:** Downstream consumers (monitoring, service mesh, observability tooling) use the `app.kubernetes.io/*` labels to discover workloads. Inconsistent labeling breaks Grafana dashboards, Kiali service graphs, and ArgoCD application grouping.

## Production Must-Haves in Every Chart

A chart isn't production-ready without these resources:

```yaml
# templates/pdb.yaml — survive node maintenance
apiVersion: policy/v1
kind: PodDisruptionBudget
metadata:
  name: {{ include "mychart.fullname" . }}
spec:
  minAvailable: {{ .Values.pdb.minAvailable | default 1 }}
  selector:
    matchLabels:
      {{- include "mychart.selectorLabels" . | nindent 6 }}
```

```yaml
# templates/hpa.yaml — scale with load
{{- if .Values.autoscaling.enabled }}
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: {{ include "mychart.fullname" . }}
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: {{ include "mychart.fullname" . }}
  minReplicas: {{ .Values.autoscaling.minReplicas }}
  maxReplicas: {{ .Values.autoscaling.maxReplicas }}
  metrics:
    - type: Resource
      resource:
        name: cpu
        target:
          type: Utilization
          averageUtilization: {{ .Values.autoscaling.targetCPU }}
{{- end }}
```

**Other non-negotiables:**
- Liveness and readiness probes with realistic delays
- `securityContext` with `runAsNonRoot: true`, `readOnlyRootFilesystem: true`, dropped capabilities
- Explicit `imagePullSecrets` or IRSA configuration — never rely on node-level credentials
- `topologySpreadConstraints` for multi-AZ deployments

## Dependencies: Pin and Lock

```yaml
# Chart.yaml
dependencies:
  - name: postgresql
    version: 13.2.24       # Exact pin — not a range
    repository: https://charts.bitnami.com/bitnami
    condition: postgresql.enabled
```

Then:

```bash
helm dependency update
# Chart.lock is generated — commit it alongside Chart.yaml
```

**Rules:**
- Always commit `Chart.lock`. It's the reproducibility guarantee.
- Use `condition:` so consumers can disable subcharts without forking your chart.
- Never use version ranges (`~13.2` or `>=13.0.0`) — they turn reproducible deployments into roulette.

## Hooks: Use Them Sparingly

Hooks let you run jobs at specific points in the release lifecycle. They're powerful and dangerous — a broken pre-install hook can block every future upgrade.

```yaml
apiVersion: batch/v1
kind: Job
metadata:
  name: {{ include "mychart.fullname" . }}-migrate
  annotations:
    "helm.sh/hook": pre-upgrade
    "helm.sh/hook-weight": "-5"
    "helm.sh/hook-delete-policy": before-hook-creation,hook-succeeded
spec:
  template:
    spec:
      containers:
        - name: migrate
          image: {{ .Values.image.repository }}:{{ .Values.image.tag }}
          command: ["./migrate"]
      restartPolicy: OnFailure
```

**Rules for hooks:**
- Always set `hook-delete-policy: before-hook-creation` — otherwise failed hooks accumulate and block future installs.
- Keep hook logic idempotent. Helm retries hooks on upgrade, and non-idempotent migrations will corrupt data.
- Prefer Jobs over ad-hoc scripts so you get retry and timeout semantics.

## Helm Lint, Tests, and CI

No chart ships without:

```bash
# Lint the chart
helm lint .

# Template without installing, catches most rendering errors
helm template . --values ci/full-values.yaml | kubectl apply --dry-run=client -f -

# chart-testing: lint + install into kind
ct lint --chart-dirs charts/
ct install --chart-dirs charts/
```

Add `templates/tests/` resources that exercise real behavior:

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: "{{ include "mychart.fullname" . }}-test"
  annotations:
    "helm.sh/hook": test
    "helm.sh/hook-delete-policy": before-hook-creation,hook-succeeded
spec:
  containers:
    - name: wget
      image: busybox
      command: ['wget']
      args: ['{{ include "mychart.fullname" . }}:{{ .Values.service.port }}']
  restartPolicy: Never
```

Run on every PR:

```bash
helm install release-name . --wait
helm test release-name
```

## Security: The Practices That Stop Incidents

- **Never template secrets from `values.yaml` into plain ConfigMaps or env vars.** Use External Secrets Operator, Sealed Secrets, or cloud-native secret managers and mount at runtime.
- **Set `automountServiceAccountToken: false`** on any ServiceAccount that doesn't need the API.
- **Use `.Values.image.digest` (SHA) for production**, not tags, to pin exactly what's running.
- **Emit NetworkPolicy by default** when `.Values.networkPolicy.enabled` is true — at minimum deny-all egress with an allowlist.
- **Ship a `values.schema.json`** that rejects empty passwords and unsafe configs.

## Common Helm Chart Pitfalls We've Fixed in Production

1. **`latest` image tags.** Rollbacks fail because the previous release's tag now points to a different image. Always pin.
2. **Missing `helm.sh/resource-policy: keep` on PVCs.** A `helm uninstall` deletes the PVC and the data with it. Add the annotation to persistent resources.
3. **ConfigMap/Secret hash annotations missing.** Pods don't restart when you change config. Fix with `checksum/config: {{ include (print $.Template.BasePath "/configmap.yaml") . | sha256sum }}` as a pod annotation.
4. **Hooks without `hook-delete-policy`.** Failed or succeeded hook resources accumulate forever, eventually breaking upgrades.
5. **Subcharts that override parent labels.** Bitnami charts sometimes set their own labels that break your selectors. Audit rendered output before adopting.
6. **Defaulting secrets in `values.yaml`.** Even with comments saying "change me", someone ships it. Leave blank and fail loudly.
7. **No PDB.** Routine node drains turn into partial outages. Ship one with every workload chart.
8. **Chart version not bumped for template changes.** CD systems use version as the cache key — silent template changes cause silent drift.

## Applied Pattern: Consolidating a Fleet of Charts With a Shared Library

A common scenario: an organization has grown to 30–50 internal services, each with its own Helm chart, authored independently over several years. Every deployment is bespoke, rollbacks are unreliable, security scans find the same gaps over and over, and onboarding a new service takes a week. The fix is almost always the same pattern.

**Phase 1 — Build a shared chart library:**
- Create a `common-lib` chart with canonical templates for Deployment, Service, HPA, PDB, NetworkPolicy, ServiceMonitor
- Standardize labels, security contexts, probes, resource limits across all of them

**Phase 2 — Migrate services one at a time:**
- Each service's chart becomes a thin wrapper around `common-lib`, overriding only what's service-specific
- Add `values.schema.json` to every chart enforcing required production fields
- Enable `chart-testing` in CI with kind-based install tests

**Phase 3 — Roll out safely:**
- Deploy via ArgoCD (or equivalent) with automated rollback on health check failures
- Migrate one service at a time so any regression has a small blast radius

**What you can expect from this pattern:**
- Chart code typically shrinks 50–70% because duplication is gone
- New service onboarding drops from days to a few hours
- Security scan findings drop dramatically — one fix in `common-lib` fixes every chart
- Deployment reliability improves because the critical production fields are enforced by schema instead of code review

The shared-library pattern is the highest-leverage Helm practice we know of. If you operate more than ~10 internal services, it pays back within a quarter.

## Conclusion

Production-grade Helm charts aren't about templating cleverness — they're about discipline: predictable structure, enforced versioning, documented values, security defaults, and tests that run in CI. Get these right and Helm becomes a reliable deployment contract instead of an ongoing maintenance burden.

At Target-Ops, we apply these patterns whenever we write or audit a Helm chart. The ROI compounds: every chart that follows the rules saves hours of debugging per month and eliminates entire categories of production incidents before they happen.

## Next Steps

Ready to harden your Helm charts? Do these in order:

1. **Audit your charts against the production must-haves list** — PDBs, HPAs, probes, securityContext, NetworkPolicies.
2. **Add `values.schema.json`** to every chart to fail deployments with bad values at install time instead of in production.
3. **Introduce `ct` (chart-testing) in CI** for lint + install validation on every PR.
4. **Build a shared chart library** if you operate more than 10 internal services — eliminate duplication at the source.

**Want a second pair of eyes on your Helm charts?** [Book a free 30-minute call with Target-Ops](/contact) — we'll review your current setup, flag the highest-risk gaps, and help you plan a chart-library consolidation if it makes sense for your fleet.

## Related Resources

- [K9s Kubernetes CLI: Advanced Productivity Techniques for Platform Engineers](/articles/k9s-advanced)
- [IPv6 Kubernetes: Complete Dual-Stack Implementation Guide for EKS and GKE](/articles/ipv6-kubernetes)
- [Target-Ops DevOps Consulting](/solutions/devops-consulting)
- [Helm official best practices guide](https://helm.sh/docs/chart_best_practices/)
- [chart-testing (ct) on GitHub](https://github.com/helm/chart-testing)

---

*Last updated: April 2026 | Published by the Target-Ops DevOps Engineering Team*
