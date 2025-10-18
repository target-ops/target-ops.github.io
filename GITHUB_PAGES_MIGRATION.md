# GitHub Pages Migration - Replace Hugo with React

## Your Plan (Smart!)

Replace the Hugo site in `target-ops.github.io` repository with the React site, keeping everything the same:

- ✅ Same repository name
- ✅ Same GitHub Pages hosting
- ✅ Same domain (target-ops.io)
- ✅ **Zero DNS changes in GoDaddy!**

---

## Prerequisites - What I've Already Set Up

✅ **Vite config updated** - Set `base: '/'` for custom domain
✅ **GitHub Actions workflow** - `.github/workflows/deploy.yml` ready
✅ **CNAME file** - `public/CNAME` with your domain

**You're ready to go!**

---

## Migration Steps

### Step 1: Backup Your Hugo Site (CRITICAL!)

**Option A: Create Backup Branch**
```bash
cd /Users/ofirhaim/Target/target-ops.github.io

# Create and push backup branch
git checkout -b hugo-backup
git push origin hugo-backup

# Verify backup exists
git branch -a
# You should see: remotes/origin/hugo-backup
```

**Option B: Create Separate Backup Repo (Safer)**
```bash
# On GitHub, create new repository: target-ops-hugo-backup
cd /Users/ofirhaim/Target/target-ops.github.io

# Add new remote
git remote add backup https://github.com/target-ops/target-ops-hugo-backup.git

# Push everything to backup
git push backup main --force

# Now you have a complete backup!
```

**✅ Checkpoint:** Your Hugo site is safely backed up!

---

### Step 2: Test React Build Locally

```bash
cd /Users/ofirhaim/Target/targetops-devops-showcase

# Install dependencies
npm install

# Test build
npm run build

# Verify dist/ folder is created
ls -la dist/

# Preview production build
npm run preview
# Visit http://localhost:4173

# Verify everything works!
```

**✅ Checkpoint:** React site builds successfully!

---

### Step 3: Prepare React Site for Migration

```bash
cd /Users/ofirhaim/Target/targetops-devops-showcase

# Make sure all changes are committed
git status
git add .
git commit -m "Prepare for GitHub Pages deployment"

# Verify these files exist:
ls .github/workflows/deploy.yml  # ✅ I created this
ls public/CNAME                   # ✅ I created this
cat vite.config.ts | grep "base"  # ✅ Should show base: '/'
```

**✅ Checkpoint:** React site ready for deployment!

---

### Step 4: Replace Hugo with React (The Big Move!)

**Option A: Clean Slate (Recommended)**

```bash
# Go to Hugo repo
cd /Users/ofirhaim/Target/target-ops.github.io

# Make sure backup exists!
git branch -a | grep backup

# Create a new orphan branch (fresh start)
git checkout --orphan react-migration

# Remove all Hugo files
git rm -rf .

# Copy React files
cp -r /Users/ofirhaim/Target/targetops-devops-showcase/* .
cp -r /Users/ofirhaim/Target/targetops-devops-showcase/.github .
cp /Users/ofirhaim/Target/targetops-devops-showcase/.gitignore .

# Stage all new files
git add .

# Commit
git commit -m "Migrate from Hugo to React/Vite site"

# Force push to main (Hugo backup is safe!)
git push origin react-migration:main --force
```

**Option B: Gradual Replacement**

```bash
cd /Users/ofirhaim/Target/target-ops.github.io

# Backup current state
git checkout -b pre-react-migration
git push origin pre-react-migration

# Back to main
git checkout main

# Remove Hugo files (keep .git)
rm -rf content/ themes/ config/ archetypes/ assets/ layouts/
rm -f hugo.toml

# Copy React files
cp -r /Users/ofirhaim/Target/targetops-devops-showcase/* .
cp -r /Users/ofirhaim/Target/targetops-devops-showcase/.github .
cp /Users/ofirhaim/Target/targetops-devops-showcase/.gitignore .

# Stage and commit
git add .
git commit -m "Migrate from Hugo to React/Vite site"

# Push
git push origin main
```

**✅ Checkpoint:** React code is now in target-ops.github.io repo!

---

### Step 5: Configure GitHub Pages (One-Time)

1. **Go to Repository Settings**
   - Visit: `https://github.com/target-ops/target-ops.github.io/settings/pages`

2. **Update Source**
   - Source: **GitHub Actions** (not "Deploy from branch")
   - This lets the workflow handle deployment

3. **Custom Domain**
   - Should already show: `target-ops.io`
   - If not, add it
   - Wait for DNS check ✅

4. **HTTPS**
   - Should be enabled (might take a few minutes)

**✅ Checkpoint:** GitHub Pages configured!

---

### Step 6: Watch First Deployment

```bash
# GitHub Actions should automatically trigger on push
# Watch the build at:
# https://github.com/target-ops/target-ops.github.io/actions

# You should see:
# ✅ Build job running
# ✅ Deploy job running
# ✅ Both complete successfully
```

**Build takes ~2-3 minutes**

Visit `https://target-ops.io` - Your React site should be live! 🎉

---

### Step 7: Verify Everything Works

**Checklist:**
- [ ] Visit `https://target-ops.io` loads React site
- [ ] Visit `https://www.target-ops.io` works (www)
- [ ] HTTPS is enabled (green lock icon)
- [ ] All pages load (About, Solutions, etc.)
- [ ] Images display correctly
- [ ] Navigation works
- [ ] Mobile responsive
- [ ] No console errors (F12 → Console)

---

## Comparison: Before vs After

### Before (Hugo)
```yaml
# .github/workflows/static.yml
- Hugo setup
- Build with Hugo
- Deploy to Pages
```

### After (React)
```yaml
# .github/workflows/deploy.yml
- Setup Node.js
- npm ci (install)
- npm run build (Vite)
- Deploy to Pages
```

**Same process, different build tool!**

---

## Your GoDaddy DNS (No Changes Needed!)

Your current settings are **perfect** and don't need any changes:

```
Type  | Name | Value
------|------|------
A     | @    | 185.199.108.153
A     | @    | 185.199.109.153  
A     | @    | 185.199.110.153
A     | @    | 185.199.111.153
CNAME | www  | target-ops.github.io
```

**These stay exactly the same!** GitHub Pages handles the rest.

---

## Rollback Plan (If Needed)

If something goes wrong:

### Quick Rollback (5 minutes)

```bash
cd /Users/ofirhaim/Target/target-ops.github.io

# Option 1: Restore from backup branch
git checkout hugo-backup
git push origin hugo-backup:main --force

# Option 2: Restore from backup repo
git pull backup main
git push origin main --force

# Wait 2-3 minutes for GitHub Actions to rebuild
# Hugo site is back! ✅
```

---

## Timeline

**Week 1: Preparation**
- ✅ Create backup of Hugo site
- ✅ Test React build locally
- ⏳ Finish content migration

**Week 2: Migration**
- ⏳ Replace Hugo with React in repo
- ⏳ First deployment
- ⏳ Verify everything works

**Week 3: Monitoring**
- ⏳ Monitor analytics
- ⏳ Check for errors
- ⏳ Fine-tune if needed

---

## Advantages of Your Approach

✅ **No DNS Changes** - GoDaddy stays the same
✅ **Familiar Workflow** - Still GitHub Pages
✅ **Same Repository** - No new setup
✅ **Zero Cost** - Still free
✅ **Simple Rollback** - Just restore backup branch

---

## Disadvantages vs Vercel

⚠️ **Slower** - No global CDN (Vercel is faster)
⚠️ **Manual Config** - Need GitHub Actions setup
⚠️ **No Preview Deployments** - Can't preview PRs
⚠️ **HTTPS Renewal** - Occasional manual renewal might be needed

**But if you're comfortable with current setup, this is perfectly fine!**

---

## When Should You Do This?

### Now:
- ✅ Create Hugo backup
- ✅ Test React build

### After Content Migration Complete:
- ⏳ Replace Hugo with React
- ⏳ Deploy to GitHub Pages

### Don't Rush:
- Hugo site works fine
- Take your time with content migration
- Switch when React site is 100% ready

---

## Testing Workflow

Before the big migration, you can test:

### Test in Showcase Repo First

```bash
# In targetops-devops-showcase repo
# Enable GitHub Pages just to test
# Use repo name in base URL

# Update vite.config.ts temporarily:
base: '/targetops-devops-showcase/'

# Push and test at:
# https://target-ops.github.io/targetops-devops-showcase/

# This lets you test GitHub Actions without affecting main site!
```

---

## Post-Migration Checklist

After successful migration:

- [ ] Verify all pages work
- [ ] Check analytics are tracking
- [ ] Update any documentation
- [ ] Test contact form
- [ ] Monitor error logs (GitHub Actions)
- [ ] Check performance (Lighthouse)
- [ ] Test on mobile devices
- [ ] Share with team for feedback

---

## Common Issues & Solutions

**"Build is failing"**
```bash
# Check GitHub Actions logs
# Usually: missing dependency or wrong Node version

# Fix in workflow file if needed:
node-version: '18'  # or '20'
```

**"Site shows old Hugo content"**
```bash
# Clear GitHub Pages cache
# Settings → Pages → Save (re-save custom domain)
# Clear browser cache
# Wait 5 minutes
```

**"Images not loading"**
```bash
# Make sure images are in public/ folder
# Vite serves public/ at root
# Use: /assets/image.png (not src/assets)
```

**"Routing not working (404 on refresh)"**
```bash
# Add 404.html in public/ (copy of index.html)
cp dist/index.html dist/404.html
# GitHub Pages uses 404.html for SPA routing
```

---

## Summary

Your approach is **smart and safe**:

1. **Backup Hugo** → Safe rollback option
2. **Build React** → Test locally first
3. **Replace repo content** → Same name, same hosting
4. **GitHub Actions deploy** → Automatic like before
5. **Zero DNS changes** → GoDaddy stays same

**When you're ready to do this, I'll help you step-by-step!**

---

## Next Steps

**Right now:**
- [ ] Create Hugo backup branch
- [ ] Test React build locally
- [ ] Review this guide

**When ready:**
- [ ] Complete content migration
- [ ] Follow Step 4 (Replace Hugo with React)
- [ ] Watch deployment
- [ ] Celebrate! 🎉

---

**Need help with any step? Just ask!**

