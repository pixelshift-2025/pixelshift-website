'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const values = [
  {
    title: 'Innovation',
    description: 'We push boundaries and embrace cutting-edge technologies to deliver breakthrough solutions.',
    icon: '💡',
  },
  {
    title: 'Excellence',
    description: 'We maintain the highest standards in everything we do, from strategy to execution.',
    icon: '⭐',
  },
  {
    title: 'Partnership',
    description: 'We work collaboratively with our clients as trusted partners in their success journey.',
    icon: '🤝',
  },
  {
    title: 'Impact',
    description: 'We measure our success by the tangible results we deliver for our clients.',
    icon: '🎯',
  },
]

export default function About() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
              About <span className="text-fuchsia-pink">PixelShift</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-5xl mx-auto leading-relaxed">
              At PixelShift, we believe that profound transformations often begin with the smallest details. We turn small changes into powerful digital movements. Creativity, when applied with precision and strategy, has the power to reposition a brand, refocus its message, and reimagine its future.
            </p>
          </motion.div>
          
          {/* Mission Statement */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gradient-to-r from-fuchsia-pink/20 via-blue-purple/20 to-teal-deer/20 rounded-3xl p-12 mb-20 border border-gray-700"
          >
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-cultured">Our Philosophy</h2>
              <p className="text-xl text-gray-200 max-w-5xl mx-auto leading-relaxed mb-6">
                In a digital landscape crowded with noise, we cut through with clarity and impact. As a full-service digital marketing agency, we're not just about redesigning brands; we're about evolving them—clearly, confidently, and creatively.
              </p>
              <p className="text-xl text-gray-200 max-w-5xl mx-auto leading-relaxed">
                Our name, PixelShift, embodies our philosophy: precision, intentional change, and forward momentum. We help brands recalibrate their energy, realign their message, elevate their presence, and craft visual stories that move people.
              </p>
            </div>
          </motion.section>
          
          {/* What Makes Us Different */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-20"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What Makes Us Different</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  It's about more than just "change"; it's about a strategic shift toward what works, what resonates, and what stands out in a competitive digital world. We bring a meticulous, pixel-perfect approach to every project, ensuring every element serves a purpose and drives results.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  We are a team of bold, smart, and strategic creatives who speak the language of design and digital marketing: clean, intentional, and with impact. We thrive on helping businesses ready to evolve—through digital strategy, web design, marketing, automation, and compelling storytelling.
                </p>
              </div>
              <div className="bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-700">
                <h3 className="text-2xl font-bold mb-4 text-cultured">Our Process</h3>
                <p className="text-gray-300 leading-relaxed">
                  From a logo refresh to a full rebrand or a launch strategy, our process is always purposeful, always precise, and always forward. We don't just apply generic changes; we engineer precise, intentional shifts that resonate and perform.
                </p>
              </div>
            </div>
          </motion.section>
          
          {/* Stats */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-chinese-black rounded-3xl p-12 text-center mb-20"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-cultured">Our Impact</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <div className="text-4xl font-extrabold text-fuchsia-pink mb-2">50+</div>
                <div className="text-cultured">Happy Clients</div>
              </div>
              <div>
                <div className="text-4xl font-extrabold text-blue-purple mb-2">200%</div>
                <div className="text-cultured">Average ROI</div>
              </div>
              <div>
                <div className="text-4xl font-extrabold text-teal-deer mb-2">500+</div>
                <div className="text-cultured">Projects Completed</div>
              </div>
              <div>
                <div className="text-4xl font-extrabold text-green-yellow mb-2">5</div>
                <div className="text-cultured">Years Experience</div>
              </div>
            </div>
          </motion.section>

          {/* CTA */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-cultured">
              Ready to shift your brand forward?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's create something remarkable together.
            </p>
            <Link
              href="/contact"
              className="bg-gradient-to-r from-fuchsia-pink to-blue-purple text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg hover:shadow-fuchsia-pink/25 transition-all duration-300 transform hover:scale-105 inline-block"
            >
              Start Your Project
            </Link>
          </motion.section>
        </div>
      </main>
      
      <Footer />
    </div>
  )
} 