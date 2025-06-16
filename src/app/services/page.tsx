'use client'

import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const services = [
  {
    title: 'Digital Marketing',
    description: 'Strategic campaigns that drive engagement and conversions across all digital channels.',
    icon: '📱',
    color: 'bg-fuchsia-pink',
  },
  {
    title: 'Creative Design',
    description: 'Stunning visual identities that capture your brand essence and captivate audiences.',
    icon: '🎨',
    color: 'bg-blue-purple',
  },
  {
    title: 'Web Development',
    description: 'Modern, responsive websites built with cutting-edge technology and user experience in mind.',
    icon: '💻',
    color: 'bg-teal-deer',
  },
  {
    title: 'Brand Strategy',
    description: 'Comprehensive brand positioning that sets you apart in the competitive marketplace.',
    icon: '🚀',
    color: 'bg-green-yellow',
  },
  {
    title: 'Content Creation',
    description: 'Compelling content that tells your story and drives meaningful connections.',
    icon: '✍️',
    color: 'bg-fuchsia-pink',
  },
  {
    title: 'Analytics & Insights',
    description: 'Data-driven strategies that optimize performance and maximize your ROI.',
    icon: '📊',
    color: 'bg-blue-purple',
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
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer comprehensive digital solutions designed to transform your business 
              and accelerate your growth in the digital landscape.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <div className={`w-16 h-16 ${service.color} rounded-full flex items-center justify-center text-2xl mb-6`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-chinese-black">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
} 