import './globals.css'
import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Inter } from 'next/font/google'

// ✅ Load Inter font
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

// ✅ Full SEO + OpenGraph Metadata
export const metadata = {
  title: 'Carlos Penagos — Logistics & Supply Chain Specialist',
  description:
    'Logistics and supply chain professional with 7+ years experience in transport coordination, process optimization, and data-driven decision making.',
  keywords: [
    'Logistics',
    'Supply Chain',
    'Transportation',
    'Freight Forwarding',
    'CMA CGM',
    'Excel',
    'Power BI',
    'SQL',
    'Operations',
    'Process Optimization',
    'Data Analytics',
  ],
  authors: [{ name: 'Carlos Penagos' }],
  creator: 'Carlos Penagos',

  // ✅ Use your actual Vercel deployment URL
  metadataBase: new URL('https://carlos-portfolio-loyl.vercel.app'),

  // ✅ OpenGraph (LinkedIn, WhatsApp, Slack previews)
  openGraph: {
    title: 'Carlos Penagos — Logistics & Supply Chain Specialist',
    description:
      'Experienced logistics professional focused on process improvement, data analytics, and international operations.',
    url: 'https://carlos-portfolio-loyl.vercel.app',
    siteName: 'Carlos Penagos Portfolio',
    images: [
      {
        url: '/og-image.png', // ✅ stored in public/
        width: 1200,
        height: 630,
        alt: 'Carlos Penagos — Logistics Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  // ✅ Twitter card metadata
  twitter: {
    card: 'summary_large_image',
    title: 'Carlos Penagos — Logistics Specialist',
    description:
      'Logistics & Supply Chain portfolio showcasing experience, skills, and achievements.',
    images: ['/og-image.png'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.className} dark`}>
      <body className="bg-black text-white min-h-screen flex flex-col">

        {/* ✅ Sticky Navigation Bar */}
        <Header />

        {/* ✅ Main page content */}
        <main className="container py-10 flex-grow">
          {children}
        </main>

        {/* ✅ Footer */}
        <Footer />

      </body>
    </html>
  )
}