export interface Article {
  id: string;
  title: string;
  description: string;
  tags: string[];
  date: string;
  readTime: string;
  externalUrl: string;
  featured?: boolean;
}

export const articles: Article[] = [
  {
    id: "mastering-ingress-nginx",
    title: "Mastering ingress-nginx",
    description: "A deep dive into ingress-nginx configuration, best practices, and advanced patterns for production Kubernetes environments.",
    tags: ["Kubernetes", "Networking", "DevOps"],
    date: "2024-03-15",
    readTime: "12 min read",
    externalUrl: "https://dev.to/target-ops/mastering-ingress-nginx-36d7",
    featured: true
  },
  {
    id: "ipv6-kubernetes",
    title: "Implementing IPv6 in Kubernetes Clusters: A Comprehensive Guide for EKS and GKE",
    description: "Learn how to properly configure IPv6 in your Kubernetes clusters on AWS EKS and Google GKE, including dual-stack networking strategies.",
    tags: ["Kubernetes", "IPv6", "AWS", "GCP"],
    date: "2024-03-10",
    readTime: "15 min read",
    externalUrl: "https://dev.to/target-ops/implementing-ipv6-in-kubernetes-clusters-a-comprehensive-guide-for-eks-and-gke-1ee6",
    featured: true
  },
  {
    id: "k9s-advanced",
    title: "K9s - CLI Management Advanced Usage",
    description: "Master the K9s terminal UI for Kubernetes — advanced shortcuts, custom views, and productivity hacks for managing clusters like a pro.",
    tags: ["Kubernetes", "CLI", "Productivity"],
    date: "2024-03-05",
    readTime: "8 min read",
    externalUrl: "https://dev.to/target-ops/k9s-cli-management-advanced-usage-4f7p",
    featured: true
  },
  {
    id: "choosing-cloud-provider",
    title: "Choosing a Cloud Provider: Deep Considerations for the Experienced DevOps Professional",
    description: "Beyond the basics — a strategic framework for selecting AWS, GCP, or Azure based on technical architecture, cost models, and organizational needs.",
    tags: ["Cloud", "AWS", "GCP", "Azure", "Strategy"],
    date: "2024-02-28",
    readTime: "10 min read",
    externalUrl: "https://dev.to/target-ops/choosing-a-cloud-provider-deep-considerations-for-the-experienced-devops-professional-37ed",
    featured: false
  },
  {
    id: "homebrew-tap",
    title: "Creating and Using a Personal Homebrew Tap",
    description: "Build and distribute your own Homebrew packages — a complete guide to creating a custom tap for your CLI tools and utilities.",
    tags: ["Homebrew", "macOS", "CLI", "DevTools"],
    date: "2024-02-20",
    readTime: "7 min read",
    externalUrl: "https://dev.to/target-ops/creating-and-using-a-personal-homebrew-tap-53bm",
    featured: false
  }
];

