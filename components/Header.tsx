'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'

export default function Header() {
  const pathname = usePathname()

  const navItems = [
    { label: 'ABOUT', href: '/about' },
    { label: 'EXPERIENCE', href: '/experience' },
    { label: 'SKILLS', href: '/skills' },
    { label: 'CONTACT', href: '/contact' },
  ]

  return (
    /**
     * Mobile (default): NOT fixed, so it won’t cover titles and looks clean.
     * Desktop (md+): EXACTLY your previous fixed, blurred, premium header.
     */
    <header
      className="
        bg-transparent
        md:fixed md:top-0 md:left-0 md:right-0 md:z-50
        md:backdrop-blur-xl md:bg-black/20 md:border-b md:border-white/5
      "
    >
      <div className="container mx-auto px-4 md:px-8 py-3 md:py-5">

        {/* ---------- MOBILE BAR (only < md) ---------- */}
        <div className="md:hidden">
          {/* one smooth, horizontally scrollable row (brand + nav) */}
          <nav className="flex items-center gap-3 overflow-x-auto no-scrollbar -mx-4 px-4 pt-safe">
            {/* brand */}
            <Link href="/" className="shrink-0">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                className="
                  px-5 py-2 rounded-full text-xs font-semibold tracking-wide uppercase
                  border border-white/15 text-white/90 hover:text-white hover:bg-white/10
                  transition-all
                "
              >
                CARLOS PENAGOS
              </motion.div>
            </Link>

            {/* pills */}
            {navItems.map((item) => {
              const active = pathname === item.href
              return (
                <Link key={item.href} href={item.href} className="shrink-0">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.96 }}
                    className={`
                      px-5 py-2 rounded-full text-xs font-medium tracking-wide uppercase transition-all
                      ${active
                        ? 'bg-yellow-300 text-black shadow-[0_0_16px_rgba(250,204,21,0.35)]'
                        : 'border border-white/10 text-white/80 hover:text-white hover:bg-white/10'}
                    `}
                  >
                    {item.label}
                  </motion.div>
                </Link>
              )
            })}
          </nav>
        </div>

        {/* ---------- DESKTOP BAR (md+) — unchanged look ---------- */}
        <div className="hidden md:flex items-center justify-between">
          {/* BRAND — same styling as before, slightly larger than pills */}
          <Link href="/">
            <motion.div
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.96 }}
              className="
                px-7 py-2.5 rounded-full text-sm font-semibold tracking-wide uppercase
                border border-white/15 text-white/90 hover:text-white hover:bg-white/10
                transition-all
              "
            >
              CARLOS PENAGOS
            </motion.div>
          </Link>

          {/* NAV BUTTONS — identical spacing/shape as your original */}
          <nav className="flex items-center gap-6">
            {navItems.map((item) => {
              const active = pathname === item.href
              return (
                <Link key={item.href} href={item.href}>
                  <motion.div
                    whileHover={{ scale: 1.07 }}
                    whileTap={{ scale: 0.96 }}
                    className={`
                      px-6 py-2 rounded-full text-sm font-medium tracking-wide uppercase transition-all
                      ${active
                        ? 'bg-yellow-300 text-black shadow-[0_0_22px_rgba(250,204,21,0.45)]'
                        : 'border border-white/10 text-white/80 hover:text-white hover:bg-white/10'}
                    `}
                  >
                    {item.label}
                  </motion.div>
                </Link>
              )
            })}
          </nav>
        </div>
      </div>
    </header>
  )
}