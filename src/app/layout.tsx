import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import React from 'react'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '800'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'PixelShift - Digital Marketing & Creative Agency',
  description: 'Transform your brand with cutting-edge digital marketing and creative solutions.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-poppins antialiased bg-cultured text-chinese-black`}>
        {children}
      </body>
    </html>
  )
} 