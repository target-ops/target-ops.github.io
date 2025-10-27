export interface Article {
  id: string;
  title: string;
  description: string;
  tags: string[];
  date: string;
  readTime: string;
  author: string;
  authorRole?: string;
  featured?: boolean;
  content: string; // Full markdown content
  coverImage?: string; // Optional cover image
  seoKeywords?: string[]; // SEO keywords for the article
}

export const articles: Article[] = [
  {
    id: "mastering-ingress-nginx",
    title: "Mastering ingress-nginx",
    description: "A deep dive into ingress-nginx configuration, best practices, and advanced patterns for production Kubernetes environments.",
    tags: ["Kubernetes", "Networking", "DevOps"],
    date: "2024-03-15",
    readTime: "12 min read",
    author: "Target-Ops Team",
    authorRole: "DevOps Engineers",
    featured: true,
    seoKeywords: ["kubernetes ingress", "nginx ingress controller", "kubernetes networking", "ingress configuration"],
    content: `
# Mastering ingress-nginx

Kubernetes Ingress is a crucial component for managing external access to services in your cluster. In this comprehensive guide, we'll explore ingress-nginx, the most popular Ingress controller, and dive deep into its configuration, best practices, and advanced patterns.

## What is ingress-nginx?

The ingress-nginx controller is an open-source Ingress controller for Kubernetes that uses NGINX as a reverse proxy and load balancer. It's maintained by the Kubernetes community and is one of the most battle-tested Ingress controllers available.

### Key Features

- **SSL/TLS termination** - Handle HTTPS certificates at the edge
- **Path-based routing** - Route traffic based on URL paths
- **Host-based routing** - Route traffic based on domain names
- **Rate limiting** - Protect your services from abuse
- **Authentication** - Add auth layers before your services
- **Custom error pages** - Beautiful error handling

## Basic Installation

Installing ingress-nginx is straightforward using Helm:

\`\`\`bash
helm repo add ingress-nginx https://kubernetes.github.io/ingress-nginx
helm repo update
helm install ingress-nginx ingress-nginx/ingress-nginx \\
  --namespace ingress-nginx \\
  --create-namespace
\`\`\`

## Configuration Best Practices

### 1. Resource Limits

Always set proper resource limits for the ingress controller:

\`\`\`yaml
resources:
  limits:
    cpu: 500m
    memory: 512Mi
  requests:
    cpu: 100m
    memory: 128Mi
\`\`\`

### 2. High Availability

For production, run at least 2 replicas:

\`\`\`yaml
replicaCount: 2
affinity:
  podAntiAffinity:
    preferredDuringSchedulingIgnoredDuringExecution:
      - weight: 100
        podAffinityTerm:
          topologyKey: kubernetes.io/hostname
\`\`\`

### 3. SSL/TLS Configuration

Enable SSL redirect globally:

\`\`\`yaml
controller:
  config:
    ssl-redirect: "true"
    force-ssl-redirect: "true"
    hsts: "true"
    hsts-max-age: "31536000"
\`\`\`

## Advanced Patterns

### Rate Limiting

Protect your APIs with rate limiting:

\`\`\`yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: rate-limited-ingress
  annotations:
    nginx.ingress.kubernetes.io/limit-rps: "10"
    nginx.ingress.kubernetes.io/limit-burst-multiplier: "2"
spec:
  rules:
    - host: api.example.com
      http:
        paths:
          - path: /
            pathType: Prefix
            backend:
              service:
                name: api-service
                port:
                  number: 80
\`\`\`

### Custom Error Pages

Provide better error messages:

\`\`\`yaml
annotations:
  nginx.ingress.kubernetes.io/custom-http-errors: "404,503"
  nginx.ingress.kubernetes.io/default-backend: error-page-service
\`\`\`

### Canary Deployments

Gradually roll out new versions:

\`\`\`yaml
annotations:
  nginx.ingress.kubernetes.io/canary: "true"
  nginx.ingress.kubernetes.io/canary-weight: "10"
\`\`\`

## Monitoring and Observability

Enable Prometheus metrics:

\`\`\`yaml
controller:
  metrics:
    enabled: true
    serviceMonitor:
      enabled: true
\`\`\`

## Common Pitfalls to Avoid

1. **Not setting resource limits** - Can cause cluster-wide issues
2. **Missing SSL certificates** - Always use cert-manager
3. **Too aggressive rate limiting** - Test thoroughly
4. **Ignoring logs** - Monitor for errors and warnings
5. **Not using health checks** - Enable readiness/liveness probes

## Conclusion

Mastering ingress-nginx is essential for running production Kubernetes clusters. By following these best practices and patterns, you'll have a robust, scalable, and maintainable Ingress setup.

**Need help with your Kubernetes infrastructure?** [Get a free consultation](/contact) from our DevOps experts.

---

*Published on March 15, 2024 by the Target-Ops engineering team. Follow us on [dev.to](https://dev.to/target-ops) for more DevOps insights.*
`
  },
  {
    id: "ipv6-kubernetes",
    title: "Implementing IPv6 in Kubernetes Clusters: A Comprehensive Guide for EKS and GKE",
    description: "Learn how to properly configure IPv6 in your Kubernetes clusters on AWS EKS and Google GKE, including dual-stack networking strategies.",
    tags: ["Kubernetes", "IPv6", "AWS", "GCP"],
    date: "2024-03-10",
    readTime: "15 min read",
    author: "Target-Ops Team",
    authorRole: "Cloud Architects",
    featured: true,
    seoKeywords: ["ipv6 kubernetes", "eks ipv6", "gke ipv6", "kubernetes dual stack"],
    content: `
# Implementing IPv6 in Kubernetes Clusters

[Content to be added - paste your dev.to article content here]

This article will cover IPv6 implementation in Kubernetes on both AWS EKS and Google GKE.

**Need help with your cloud infrastructure?** [Contact us](/contact) for expert guidance.
`
  },
  {
    id: "k9s-advanced",
    title: "K9s - CLI Management Advanced Usage",
    description: "Master the K9s terminal UI for Kubernetes — advanced shortcuts, custom views, and productivity hacks for managing clusters like a pro.",
    tags: ["Kubernetes", "CLI", "Productivity"],
    date: "2024-03-05",
    readTime: "8 min read",
    author: "Target-Ops Team",
    authorRole: "DevOps Engineers",
    featured: true,
    seoKeywords: ["k9s kubernetes", "kubernetes cli tools", "k9s tutorial", "kubernetes management"],
    content: `
# K9s - CLI Management Advanced Usage

[Content to be added - paste your dev.to article content here]

This article covers advanced K9s usage for Kubernetes cluster management.

**Want to optimize your Kubernetes workflows?** [Get a consultation](/contact).
`
  },
  {
    id: "choosing-cloud-provider",
    title: "Choosing a Cloud Provider: Deep Considerations for the Experienced DevOps Professional",
    description: "Beyond the basics — a strategic framework for selecting AWS, GCP, or Azure based on technical architecture, cost models, and organizational needs.",
    tags: ["Cloud", "AWS", "GCP", "Azure", "Strategy"],
    date: "2024-02-28",
    readTime: "10 min read",
    author: "Target-Ops Team",
    authorRole: "Cloud Consultants",
    featured: false,
    seoKeywords: ["aws vs gcp vs azure", "cloud provider comparison", "choosing cloud provider", "cloud strategy"],
    content: `
# Choosing a Cloud Provider

[Content to be added - paste your dev.to article content here]

A comprehensive guide to choosing the right cloud provider for your needs.

**Need help with cloud migration?** [Talk to our experts](/contact).
`
  },
  {
    id: "homebrew-tap",
    title: "Creating and Using a Personal Homebrew Tap",
    description: "Build and distribute your own Homebrew packages — a complete guide to creating a custom tap for your CLI tools and utilities.",
    tags: ["Homebrew", "macOS", "CLI", "DevTools"],
    date: "2024-02-20",
    readTime: "7 min read",
    author: "Target-Ops Team",
    authorRole: "Tool Developers",
    featured: false,
    seoKeywords: ["homebrew tap", "homebrew custom tap", "distribute cli tools", "homebrew formula"],
    content: `
# Creating and Using a Personal Homebrew Tap

[Content to be added - paste your dev.to article content here]

Learn how to create and maintain your own Homebrew tap for distributing CLI tools.

**Building DevOps tools?** [We can help](/contact) with distribution and automation.
`
  }
];

