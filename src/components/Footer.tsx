'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-chinese-black text-cultured py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-extrabold mb-4">
              Pixel<span className="text-fuchsia-pink">Shift</span>
            </h3>
            <p className="text-gray-400 mb-4 max-w-md">
              Transforming brands through innovative digital marketing and creative solutions. 
              Let us shift your business into the digital spotlight.
            </p>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-fuchsia-pink rounded-full"></div>
              <div className="w-8 h-8 bg-blue-purple rounded-full"></div>
              <div className="w-8 h-8 bg-teal-deer rounded-full"></div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-green-yellow">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/services" className="hover:text-fuchsia-pink transition-colors">Digital Marketing</Link></li>
              <li><Link href="/services" className="hover:text-fuchsia-pink transition-colors">Creative Design</Link></li>
              <li><Link href="/services" className="hover:text-fuchsia-pink transition-colors">Web Development</Link></li>
              <li><Link href="/services" className="hover:text-fuchsia-pink transition-colors">Brand Strategy</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-green-yellow">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>hello@pixelshift.com</li>
              <li>+1 (555) 123-4567</li>
              <li>123 Creative Street</li>
              <li>Design City, DC 12345</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 PixelShift. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
} 