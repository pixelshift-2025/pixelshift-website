'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const services = [
  {
    title: 'AI chatbots for customer support or lead gen',
    description: '24/7 intelligent customer service and lead generation bots that convert visitors into customers while you sleep.',
    icon: '🤖',
    color: 'bg-fuchsia-pink',
  },
  {
    title: 'Website building (WordPress, Webflow)',
    description: 'Professional, high-converting websites built on the platforms you love, optimized for performance and conversions.',
    icon: '💻',
    color: 'bg-blue-purple',
  },
  {
    title: 'Social media content creation (with AI)',
    description: 'Scroll-stopping content powered by AI that engages your audience and builds your brand presence across all platforms.',
    icon: '📱',
    color: 'bg-teal-deer',
  },
  {
    title: 'Paid ads (FB/IG/Google)',
    description: 'Data-driven advertising campaigns across Facebook, Instagram, and Google that maximize ROI and drive qualified traffic.',
    icon: '📊',
    color: 'bg-green-yellow',
  },
  {
    title: 'SEO copywriting',
    description: 'Search-optimized copy that ranks higher, converts better, and speaks directly to your ideal customers.',
    icon: '✍️',
    color: 'bg-fuchsia-pink',
  },
  {
    title: 'Email marketing automation',
    description: 'Automated email sequences that nurture leads, drive sales, and keep your customers engaged long-term.',
    icon: '📧',
    color: 'bg-blue-purple',
  },
  {
    title: 'Branding (logos, voice, visual kit)',
    description: 'Complete brand identity systems including logos, voice guidelines, and visual assets that make you unforgettable.',
    icon: '🎨',
    color: 'bg-teal-deer',
  },
  {
    title: 'Digital Creatives Development',
    description: 'Thumb-stopping videos, visuals, and ads designed to grab attention—and never let go.',
    icon: '🎬',
    color: 'bg-green-yellow',
  },
]

export default function Services() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
              Our <span className="text-fuchsia-pink">Services</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              We offer comprehensive digital solutions designed to transform your business and accelerate your growth. Every service is crafted with precision, strategy, and the intention to move your brand forward.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-700"
              >
                <div className={`w-16 h-16 ${service.color} rounded-full flex items-center justify-center text-2xl mb-6`}>
                  {service.icon}
                </div>
                                  <h3 className="text-2xl font-bold mb-4 text-cultured">{service.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="bg-chinese-black rounded-3xl p-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-cultured">
              Ready to scale smarter?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's build something worth clicking on.
            </p>
            <Link
              href="/contact"
              className="bg-gradient-to-r from-fuchsia-pink to-blue-purple text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg hover:shadow-fuchsia-pink/25 transition-all duration-300 transform hover:scale-105 inline-block"
            >
              Book Your Discovery Call
            </Link>
          </motion.div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
} 