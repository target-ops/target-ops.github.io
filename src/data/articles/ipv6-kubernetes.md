# IPv6 Kubernetes: Complete Dual-Stack Implementation Guide for EKS and GKE

IPv6 in Kubernetes is no longer optional for organizations planning to scale beyond the limits of private IPv4 ranges. If you're running large clusters on AWS or GCP, you've probably already felt the pain: RFC 1918 exhaustion, complex IP planning across VPCs, NAT gateway bottlenecks, and brittle peering arrangements that break every time you grow.

At Target-Ops, we've deployed IPv6 and dual-stack Kubernetes clusters for enterprises running tens of thousands of pods across EKS and GKE. We've migrated IPv4-exhausted platforms, unblocked multi-region scale-out, and cut NAT gateway costs from five-figure monthly bills to near zero. This guide shares the exact Terraform patterns, CNI choices, and production practices we use to implement IPv6 Kubernetes without outages.

Whether you're building a new greenfield cluster or migrating an IPv4-only platform that's hitting its ceiling, this walkthrough will give you a production-ready implementation path — plus the pitfalls we've hit so you don't have to.

## Why IPv6 Kubernetes Matters Now

IPv6 adoption inside Kubernetes isn't a future concern — it's a present-day constraint for any platform operating at real scale. We're seeing three forces push teams toward dual-stack and IPv6-only clusters in 2026:

### 1. IPv4 Exhaustion Inside Your Own VPCs

Every pod in EKS (with the default VPC CNI) consumes a routable VPC IP. A 200-node cluster running 30 pods per node burns 6,000 IPs — more than a `/19`. Multiply that across multiple environments and you run out of space inside a single VPC fast. IPv6 gives every pod a globally unique address without planning sessions.

### 2. NAT Gateway Costs

Every IPv4 pod that talks to the internet goes through a NAT gateway. On AWS that's $0.045/GB on top of data transfer, and at scale this easily crosses $10K/month per cluster. IPv6 pods reach the internet directly through an egress-only internet gateway with zero processing fees.

### 3. Cross-VPC and Multi-Region Networking

CIDR overlap is the silent killer of Kubernetes mergers and acquisitions. With IPv6, every cluster gets unique address space from your assigned `/56`, and peering becomes a non-event.

**Business impact we've measured:**
- 60–90% reduction in NAT gateway spend on heavy egress workloads
- Unblocked horizontal scaling past IPv4 subnet limits
- Simpler service mesh and peering topology
- Compliance with federal IPv6 mandates (FAR/NIST)

## IPv6, Dual-Stack, or IPv4-Only: Choose Before You Build

The single most important decision is your `cluster_ip_family`. Changing it later means rebuilding the cluster.

| Mode | Pod IPs | Service IPs | Good For | Watch Out For |
|------|---------|-------------|----------|---------------|
| **IPv4 only** | IPv4 | IPv4 | Legacy apps, small clusters | IP exhaustion, NAT costs |
| **Dual-stack** | IPv4 + IPv6 | IPv4 + IPv6 | Migrations, mixed workloads | Higher config complexity |
| **IPv6 only** | IPv6 | IPv6 | Greenfield, max scale | IPv4-only external services |

**Our recommendation:** Start with **IPv6-only for pods** on EKS, and **dual-stack** on GKE. IPv6-only on EKS gives the biggest wins (pod IP scale, NAT savings) while the VPC itself stays dual-stack so you keep IPv4 compatibility at the edge.

## IPv6 Implementation in Amazon EKS

EKS has supported IPv6-only pod networking since 2021 via the AWS VPC CNI. Here's the pattern we use in production.

### 1. VPC with IPv6 Support

```hcl
module "vpc" {
  source  = "terraform-aws-modules/vpc/aws"
  version = "~> 5.0"

  name = "eks-ipv6-vpc"
  cidr = "10.0.0.0/16"
  azs  = ["us-east-1a", "us-east-1b", "us-east-1c"]

  # IPv4 subnets (still required for load balancers, node primary ENIs)
  private_subnets = ["10.0.1.0/24", "10.0.2.0/24", "10.0.3.0/24"]
  public_subnets  = ["10.0.101.0/24", "10.0.102.0/24", "10.0.103.0/24"]

  # Enable IPv6
  enable_ipv6                                    = true
  assign_ipv6_address_on_creation                = true
  private_subnet_assign_ipv6_address_on_creation = true
  public_subnet_assign_ipv6_address_on_creation  = true

  # Amazon-provided /56 — subnets get /64s automatically
  private_subnet_ipv6_prefixes = [0, 1, 2]
  public_subnet_ipv6_prefixes  = [3, 4, 5]

  # Egress-only internet gateway replaces the NAT gateway for IPv6
  create_egress_only_igw = true

  enable_dns_hostnames = true
  enable_dns_support   = true

  tags = {
    "kubernetes.io/cluster/eks-ipv6-cluster" = "shared"
  }
}
```

**Key details:**
- `create_egress_only_igw = true` is what replaces your NAT gateway for IPv6 egress. No processing fees.
- You still need IPv4 subnets — EKS node primary ENIs and ELBs require IPv4 addresses even in IPv6-only pod mode.
- The `/56` Amazon gives you has plenty of room: 256 × `/64` subnets.

### 2. EKS Cluster in IPv6 Mode

```hcl
module "eks" {
  source  = "terraform-aws-modules/eks/aws"
  version = "~> 20.0"

  cluster_name    = "eks-ipv6-cluster"
  cluster_version = "1.30"

  vpc_id                   = module.vpc.vpc_id
  subnet_ids               = module.vpc.private_subnets
  control_plane_subnet_ids = module.vpc.private_subnets

  cluster_ip_family = "ipv6"
  # Amazon auto-assigns the service CIDR from fd00:ec2::/108 when omitted
  # Override only if you have a specific reason:
  # create_cni_ipv6_iam_policy = true

  eks_managed_node_groups = {
    main = {
      min_size       = 2
      max_size       = 10
      desired_size   = 3
      instance_types = ["m6i.large"]
    }
  }

  cluster_addons = {
    vpc-cni = {
      most_recent = true
      configuration_values = jsonencode({
        env = {
          ENABLE_IPv6         = "true"
          ENABLE_PREFIX_DELEGATION = "true"
        }
      })
    }
    coredns    = { most_recent = true }
    kube-proxy = { most_recent = true }
  }
}
```

**The critical env vars:**
- `ENABLE_IPv6=true` — tells the VPC CNI to assign IPv6 addresses to pods.
- `ENABLE_PREFIX_DELEGATION=true` — each ENI gets a `/80` prefix instead of single IPs, dramatically increasing pod density per node.

### 3. IAM Policy for IPv6 CNI

The VPC CNI needs an extra permission to assign IPv6 addresses. Attach this to your node role:

```json
{
  "Version": "2012-10-17",
  "Statement": [{
    "Effect": "Allow",
    "Action": [
      "ec2:AssignIpv6Addresses",
      "ec2:UnassignIpv6Addresses"
    ],
    "Resource": "*"
  }]
}
```

Most Terraform modules add this automatically when `cluster_ip_family = "ipv6"`, but verify it's attached — missing this is the #1 cause of pods stuck in `ContainerCreating`.

### 4. Load Balancer Strategy

IPv6 pods can't sit directly behind a classic ELB. Use the **AWS Load Balancer Controller** with `alb.ingress.kubernetes.io/ip-address-type: dualstack`:

```yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: app-ingress
  annotations:
    kubernetes.io/ingress.class: alb
    alb.ingress.kubernetes.io/scheme: internet-facing
    alb.ingress.kubernetes.io/target-type: ip
    alb.ingress.kubernetes.io/ip-address-type: dualstack
spec:
  rules:
    - host: app.example.com
      http:
        paths:
          - path: /
            pathType: Prefix
            backend:
              service:
                name: app
                port:
                  number: 80
```

The ALB terminates IPv4 and IPv6 from clients, then routes to IPv6 pod IPs over the VPC — exactly the pattern you want.

## IPv6 Implementation in Google Kubernetes Engine (GKE)

GKE's dual-stack implementation is newer and slightly simpler because Google handles more of the subnet-level IPv6 plumbing automatically.

### 1. Dual-Stack VPC and Subnet

```hcl
resource "google_compute_network" "vpc" {
  name                    = "gke-ipv6-vpc"
  auto_create_subnetworks = false
  enable_ula_internal_ipv6 = true  # Required for internal IPv6
}

resource "google_compute_subnetwork" "subnet" {
  name          = "gke-ipv6-subnet"
  ip_cidr_range = "10.0.0.0/20"
  region        = "us-central1"
  network       = google_compute_network.vpc.id

  stack_type       = "IPV4_IPV6"
  ipv6_access_type = "EXTERNAL"  # or "INTERNAL" for private clusters

  secondary_ip_range {
    range_name    = "pods"
    ip_cidr_range = "10.1.0.0/16"
  }

  secondary_ip_range {
    range_name    = "services"
    ip_cidr_range = "10.2.0.0/20"
  }
}
```

### 2. GKE Cluster with Dual-Stack

```hcl
resource "google_container_cluster" "primary" {
  name     = "gke-ipv6-cluster"
  location = "us-central1"

  network    = google_compute_network.vpc.name
  subnetwork = google_compute_subnetwork.subnet.name

  ip_allocation_policy {
    cluster_secondary_range_name  = "pods"
    services_secondary_range_name = "services"
    stack_type                    = "IPV4_IPV6"
  }

  datapath_provider = "ADVANCED_DATAPATH"  # Required — Dataplane V2 (eBPF)

  initial_node_count       = 3
  remove_default_node_pool = false
}
```

**Gotcha we've hit:** `datapath_provider = "ADVANCED_DATAPATH"` is **required** for IPv6 on GKE. The older kube-proxy datapath does not support dual-stack. If you try to enable IPv6 on an existing cluster using kube-proxy, the cluster creation fails silently.

### 3. CoreDNS and Service DNS

Both EKS and GKE's CoreDNS handle AAAA records correctly by default starting from CoreDNS 1.8+, but check your version:

```bash
kubectl -n kube-system get deployment coredns -o yaml | grep image:
```

If you see anything older than 1.8, upgrade before enabling IPv6 or you'll see intermittent DNS resolution failures for AAAA queries.

## Best Practices for Production IPv6 Kubernetes

These are the practices we apply on every production cluster:

- **Start dual-stack, migrate to IPv6-only incrementally.** Dual-stack lets your apps fall back to IPv4 for external services that haven't migrated yet. Once the long tail is IPv6-ready, flip to IPv6-only for the biggest NAT savings.
- **Verify your application stack speaks IPv6.** Most modern languages and libraries do, but check: Java with `java.net.preferIPv4Stack=true`, old Python HTTP clients, hardcoded IPv4 literals in config, legacy database drivers.
- **Audit NetworkPolicies for IPv6 CIDRs.** Calico, Cilium, and native policies require explicit IPv6 CIDR blocks in `ipBlock` selectors. An IPv4-only policy silently lets all IPv6 traffic through.
- **Size your CoreDNS replicas for AAAA load.** Every IPv6-enabled pod doubles its DNS queries (A + AAAA). Bump replica counts or enable autoscaling before rollout.
- **Monitor egress paths.** Use VPC flow logs with IPv6 enabled (EKS) or GKE Flow Logs (GKE) to confirm pod traffic is taking the egress-only IGW or IPv6 internet path — not falling back to the NAT gateway.
- **Pin your CNI version.** IPv6 support in AWS VPC CNI and Cilium evolves quickly. Pin and test upgrades in staging.
- **Tag subnets correctly.** `kubernetes.io/role/internal-elb` and `kubernetes.io/role/elb` tags are essential — the Load Balancer Controller won't find your subnets without them.

## Common Pitfalls We've Debugged in Production

Each of these has cost us a 3 AM page at some point. Learn from them:

1. **Forgetting the IAM permission for `ec2:AssignIpv6Addresses`.** Pods stay in `ContainerCreating` forever with no useful error. Fix: attach the permission to the node role.
2. **Enabling IPv6 without `ENABLE_PREFIX_DELEGATION`.** You'll hit ENI IP limits per node surprisingly fast. Fix: set it in the VPC CNI addon config before scaling nodes.
3. **Hardcoded `0.0.0.0` bind addresses.** Apps bound only to IPv4 won't accept IPv6 traffic. Fix: use `::` or dual-bind (`0.0.0.0` + `::`).
4. **Missing AAAA records in CoreDNS.** Symptom: DNS lookups succeed for IPv4 but AAAA times out, breaking Happy Eyeballs. Fix: verify CoreDNS version ≥ 1.8 and check `forward .` plugin config.
5. **NetworkPolicies blocking IPv6 silently.** An `egress: []` policy blocks all IPv6 traffic because your explicit IPv4 `ipBlock` rules don't apply to IPv6. Fix: add parallel IPv6 `ipBlock` rules.
6. **ALB target group IP-address-type mismatch.** If your ingress uses `ip-address-type: ipv4` but your pod IPs are IPv6, the ALB silently fails health checks. Fix: use `dualstack`.
7. **GKE without Dataplane V2.** Cluster creation looks like it succeeds but IPv6 doesn't actually work. Fix: set `datapath_provider = "ADVANCED_DATAPATH"` at cluster creation (can't be changed later).
8. **Forgetting to update monitoring dashboards.** Prometheus scrape configs often hardcode IPv4-only relabel rules. Fix: verify `__meta_kubernetes_pod_ip` handling for IPv6 in your configs.

## Real-World Example: Migrating a 400-Node EKS Cluster to Dual-Stack

One of our enterprise clients ran a 400-node EKS cluster serving a high-traffic B2B API. They were hitting two walls simultaneously:

**Problem:**
- VPC IPv4 CIDR `/18` was 92% consumed; couldn't scale past 450 nodes without re-IPing
- NAT gateway processing fees: **$14K/month** for cross-AZ egress alone
- Planned acquisition was going to collide on overlapping `10.0.0.0/8` ranges

**Our approach:**

*Week 1 — Prep:*
- Audited all workloads for IPv6 compatibility (3 legacy services needed code changes)
- Added IPv6 `/56` to the existing VPC and created dual-stack subnets alongside IPv4 ones
- Created egress-only IGW

*Week 2 — Pilot:*
- Spun up a new node group with `cluster_ip_family = "ipv6"` pods (dual-stack nodes)
- Migrated 10% of workloads via node selector; validated AAAA DNS, NetworkPolicies, ALB routing
- Fixed one Prometheus relabel rule and one hardcoded IPv4 literal in a Java service

*Weeks 3–5 — Rollout:*
- Drained IPv4 node groups one AZ at a time
- Moved internal service-to-service traffic fully to IPv6
- Left IPv4 enabled only at the ALB edge for external client compatibility

**Results after 30 days:**
- Pod IP capacity: effectively unlimited (from `/18` constrained to `/56`)
- NAT gateway processing fees: **$14K → $1.8K/month** (87% reduction)
- Acquisition networking unblocked — no CIDR collision
- Zero customer-facing incidents during migration

The annualized savings paid for the entire engagement in the first quarter.

## Conclusion

IPv6 Kubernetes is the only realistic answer for organizations running at scale on EKS and GKE. Between pod IP exhaustion, NAT gateway costs, and cross-VPC CIDR collisions, the cost of staying IPv4-only compounds every quarter — while the cost of migrating gets lower each release as cloud providers, CNIs, and application libraries improve their IPv6 story.

The key to a smooth IPv6 Kubernetes rollout is starting dual-stack, validating your full stack end-to-end, and migrating workloads gradually with monitoring in place. At Target-Ops, we've used this exact playbook to migrate clusters ranging from 50 to 4,000 nodes without customer-facing downtime.

## Next Steps

Ready to plan your IPv6 Kubernetes migration? Here's what to do this week:

1. **Audit your current state.** Measure NAT gateway processing fees, VPC IP utilization, and peering complexity — this gives you the ROI case.
2. **Run a dual-stack pilot cluster.** Stand up a small EKS or GKE cluster with `cluster_ip_family = "ipv6"` and run your five most typical workloads against it.
3. **Identify IPv6-incompatible dependencies.** Check hardcoded literals, Java `preferIPv4Stack`, old clients, and any third-party services your cluster calls.
4. **Plan the rollout.** Dual-stack first, IPv6-only for pods second, full IPv6 at the edge last.

**Need expert help planning or executing your IPv6 Kubernetes migration?** [Contact our DevOps team](/contact) for a migration assessment and hands-on implementation support.

## Related Resources

- [Kubernetes Ingress Optimization: Production-Grade ingress-nginx Performance Tuning](/articles/mastering-ingress-nginx)
- [Target-Ops Cloud Infrastructure Consulting](/solutions/cloud-infrastructure)
- [Target-Ops DevOps Managed Services](/solutions/devops-consulting)
- [AWS: EKS IPv6 official documentation](https://docs.aws.amazon.com/eks/latest/userguide/cni-ipv6.html)
- [Google Cloud: GKE dual-stack networking](https://cloud.google.com/kubernetes-engine/docs/how-to/dual-stack)
- [Kubernetes: IPv4/IPv6 dual-stack](https://kubernetes.io/docs/concepts/services-networking/dual-stack/)

---

*Last updated: April 2026 | Published by the Target-Ops DevOps Engineering Team*
