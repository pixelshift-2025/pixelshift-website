# PixelShift Website Deployment Guide

## 🚀 Quick Deployment with Vercel (Recommended)

### Step 1: Push to GitHub
```bash
# Create a new repository on GitHub, then:
git remote add origin https://github.com/your-username/pixelshift-website.git
git branch -M main
git push -u origin main
```

### Step 2: Deploy to Vercel
1. Go to [vercel.com](https://vercel.com) and sign up/login
2. Click "New Project"
3. Import your GitHub repository
4. Vercel will automatically detect Next.js
5. Click "Deploy"
6. Your site will be live at `https://your-project-name.vercel.app`

### Step 3: Configure Custom Domain (Optional)
1. In Vercel dashboard, go to your project
2. Navigate to "Settings" → "Domains"
3. Add your custom domain
4. Update DNS records as instructed

## 📧 Contact Form Setup

### Option 1: Formspree Integration
1. Go to [formspree.io](https://formspree.io) and create an account
2. Create a new form and get your form ID
3. In Vercel dashboard, go to "Settings" → "Environment Variables"
4. Add: `NEXT_PUBLIC_FORMSPREE_ID` with your form ID
5. Update the contact form in `src/app/contact/page.tsx`:

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
    // Reset form logic...
  }
}
```

### Option 2: Getform Integration
1. Go to [getform.io](https://getform.io) and create an account
2. Create a new form endpoint
3. Update the form action in contact page
4. Similar implementation to Formspree

## 🔧 Environment Variables

In Vercel dashboard → Settings → Environment Variables, add:

- `NEXT_PUBLIC_FORMSPREE_ID`: Your Formspree form ID
- `NEXT_PUBLIC_GA_ID`: Google Analytics ID (optional)
- Any other API keys you need

## 📊 Performance Optimization

### Already Implemented:
- ✅ Next.js App Router for optimal performance
- ✅ Automatic code splitting
- ✅ Image optimization ready
- ✅ Static generation for fast loading
- ✅ Framer Motion for smooth animations

### Additional Optimizations:
1. **Add Image Optimization**: Replace any `<img>` tags with Next.js `<Image>` component
2. **Add Analytics**: Integrate Google Analytics or Vercel Analytics
3. **SEO Enhancements**: Add structured data, meta descriptions, etc.

## 🔒 Security & Best Practices

### Already Implemented:
- ✅ TypeScript for type safety
- ✅ ESLint for code quality
- ✅ Proper file structure
- ✅ Environment variable configuration

### Additional Security:
1. **Content Security Policy**: Add CSP headers
2. **Rate Limiting**: Implement on contact form
3. **HTTPS**: Automatically handled by Vercel

## 🎨 Customization Guide

### Colors
Update `tailwind.config.ts` to modify the color palette:
```typescript
colors: {
  'brand-primary': '#YOUR_COLOR',
  'brand-secondary': '#YOUR_COLOR',
  // ... etc
}
```

### Typography
The Poppins font is loaded via Google Fonts in `layout.tsx`.
To change fonts, update the import and configuration.

### Content
- **Homepage**: Edit `src/app/page.tsx` and `src/components/Hero.tsx`
- **Services**: Update the services array in `src/app/services/page.tsx`
- **About**: Modify content in `src/app/about/page.tsx`
- **Contact**: Update contact info in `src/app/contact/page.tsx`

## 📱 Testing

### Local Testing
```bash
npm run dev
# Test on http://localhost:3000
```

### Production Build Testing
```bash
npm run build
npm start
# Test production build locally
```

### Mobile Testing
- Use browser dev tools responsive mode
- Test on actual devices
- Verify touch interactions and animations

## 🔄 CI/CD Pipeline

Vercel automatically:
- ✅ Builds on every push to main branch
- ✅ Runs tests and linting
- ✅ Deploys preview builds for PRs
- ✅ Provides instant rollbacks

## 📈 Analytics & Monitoring

### Vercel Analytics
1. Enable in Vercel dashboard
2. Get Core Web Vitals data
3. Monitor performance metrics

### Google Analytics (Optional)
1. Create GA4 property
2. Add tracking ID to environment variables
3. Implement tracking in `layout.tsx`

## 🆘 Troubleshooting

### Common Issues:
1. **Build Failures**: Check TypeScript errors in Vercel logs
2. **Form Not Working**: Verify environment variables are set
3. **Slow Loading**: Check image optimization and bundle size
4. **Mobile Issues**: Test responsive design thoroughly

### Support Resources:
- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel Documentation](https://vercel.com/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)

## ✅ Launch Checklist

Before going live:
- [ ] Contact form tested and working
- [ ] All pages responsive on mobile
- [ ] SEO meta tags added
- [ ] Analytics configured
- [ ] Custom domain configured
- [ ] SSL certificate active
- [ ] Performance tested (Lighthouse score)
- [ ] Accessibility tested
- [ ] Content reviewed and approved
- [ ] Social media links updated 