# PixelShift Components Documentation

This document provides detailed information about all components used in the PixelShift website project.

## 📋 **Table of Contents**

1. [Custom Components](#custom-components)
2. [Page Components](#page-components)
3. [Animation Components](#animation-components)
4. [Layout Components](#layout-components)
5. [Component Usage Examples](#component-usage-examples)
6. [Styling Guide](#styling-guide)

---

## 🔧 **Custom Components**

### 1. **Navbar Component** (`src/components/Navbar.tsx`)

**Purpose**: Fixed navigation header with smooth animations and responsive design.

**Features**:
- ✨ Smooth slide-in animation on page load
- 🔗 Navigation links to all main pages
- 📱 Mobile-responsive (desktop menu hidden on mobile)
- 🎨 PixelShift branding with gradient logo text
- 🌊 Backdrop blur effect with transparency

**Props**: None (static navigation)

**Key Classes**:
- `fixed top-0 left-0 right-0 z-50` - Fixed positioning
- `bg-cultured/90 backdrop-blur-md` - Translucent background
- `text-fuchsia-pink` - Brand accent color

**Animation Details**:
```typescript
// Navbar container animation
initial={{ y: -100, opacity: 0 }}
animate={{ y: 0, opacity: 1 }}
transition={{ duration: 0.6 }}

// Individual nav items
initial={{ opacity: 0, y: -20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ delay: 0.3 + index * 0.1 }}
```

---

### 2. **Hero Component** (`src/components/Hero.tsx`)

**Purpose**: Homepage hero section with compelling copy and call-to-action buttons.

**Features**:
- 🎯 Large gradient heading text
- ✨ Staggered text animations
- 🔘 Dual CTA buttons (primary and secondary)
- 📊 Company statistics display
- 📱 Fully responsive layout

**Props**: None (static content)

**Key Features**:
- **Gradient Text**: `bg-gradient-to-r from-fuchsia-pink via-blue-purple to-teal-deer`
- **Button Animations**: Hover effects with scale and shadow
- **Statistics Grid**: 3-column layout on desktop, 1-column on mobile

**Animation Sequence**:
1. Heading (delay: 0.2s)
2. Subtitle (delay: 0.4s)
3. CTA buttons (delay: 0.6s)
4. Statistics (delay: 0.8s)

---

### 3. **Footer Component** (`src/components/Footer.tsx`)

**Purpose**: Site footer with company information and navigation links.

**Features**:
- 🏢 Company branding and description
- 🔗 Service links and contact information
- 🎨 Brand color accents (circles)
- 📱 Responsive grid layout

**Props**: None (static content)

**Layout Structure**:
- **Column 1-2**: Company info and description
- **Column 3**: Service links
- **Column 4**: Contact information

**Styling**:
- Background: `bg-chinese-black`
- Text: `text-cultured` with `text-gray-400` for secondary content

---

## 📄 **Page Components**

### 1. **Homepage** (`src/app/page.tsx`)

**Structure**:
```tsx
<motion.main>
  <Navbar />
  <Hero />
  <Footer />
</motion.main>
```

**Animation**: Fade-in effect for entire page container

---

### 2. **Services Page** (`src/app/services/page.tsx`)

**Features**:
- 🎯 6 service cards in responsive grid
- ✨ Staggered card animations
- 🎨 Emoji icons with brand-colored backgrounds
- 🌊 Hover effects with scale and shadow

**Service Cards**:
1. **Digital Marketing** (📱)
2. **Creative Design** (🎨)
3. **Web Development** (💻)
4. **Brand Strategy** (🚀)
5. **Content Creation** (✍️)
6. **Analytics & Insights** (📊)

**Animation Pattern**:
```typescript
initial={{ opacity: 0, y: 50 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6, delay: index * 0.1 }}
```

---

### 3. **About Page** (`src/app/about/page.tsx`)

**Sections**:
1. **Hero Section**: Company overview
2. **Mission Statement**: Gradient background section
3. **Values Grid**: 4 company values with icons
4. **Impact Statistics**: Dark section with metrics

**Values**:
- 💡 **Innovation**
- ⭐ **Excellence**
- 🤝 **Partnership**
- 🎯 **Impact**

**Statistics**:
- 50+ Happy Clients
- 200% Average ROI
- 500+ Projects Completed
- 5 Years Experience

---

### 4. **Contact Page** (`src/app/contact/page.tsx`)

**Features**:
- 📝 Interactive contact form with validation
- ✨ Success state animation
- 📞 Contact information display
- 🎨 Gradient accent sections

**Form Fields**:
1. **Name** (required)
2. **Email** (required, email validation)
3. **Message** (required, textarea)

**Form States**:
- **Default**: Input form
- **Success**: Thank you message with animation

**Contact Information**:
- 📧 Email: hello@pixelshift.com
- 📞 Phone: +1 (555) 123-4567
- 📍 Address: 123 Creative Street, Design City, DC 12345

---

## 🎭 **Animation Components (Framer Motion)**

### Core Animation Components Used:

1. **`motion.main`** - Page container animations
2. **`motion.nav`** - Navigation animations
3. **`motion.div`** - General container animations
4. **`motion.h1`** - Heading animations
5. **`motion.p`** - Paragraph animations
6. **`motion.section`** - Section-level animations

### Common Animation Patterns:

#### **Fade In**
```typescript
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
transition={{ duration: 0.5 }}
```

#### **Slide Up**
```typescript
initial={{ opacity: 0, y: 50 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.8 }}
```

#### **Slide Down**
```typescript
initial={{ y: -100, opacity: 0 }}
animate={{ y: 0, opacity: 1 }}
transition={{ duration: 0.6 }}
```

#### **Staggered Children**
```typescript
// Used for lists and grids
transition={{ delay: index * 0.1 }}
```

---

## 🏗️ **Layout Components**

### **Root Layout** (`src/app/layout.tsx`)

**Features**:
- 🔤 Google Fonts (Poppins) integration
- 🎨 Global CSS and Tailwind styles
- 📱 Responsive meta viewport
- 🔍 SEO metadata configuration

**Font Configuration**:
```typescript
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '800'],
  variable: '--font-poppins',
})
```

**Global Classes Applied**:
- `font-poppins` - Poppins font family
- `antialiased` - Smooth font rendering
- `bg-cultured` - Background color
- `text-chinese-black` - Default text color

---

## 💡 **Component Usage Examples**

### **Importing Components**
```typescript
// Page-level imports
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Footer from '@/components/Footer'

// Animation imports
import { motion } from 'framer-motion'

// Next.js imports
import Link from 'next/link'
```

### **Basic Animation Wrapper**
```tsx
<motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="container mx-auto"
>
  {/* Content */}
</motion.div>
```

### **Interactive Button Example**
```tsx
<Link
  href="/contact"
  className="bg-gradient-to-r from-fuchsia-pink to-blue-purple text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg hover:shadow-fuchsia-pink/25 transition-all duration-300 transform hover:scale-105"
>
  Get Started
</Link>
```

---

## 🎨 **Styling Guide**

### **Color Usage**

| Color | Usage | Class Name |
|-------|--------|------------|
| Fuchsia Pink | Primary CTAs, accents | `text-fuchsia-pink`, `bg-fuchsia-pink` |
| Green Yellow | Highlights, success states | `text-green-yellow`, `bg-green-yellow` |
| Blue Purple | Secondary elements | `text-blue-purple`, `bg-blue-purple` |
| Teal Deer | Tertiary accents | `text-teal-deer`, `bg-teal-deer` |
| Cultured | Backgrounds | `bg-cultured`, `text-cultured` |
| Chinese Black | Text, dark sections | `text-chinese-black`, `bg-chinese-black` |

### **Typography Scale**

| Element | Font Weight | Class |
|---------|-------------|-------|
| Main Headings | ExtraBold (800) | `font-extrabold` |
| Subheadings | SemiBold (600) | `font-semibold` |
| Body Text | Regular (400) | `font-regular` |

### **Responsive Breakpoints**

| Breakpoint | Width | Usage |
|------------|-------|-------|
| `sm:` | 640px+ | Small devices |
| `md:` | 768px+ | Medium devices |
| `lg:` | 1024px+ | Large devices |
| `xl:` | 1280px+ | Extra large devices |

### **Common Utility Patterns**

#### **Container**
```css
max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
```

#### **Card Style**
```css
bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300
```

#### **Gradient Text**
```css
bg-gradient-to-r from-fuchsia-pink via-blue-purple to-teal-deer bg-clip-text text-transparent
```

---

## 🔧 **Component Customization**

### **Adding New Service Cards**

1. Update the `services` array in `src/app/services/page.tsx`
2. Add new service object with `title`, `description`, `icon`, and `color`
3. Animation will automatically apply

### **Modifying Colors**

1. Update `tailwind.config.ts` color definitions
2. Colors will automatically propagate throughout the project

### **Adding New Pages**

1. Create new folder in `src/app/`
2. Add `page.tsx` file with component
3. Import and use existing components (Navbar, Footer)
4. Add navigation link to Navbar component

### **Custom Animations**

```typescript
// Custom spring animation
transition={{ 
  type: "spring", 
  stiffness: 100, 
  damping: 20 
}}

// Custom delay sequence
transition={{ 
  delay: 0.2, 
  duration: 0.8, 
  ease: "easeOut" 
}}
```

---

## 📊 **Performance Considerations**

### **Optimizations Implemented**:
- ✅ **Lazy Loading**: Framer Motion components load on demand
- ✅ **Code Splitting**: Next.js automatic code splitting
- ✅ **Font Optimization**: Google Fonts with display swap
- ✅ **CSS Optimization**: Tailwind CSS purging unused styles

### **Best Practices**:
- 🎯 Use `motion` components only when animation is needed
- 🎯 Implement skeleton loading for dynamic content
- 🎯 Optimize images with Next.js `Image` component
- 🎯 Monitor bundle size with `npm run build`

---

## 🧪 **Testing Components**

### **Manual Testing Checklist**:
- [ ] Navigation works on all breakpoints
- [ ] Animations play smoothly
- [ ] Contact form validation works
- [ ] Hover effects are responsive
- [ ] Text is readable on all backgrounds
- [ ] Links navigate correctly

### **Browser Testing**:
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile browsers

---

This documentation should be updated whenever new components are added or existing components are modified. 