'use client'

import { motion } from 'framer-motion'
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
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We are a dynamic digital marketing and creative agency dedicated to transforming 
              brands through innovative strategies, cutting-edge design, and data-driven results. 
              Our mission is to shift your business into the digital spotlight.
            </p>
          </motion.div>
          
          {/* Mission Statement */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gradient-to-r from-fuchsia-pink/10 via-blue-purple/10 to-teal-deer/10 rounded-3xl p-12 mb-20"
          >
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-chinese-black">Our Mission</h2>
              <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
                To empower businesses of all sizes with digital solutions that not only meet today&apos;s 
                challenges but anticipate tomorrow&apos;s opportunities. We believe in the power of creative 
                thinking combined with strategic execution to create lasting impact.
              </p>
            </div>
          </motion.section>
          
          {/* Values */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-20"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold mb-3 text-chinese-black">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>
          
          {/* Stats */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-chinese-black rounded-3xl p-12 text-center"
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
        </div>
      </main>
      
      <Footer />
    </div>
  )
} 