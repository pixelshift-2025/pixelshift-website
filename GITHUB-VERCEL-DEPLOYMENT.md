# PixelShift Deployment Guide: GitHub Desktop + Vercel

Complete step-by-step guide to deploy the PixelShift website on Vercel using GitHub Desktop.

## 📋 **Prerequisites**

Before we start, make sure you have:
- ✅ PixelShift project completed (already done!)
- ✅ GitHub account (free at [github.com](https://github.com))
- ✅ Vercel account (free at [vercel.com](https://vercel.com))
- ✅ GitHub Desktop installed ([desktop.github.com](https://desktop.github.com))

---

## 🚀 **Step 1: Create GitHub Repository**

### **1.1 Sign in to GitHub**
1. Go to [github.com](https://github.com)
2. Sign in to your account (or create one if needed)
3. Click the **"+"** button in the top-right corner
4. Select **"New repository"**

### **1.2 Configure Repository Settings**
Fill out the repository form:
- **Repository name**: `pixelshift-website` (or your preferred name)
- **Description**: `Modern website for PixelShift digital marketing agency`
- **Visibility**: 
  - ✅ **Public** (recommended for Vercel free tier)
  - Or **Private** if you prefer (requires Vercel Pro)
- **Initialize repository**: 
  - ❌ **DO NOT** check "Add a README file"
  - ❌ **DO NOT** add .gitignore (we already have one)
  - ❌ **DO NOT** choose a license (you can add later)

### **1.3 Create Repository**
1. Click **"Create repository"** button
2. **IMPORTANT**: Keep this page open - you'll need the repository URL

---

## 💻 **Step 2: Set Up GitHub Desktop**

### **2.1 Install and Configure GitHub Desktop**
1. Download from [desktop.github.com](https://desktop.github.com)
2. Install the application
3. Open GitHub Desktop
4. Sign in with your GitHub account
5. Authorize GitHub Desktop when prompted

### **2.2 Clone or Add Existing Repository**
Since we already have the PixelShift project locally:

1. In GitHub Desktop, click **"Add an Existing Repository from your hard drive"**
2. Click **"Choose..."** and navigate to `C:\PixelShift`
3. Select the PixelShift folder
4. Click **"Add Repository"**

### **2.3 Link to GitHub Repository**
1. In GitHub Desktop, you should see the PixelShift repository
2. Click **"Publish repository"** in the top bar
3. Repository name should auto-fill as `PixelShift`
4. Change it to `pixelshift-website` (to match what you created on GitHub)
5. ✅ **Uncheck** "Keep this code private" (if you want it public)
6. Click **"Publish Repository"**

**Alternative Method** (if above doesn't work):
1. Copy the GitHub repository URL from Step 1.3
2. In GitHub Desktop: Repository → Repository Settings
3. Click "Remote" tab
4. Add the GitHub URL as the remote origin

---

## 📤 **Step 3: Push Code to GitHub**

### **3.1 Verify Current State**
In GitHub Desktop, you should see:
- Repository name: `pixelshift-website`
- Current branch: `master` (or `main`)
- All files committed (no pending changes)

### **3.2 Push to GitHub**
1. Click **"Push origin"** button in GitHub Desktop
2. Wait for the upload to complete
3. You should see "Last fetched/pushed just now"

### **3.3 Verify on GitHub**
1. Go back to your GitHub repository page
2. Refresh the page
3. You should now see all your PixelShift files:
   - `src/` folder
   - `package.json`
   - `README.md`
   - All documentation files
   - Configuration files

---

## 🌐 **Step 4: Deploy on Vercel**

### **4.1 Create Vercel Account**
1. Go to [vercel.com](https://vercel.com)
2. Click **"Sign Up"**
3. Choose **"Continue with GitHub"** (recommended)
4. Authorize Vercel to access your GitHub account
5. Complete any additional setup steps

### **4.2 Import Your Repository**
1. On Vercel dashboard, click **"New Project"**
2. You should see your `pixelshift-website` repository
3. Click **"Import"** next to your repository name

### **4.3 Configure Project Settings**
Vercel will auto-detect your Next.js project:
- **Framework Preset**: Should auto-select "Next.js"
- **Root Directory**: Leave as "./" (root)
- **Build and Output Settings**: Leave defaults
  - Build Command: `npm run build`
  - Output Directory: `.next`
  - Install Command: `npm install`

### **4.4 Environment Variables (Optional)**
If you plan to use the contact form later:
1. Click **"Environment Variables"** section
2. Add any environment variables:
   - Name: `NEXT_PUBLIC_FORMSPREE_ID`
   - Value: (leave blank for now, add later when you set up Formspree)

### **4.5 Deploy**
1. Click **"Deploy"** button
2. Wait for deployment (usually 1-3 minutes)
3. Watch the build logs for any errors

---

## ✅ **Step 5: Verify Deployment**

### **5.1 Check Deployment Status**
After deployment completes:
1. You should see a success screen with confetti! 🎉
2. Vercel will show your live URL (something like `pixelshift-website-abc123.vercel.app`)
3. Click **"Visit"** to see your live website

### **5.2 Test Your Website**
1. **Homepage**: Check hero section, animations, and CTAs
2. **Services Page**: Verify service cards load and animate
3. **About Page**: Test mission statement and values sections
4. **Contact Page**: Check form displays (won't submit yet without Formspree)
5. **Navigation**: Test all menu links
6. **Mobile**: Test responsive design on different screen sizes

### **5.3 Performance Check**
Your site should load very fast because:
- ✅ Static generation
- ✅ Global CDN
- ✅ Optimized assets
- ✅ Next.js optimizations

---

## 🔄 **Step 6: Set Up Automatic Deployment**

### **6.1 Verify Auto-Deployment Settings**
In your Vercel project dashboard:
1. Go to **Settings** → **Git**
2. Verify settings:
   - ✅ **Production Branch**: `master` (or `main`)
   - ✅ **Auto-deploy on push**: Enabled

### **6.2 Test Automatic Deployment**
Let's test the auto-deployment by making a small change:

1. **In your local project**, open `src/components/Hero.tsx`
2. **Find the statistics section** and change one number:
   ```typescript
   // Change from "50+" to "60+"
   <div className="text-3xl font-extrabold text-fuchsia-pink mb-2">60+</div>
   ```
3. **Save the file**

### **6.3 Commit and Push Changes**
1. **In GitHub Desktop**:
   - You should see the change in the left sidebar
   - Add a commit message: "Update client count to 60+"
   - Click **"Commit to master"**
   - Click **"Push origin"**

2. **Watch Vercel Deploy**:
   - Go to your Vercel dashboard
   - You should see a new deployment starting automatically
   - Wait for it to complete (1-2 minutes)
   - Visit your website to see the change

---

## 📱 **Step 7: Configure Custom Domain (Optional)**

### **7.1 Purchase Domain** (if you don't have one)
- Popular registrars: Namecheap, GoDaddy, Google Domains
- Suggested domain: `pixelshift.com` or similar

### **7.2 Add Domain to Vercel**
1. In Vercel dashboard: **Settings** → **Domains**
2. Click **"Add"**
3. Enter your domain (e.g., `pixelshift.com`)
4. Choose redirect settings:
   - Redirect `www.pixelshift.com` to `pixelshift.com` (recommended)

### **7.3 Configure DNS**
In your domain registrar:
1. Add **A Record**: `@` → `76.76.19.61` (Vercel's IP)
2. Add **CNAME Record**: `www` → `cname.vercel-dns.com`
3. Wait for DNS propagation (15 minutes to 24 hours)

---

## 🔧 **Step 8: Set Up Contact Form (Optional)**

### **8.1 Create Formspree Account**
1. Go to [formspree.io](https://formspree.io)
2. Sign up for free account
3. Create a new form
4. Copy your form ID (e.g., `xpzgkqrw`)

### **8.2 Add Environment Variable**
1. In Vercel: **Settings** → **Environment Variables**
2. Add new variable:
   - **Name**: `NEXT_PUBLIC_FORMSPREE_ID`
   - **Value**: Your Formspree form ID
   - **Environments**: Production, Preview, Development

### **8.3 Update Contact Form Code**
Update `src/app/contact/page.tsx`:
```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  
  const response = await fetch(`https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_ID}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  })
  
  if (response.ok) {
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: '', email: '', message: '' })
    }, 3000)
  }
}
```

### **8.4 Deploy Form Changes**
1. Commit and push changes via GitHub Desktop
2. Vercel will auto-deploy
3. Test the contact form on your live site

---

## 📊 **Step 9: Monitor Your Deployment**

### **9.1 Vercel Analytics** (Optional)
1. In Vercel dashboard: **Analytics** tab
2. Enable Vercel Analytics for performance insights
3. View Core Web Vitals and user metrics

### **9.2 GitHub Integration Benefits**
Now that everything is connected:
- ✅ **Automatic deployments** on every push
- ✅ **Preview deployments** for pull requests
- ✅ **Instant rollbacks** if needed
- ✅ **Branch deployments** for testing

---

## 🎉 **Congratulations! Your Website is Live!**

### **Your Deployment URLs**
- **Live Website**: `https://your-project-name.vercel.app`
- **Custom Domain**: `https://your-domain.com` (if configured)
- **GitHub Repository**: `https://github.com/yourusername/pixelshift-website`

### **What You've Accomplished**
- ✅ Created professional GitHub repository
- ✅ Set up automated deployment pipeline
- ✅ Deployed modern Next.js website to global CDN
- ✅ Configured automatic updates on code changes
- ✅ Set up professional development workflow

---

## 🔧 **Quick Commands for Future Updates**

### **Make Changes to Your Website**
1. Edit files in your local PixelShift project
2. In GitHub Desktop:
   - Review changes
   - Write commit message
   - Click "Commit to master"
   - Click "Push origin"
3. Vercel automatically deploys in 1-2 minutes

### **View Deployment Status**
- **Vercel Dashboard**: See build logs and deployment history
- **GitHub Desktop**: See commit history and sync status
- **Live Website**: Always shows latest deployed version

---

## 🆘 **Troubleshooting Common Issues**

### **Build Failures**
If Vercel build fails:
1. Check build logs in Vercel dashboard
2. Run `npm run build` locally to test
3. Fix any TypeScript or linting errors
4. Push fix and redeploy

### **GitHub Desktop Issues**
- **Authentication**: Re-authorize GitHub Desktop in settings
- **Sync Issues**: Try "Fetch origin" then "Push origin"
- **Missing Repository**: Re-add repository from local folder

### **Domain Issues**
- **DNS not propagating**: Wait 24 hours, check with [whatsmydns.net](https://whatsmydns.net)
- **SSL certificate**: Vercel handles automatically, may take 24 hours

---

## 📚 **Next Steps**

### **Immediate Next Steps**
1. Share your live website URL with stakeholders
2. Set up contact form with Formspree
3. Add Google Analytics (if desired)
4. Configure custom domain

### **Future Enhancements**
- Add blog section
- Integrate CMS for content management
- Set up A/B testing
- Add advanced analytics

---

**🚀 Your PixelShift website is now live and automatically deploying! Welcome to modern web development!** 