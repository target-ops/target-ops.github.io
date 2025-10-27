// Import markdown files as raw strings
import masteringIngressNginxMd from './articles/mastering-ingress-nginx.md?raw';
import ipv6KubernetesMd from './articles/ipv6-kubernetes.md?raw';
import k9sAdvancedMd from './articles/k9s-advanced.md?raw';
import bestPracticesHelmChartMd from './articles/best-practices-helm-chart.md?raw';
import anyclownVscodeExtensionMd from './articles/anyclown-vscode-extension.md?raw';
import choosingCloudProviderMd from './articles/choosing-cloud-provider.md?raw';
import vscodeDevopsPackMd from './articles/vscode-devops-pack.md?raw';

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
    title: "Mastering ingress-nginx",
    description: "A deep dive into ingress-nginx configuration, best practices, and advanced patterns for production Kubernetes environments.",
    tags: ["Kubernetes", "Networking", "DevOps"],
    date: "2024-03-15",
    readTime: "12 min read",
    author: "Target-Ops Team",
    authorRole: "DevOps Engineers",
    featured: true,
    seoKeywords: ["kubernetes ingress", "nginx ingress controller", "kubernetes networking", "ingress configuration"],
    content: masteringIngressNginxMd
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
    content: ipv6KubernetesMd
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
    content: k9sAdvancedMd
  },
  {
    id: "best-practices-helm-chart",
    title: "Best Practices for Helm Charts",
    description: "Crafting Helm charts that adhere to best practices ensures reliability, maintainability, and scalability for your Kubernetes applications.",
    tags: ["Kubernetes", "Helm", "DevOps", "Best Practices"],
    date: "2024-03-01",
    readTime: "10 min read",
    author: "Target-Ops Team",
    authorRole: "Kubernetes Engineers",
    featured: true,
    seoKeywords: ["helm charts best practices", "kubernetes helm", "helm chart structure", "helm chart versioning"],
    content: bestPracticesHelmChartMd
  },
  {
    id: "anyclown-vscode-extension",
    title: "AnyClown: Clone Any Git Repo Directly to VS Code",
    description: "One-click Git repository cloning directly to VS Code. From URL to ready-to-code in seconds with the AnyClown Chrome extension.",
    tags: ["VS Code", "Chrome Extension", "Productivity", "Git"],
    date: "2024-02-25",
    readTime: "5 min read",
    author: "Target-Ops Team",
    authorRole: "Tool Developers",
    featured: false,
    seoKeywords: ["vs code extension", "git clone automation", "chrome extension development", "vscode productivity"],
    content: anyclownVscodeExtensionMd
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
    content: choosingCloudProviderMd
  },
  {
    id: "vscode-devops-pack",
    title: "VScode DevOps Ultra Pack: Ultimate Extension Pack for DevOps Engineers",
    description: "Everything you need for DevOps in VS Code - Terraform, Docker, Kubernetes, AWS, GCP, CI/CD tools, and more in one comprehensive extension pack.",
    tags: ["VS Code", "DevOps", "Extensions", "Productivity", "Tools"],
    date: "2024-02-20",
    readTime: "7 min read",
    author: "Target-Ops Team",
    authorRole: "Tool Developers",
    featured: true,
    seoKeywords: ["vscode devops", "vscode extensions", "devops tools", "vscode pack", "terraform vscode", "kubernetes vscode"],
    content: vscodeDevopsPackMd
  }
];
