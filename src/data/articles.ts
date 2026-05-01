// Import markdown files as raw strings
import masteringIngressNginxMd from './articles/mastering-ingress-nginx.md?raw';
import ipv6KubernetesMd from './articles/ipv6-kubernetes.md?raw';
import k9sAdvancedMd from './articles/k9s-advanced.md?raw';
import bestPracticesHelmChartMd from './articles/best-practices-helm-chart.md?raw';
import anyclownVscodeExtensionMd from './articles/anyclown-vscode-extension.md?raw';
import choosingCloudProviderMd from './articles/choosing-cloud-provider.md?raw';
import vscodeDevopsPackMd from './articles/vscode-devops-pack.md?raw';
import gitswitchPerDirectoryIdentityMd from './articles/gitswitch-per-directory-identity.md?raw';

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
  content: string; // Markdown content
  coverImage?: string;
  seoKeywords?: string[];
}

export const articles: Article[] = [
  {
    id: "mastering-ingress-nginx",
    title: "Kubernetes Ingress Optimization: Production-Grade ingress-nginx Performance Tuning",
    description: "Production-grade ingress-nginx optimization — worker processes, HTTP/2, connection pooling, caching, rate limiting, and the pitfalls that actually bite you at scale. Practical patterns with the math to back them up.",
    tags: ["Kubernetes", "Performance", "DevOps", "Networking"],
    date: "2024-10-27",
    readTime: "15 min read",
    author: "Target-Ops Team",
    authorRole: "DevOps Engineers",
    featured: true,
    seoKeywords: ["kubernetes ingress optimization", "ingress-nginx performance tuning", "kubernetes performance", "ingress controller configuration", "nginx optimization", "kubernetes latency reduction"],
    content: masteringIngressNginxMd
  },
  {
    id: "ipv6-kubernetes",
    title: "IPv6 Kubernetes: Complete Dual-Stack Implementation Guide for EKS and GKE",
    description: "IPv6 Kubernetes implementation for EKS and GKE — Terraform patterns, dual-stack tradeoffs, NAT gateway cost reduction, and a phased migration playbook. The gotchas you'll hit before you reach them.",
    tags: ["Kubernetes", "IPv6", "AWS", "GCP", "Networking"],
    date: "2026-04-22",
    readTime: "16 min read",
    author: "Target-Ops Team",
    authorRole: "Cloud Architects",
    featured: true,
    seoKeywords: ["ipv6 kubernetes", "eks ipv6", "gke ipv6", "kubernetes dual stack", "kubernetes ipv6 migration", "eks dual stack terraform", "kubernetes nat gateway cost"],
    content: ipv6KubernetesMd
  },
  {
    id: "k9s-advanced",
    title: "K9s Kubernetes CLI: Advanced Productivity Techniques for Platform Engineers",
    description: "Advanced K9s techniques from Target-Ops engineers — custom views, plugins, aliases, and triage workflows that make Kubernetes operations meaningfully faster. Copy-paste ready config.",
    tags: ["Kubernetes", "CLI", "Productivity", "DevOps"],
    date: "2026-04-22",
    readTime: "12 min read",
    author: "Target-Ops Team",
    authorRole: "DevOps Engineers",
    featured: true,
    seoKeywords: ["k9s kubernetes", "k9s advanced", "kubernetes cli tools", "k9s tutorial", "k9s plugins", "k9s custom views", "kubernetes productivity"],
    content: k9sAdvancedMd
  },
  {
    id: "best-practices-helm-chart",
    title: "Helm Chart Best Practices: Production-Grade Kubernetes Packaging",
    description: "Production-grade Helm chart best practices from Target-Ops engineers — structure, versioning, security, hooks, schema validation, and the shared-library pattern that eliminates chart sprawl.",
    tags: ["Kubernetes", "Helm", "DevOps", "Best Practices"],
    date: "2026-04-22",
    readTime: "14 min read",
    author: "Target-Ops Team",
    authorRole: "Kubernetes Engineers",
    featured: true,
    seoKeywords: ["helm chart best practices", "helm chart production", "kubernetes helm", "helm chart structure", "helm chart versioning", "helm chart security", "helm library chart"],
    content: bestPracticesHelmChartMd
  },
  {
    id: "anyclown-vscode-extension",
    title: "AnyClown: One-Click Git Repository Cloning to VS Code",
    description: "Stop typing git clone. AnyClown is a free Chrome extension from Target-Ops that turns any GitHub/GitLab/Bitbucket URL into a one-click clone-and-open in VS Code — saving DevOps engineers hours per week.",
    tags: ["VS Code", "Chrome Extension", "Productivity", "Git", "DevOps"],
    date: "2026-04-22",
    readTime: "8 min read",
    author: "Target-Ops Team",
    authorRole: "Tool Developers",
    featured: false,
    seoKeywords: ["anyclown", "vs code clone extension", "git clone vscode chrome", "one-click git clone", "vscode chrome extension", "developer productivity tools"],
    content: anyclownVscodeExtensionMd
  },
  {
    id: "choosing-cloud-provider",
    title: "Cloud Provider Selection: Strategic Framework for DevOps Teams",
    description: "The decision framework Target-Ops uses to reason about AWS vs GCP vs Azure — five questions that matter, honest per-vendor assessment, a worked hybrid-cloud example, and when multi-cloud actually makes sense.",
    tags: ["Cloud", "AWS", "GCP", "Azure", "Strategy"],
    date: "2026-04-22",
    readTime: "15 min read",
    author: "Target-Ops Team",
    authorRole: "Cloud Consultants",
    featured: true,
    seoKeywords: ["cloud provider selection", "aws vs gcp vs azure", "cloud provider comparison", "choosing cloud provider", "cloud strategy", "multi-cloud strategy", "cloud migration framework"],
    content: choosingCloudProviderMd
  },
  {
    id: "vscode-devops-pack",
    title: "VS Code DevOps Extension Pack: The Ultimate Toolkit for DevOps Engineers",
    description: "Curated by Target-Ops engineers — the VS Code DevOps Ultra Pack bundles Terraform, Docker, Kubernetes, AWS, GCP, CI/CD, and productivity extensions into a single install. Standardize your team's editor in one command.",
    tags: ["VS Code", "DevOps", "Extensions", "Productivity", "Tools"],
    date: "2026-04-22",
    readTime: "11 min read",
    author: "Target-Ops Team",
    authorRole: "Tool Developers",
    featured: true,
    seoKeywords: ["vscode devops", "vscode devops extension pack", "vscode extensions", "devops tools", "vscode pack", "terraform vscode", "kubernetes vscode"],
    content: vscodeDevopsPackMd
  },
  {
    id: "gitswitch-per-directory-identity",
    title: "gitswitch: Per-Directory Git Identity Binding with a Pre-Commit Guard",
    description: "Stop committing as the wrong person. gitswitch is an open-source CLI from Target-Ops that binds a git identity (email, SSH key, gh CLI, signing) to a directory and refuses commits where the identity is wrong.",
    tags: ["Git", "DevOps", "CLI", "Open Source", "Productivity"],
    date: "2026-05-02",
    readTime: "10 min read",
    author: "Target-Ops Team",
    authorRole: "Tool Developers",
    featured: true,
    seoKeywords: ["gitswitch", "git identity", "multiple git accounts", "git includeIf", "per-directory git config", "ssh key per project", "git pre-commit hook"],
    content: gitswitchPerDirectoryIdentityMd
  }
];
