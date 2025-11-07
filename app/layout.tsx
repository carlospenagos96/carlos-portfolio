import './globals.css'
import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Space_Grotesk, Inter } from 'next/font/google'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata = {
  title: 'Carlos Penagos — Logistics & Supply Chain Specialist',
  description:
    'Logistics and supply chain professional with 7+ years experience in transport coordination, process optimization, and data-driven decision making.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${spaceGrotesk.className} ${inter.variable} dark`}>
      <body className="text-white min-h-screen flex flex-col bg-transparent">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  )
}