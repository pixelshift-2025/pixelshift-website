'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'

const faqs = [
  {
    question: "What is PixelShift?",
    answer: "PixelShift is a modern digital marketing and creative agency. We specialize in transforming brands through precise, strategic design, marketing, and storytelling. We believe in the power of small, intentional changes to create powerful movements for your brand."
  },
  {
    question: "What services does PixelShift offer?",
    answer: "We offer a comprehensive suite of services, including: Brand Identity & Visual Systems, Website & UX/UI Design, Content Strategy & Social Kits, Marketing Automation & CRM, Paid Media Strategy, and Creative Copywriting. Essentially, if it helps your brand look better, speak clearer, and connect more effectively in the digital space, we've got you covered."
  },
  {
    question: "What makes PixelShift different from other agencies?",
    answer: "Our difference lies in our philosophy: 'Shift Happens. Make It Count. One Pixel at a Time.' We don't just apply generic changes; we engineer precise, intentional shifts that resonate and perform. We combine bold creativity with strategic thinking, ensuring every pixel, every word, and every campaign element serves a clear purpose and drives your brand forward. We focus on recalibrating your brand's energy toward what truly works and stands out."
  },
  {
    question: "How does your process work?",
    answer: "Our process is precise, pixel-perfect, and always with purpose. It typically involves understanding your unique brand, defining clear objectives, strategizing a custom approach, executing with meticulous attention to detail, and optimizing for impact. We partner closely with you through every phase to ensure your vision comes to life."
  },
  {
    question: "Who do you typically work with?",
    answer: "We partner with businesses ready to evolve—whether you're a startup looking to make a splash, an established brand needing a refresh, or a company seeking to optimize its digital presence and connect more deeply with its audience. If you're ready to embrace intentional change and elevate your brand, we're ready to work with you."
  },
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary greatly depending on the scope and complexity. A logo refresh might take a few weeks, while a full rebrand or comprehensive website design could span several months. We'll provide a detailed timeline specific to your project during our initial consultation."
  },
  {
    question: "How do you measure success?",
    answer: "Success for us means achieving your brand's specific goals. Whether it's increased brand recognition, higher conversion rates, improved website engagement, or a more cohesive brand message, we define key performance indicators (KPIs) upfront and track our progress to ensure we're delivering tangible, impactful results."
  },
  {
    question: "Ready to start your project with PixelShift?",
    answer: "We're excited to hear from you! The best way to get started is to reach out through our contact form or email us directly at hello@pixelshift.com. We'll schedule a discovery call to discuss your goals, timeline, and how we can help shift your brand forward."
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
              Frequently Asked <span className="text-fuchsia-pink">Questions</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Got questions? We've got answers. Here are the most common questions about PixelShift and our services.
            </p>
          </motion.div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-800 rounded-2xl shadow-lg overflow-hidden border border-gray-700"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-fuchsia-pink focus:ring-inset"
                >
                  <h3 className="text-lg font-semibold text-chinese-black pr-4">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <svg className="w-6 h-6 text-fuchsia-pink" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </motion.div>
                </button>
                <motion.div
                  initial={false}
                  animate={{
                    height: openIndex === index ? 'auto' : 0,
                    opacity: openIndex === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-8 pb-6">
                    <p className="text-gray-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="bg-chinese-black rounded-3xl p-12 text-center mt-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-cultured">
              Still have questions?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              We're here to help. Reach out and let's start the conversation.
            </p>
            <Link
              href="/contact"
              className="bg-gradient-to-r from-fuchsia-pink to-blue-purple text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg hover:shadow-fuchsia-pink/25 transition-all duration-300 transform hover:scale-105 inline-block"
            >
              Get In Touch
            </Link>
          </motion.div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
} 