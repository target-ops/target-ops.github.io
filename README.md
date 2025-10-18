# Target-Ops DevOps Showcase

<p align="center">
  <img src="https://i.postimg.cc/YSXdd1np/Untitled-2.png" alt="Target-Ops Logo">
</p>

<p align="center">
  <strong>Modern React-based showcase website for Target-Ops DevOps consultancy</strong>
</p>

<p align="center">
  <a href="https://join.slack.com/t/target-ops/shared_invite/zt-2kxdr9djp-YoQSCoRzARa9psxO8aYoaQ">
    <img src="https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=slack&logoColor=white" alt="Slack">
  </a>
  <a href="https://www.linkedin.com/company/target-ops">
    <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn">
  </a>
  <a href="https://dev.to/target-ops">
    <img src="https://img.shields.io/badge/dev.to-0A0A0A?style=for-the-badge&logo=devdotto&logoColor=white" alt="Dev.to">
  </a>
  <a href="https://github.com/target-ops">
    <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub">
  </a>
</p>

---

## 📖 About

This is the new **Target-Ops** showcase website, built with modern web technologies to provide a fast, beautiful, and maintainable platform for our DevOps consultancy services.

**Mission**: Empowering startups and enterprises with tailored DevOps solutions, cloud migration expertise, and infrastructure automation that scales.

---

## 🚀 Tech Stack

- **[React 18](https://react.dev/)** - Modern UI library
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Vite](https://vitejs.dev/)** - Lightning-fast build tool
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[shadcn/ui](https://ui.shadcn.com/)** - Beautiful, accessible component library
- **[React Router](https://reactrouter.com/)** - Client-side routing
- **[Lucide React](https://lucide.dev/)** - Icon library

---

## 🏃 Quick Start

### Prerequisites
- **Node.js** 18+ (install with [nvm](https://github.com/nvm-sh/nvm))
- **npm** or **yarn**

### Installation

```bash
# Clone the repository
git clone https://github.com/target-ops/targetops-devops-showcase.git

# Navigate to the project
cd targetops-devops-showcase

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit [http://localhost:5173](http://localhost:5173) to see the site in action! 🎉

---

## 📜 Available Scripts

```bash
# Development server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Lint code
npm run lint

# Add shadcn/ui components
npx shadcn@latest add [component-name]
```

---

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/              # shadcn/ui components
│   ├── Navigation.tsx   # Site header
│   ├── Footer.tsx       # Site footer
│   ├── Hero.tsx         # Homepage hero section
│   ├── Services.tsx     # Services showcase
│   └── OpenSource.tsx   # OSS projects
├── pages/
│   ├── Index.tsx        # Homepage
│   ├── About.tsx        # About page
│   ├── Solutions.tsx    # Solutions listing
│   ├── OpenSourcePage.tsx
│   ├── Articles.tsx     # Blog/articles
│   ├── Team.tsx         # Team profiles
│   ├── Contact.tsx      # Contact form
│   └── NotFound.tsx     # 404 page
├── data/                # Content data files
├── types/               # TypeScript definitions
├── hooks/               # Custom React hooks
├── lib/                 # Utility functions
└── App.tsx              # Main app & routing
```

---

## 🎨 Design System

### Colors
- **Primary**: Blue-Cyan gradient (`#3B82F6` → `#06B6D4`)
- **Background**: Dark slate tones
- **Text**: White to gray scale
- **Accents**: Cyan, purple hints

### Components
We use [shadcn/ui](https://ui.shadcn.com/) for accessible, customizable components:
- Buttons, Cards, Forms
- Dialogs, Dropdowns, Tooltips
- Navigation, Tabs, Accordions
- And 40+ more!

### Animations
- Smooth transitions (300ms)
- Subtle hover effects
- Gradient glows
- Scale transforms

---

## 🛠️ Development

### Code Standards
- **TypeScript**: Strict mode enabled
- **ESLint**: Code quality enforcement
- **Components**: Functional with hooks
- **Styling**: Tailwind utility classes
- **Naming**: PascalCase for components, camelCase for functions

See [`.cursorrules`](./.cursorrules) for complete coding standards.

### Adding New Pages
1. Create component in `src/pages/`
2. Add route in `src/App.tsx`
3. Update navigation in `src/components/Navigation.tsx`

### Adding Content
1. Create data file in `src/data/`
2. Define TypeScript interface in `src/types/`
3. Import and use in page component

---

## 📦 Migration from Hugo

This project is migrating from a Hugo static site. See:
- **[MIGRATION_GUIDE.md](./MIGRATION_GUIDE.md)** - Detailed migration steps
- **[PROJECT_SUMMARY.md](./PROJECT_SUMMARY.md)** - Project overview

### Migration Status

#### ✅ Completed
- [x] Project setup & structure
- [x] Animated logo with interactive effects (spin, bounce, shake, flip, pulse, disappear, slide-away)
  - Triggers on hover (logo and text)
  - Triggers on page navigation
  - Auto-triggers every 1 minute (2 different animations)
- [x] Navigation & footer with branding
- [x] Scroll-to-top on page navigation
- [x] **Homepage** - Completely refined with pain-focused messaging
  - Hero: "Your Deploys Are Slow. Your Cloud Bill Is Scary."
  - Before/After section showing transformation
  - Results section with metrics
  - Why Choose Us section
  - Final CTA banner
- [x] **About page** (story-driven narrative with grid background, card frames)
- [x] **Solutions page** (marketing-focused with grid background)
- [x] **All 5 solution detail pages** with consistent structure:
  - [x] DevOps Consulting
  - [x] Cloud Migration
  - [x] Infrastructure Automation
  - [x] CI/CD Pipelines
  - [x] Security & Compliance
  - All include: case studies, testimonials, "Who We Work With", FAQ, CTA
  - Consistent animated grid backgrounds
  - Standardized "What's Included" and "Results" sections
- [x] **Team page** with marketing-oriented profiles
- [x] **Open Source page** with 9 featured projects + stats section
- [x] Data structures (solutions, team, OSS projects)
- [x] **SEO Optimization**:
  - [x] Google Analytics (G-YWWR9DFR3T)
  - [x] Meta tags (title, description, keywords)
  - [x] Open Graph tags (social sharing)
  - [x] Twitter Card tags
  - [x] Structured data (JSON-LD for Organization)
  - [x] robots.txt
  - [x] sitemap.xml
  - [x] Canonical URLs
  - [x] Target keywords: "DevOps consulting", "DevOps as a service"
- [x] Deployment configuration (GitHub Actions for GitHub Pages)
- [x] SEO_GUIDE.md with complete optimization strategy

#### 📝 To Do
- [ ] Articles/blog page (content extraction from Hugo)
- [ ] Contact form functionality (email service integration)
- [ ] Image assets migration (team photos, article images)
- [ ] Google Search Console setup
- [ ] Final deployment to production (target-ops.io)

---

## 🚀 Deployment

### Recommended: Vercel
1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically on push

### Alternative Options
- **Netlify**: Great for static sites
- **GitHub Pages**: Free hosting
- **Cloudflare Pages**: Fast global CDN

---

## 🤝 Contributing

We welcome contributions! Please:
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is proprietary and confidential to Target-Ops.

---

## 🌐 Links

- **Website**: [target-ops.io](https://target-ops.io)
- **GitHub**: [@target-ops](https://github.com/target-ops)
- **LinkedIn**: [Target-Ops](https://www.linkedin.com/company/target-ops)
- **Dev.to**: [target-ops](https://dev.to/target-ops)
- **Slack**: [Join Community](https://join.slack.com/t/target-ops/shared_invite/zt-2kxdr9djp-YoQSCoRzARa9psxO8aYoaQ)
- **Telegram**: [targetops](https://t.me/targetops)

---

## 📞 Support

Need help? Reach out to us:
- **Slack**: Join our community
- **Email**: contact@target-ops.io
- **LinkedIn**: Message our company page

---

<p align="center">
  Made with ❤️ by the Target-Ops Team
</p>

<p align="center">
  <strong>DevOps Excellence. Delivered.</strong>
</p>
