import React from 'react'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="py-6 border-b border-white/10">
      <div className="container flex items-center justify-between">
        <Link href="/" className="font-semibold text-accent text-lg">
          Carlos Penagos
        </Link>
        <nav className="flex gap-4 items-center text-sm text-gray-300">
          <Link href="/about">About</Link>
          <Link href="/experience">Experience</Link>
          <Link href="/skills">Skills</Link>
          <Link href="/contact" className="px-3 py-2 rounded-md border border-white/10">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  )
}