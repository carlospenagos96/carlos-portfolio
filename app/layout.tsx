import './globals.css'
import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

import { Inter, Space_Grotesk } from 'next/font/google'

// ✅ Headings (H1, H2, etc.)
const heading = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-heading',
  display: 'swap',
})

// ✅ Body text (paragraphs)
const body = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata = {
  title: 'Carlos Penagos — Logistics & Supply Chain Specialist',
  description: 'Portfolio website',
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${heading.variable} ${body.variable} dark`}
    >
      <body className="text-white min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  )
}