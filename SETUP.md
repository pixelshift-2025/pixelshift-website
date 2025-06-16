# PixelShift Website Setup Guide

Complete setup instructions for developers working on the PixelShift website project.

## 📋 **Table of Contents**

1. [Prerequisites](#prerequisites)
2. [Installation](#installation)
3. [Development Setup](#development-setup)
4. [Available Scripts](#available-scripts)
5. [Environment Configuration](#environment-configuration)
6. [Troubleshooting](#troubleshooting)
7. [Development Workflow](#development-workflow)

---

## 🛠️ **Prerequisites**

### **Required Software**

1. **Node.js** (version 18.0 or higher)
   - Download from [nodejs.org](https://nodejs.org/)
   - Verify installation: `node --version`

2. **npm** (comes with Node.js)
   - Verify installation: `npm --version`
   - Alternative: Use **yarn** or **pnpm**

3. **Git** (for version control)
   - Download from [git-scm.com](https://git-scm.com/)
   - Verify installation: `git --version`

4. **Code Editor** (recommended)
   - **VS Code** with extensions:
     - TypeScript and JavaScript Language Features
     - Tailwind CSS IntelliSense
     - ES7+ React/Redux/React-Native snippets
     - Auto Rename Tag

### **System Requirements**

- **OS**: Windows 10+, macOS 10.15+, or Linux
- **RAM**: 4GB minimum, 8GB recommended
- **Storage**: 500MB for project + dependencies

---

## 📦 **Installation**

### **Method 1: Clone Existing Repository**

```bash
# Clone the repository
git clone <repository-url>
cd pixelshift-website

# Install dependencies
npm install

# Start development server
npm run dev
```

### **Method 2: Create New Project** (If starting fresh)

```bash
# Create Next.js project
npx create-next-app@latest pixelshift-website --typescript --tailwind --eslint --app --src-dir

# Navigate to project
cd pixelshift-website

# Install additional dependencies
npm install framer-motion

# Start development server
npm run dev
```

### **Verify Installation**

After installation, you should see:
```bash
✅ Dependencies installed
✅ Development server running on http://localhost:3000
✅ No compilation errors
```

---

## 🚀 **Development Setup**

### **1. Initial Setup**

```bash
# Install dependencies
npm install

# Verify everything works
npm run build
```

### **2. Environment Configuration**

Create environment file for local development:
```bash
# Copy example environment file
cp .env.local.example .env.local

# Edit with your values
# NEXT_PUBLIC_FORMSPREE_ID=your_formspree_id_here
```

### **3. Editor Configuration**

**VS Code Settings** (`.vscode/settings.json`):
```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "typescript.preferences.includePackageJsonAutoImports": "on",
  "tailwindCSS.experimental.classRegex": [
    ["clsx\\(([^)]*)\\)", "(?:'|\"|`)([^']*)(?:'|\"|`)"]
  ]
}
```

**Recommended VS Code Extensions**:
```json
{
  "recommendations": [
    "bradlc.vscode-tailwindcss",
    "esbenp.prettier-vscode",
    "ms-vscode.vscode-typescript-next",
    "formulahendry.auto-rename-tag"
  ]
}
```

---

## 📜 **Available Scripts**

### **Development Scripts**

```bash
# Start development server with hot reload
npm run dev

# Start development on different port
npm run dev -- -p 3001
```

### **Build Scripts**

```bash
# Create production build
npm run build

# Start production server (after build)
npm start

# Export static site (if configured)
npm run export
```

### **Code Quality Scripts**

```bash
# Run ESLint
npm run lint

# Fix ESLint issues automatically
npm run lint -- --fix

# Type check with TypeScript
npx tsc --noEmit
```

### **Dependency Management**

```bash
# Install new dependency
npm install package-name

# Install development dependency
npm install -D package-name

# Update all dependencies
npm update

# Check for outdated packages
npm outdated

# Audit for security issues
npm audit
```

---

## ⚙️ **Environment Configuration**

### **Environment Variables**

Create `.env.local` file in project root:

```bash
# Contact Form Configuration
NEXT_PUBLIC_FORMSPREE_ID=your_formspree_id

# Analytics (Optional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# API Keys (Optional)
NEXT_PUBLIC_API_KEY=your_api_key
```

### **Configuration Files**

**1. Next.js Configuration** (`next.config.js`):
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['example.com'], // Add image domains
  },
  // Add other configurations as needed
}

module.exports = nextConfig
```

**2. Tailwind Configuration** (`tailwind.config.ts`):
```typescript
// Custom colors and fonts already configured
// Modify as needed for brand updates
```

**3. TypeScript Configuration** (`tsconfig.json`):
```json
// Strict mode enabled for better type safety
// Path aliases configured (@/* -> ./src/*)
```

---

## 🐛 **Troubleshooting**

### **Common Issues**

#### **1. Node.js Version Issues**

**Problem**: Build fails with Node.js version error
```bash
# Check current version
node --version

# Update Node.js if needed
# Use nvm (recommended)
nvm install 18
nvm use 18
```

#### **2. Port Already in Use**

**Problem**: Development server can't start on port 3000
```bash
# Kill process on port 3000 (Windows)
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Kill process on port 3000 (macOS/Linux)
lsof -ti:3000 | xargs kill -9

# Or use different port
npm run dev -- -p 3001
```

#### **3. Module Not Found Errors**

**Problem**: TypeScript can't find modules
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install

# Restart TypeScript server in VS Code
# Ctrl+Shift+P -> "TypeScript: Restart TS Server"
```

#### **4. CSS/Styling Issues**

**Problem**: Tailwind classes not working
```bash
# Verify Tailwind configuration
npm run build

# Check if custom colors are properly defined
# in tailwind.config.ts
```

#### **5. Git Issues**

**Problem**: Git authentication or clone issues
```bash
# Set up Git credentials
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"

# For HTTPS repositories, use personal access token
# For SSH, set up SSH keys
```

### **Getting Help**

1. **Check Console**: Look for error messages in terminal and browser console
2. **Clear Cache**: Delete `.next` folder and restart dev server
3. **Update Dependencies**: Run `npm update` to get latest compatible versions
4. **Documentation**: Check Next.js, Tailwind CSS, and Framer Motion docs
5. **Community**: Search GitHub issues and Stack Overflow

---

## 🔄 **Development Workflow**

### **Daily Development**

```bash
# 1. Pull latest changes
git pull origin main

# 2. Install any new dependencies
npm install

# 3. Start development server
npm run dev

# 4. Make your changes
# Edit files in src/ directory

# 5. Test your changes
# Check http://localhost:3000

# 6. Commit your work
git add .
git commit -m "feat: add new feature"
git push origin your-branch
```

### **Code Quality Checklist**

Before committing code:
- [ ] Run `npm run lint` (no errors)
- [ ] Run `npm run build` (builds successfully)
- [ ] Test in browser (desktop and mobile)
- [ ] Check TypeScript errors (none)
- [ ] Verify responsive design
- [ ] Test contact form functionality

### **Branch Strategy**

```bash
# Create feature branch
git checkout -b feature/new-component
git checkout -b fix/navbar-issue
git checkout -b docs/update-readme

# Work on your changes
git add .
git commit -m "descriptive commit message"

# Push and create pull request
git push origin feature/new-component
```

### **Testing Before Deployment**

```bash
# 1. Create production build
npm run build

# 2. Test production build locally
npm start

# 3. Check for build warnings/errors
# 4. Test all pages and functionality
# 5. Verify responsive design
# 6. Test contact form submission
```

---

## 🚀 **Ready to Deploy**

Once development is complete:

1. **Push to GitHub**: `git push origin main`
2. **Vercel Auto-Deploy**: Automatic deployment on push
3. **Test Live Site**: Verify functionality on live URL
4. **Monitor Performance**: Check Vercel analytics

### **Manual Deployment** (Alternative)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy to Vercel
vercel

# Deploy production build
vercel --prod
```

---

## 📚 **Additional Resources**

- **Next.js Documentation**: [nextjs.org/docs](https://nextjs.org/docs)
- **Tailwind CSS Documentation**: [tailwindcss.com/docs](https://tailwindcss.com/docs)
- **Framer Motion Documentation**: [framer.com/motion](https://www.framer.com/motion/)
- **TypeScript Documentation**: [typescriptlang.org/docs](https://www.typescriptlang.org/docs/)
- **Vercel Documentation**: [vercel.com/docs](https://vercel.com/docs)

---

## 🎯 **Quick Start Summary**

For experienced developers:

```bash
git clone <repo>
cd pixelshift-website
npm install
npm run dev
# Open http://localhost:3000
```

That's it! You're ready to start developing the PixelShift website. 🚀 