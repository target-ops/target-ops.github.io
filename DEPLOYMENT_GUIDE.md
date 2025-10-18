# Deployment Guide - React Site

This guide explains how to deploy your new React site and point your `target-ops.io` domain to it.

---

## 🎯 Your Current Setup (Hugo)

**What you have now:**
```
Hugo Site (target-ops.github.io)
    ↓ (Push to main)
GitHub Actions builds Hugo
    ↓
Deploys to GitHub Pages
    ↓
GoDaddy DNS points to GitHub Pages
    ↓
https://target-ops.io (Live!)
```

**GitHub Pages IPs you're currently using:**
- `185.199.108.153`
- `185.199.109.153`
- `185.199.110.153`
- `185.199.111.153`

---

## 🚀 Deployment Options for React Site

### **Option 1: Vercel (RECOMMENDED - Easiest!)**

#### Why Vercel?
- ✅ **Zero configuration** - just connect GitHub
- ✅ **Automatic deployments** on every push
- ✅ **Free SSL certificate** (HTTPS)
- ✅ **Global CDN** (fast worldwide)
- ✅ **Preview URLs** for every PR
- ✅ **Free forever** for personal projects
- ✅ **5-minute setup**

#### Step-by-Step Setup:

**1. Deploy to Vercel (5 minutes)**

```bash
# Visit https://vercel.com/signup
# Sign up with your GitHub account
```

1. Click **"New Project"**
2. Import `targetops-devops-showcase` repository
3. Vercel auto-detects Vite settings:
   - **Framework**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. Click **"Deploy"**
5. Wait 2 minutes... Done! ✅

You'll get a URL like: `https://targetops-devops-showcase.vercel.app`

**2. Connect Your Domain (5 minutes)**

In Vercel dashboard:
1. Go to your project → **Settings** → **Domains**
2. Add `target-ops.io` and `www.target-ops.io`
3. Vercel will show you DNS records to add

**3. Update GoDaddy DNS**

Login to GoDaddy → DNS Management:

**Option A: If using Vercel DNS (Recommended)**
- **Type**: `A` | **Name**: `@` | **Value**: `76.76.21.21`
- **Type**: `CNAME` | **Name**: `www` | **Value**: `cname.vercel-dns.com`

**Option B: If using Vercel's custom instructions**
- Follow the exact instructions Vercel shows you
- Usually:
  - Delete old GitHub Pages A records
  - Add new Vercel A record
  - Update CNAME for www

**4. Wait for DNS Propagation (5-30 minutes)**
- Check status at https://www.whatsmydns.net/
- Test: `https://target-ops.io`

**5. Enable HTTPS in Vercel**
- Vercel automatically provisions SSL
- Your site will be HTTPS within minutes

**DONE! Every push to `main` auto-deploys!** 🎉

---

### **Option 2: Netlify (Also Easy)**

Very similar to Vercel:

1. Visit https://netlify.com
2. Sign up with GitHub
3. Click "New site from Git"
4. Select your repository
5. Build settings (auto-detected):
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
6. Click "Deploy"
7. Add custom domain in Site Settings → Domain Management
8. Update GoDaddy DNS to Netlify's servers

---

### **Option 3: GitHub Pages (Stay with Current Setup)**

If you want to keep using GitHub Pages:

**Pros:**
- ✅ Free
- ✅ Same workflow as Hugo
- ✅ Don't need to change DNS

**Cons:**
- ❌ More configuration
- ❌ No automatic HTTPS for custom domains (need extra setup)
- ❌ Slower than Vercel/Netlify CDN

#### Setup for GitHub Pages:

**1. Enable GitHub Pages**

In your repository settings:
1. Go to **Settings** → **Pages**
2. Source: **GitHub Actions**

**2. GitHub Action Already Created!**

I created `.github/workflows/deploy.yml` for you. It will:
- Build your React app on every push
- Deploy to GitHub Pages automatically

**3. Update Vite Config for GitHub Pages**

You'll need to add a base URL. If deploying to:
- `target-ops.github.io/targetops-devops-showcase` → base: `/targetops-devops-showcase/`
- Custom domain `target-ops.io` → base: `/`

**4. First Deployment**

```bash
# Commit the workflow file
git add .github/workflows/deploy.yml
git commit -m "Add GitHub Pages deployment"
git push origin main

# GitHub Actions will build and deploy automatically
# Check: https://github.com/[your-username]/targetops-devops-showcase/actions
```

**5. Update Repository Name (Optional)**

To use `target-ops.io` directly:
1. Rename repository to: `target-ops.github.io` (overwrites Hugo site!)
2. Or keep separate and use subdomain

**6. Your GoDaddy DNS stays the same!**

No changes needed - still points to GitHub Pages IPs.

---

## 📊 Comparison Table

| Feature | Vercel | Netlify | GitHub Pages |
|---------|--------|---------|--------------|
| **Setup Time** | 5 min | 5 min | 15 min |
| **Configuration** | Zero | Zero | Some |
| **Auto Deploy** | ✅ | ✅ | ✅ |
| **Custom Domain** | Free | Free | Free |
| **HTTPS/SSL** | Auto | Auto | Manual |
| **Speed (CDN)** | Fast | Fast | Good |
| **Build Time** | Fast | Fast | Slower |
| **Preview URLs** | ✅ | ✅ | ❌ |
| **Functions/API** | ✅ | ✅ | ❌ |
| **Best For** | React/Vite | React/Vite | Static |

---

## 🎯 My Recommendation

### **Use Vercel!** Here's why:

1. **Literally 5 minutes** from signup to live site
2. **Zero configuration** - it just works
3. **Better than your current setup** - faster, preview deployments
4. **Free forever** for personal/commercial use
5. **Best developer experience**

### Migration Path:

```
Week 1: Deploy React site to Vercel (vercel.app subdomain)
Week 2: Finish content migration, test on Vercel
Week 3: Point target-ops.io to Vercel
Week 4: Keep Hugo site as backup (different repo)
```

---

## 🔄 Migration Strategy (Safest Approach)

### **Phase 1: Deploy New Site (Don't Touch Domain Yet)**
1. Deploy React site to Vercel
2. Use Vercel's provided subdomain (e.g., `targetops-devops-showcase.vercel.app`)
3. Complete content migration
4. Test thoroughly

### **Phase 2: Parallel Running**
1. Hugo site still live at `target-ops.io`
2. React site live at `targetops-devops-showcase.vercel.app`
3. Share React site with team for feedback
4. Fix any issues

### **Phase 3: Switch Domain**
1. When React site is 100% ready
2. Update GoDaddy DNS to point to Vercel
3. Wait for DNS propagation (30 min - 24 hours)
4. Hugo site still accessible at `target-ops.github.io` (no custom domain)

### **Phase 4: Backup & Monitor**
1. Keep Hugo repository as backup
2. Monitor analytics, errors on new site
3. Be ready to rollback if needed (just revert DNS)

---

## 🚨 Emergency Rollback Plan

If something goes wrong after switching domain:

**Immediate Rollback (5 minutes):**
1. Login to GoDaddy
2. Change DNS back to GitHub Pages IPs:
   - `185.199.108.153`
   - `185.199.109.153`
   - `185.199.110.153`
   - `185.199.111.153`
3. Wait for DNS to propagate
4. Old Hugo site is live again

**Your Hugo site stays safe in its repository!**

---

## 📝 DNS Records Reference

### **Current (GitHub Pages):**
```
Type  | Name | Value
------|------|------
A     | @    | 185.199.108.153
A     | @    | 185.199.109.153
A     | @    | 185.199.110.153
A     | @    | 185.199.111.153
CNAME | www  | target-ops.github.io
```

### **New (Vercel):**
```
Type  | Name | Value
------|------|------
A     | @    | 76.76.21.21
CNAME | www  | cname.vercel-dns.com
```

*(Exact values shown in Vercel dashboard)*

---

## 🧪 Testing Checklist

Before switching domain:

- [ ] Deploy to Vercel/Netlify
- [ ] Test all pages load
- [ ] Test all links work
- [ ] Test on mobile
- [ ] Test contact form
- [ ] Check images load
- [ ] Verify analytics work
- [ ] Test from different locations (DNS)
- [ ] Check site speed (Lighthouse)
- [ ] Get team approval

---

## 💰 Cost Comparison

| Platform | Cost | Notes |
|----------|------|-------|
| **Vercel** | Free | Unlimited personal/commercial projects |
| **Netlify** | Free | 100GB bandwidth/month (then paid) |
| **GitHub Pages** | Free | Unlimited (GitHub limitation apply) |

**All three are completely free for your use case!**

---

## 🎉 Quick Start (Vercel - Recommended)

**Do this right now:**

1. **Visit**: https://vercel.com/signup
2. **Sign in** with GitHub
3. **Click** "New Project"
4. **Import** `targetops-devops-showcase`
5. **Click** Deploy (don't change anything)
6. **Wait** 2 minutes
7. **Visit** your new site at the Vercel URL

**You now have a live React site!** 🚀

Then continue content migration, and only when ready, point your domain.

---

## ❓ FAQ

**Q: Will my current site go down during migration?**
A: No! Deploy new site first, then switch DNS when ready.

**Q: How long does DNS propagation take?**
A: Usually 5-30 minutes, max 24-48 hours.

**Q: Can I test before switching?**
A: Yes! Use Vercel's provided URL for testing.

**Q: What if I want to rollback?**
A: Just change DNS back to GitHub Pages IPs. Takes 5 minutes.

**Q: Do I need to delete my Hugo site?**
A: No! Keep it as a backup. Different repositories can coexist.

**Q: Will this affect my email?**
A: No, only affects website. Email DNS records stay the same.

**Q: Cost?**
A: All options are free for your use case.

---

## 🎯 Next Steps

1. **Choose a platform** (I recommend Vercel)
2. **Deploy the React site** (5 minutes)
3. **Get the Vercel URL** (e.g., `xyz.vercel.app`)
4. **Continue content migration** (use Vercel URL for testing)
5. **When ready, switch domain** (update GoDaddy DNS)

---

## 📞 Need Help?

Common issues:

**"DNS not propagating"**
- Wait 24 hours
- Clear browser cache
- Try incognito/private mode
- Check https://www.whatsmydns.net/

**"HTTPS not working"**
- Vercel/Netlify auto-provision SSL (wait 5 min)
- Make sure DNS is correct
- Check domain settings in platform

**"Site not deploying"**
- Check build logs in platform
- Verify `npm run build` works locally
- Check Node version compatibility

---

**Ready to deploy? Let's start with Vercel!** 🚀

