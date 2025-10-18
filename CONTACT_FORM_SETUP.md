# Contact Form Setup Guide

## 📧 Web3Forms Integration

Your contact form is now ready! You just need to get your API key from Web3Forms.

---

## 🚀 Quick Setup (5 minutes)

### Step 1: Create Web3Forms Account

1. Go to https://web3forms.com/
2. Click **"Get Started - It's Free"**
3. Sign up with your email (`ofir@target-ops.io`)
4. Verify your email

### Step 2: Get Your Access Key

1. After login, you'll see your dashboard
2. Click **"Create New Access Key"**
3. Enter details:
   - **Email to receive submissions:** `ofir@target-ops.io`
   - **Form name:** "Target-Ops Contact Form"
4. Copy your Access Key (looks like: `a1b2c3d4-1234-5678-abcd-1234567890ab`)

### Step 3: Add Key to Your Project

**Option A: Environment Variable (Recommended)**

1. Create a `.env` file in project root:
   ```bash
   cp .env.example .env
   ```

2. Edit `.env` and replace with your actual key:
   ```
   VITE_WEB3FORMS_ACCESS_KEY=your_actual_key_here
   ```

3. Update `src/pages/Contact.tsx` line 41:
   ```typescript
   access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
   ```

**Option B: Direct (Quick Test)**

1. Open `src/pages/Contact.tsx`
2. Find line 41: `access_key: 'YOUR_WEB3FORMS_ACCESS_KEY',`
3. Replace with your actual key:
   ```typescript
   access_key: 'a1b2c3d4-1234-5678-abcd-1234567890ab',
   ```

### Step 4: Test the Form

1. Run your site: `npm run dev`
2. Go to `/contact`
3. Fill out the form and submit
4. Check `ofir@target-ops.io` for the email!

---

## ✅ Features Implemented

### Contact Form
- ✅ Sends emails to `ofir@target-ops.io`
- ✅ Form validation (required fields)
- ✅ Loading state while sending
- ✅ Success message after submission
- ✅ Error handling
- ✅ Spam protection (built into Web3Forms)
- ✅ Form resets after successful submission

### Book Consultation
- ✅ Prominent "Book a Free Consultation" button
- ✅ Links to Calendly (or your booking system)
- ✅ Clear call-to-action

### Direct Contact
- ✅ Email: ofir@target-ops.io
- ✅ LinkedIn link
- ✅ GitHub link

---

## 📅 Calendly Setup (Optional)

The "Book Consultation" button currently links to:
```
https://calendly.com/target-ops/consultation
```

**To set this up:**

1. Go to https://calendly.com (free account)
2. Create an account
3. Set up a meeting type: "Free DevOps Consultation - 30 min"
4. Get your scheduling link
5. Update the link in `src/pages/Contact.tsx` line 202

**Or use Cal.com (open source alternative):**
- https://cal.com
- Free self-hosted option

---

## 🔒 Security Notes

### Protect Your API Key

**If using Option B (Direct key in code):**

⚠️ **IMPORTANT:** Add `.env` to `.gitignore` before committing!

```bash
echo ".env" >> .gitignore
```

**If deploying to production:**

Set environment variable in your hosting platform:

**GitHub Pages:**
- Go to repo Settings → Secrets and variables → Actions
- Add secret: `VITE_WEB3FORMS_ACCESS_KEY`

**Vercel:**
- Dashboard → Project → Settings → Environment Variables
- Add: `VITE_WEB3FORMS_ACCESS_KEY`

**Netlify:**
- Site settings → Build & deploy → Environment
- Add: `VITE_WEB3FORMS_ACCESS_KEY`

---

## 📊 Web3Forms Features

### What You Get (Free Plan)

- ✅ **Unlimited submissions**
- ✅ **Spam filtering** (honeypot + reCAPTCHA v3)
- ✅ **Email notifications** to `ofir@target-ops.io`
- ✅ **File uploads** (if you want to add later)
- ✅ **Custom email subject lines**
- ✅ **Webhooks** (for CRM integration)
- ✅ **CSV exports**

### Spam Protection

Web3Forms includes built-in spam protection:
- Honeypot fields (invisible to humans)
- reCAPTCHA v3 (invisible, no user action)
- Rate limiting

**No additional configuration needed!**

---

## 🎨 Customization

### Change Email Template

In `src/pages/Contact.tsx`, you can customize what data is sent:

```typescript
body: JSON.stringify({
  access_key: 'YOUR_KEY',
  name: formData.name,
  email: formData.email,
  company: formData.company,
  message: formData.message,
  subject: `New Contact Form Submission from ${formData.name}`,
  // Add custom fields:
  website: window.location.origin,
  page: 'Contact Page',
  // Any other data you want
}),
```

### Add More Form Fields

1. Add to `formData` state:
   ```typescript
   const [formData, setFormData] = useState({
     name: '',
     email: '',
     company: '',
     phone: '', // NEW
     message: ''
   });
   ```

2. Add input field in JSX:
   ```tsx
   <div className="space-y-2">
     <Label htmlFor="phone">Phone</Label>
     <Input 
       id="phone" 
       type="tel"
       placeholder="+1 (555) 123-4567"
       value={formData.phone}
       onChange={handleChange}
     />
   </div>
   ```

3. Include in submission (already handled by existing code!)

---

## 🐛 Troubleshooting

### Form not sending?

1. **Check the key is correct**
   - Go to Web3Forms dashboard
   - Copy key again
   - Make sure no extra spaces

2. **Check browser console**
   - Open DevTools (F12)
   - Look for errors in Console tab
   - Check Network tab for API call

3. **Check spam folder**
   - Web3Forms emails might go to spam initially
   - Mark as "Not Spam" to fix

### Success message not showing?

- Check the `submitStatus` state in console
- Make sure API response is 200
- Check if `data.success` is true

### Email not arriving?

1. **Verify email in Web3Forms dashboard**
   - Go to dashboard
   - Check "Email" field is `ofir@target-ops.io`
   - Resave if needed

2. **Check Web3Forms logs**
   - Dashboard → Submissions
   - See if submission was received
   - Check delivery status

---

## 📈 Analytics & Tracking

### Track Form Submissions in Google Analytics

The form is already set up to work, but you can add event tracking:

```typescript
// Add to handleSubmit after successful submission:
if (data.success) {
  // Track in Google Analytics
  if (window.gtag) {
    window.gtag('event', 'form_submission', {
      event_category: 'contact',
      event_label: 'contact_form',
    });
  }
  setSubmitStatus('success');
  // ... rest of code
}
```

### Monitor Submissions

**Web3Forms Dashboard:**
- See all submissions
- Export to CSV
- View submission details
- Block spam domains

---

## 🔄 Alternative: Formspree (If you prefer)

If you want to use Formspree instead:

1. Go to https://formspree.io
2. Create account
3. Get endpoint: `https://formspree.io/f/YOUR_FORM_ID`
4. Update `Contact.tsx`:
   ```typescript
   const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
     method: 'POST',
     headers: {
       'Content-Type': 'application/json',
     },
     body: JSON.stringify(formData),
   });
   ```

**Note:** Formspree free tier = 50 submissions/month

---

## ✅ Checklist

Before going live:

- [ ] Web3Forms account created
- [ ] Access key obtained
- [ ] Key added to project (`.env` or code)
- [ ] Test form works (send test submission)
- [ ] Check email arrives at `ofir@target-ops.io`
- [ ] `.env` added to `.gitignore`
- [ ] Calendly link updated (if using)
- [ ] Form tested on mobile
- [ ] Spam filter working

---

## 📞 Need Help?

If you run into issues:

1. Check Web3Forms docs: https://web3forms.com/docs
2. Check their FAQ: https://web3forms.com/faq
3. Email their support: contact@web3forms.com (they respond fast!)

---

**You're all set!** 🎉

Just get your API key from Web3Forms and your contact form will be live!

