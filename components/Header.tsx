'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'

export default function Header() {
  const pathname = usePathname()

  const navItems = [
    { label: 'About', href: '/about' },
    { label: 'Experience', href: '/experience' },
    { label: 'Skills', href: '/skills' },
    { label: 'Contact', href: '/contact' },
  ]

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-black/30 border-b border-white/10">
      <div className="container flex items-center justify-between py-4">
        
        {/* Brand / Name */}
        <Link href="/" className="font-semibold text-accent text-lg">
          Carlos Penagos
        </Link>

        {/* Navigation */}
        <nav className="flex gap-6 items-center text-sm text-gray-300">
          {navItems.map((item) => {
            const isActive = pathname === item.href

            return (
              <Link
                key={item.href}
                href={item.href}
                className="relative group"
              >
                <span className="hover:text-white transition-colors">
                  {item.label}
                </span>

                {/* Hover underline */}
                <span
                  className="absolute -bottom-1 left-0 h-[2px] w-full bg-white/20 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"
                />

                {/* Active underline (animated) */}
                {isActive && (
                  <motion.span
                    layoutId="activeNav"
                    className="absolute -bottom-1 left-0 h-[2px] w-full bg-cyan-400 rounded-full"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            )
          })}
        </nav>
      </div>
    </header>
  )
}