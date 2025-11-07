'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"

export default function Header() {
  const pathname = usePathname()

  const navItems = [
    { label: "ABOUT", href: "/about" },
    { label: "EXPERIENCE", href: "/experience" },
    { label: "SKILLS", href: "/skills" },
    { label: "CONTACT", href: "/contact" },
  ]

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/20 border-b border-white/5">
      <div className="container mx-auto px-8 py-5 flex items-center justify-between">

        {/* ✅ BRAND — same styling as nav, slightly larger */}
        <Link href="/">
          <motion.div
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.96 }}
            className={`
              px-7 py-2.5 rounded-full text-sm font-semibold tracking-wide uppercase 
              border border-white/15 text-white/90 hover:text-white hover:bg-white/10
              transition-all
            `}
          >
            CARLOS PENAGOS
          </motion.div>
        </Link>

        {/* ✅ NAV BUTTONS */}
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
                      ? "bg-yellow-300 text-black shadow-[0_0_22px_rgba(250,204,21,0.45)]" 
                      : "border border-white/10 text-white/80 hover:text-white hover:bg-white/10"
                    }
                  `}
                >
                  {item.label}
                </motion.div>
              </Link>
            )
          })}
        </nav>

      </div>
    </header>
  )
}