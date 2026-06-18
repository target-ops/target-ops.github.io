import type { Copy } from "./types";

export const copyEn: Copy = {
  nav: {
    home: "Home",
    about: "About",
    solutions: "Solutions",
    openSource: "Open Source",
    articles: "Articles",
    team: "Team",
    contact: "Contact",
    tagline: "DevOps Excellence",
    toggleToEn: "EN",
    toggleToHe: "עב",
  },
  hero: {
    h1Line1: "We Build, Run, and Optimize",
    h1Line2: "Your DevOps Infrastructure",
    subtitle: "Full-service DevOps consulting for startups and enterprises.",
    description:
      "We migrate your cloud infrastructure, automate deployments, build CI/CD pipelines, and optimize costs — so your engineering team can focus on shipping features, not fixing infrastructure.",
    ctaPrimary: "Book a Free 30-Minute Call",
    ctaSecondary: "Explore Solutions",
    services: {
      cloudMigration: { label: "Cloud Migration", desc: "AWS • GCP • Azure" },
      iac: { label: "Infrastructure as Code", desc: "Terraform • Pulumi" },
      cicd: { label: "CI/CD Pipelines", desc: "Fast & Reliable" },
      security: { label: "Security & Compliance", desc: "SOC 2 • HIPAA" },
    },
  },
  whatWeDo: {
    h2Part1: "Before Us ",
    h2Part2: "vs. After Us",
    intro: "Startups don't realize they have an ops problem — they just know things feel broken.",
    introHighlight: "Here's what changes when we step in.",
    beforeLabel: "Before",
    afterLabel: "After",
    painPoints: [
      {
        service: "Deployment Speed",
        before: "Releases take days or weeks. Manual testing. Features are delayed. Customers wait.",
        after: "Deploy multiple times per day. Automated testing. Features ship in hours, not weeks.",
        metric: "Target: ship daily, not weekly",
      },
      {
        service: "Cloud Costs",
        before: "Bills spike unexpectedly. No cost visibility. Over-provisioned resources. Budget overruns.",
        after: "Predictable monthly costs. Real-time monitoring. Right-sized infrastructure.",
        metric: "Typical savings: 30–50%",
      },
      {
        service: "System Reliability",
        before: "Frequent outages. Manual recovery. Incidents at 3am. Customers complain. Engineers burn out.",
        after: "High-availability architecture. Automated monitoring. Self-healing systems. Proactive alerts.",
        metric: "Target: 99.9% uptime",
      },
    ],
    resultsH3: "The Results You Get",
    outcomes: [
      "Deploy 10× faster with automated CI/CD pipelines",
      "Cut cloud costs by 30–50% through optimization",
      "95% fewer manual errors with Infrastructure as Code",
      "Zero-downtime deployments with instant rollbacks",
      "Pass SOC 2, HIPAA, PCI-DSS audits with confidence",
      "Auto-scale infrastructure based on real-time demand",
    ],
    bottomLine1: "We don't just optimize infrastructure —",
    bottomLine2: "we build systems your engineers love maintaining",
  },
  services: {
    h2Part1: "Stop Fighting Fires. ",
    h2Part2: "Start Shipping Features.",
    subtitle:
      "Full-service DevOps consulting — from cloud migrations to CI/CD pipelines. We fix what's broken, automate what's manual, and optimize what's expensive.",
    cards: [
      {
        title: "DevOps Consulting",
        description:
          "Struggling with slow deployments or team silos? We assess your current processes, create a clear roadmap, and guide your team through implementing DevOps practices that actually work—reducing deployment time by up to 80%.",
        features: [
          "We evaluate your current setup and identify bottlenecks",
          "Create a step-by-step plan tailored to your business",
          "Train your team on DevOps best practices",
        ],
      },
      {
        title: "Cloud Migration",
        description:
          "Moving to the cloud but worried about downtime or data loss? We plan and execute your entire migration—from AWS to GCP to Azure—ensuring zero downtime and immediate cost savings of 30-50%.",
        features: [
          "We analyze your infrastructure and plan the migration",
          "Execute the move with zero downtime guarantee",
          "Optimize your cloud costs from day one",
        ],
      },
      {
        title: "Infrastructure Automation",
        description:
          "Tired of manual server setup and configuration? We automate your entire infrastructure—from provisioning to scaling—so your team can deploy in minutes instead of days and eliminate human errors.",
        features: [
          "We automate server provisioning and configuration",
          "Set up auto-scaling to handle traffic spikes",
          "Implement disaster recovery that actually works",
        ],
      },
      {
        title: "CI/CD Pipelines",
        description:
          "Still deploying code manually? We build automated pipelines that test and deploy your code in minutes—enabling your team to release updates 10x faster while catching bugs before they reach production.",
        features: [
          "We design pipelines customized to your tech stack",
          "Automate testing to catch bugs early",
          "Deploy to production with a single click",
        ],
      },
      {
        title: "Security & Compliance",
        description:
          "Need GDPR, HIPAA, or SOC 2 compliance but don't know where to start? We implement security measures and compliance frameworks that pass audits—without slowing down your development team.",
        features: [
          "We audit your security and identify vulnerabilities",
          "Implement security best practices across your stack",
          "Ensure compliance with industry regulations",
        ],
      },
    ],
    learnAbout: "Learn About",
    sectionCta: "Check Our Solutions",
  },
  whyChooseUs: {
    h2Part1: "Why Choose ",
    h2Part2: "Target-Ops",
    subtitle: "We're not here to sell you tools. We're here to fix your DevOps.",
    reasons: [
      {
        title: "Engineers First, Consultants Second",
        description: "We've sat in your chair — real engineers solving production pain. No buzzwords, no fluff.",
      },
      {
        title: "No One-Size-Fits-All Playbook",
        description: "Your stack is unique. We build solutions that fit your team, your tech, and your timeline.",
      },
      {
        title: "Transparency Over Sales",
        description: "No long contracts. No hidden fees. Just honest advice and DevOps that works.",
      },
      {
        title: "Open Work, Public Reputation",
        description:
          "Our tooling is on GitHub. Our technical writing is on target-ops.io. You can read our work before you hire us — most consultancies don't let you.",
      },
    ],
  },
  openSource: {
    heading: "We Give Back",
    subtitle: "Open source is how we solve real DevOps pain for engineers everywhere.",
    description:
      "From VS Code extensions to CLI tools — we build and maintain the utilities that make our own DevOps work faster, and we keep them open so the rest of the community benefits too.",
    stats: {
      projects: "Projects",
      projectsDesc: "Public repos",
      stars: "All public",
      starsDesc: "On GitHub",
      downloads: "Real tools",
      downloadsDesc: "We use daily",
    },
    ctaPrimary: "View All Projects",
    ctaGithub: "GitHub",
  },
  finalCTA: {
    badge: "🚀 Free Consultation Available",
    h2: "Ready to Transform Your DevOps?",
    description:
      "Book a free 30-minute consultation — no sales pitch, just honest advice about your DevOps challenges.",
    cta: "Schedule Your Free Consultation",
    footnote: "No commitment • 30 minutes • Expert advice",
    divider: "Or explore our solutions:",
    exploreCta: "View All Solutions",
  },
  footer: {
    description:
      "Empowering startups and enterprises to achieve DevOps excellence through tailored solutions, automation, and continuous innovation.",
    quickLinks: "Quick Links",
    solutions: "Solutions",
    privacy: "Privacy Policy",
    terms: "Terms of Service",
    copyright: "© 2024 Target-Ops. All rights reserved.",
    solutionLinks: {
      consulting: "DevOps Consulting",
      migration: "Cloud Migration",
      automation: "Infrastructure Automation",
      cicd: "CI/CD Pipelines",
      security: "Security & Compliance",
    },
  },
};
