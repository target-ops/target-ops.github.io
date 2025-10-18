import { OSSProject } from "@/types";
import { Code2, GitBranch, Package, Puzzle, Database, Eye, Bell, QrCode, Box } from "lucide-react";

export const ossProjects: OSSProject[] = [
  {
    id: "anyclown",
    name: "AnyClown",
    title: "Clone any repo, right inside VS Code.",
    description: "From URL to ready-to-code in seconds.",
    github: "https://github.com/target-ops/AnyClown",
    externalUrl: "https://target-ops.io/AnyClown",
    tags: ["chrome", "vscode", "automation"],
    icon: Code2,
    features: [
      "One-click clone → workspace auto-setup",
      "Cross-platform (Chrome extension)"
    ],
    weight: 1
  },
  {
    id: "gitswitch",
    name: "gitSwitch",
    title: "Switch Git users instantly.",
    description: "Manage multiple Git profiles easily — perfect for contractors, OSS contributors, or multi-account teams.",
    github: "https://github.com/target-ops/gitswitch",
    externalUrl: "https://github.com/target-ops/gitswitch",
    tags: ["git", "cli", "productivity"],
    icon: GitBranch,
    features: [
      "Multi-profile management",
      "One-click switching",
      "Simple CLI setup"
    ],
    weight: 1
  },
  {
    id: "dba-tools",
    name: "dba-tools",
    title: "DBA's Swiss Army Knife.",
    description: "Shell tools that make database operations faster and safer.",
    github: "https://github.com/target-ops/dba-tools",
    externalUrl: "https://github.com/target-ops/dba-tools",
    tags: ["database", "shell", "automation"],
    icon: Database,
    features: [
      "Common DBA tasks automated",
      "Designed for reliability at speed"
    ],
    weight: 1
  },
  {
    id: "vscode-pack",
    name: "vscode-pack",
    title: "Your DevOps starter kit for VS Code.",
    description: "Curated extensions to speed up cloud & infra work.",
    github: "https://github.com/target-ops/vscode-pack",
    externalUrl: "https://github.com/target-ops/vscode-pack",
    tags: ["vscode", "devops", "extensions"],
    icon: Puzzle,
    features: [
      "Opinionated pack for DevOps workflows",
      "Maintained & updated"
    ],
    weight: 1
  },
  {
    id: "homebrew-tap",
    name: "homebrew-tap",
    title: "Install Target-Ops tools in seconds.",
    description: "The official tap for our CLI utilities.",
    github: "https://github.com/target-ops/homebrew-tap",
    externalUrl: "https://github.com/target-ops/homebrew-tap",
    tags: ["homebrew", "cli", "macos"],
    icon: Package,
    features: [
      "`brew install` simplicity",
      "Auto-updates + version pinning"
    ],
    weight: 2
  },
  {
    id: "2gview",
    name: "2Gview",
    title: "GitLab CI viewer for humans.",
    description: "A Chrome extension that surfaces what matters.",
    github: "https://github.com/target-ops/2Gview",
    externalUrl: "https://github.com/target-ops/2Gview",
    tags: ["gitlab", "chrome", "ci/cd"],
    icon: Eye,
    features: [
      "Faster pipeline insights, less clicking",
      "Lightweight, friction-free UX"
    ],
    weight: 3
  },
  {
    id: "vsync",
    name: "vsync",
    title: "VS Code: stay in the loop.",
    description: "Lightweight 'what's new' updates inside VS Code.",
    github: "https://github.com/target-ops/vsync",
    externalUrl: "https://github.com/target-ops/vsync",
    tags: ["vscode", "extension", "updates"],
    icon: Bell,
    features: [
      "Quick changelogs, minimal distraction"
    ],
    weight: 4
  },
  {
    id: "qrgen",
    name: "qrgen",
    title: "The tiny QR generator that just works.",
    description: "Create and style QR codes in moments.",
    github: "https://github.com/target-ops/qrgen",
    externalUrl: "https://github.com/target-ops/qrgen",
    tags: ["qr-code", "utility", "ui"],
    icon: QrCode,
    features: [
      "Simple UI, zero learning curve"
    ],
    weight: 5
  },
  {
    id: "mckloud",
    name: "mcKloud",
    title: "Kubernetes desktop control (Fyne/Go).",
    description: "KDash's big brother: a native desktop k8s manager.",
    github: "https://github.com/target-ops/mcKloud",
    externalUrl: "https://github.com/target-ops/mcKloud",
    tags: ["kubernetes", "desktop", "go"],
    icon: Box,
    features: [
      "Visual cluster navigation",
      "Built with Fyne/Go"
    ],
    weight: 6
  }
];

