'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen"
    >
      <Navbar />
      <Hero />
      
      {/* Brief About Us Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900 to-chinese-black">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-cultured">
              We don't play with pixels. We weaponize them.
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              We believe that transformation doesn't need to be loud; it needs to be right. At PixelShift, we redesign, realign, and reimagine brands with intention. Every pixel, every word, every click, crafted to move your business forward.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-cultured">
              What We Do
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Branding & Identity */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-700"
            >
              <div className="w-16 h-16 bg-fuchsia-pink rounded-full flex items-center justify-center text-2xl mb-6">
                🎨
              </div>
              <h3 className="text-2xl font-bold mb-4 text-cultured">Branding & Identity Systems</h3>
              <p className="text-gray-300 leading-relaxed">
                Not just a logo—your brand's voice, visuals, and vibe, built to stop scrolls and spark obsession.
              </p>
            </motion.div>

            {/* Web Design & Development */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-700"
            >
              <div className="w-16 h-16 bg-blue-purple rounded-full flex items-center justify-center text-2xl mb-6">
                💻
              </div>
              <h3 className="text-2xl font-bold mb-4 text-cultured">Web Design & Development</h3>
              <p className="text-gray-300 leading-relaxed">
                Sleek, high-converting websites that don't just look good—they sell, scale, and scream authority.
              </p>
            </motion.div>

            {/* AI-Powered Content & Chatbots */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-700"
            >
              <div className="w-16 h-16 bg-teal-deer rounded-full flex items-center justify-center text-2xl mb-6">
                🤖
              </div>
              <h3 className="text-2xl font-bold mb-4 text-cultured">AI-Powered Content & Chatbots</h3>
              <p className="text-gray-300 leading-relaxed">
                24/7 selling machines and scroll-worthy content—powered by A.I. that actually delivers.
              </p>
            </motion.div>

            {/* Paid Media Strategy */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-700"
            >
              <div className="w-16 h-16 bg-green-yellow rounded-full flex items-center justify-center text-2xl mb-6">
                📊
              </div>
              <h3 className="text-2xl font-bold mb-4 text-cultured">Paid Media Strategy</h3>
              <p className="text-gray-300 leading-relaxed">
                Ad campaigns engineered to dominate feeds, crush KPIs, and print ROI.
              </p>
            </motion.div>

            {/* SEO & Copywriting */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-700"
            >
              <div className="w-16 h-16 bg-fuchsia-pink rounded-full flex items-center justify-center text-2xl mb-6">
                ✍️
              </div>
              <h3 className="text-2xl font-bold mb-4 text-cultured">SEO & Copywriting</h3>
              <p className="text-gray-300 leading-relaxed">
                Words that win—rank higher, convert faster, and stick with your audience like a hook.
              </p>
            </motion.div>

            {/* Email Marketing & Automation */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-700"
            >
              <div className="w-16 h-16 bg-blue-purple rounded-full flex items-center justify-center text-2xl mb-6">
                📧
              </div>
              <h3 className="text-2xl font-bold mb-4 text-cultured">Email Marketing & Automation</h3>
              <p className="text-gray-300 leading-relaxed">
                Money-making emails on autopilot—built to nurture, convert, and keep cash flowing.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-chinese-black">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-cultured">
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
      </section>

      <Footer />
    </motion.main>
  )
} 