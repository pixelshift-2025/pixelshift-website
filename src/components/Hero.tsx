'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6"
        >
          <span className="bg-gradient-to-r from-fuchsia-pink via-blue-purple to-teal-deer bg-clip-text text-transparent">
            Shift Happens.
          </span>
          <br />
          <span className="text-cultured">Make It Count.</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto font-regular"
        >
          PixelShift is a digital marketing and creative agency built for bold brands ready to evolve; clearly, confidently, and one pixel at a time.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="/contact"
            className="bg-gradient-to-r from-fuchsia-pink to-blue-purple text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg hover:shadow-fuchsia-pink/25 transition-all duration-300 transform hover:scale-105"
          >
            Start Your Shift
          </Link>
          <Link
            href="/services"
            className="border-2 border-cultured text-cultured px-8 py-4 rounded-full font-semibold text-lg hover:bg-cultured hover:text-chinese-black transition-all duration-300 transform hover:scale-105"
          >
            Explore Services
          </Link>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          <div className="text-center">
            <div className="text-3xl font-extrabold text-fuchsia-pink mb-2">50+</div>
            <div className="text-gray-400 font-semibold">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-extrabold text-blue-purple mb-2">200%</div>
                          <div className="text-gray-400 font-semibold">Average ROI</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-extrabold text-teal-deer mb-2">24/7</div>
              <div className="text-gray-400 font-semibold">Support</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 