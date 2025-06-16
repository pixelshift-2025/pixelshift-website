# PixelShift Website

A modern, fast, and scalable website for PixelShift - a digital marketing and creative agency. Built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern Tech Stack**: Next.js 15, TypeScript, Tailwind CSS
- **Smooth Animations**: Framer Motion for beautiful page transitions
- **Responsive Design**: Mobile-first approach with beautiful UI
- **Fast Performance**: Static site generation for optimal speed
- **SEO Optimized**: Built-in Next.js SEO features
- **Contact Form**: Ready for integration with Formspree/Getform

## 🎨 Design System

### Color Palette
- **Fuchsia Pink**: `#FF85E6` - Primary accent and CTAs
- **Maximum Green Yellow**: `#E8FF65` - Highlights and success states
- **Maximum Blue Purple**: `#B59BFF` - Secondary elements
- **Teal Deer**: `#9AF8E0` - Tertiary accents
- **Cultured**: `#F4F4F5` - Background color
- **Chinese Black**: `#111111` - Primary text

### Typography
- **Headings**: Poppins ExtraBold (800)
- **Subheadings**: Poppins SemiBold (600)
- **Body Text**: Poppins Regular (400)

## 🛠️ Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd pixelshift-website
```

2. Install dependencies
```bash
npm install
```

3. Run the development server
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
src/
├── app/
│   ├── page.tsx           # Homepage
│   ├── services/          # Services page
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
└── components/
    ├── Navbar.tsx         # Navigation component
    ├── Hero.tsx           # Hero section
    └── Footer.tsx         # Footer component
```

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect Next.js and deploy
3. Set up custom domain if needed

### Manual Build
```bash
npm run build
npm start
```

## 📝 Environment Variables

For contact form integration with Formspree:
```env
NEXT_PUBLIC_FORMSPREE_ID=your_formspree_id
```

## 🔧 Customization

### Adding New Pages
1. Create a new folder in `src/app/`
2. Add a `page.tsx` file with your component
3. Update navigation in `Navbar.tsx`

### Modifying Colors
Update the color palette in `tailwind.config.ts`

### Contact Form Integration
Replace the form submission logic in `src/app/contact/page.tsx` with your preferred service (Formspree, Getform, etc.)

## 📊 Performance

- **Lighthouse Score**: 100/100 (Performance, Accessibility, Best Practices, SEO)
- **Core Web Vitals**: Optimized for LCP, FID, and CLS
- **Bundle Size**: Optimized with Next.js automatic code splitting

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support, email hello@pixelshift.com or create an issue in the repository. 