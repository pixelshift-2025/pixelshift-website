'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    website: '',
    helpType: '',
    projectDetails: '',
    referralSource: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // This will be integrated with Formspree later
    console.log('Form submitted:', formData)
    setIsSubmitted(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ 
        name: '', 
        email: '', 
        company: '', 
        website: '', 
        helpType: '', 
        projectDetails: '', 
        referralSource: '' 
      })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

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
              Ready to ignite your <span className="text-fuchsia-pink">brand's potential?</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              At PixelShift, we're here to help you make your next move count. We're eager to learn about your vision and discuss how our precise, purposeful approach can elevate your brand.
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed mt-4">
              Whether you're looking to refresh your visual identity, enhance your online presence, or craft a compelling content strategy, we're ready to partner with you. Drop us a line, and let's explore how we can turn your ideas into impactful realities—one pixel at a time.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-700">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="text-6xl mb-4">✨</div>
                    <h3 className="text-2xl font-bold text-cultured mb-2">Thank You!</h3>
                    <p className="text-gray-300">We&apos;ll get back to you within 24 hours.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-cultured mb-2">
                        Your Name (Required)
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-fuchsia-pink focus:border-transparent transition-colors"
                        placeholder="Your full name"
                      />
                    </div>
                    
                                          <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-cultured mb-2">
                          Your Email (Required)
                        </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-fuchsia-pink focus:border-transparent transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>

                                          <div>
                        <label htmlFor="company" className="block text-sm font-semibold text-cultured mb-2">
                          Company Name (Optional)
                        </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-fuchsia-pink focus:border-transparent transition-colors"
                        placeholder="Your company name"
                      />
                    </div>

                                          <div>
                        <label htmlFor="website" className="block text-sm font-semibold text-cultured mb-2">
                          Website (Optional)
                        </label>
                      <input
                        type="url"
                        id="website"
                        name="website"
                        value={formData.website}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-fuchsia-pink focus:border-transparent transition-colors"
                        placeholder="https://yourwebsite.com"
                      />
                    </div>

                                          <div>
                        <label htmlFor="helpType" className="block text-sm font-semibold text-cultured mb-2">
                          How can we help you?
                        </label>
                      <select
                        id="helpType"
                        name="helpType"
                        value={formData.helpType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-fuchsia-pink focus:border-transparent transition-colors"
                      >
                        <option value="">Select a service</option>
                        <option value="branding">Branding & Identity</option>
                        <option value="website">Website Design & Development</option>
                        <option value="ai-content">AI-Powered Content & Chatbots</option>
                        <option value="paid-ads">Paid Media Strategy</option>
                        <option value="seo">SEO & Copywriting</option>
                        <option value="email">Email Marketing & Automation</option>
                        <option value="full-service">Full-Service Package</option>
                        <option value="consultation">Consultation</option>
                      </select>
                    </div>
                    
                                          <div>
                        <label htmlFor="projectDetails" className="block text-sm font-semibold text-cultured mb-2">
                          Tell us about your project/goals
                        </label>
                      <textarea
                        id="projectDetails"
                        name="projectDetails"
                        value={formData.projectDetails}
                        onChange={handleChange}
                        rows={6}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-fuchsia-pink focus:border-transparent transition-colors resize-none"
                        placeholder="Describe your project, goals, timeline, and any specific requirements..."
                      />
                    </div>

                                          <div>
                        <label htmlFor="referralSource" className="block text-sm font-semibold text-cultured mb-2">
                          How did you hear about us?
                        </label>
                      <select
                        id="referralSource"
                        name="referralSource"
                        value={formData.referralSource}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-fuchsia-pink focus:border-transparent transition-colors"
                      >
                        <option value="">Select source</option>
                        <option value="google">Google Search</option>
                        <option value="social-media">Social Media</option>
                        <option value="referral">Referral</option>
                        <option value="website">Your Website</option>
                        <option value="advertising">Online Advertising</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    
                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-fuchsia-pink to-blue-purple text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-fuchsia-pink/25 transition-all duration-300 transform hover:scale-105"
                    >
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
            
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold mb-6 text-cultured">Prefer to connect directly?</h2>
                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  We're here to help you navigate the digital landscape and achieve your goals. 
                  Reach out to us directly through email or schedule a call.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-fuchsia-pink rounded-full flex items-center justify-center">
                    <span className="text-white text-xl">📧</span>
                  </div>
                                      <div>
                      <h3 className="font-semibold text-cultured">Email us at:</h3>
                      <p className="text-gray-300">hello@pixelshift.com</p>
                    </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-fuchsia-pink/20 via-blue-purple/20 to-teal-deer/20 rounded-2xl p-8 border border-gray-700">
                <h3 className="text-xl font-bold mb-4 text-cultured">Response Time</h3>
                <p className="text-gray-300">
                  We typically respond to all inquiries within 24 hours during business days. 
                  Ready to make your shift? Let's start the conversation.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
} 