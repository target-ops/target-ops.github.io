import { Solution } from "@/types";
import { Settings, Cloud, Zap, GitBranch, Shield } from "lucide-react";

export const solutions: Solution[] = [
  {
    id: "devops-consulting",
    title: "DevOps Consulting",
    slug: "devops-consulting",
    description: "Struggling with slow deployments or team silos? We assess your current processes, create a clear roadmap, and guide your team through implementing DevOps practices that actually work—reducing deployment time by up to 80%.",
    features: [
      "We evaluate your current setup and identify bottlenecks",
      "Create a step-by-step plan tailored to your business",
      "Train your team on DevOps best practices",
      "Stay with you through implementation until it works"
    ],
    icon: "Settings",
    weight: 1
  },
  {
    id: "cloud-migration",
    title: "Cloud Migration",
    slug: "cloud-migration",
    description: "Moving to the cloud but worried about downtime or data loss? We plan and execute your entire migration—from AWS to GCP to Azure—ensuring zero downtime and immediate cost savings of 30-50%.",
    features: [
      "We analyze your infrastructure and plan the migration",
      "Execute the move with zero downtime guarantee",
      "Optimize your cloud costs from day one",
      "Monitor and support you after the migration"
    ],
    icon: "Cloud",
    weight: 2
  },
  {
    id: "infrastructure-automation",
    title: "Infrastructure Automation",
    slug: "infrastructure-automation",
    description: "Tired of manual server setup and configuration? We automate your entire infrastructure—from provisioning to scaling—so your team can deploy in minutes instead of days and eliminate human errors.",
    features: [
      "We automate server provisioning and configuration",
      "Set up auto-scaling to handle traffic spikes",
      "Implement disaster recovery that actually works",
      "Free your team from repetitive manual tasks"
    ],
    icon: "Zap",
    weight: 3
  },
  {
    id: "cicd",
    title: "CI/CD Pipelines",
    slug: "cicd",
    description: "Still deploying code manually? We build automated pipelines that test and deploy your code in minutes—enabling your team to release updates 10x faster while catching bugs before they reach production.",
    features: [
      "We design pipelines customized to your tech stack",
      "Automate testing to catch bugs early",
      "Deploy to production with a single click",
      "Get instant feedback on every code change"
    ],
    icon: "GitBranch",
    weight: 4
  },
  {
    id: "security-compliance",
    title: "Security & Compliance",
    slug: "security-compliance",
    description: "Need GDPR, HIPAA, or SOC 2 compliance but don't know where to start? We implement security measures and compliance frameworks that pass audits—without slowing down your development team.",
    features: [
      "We audit your security and identify vulnerabilities",
      "Implement security best practices across your stack",
      "Ensure compliance with industry regulations",
      "Set up monitoring to detect threats in real-time"
    ],
    icon: "Shield",
    weight: 5
  }
];

export const whyChooseUs = {
  title: "Why Choose Target-Ops?",
  reasons: [
    {
      title: "Proven Expertise",
      description: "Decades of combined experience delivering DevOps solutions for startups to enterprises. We've seen it all and solved it all."
    },
    {
      title: "Tailored Solutions",
      description: "No cookie-cutter approaches. Every solution is customized to your unique business needs, challenges, and goals."
    },
    {
      title: "Results-Driven",
      description: "We measure success by your success. Faster deployments, lower costs, and happier teams—that's what we deliver."
    },
    {
      title: "Partnership Mindset",
      description: "We're not just consultants—we're your partners in transformation. Your success is our success."
    }
  ]
};

