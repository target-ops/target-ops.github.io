#!/usr/bin/env node

/**
 * Generate static HTML files for all routes
 * This solves the GitHub Pages SPA 404 issue by creating actual HTML files
 */

const fs = require('fs');
const path = require('path');

// Article routes - manually listed for now
// TODO: Could generate these dynamically after build from dist/assets if needed
const articleRoutes = [
  '/articles/mastering-ingress-nginx',
  '/articles/ipv6-kubernetes',
  '/articles/k9s-advanced',
  '/articles/best-practices-helm-chart',
  '/articles/anyclown-vscode-extension',
  '/articles/choosing-cloud-provider',
  '/articles/vscode-devops-pack'
];

// All routes that need static HTML files
const routes = [
  '/about',
  '/solutions',
  '/solutions/devops-consulting',
  '/solutions/cloud-migration',
  '/solutions/infrastructure-automation',
  '/solutions/cicd',
  '/solutions/security-compliance',
  '/team',
  '/open-source',
  '/articles',
  '/contact',
  ...articleRoutes,
];

// Redirects from old URL structure to new one.
// Google Search Console shows these old paths still getting impressions —
// emit meta-refresh + canonical HTML files so the equity transfers to the new URLs.
const redirects = {
  '/posts': '/articles',
  '/posts/k9s': '/articles/k9s-advanced',
  '/posts/ipv6': '/articles/ipv6-kubernetes',
  '/posts/choosingcloudprovider': '/articles/choosing-cloud-provider',
  '/posts/homebrewtap': '/open-source',
  '/meettheteam': '/team',
  '/meettheteam/ofir': '/team',
  '/meettheteam/hagay': '/team',
  '/oss': '/open-source',
  '/oss/homebrewtap': '/open-source',
  '/oss/gitswitch': '/open-source',
  '/tags': '/articles',
  '/solutions/ci-cd': '/solutions/cicd',
  '/solutions/why-us': '/solutions',
};

// Route-specific meta tags for better SEO
const routeMeta = {
  '/about': {
    title: 'About Target-Ops | Expert DevOps Consulting Team',
    description: 'Learn about Target-Ops DevOps consulting team. Industry veterans with 15+ years experience in cloud infrastructure, automation, and CI/CD pipelines.',
  },
  '/solutions': {
    title: 'DevOps Solutions & Services | Target-Ops',
    description: 'Comprehensive DevOps solutions: Cloud migration, infrastructure automation, CI/CD pipelines, security & compliance. AWS, GCP, Azure expertise.',
  },
  '/solutions/devops-consulting': {
    title: 'DevOps Consulting & Strategy | Senior DevOps Engineers | Target-Ops',
    description: 'DevOps consulting and strategy from senior engineers who build and ship production infrastructure daily. Kubernetes, Terraform, CI/CD, AWS/GCP/Azure. Free 30-minute call.',
  },
  '/solutions/cloud-migration': {
    title: 'Cloud Migration Services | AWS, GCP, Azure Migration',
    description: 'Zero-downtime cloud migration services. Migrate to AWS, GCP, or Azure with confidence. Infrastructure assessment, planning, and execution.',
  },
  '/solutions/infrastructure-automation': {
    title: 'Infrastructure Automation | Terraform, Pulumi, IaC',
    description: 'Automate your infrastructure with Infrastructure as Code. Terraform, Pulumi, CloudFormation expertise. Reduce manual work by 90%.',
  },
  '/solutions/cicd': {
    title: 'CI/CD Pipeline Development | Fast & Reliable Deployments',
    description: 'Build robust CI/CD pipelines. GitHub Actions, GitLab CI, Jenkins, CircleCI. Deploy 10x faster with automated testing and rollbacks.',
  },
  '/solutions/security-compliance': {
    title: 'DevSecOps & Security Compliance | SOC 2, HIPAA, PCI-DSS',
    description: 'Security-first DevOps practices. SOC 2, HIPAA, PCI-DSS compliance. Automated security scanning, vulnerability management.',
  },
  '/team': {
    title: 'Meet the Team | DevOps Experts at Target-Ops',
    description: 'Meet the Target-Ops team. Certified DevOps engineers, cloud architects, and infrastructure specialists with proven track records.',
  },
  '/open-source': {
    title: 'Open Source Projects | Target-Ops Contributions',
    description: 'Explore Target-Ops open source DevOps tools and contributions. Infrastructure automation, monitoring, and deployment utilities.',
  },
  '/articles': {
    title: 'DevOps Blog & Articles | Target-Ops Insights',
    description: 'DevOps best practices, tutorials, and insights. Learn about cloud infrastructure, automation, CI/CD, Kubernetes, and more.',
  },
  '/articles/mastering-ingress-nginx': {
    title: 'Kubernetes Ingress Optimization: Production ingress-nginx Tuning | Target-Ops',
    description: 'Production-grade ingress-nginx optimization — worker processes, HTTP/2, connection pooling, rate limiting, and the pitfalls that actually bite at scale.',
  },
  '/articles/ipv6-kubernetes': {
    title: 'IPv6 Kubernetes: Dual-Stack EKS & GKE Guide | Target-Ops',
    description: 'IPv6 Kubernetes implementation for EKS and GKE — Terraform patterns, dual-stack tradeoffs, NAT gateway cost reduction, and a phased migration playbook.',
  },
  '/articles/k9s-advanced': {
    title: 'K9s Kubernetes CLI: Advanced Productivity Techniques | Target-Ops',
    description: 'Advanced K9s techniques — custom views, plugins, aliases, and triage workflows that make Kubernetes operations meaningfully faster. Copy-paste ready config.',
  },
  '/articles/best-practices-helm-chart': {
    title: 'Helm Chart Best Practices: Production-Grade Packaging | Target-Ops',
    description: 'Production-grade Helm chart best practices — structure, versioning, security, hooks, schema validation, and the shared-library pattern that eliminates chart sprawl.',
  },
  '/articles/anyclown-vscode-extension': {
    title: 'AnyClown: One-Click Git Clone to VS Code | Target-Ops',
    description: 'Stop typing git clone. AnyClown is a free Chrome extension from Target-Ops that turns any GitHub/GitLab/Bitbucket URL into a one-click clone-and-open in VS Code.',
  },
  '/articles/choosing-cloud-provider': {
    title: 'Cloud Provider Selection: AWS vs GCP vs Azure Framework | Target-Ops',
    description: 'The decision framework for AWS vs GCP vs Azure — five questions that matter, honest per-vendor assessment, a worked hybrid example, and when multi-cloud actually makes sense.',
  },
  '/articles/vscode-devops-pack': {
    title: 'VS Code DevOps Extension Pack: Ultimate Toolkit | Target-Ops',
    description: 'Curated by Target-Ops engineers — the VS Code DevOps Ultra Pack bundles Terraform, Docker, Kubernetes, AWS, GCP, CI/CD, and productivity extensions into a single install.',
  },
  '/contact': {
    title: 'Contact Target-Ops | Get a Free DevOps Consultation',
    description: 'Get in touch with Target-Ops for a free DevOps consultation. Discuss your infrastructure challenges and get expert recommendations.',
  },
};

function generateRedirectHTML(oldPath, newPath) {
  const destination = `https://target-ops.io${newPath}`;
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Redirecting to ${newPath}</title>
    <link rel="canonical" href="${destination}" />
    <meta name="robots" content="noindex, follow" />
    <meta http-equiv="refresh" content="0; url=${destination}" />
    <script>window.location.replace(${JSON.stringify(destination)});</script>
  </head>
  <body>
    <p>This page has moved. Redirecting to <a href="${destination}">${newPath}</a>&hellip;</p>
  </body>
</html>`;
}

function generateHTML(route, meta, assetReferences) {
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    
    <!-- Primary Meta Tags -->
    <title>${meta.title}</title>
    <meta name="title" content="${meta.title}" />
    <meta name="description" content="${meta.description}" />
    <meta name="keywords" content="DevOps consulting, DevOps as a service, cloud migration, infrastructure automation, CI/CD pipelines, Kubernetes consulting, AWS consulting, GCP consulting, Azure consulting" />
    <meta name="author" content="Target-Ops" />
    <link rel="canonical" href="https://target-ops.io${route}" />

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://target-ops.io${route}" />
    <meta property="og:title" content="${meta.title}" />
    <meta property="og:description" content="${meta.description}" />
    <meta property="og:image" content="https://target-ops.io/assets/targetOpsBlackNOBG-FULL.webp" />
    <meta property="og:site_name" content="Target-Ops" />

    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:url" content="https://target-ops.io${route}" />
    <meta name="twitter:title" content="${meta.title}" />
    <meta name="twitter:description" content="${meta.description}" />
    <meta name="twitter:image" content="https://target-ops.io/assets/targetOpsBlackNOBG-FULL.webp" />

    <!-- Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-YWWR9DFR3T"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-YWWR9DFR3T');
    </script>

    <!-- Structured Data -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Target-Ops",
      "url": "https://target-ops.io",
      "logo": "https://target-ops.io/assets/targetOpsBlackNOBG-FULL.webp",
      "description": "DevOps consulting and DevOps as a service for startups and enterprises.",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "IL"
      },
      "sameAs": [
        "https://github.com/target-ops",
        "https://www.linkedin.com/company/target-ops",
        "https://dev.to/target-ops"
      ]
    }
    </script>
    ${assetReferences}
  </head>

  <body>
    <div id="root"></div>
  </body>
</html>
`;
}

function createDirectory(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

function generateStaticPages() {
  const distDir = path.join(__dirname, 'dist');
  
  if (!fs.existsSync(distDir)) {
    console.error('❌ dist directory not found. Run "npm run build" first.');
    process.exit(1);
  }

  // Read the main index.html to extract asset references
  const mainIndexPath = path.join(distDir, 'index.html');
  const mainIndexHtml = fs.readFileSync(mainIndexPath, 'utf8');
  
  // Extract script and link tags for assets
  const scriptMatch = mainIndexHtml.match(/<script type="module" crossorigin src="([^"]+)"><\/script>/);
  const linkMatch = mainIndexHtml.match(/<link rel="stylesheet" crossorigin href="([^"]+)">/);
  
  let assetReferences = '';
  if (scriptMatch && linkMatch) {
    assetReferences = `<script type="module" crossorigin src="${scriptMatch[1]}"></script>
    <link rel="stylesheet" crossorigin href="${linkMatch[1]}">`;
  } else {
    console.warn('⚠️  Could not extract asset references from index.html');
  }

  console.log('🚀 Generating static HTML files for all routes...\n');

  let generated = 0;
  let errors = 0;

  routes.forEach(route => {
    try {
      const meta = routeMeta[route];
      const html = generateHTML(route, meta, assetReferences);

      // Create directory structure
      const routePath = route.substring(1); // Remove leading slash
      const fullPath = path.join(distDir, routePath);

      createDirectory(fullPath);

      // Write index.html in the route directory
      const htmlPath = path.join(fullPath, 'index.html');
      fs.writeFileSync(htmlPath, html);

      console.log(`✅ Generated: ${route}`);
      generated++;
    } catch (error) {
      console.error(`❌ Error generating ${route}:`, error.message);
      errors++;
    }
  });

  let redirected = 0;
  Object.entries(redirects).forEach(([oldPath, newPath]) => {
    try {
      const html = generateRedirectHTML(oldPath, newPath);
      const routePath = oldPath.substring(1);
      const fullPath = path.join(distDir, routePath);
      createDirectory(fullPath);
      fs.writeFileSync(path.join(fullPath, 'index.html'), html);
      console.log(`↪️  Redirect: ${oldPath} → ${newPath}`);
      redirected++;
    } catch (error) {
      console.error(`❌ Error generating redirect ${oldPath}:`, error.message);
      errors++;
    }
  });

  console.log(`\n📊 Summary:`);
  console.log(`   ✅ Generated: ${generated} pages`);
  console.log(`   ↪️  Redirects: ${redirected}`);
  console.log(`   ❌ Errors: ${errors}`);
  
  if (errors === 0) {
    console.log(`\n🎉 All pages generated successfully!`);
    console.log(`   Each route now has a physical HTML file that returns 200 status.\n`);
  }
}

// Run the generator
generateStaticPages();

