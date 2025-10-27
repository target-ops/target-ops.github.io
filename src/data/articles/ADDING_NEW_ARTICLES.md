# Adding New Articles - Complete Guide for n8n Automation

This guide provides a step-by-step process for publishing new articles to the Target-Ops website. Designed for n8n automation but can be followed manually.

---

## 📋 Overview

When adding a new article, you need to update **4 files**:
1. Create markdown file in `src/data/articles/`
2. Update `src/data/articles.ts` (metadata + import)
3. Update `generate-pages.cjs` (for SEO/static pages)
4. Update `public/sitemap.xml` (for search engines)

---

## 🚀 Step-by-Step Process

### Step 1: Create the Markdown File

**Location:** `src/data/articles/{article-id}.md`

**Naming Convention:** Use kebab-case (lowercase with hyphens)
- ✅ Good: `kubernetes-security-best-practices.md`
- ❌ Bad: `Kubernetes_Security_Best_Practices.md`

**File Content:** Pure markdown with no frontmatter
```markdown
# Your Article Title

Your introduction paragraph...

## Section 1

Content here...

### Subsection

More content...

## Code Examples

```bash
kubectl get pods
```

## Conclusion

Final thoughts...
```

**💡 Tips:**
- Use proper markdown syntax: `#`, `##`, `**bold**`, `*italic*`, etc.
- Code blocks MUST specify language: ` ```bash ` or ` ```yaml `
- No YAML frontmatter needed (that's handled in articles.ts)

---

### Step 2: Update `src/data/articles.ts`

#### 2.1 Add Import Statement (Top of File)

Add the import with all other imports:

```typescript
import yourArticleIdMd from './articles/your-article-id.md?raw';
```

**Important:** 
- Use `?raw` suffix to import as plain text
- Import name should be camelCase version of filename + `Md` suffix
- Example: `kubernetes-security.md` → `kubernetesSecurityMd`

#### 2.2 Add Article Object to Array

Add to the `articles` array:

```typescript
{
  id: "your-article-id",  // Must match filename (without .md)
  title: "Your Article Title",
  description: "A compelling 1-2 sentence description for SEO and preview cards",
  tags: ["Kubernetes", "Security", "DevOps"],  // 3-5 relevant tags
  date: "2024-10-27",  // YYYY-MM-DD format
  readTime: "8 min read",  // Estimate: ~200 words per minute
  author: "Target-Ops Team",
  authorRole: "DevOps Engineers",  // Or: Cloud Architects, Tool Developers, etc.
  featured: false,  // true for priority articles (keep most as false)
  seoKeywords: ["kubernetes security", "k8s best practices", "container security"],
  content: yourArticleIdMd  // Must match the import name
}
```

**Field Guidelines:**
- `id`: Unique, URL-friendly, matches markdown filename
- `title`: SEO-optimized, under 60 characters
- `description`: 120-160 characters for optimal SEO
- `tags`: Use existing tags when possible for consistency
- `date`: Today's date or publication date
- `readTime`: Word count ÷ 200, rounded up
- `featured`: Only set to `true` for exceptional articles
- `seoKeywords`: 4-6 targeted search terms

---

### Step 3: Update `generate-pages.cjs`

This file generates static HTML pages for SEO.

#### 3.1 Add Article ID to `articleRoutes` Array

**Location:** Line ~16

```javascript
const articleRoutes = [
  'mastering-ingress-nginx',
  'ipv6-kubernetes',
  'k9s-advanced',
  'best-practices-helm-chart',
  'anyclown-vscode-extension',
  'choosing-cloud-provider',
  'vscode-devops-pack',
  'your-article-id'  // ADD HERE
];
```

#### 3.2 Add Route Meta Tags

**Location:** Inside `routeMeta` object (~line 60)

```javascript
'/articles/your-article-id': {
  title: 'Your Article Title | Target-Ops DevOps Blog',
  description: 'Same description from articles.ts - keep it consistent for SEO'
},
```

**Best Practices:**
- Title should be: `{Article Title} | Target-Ops DevOps Blog`
- Description should match exactly what's in `articles.ts`
- Keep titles under 60 characters (including site suffix)

---

### Step 4: Update `public/sitemap.xml`

Add your article's URL entry for search engine indexing.

**Location:** Before the closing `</urlset>` tag

```xml
<url>
  <loc>https://target-ops.io/articles/your-article-id</loc>
  <lastmod>2024-10-27</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.7</priority>
</url>
```

**Field Explanations:**
- `<loc>`: Full URL to article (use article `id`)
- `<lastmod>`: Today's date in YYYY-MM-DD format
- `<changefreq>`: `monthly` for articles (they rarely change)
- `<priority>`: `0.7` for all articles (consistent importance)

---

## 🔄 n8n Automation Workflow

### Recommended n8n Flow:

1. **Trigger**: Webhook or Schedule (e.g., every Monday)
2. **Get Article Content**: From your content source (Notion, Google Docs, etc.)
3. **Create Markdown File**:
   - Node: `Write File` (filesystem)
   - Path: `/Users/ofirhaim/Target/target-ops.github.io/src/data/articles/{article-id}.md`
   - Content: Clean markdown

4. **Update articles.ts**:
   - Node: `Read/Write File` 
   - Add import line at top
   - Append article object to array

5. **Update generate-pages.cjs**:
   - Node: `Read/Write File`
   - Add article ID to `articleRoutes` array
   - Add meta entry to `routeMeta` object

6. **Update sitemap.xml**:
   - Node: `Read/Write File`
   - Insert new `<url>` entry before `</urlset>`

7. **Build & Deploy**:
   ```bash
   cd /Users/ofirhaim/Target/target-ops.github.io
   npm run build
   # Deploy command (TBD based on hosting)
   ```

8. **Notify**: Send notification (Slack, email, etc.)

---

## ✅ Validation Checklist

Before building/deploying, verify:

- [ ] Markdown file exists in `src/data/articles/`
- [ ] Markdown file has proper syntax and code blocks
- [ ] Import added to `src/data/articles.ts`
- [ ] Article object added to `articles` array
- [ ] `id` matches filename exactly
- [ ] `date` is in YYYY-MM-DD format
- [ ] Article ID added to `generate-pages.cjs` `articleRoutes`
- [ ] Route meta added to `generate-pages.cjs` `routeMeta`
- [ ] Sitemap entry added to `public/sitemap.xml`
- [ ] All 4 files saved

---

## 🧪 Testing

### Local Development:
```bash
cd /Users/ofirhaim/Target/target-ops.github.io
npm run dev
```

Visit: `http://localhost:8080/articles` and `http://localhost:8080/articles/your-article-id`

### Production Build:
```bash
npm run build
npm run preview
```

Visit: `http://localhost:4173/articles/your-article-id`

---

## 📝 Article ID Generation Rules

Use this formula to generate IDs:

1. Take the article title
2. Convert to lowercase
3. Replace spaces with hyphens
4. Remove special characters (keep only letters, numbers, hyphens)
5. Maximum 60 characters

**Examples:**
- "Kubernetes Best Practices 2024" → `kubernetes-best-practices-2024`
- "How to Use AWS EKS?" → `how-to-use-aws-eks`
- "10 Tips for Docker Security" → `10-tips-for-docker-security`

---

## 🛠️ Troubleshooting

### Issue: Build fails with "Cannot find module"
**Solution:** Check the import path and `?raw` suffix in `articles.ts`

### Issue: Article not showing in list
**Solution:** Ensure article object is inside the `articles` array with proper syntax

### Issue: Article page shows 404
**Solution:** 
1. Check `id` matches filename
2. Run `npm run build` to generate static pages
3. Verify `generate-pages.cjs` includes the article ID

### Issue: Markdown not rendering properly
**Solution:** 
1. Check markdown syntax (headings, code blocks)
2. Ensure code blocks have language specified
3. Verify no YAML frontmatter in markdown file

### Issue: SEO meta tags not showing
**Solution:** Check `routeMeta` in `generate-pages.cjs` has correct format

---

## 📚 Examples

### Full Example: Adding "Terraform Best Practices" Article

#### 1. Create File:
`src/data/articles/terraform-best-practices.md`
```markdown
# Terraform Best Practices for Production Infrastructure

Introduction paragraph...

## State Management

Content...
```

#### 2. Update `src/data/articles.ts`:
```typescript
// At top with imports:
import terraformBestPracticesMd from './articles/terraform-best-practices.md?raw';

// In articles array:
{
  id: "terraform-best-practices",
  title: "Terraform Best Practices for Production Infrastructure",
  description: "Essential Terraform patterns and practices for managing production infrastructure at scale - from state management to module design.",
  tags: ["Terraform", "IaC", "DevOps", "Best Practices"],
  date: "2024-10-27",
  readTime: "12 min read",
  author: "Target-Ops Team",
  authorRole: "Infrastructure Engineers",
  featured: false,
  seoKeywords: ["terraform best practices", "infrastructure as code", "terraform production", "terraform state management"],
  content: terraformBestPracticesMd
}
```

#### 3. Update `generate-pages.cjs`:
```javascript
// In articleRoutes array:
const articleRoutes = [
  // ... existing articles
  'terraform-best-practices'
];

// In routeMeta object:
'/articles/terraform-best-practices': {
  title: 'Terraform Best Practices for Production | Target-Ops',
  description: 'Essential Terraform patterns and practices for managing production infrastructure at scale - from state management to module design.'
},
```

#### 4. Update `public/sitemap.xml`:
```xml
<url>
  <loc>https://target-ops.io/articles/terraform-best-practices</loc>
  <lastmod>2024-10-27</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.7</priority>
</url>
```

---

## 🎯 Quick Reference

| What | Where | What to Update |
|------|-------|----------------|
| **Article Content** | `src/data/articles/{id}.md` | Create new markdown file |
| **Article Metadata** | `src/data/articles.ts` | Add import + article object |
| **SEO/Static Pages** | `generate-pages.cjs` | Add to `articleRoutes` + `routeMeta` |
| **Search Engines** | `public/sitemap.xml` | Add `<url>` entry |

---

## 🎨 Article Writing Tips

### For Best SEO:
- Include primary keyword in title
- Use primary keyword in first paragraph
- Add relevant internal links to other articles
- Use descriptive alt text for images
- Include code examples (Google loves them)
- Aim for 1500+ words for in-depth topics

### For Best Readability:
- Use clear headings hierarchy (H1 → H2 → H3)
- Short paragraphs (2-4 sentences)
- Bullet points for lists
- Code examples for technical content
- Include a "Conclusion" or "Next Steps" section

---

## 🔗 Related Files

- `src/pages/Articles.tsx` - List page (auto-updates from articles.ts)
- `src/pages/ArticleDetail.tsx` - Individual article page (auto-renders)
- `src/App.tsx` - Routing (already configured)
- `tailwind.config.ts` - Typography styling (already configured)
- `src/index.css` - Custom markdown styles (already configured)

**You don't need to modify these files when adding articles.**

---

## 📞 Support

For issues or questions:
- Check this guide first
- Review existing articles as examples
- Test locally before deploying
- Verify all 4 files are updated

---

**Last Updated:** October 27, 2024  
**Version:** 1.0  
**Maintained by:** Target-Ops Team

