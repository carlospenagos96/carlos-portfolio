import './globals.css'
import React from 'react'
import Header from '../components/Header'

export const metadata = {
  title: 'Carlos Penagos — Logistics & Supply Chain Specialist',
  description: 'Data-driven logistics professional with international experience.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body>
        <Header />
        <main className="container">{children}</main>
      </body>
    </html>
  )
}