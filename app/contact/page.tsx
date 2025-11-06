'use client'
import React from 'react'
import { motion } from 'framer-motion'
import PageTransition from '../../components/PageTransition'
import { Mail, Linkedin } from 'lucide-react'

export default function Contact() {
  return (
    <PageTransition>
      <section className="py-24 max-w-3xl mx-auto text-center">

        {/* ✅ Page Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-6"
        >
          Contact
        </motion.h1>

        {/* ✅ Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-gray-300 max-w-xl mx-auto leading-relaxed"
        >
          I'm based in <span className="text-accent">Finland</span> and open to international opportunities in 
          logistics & supply chain.
          <br />
          Feel free to reach out — I’m always open to connecting!
        </motion.p>

        {/* ✅ Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row justify-center gap-4"
        >
          <ContactButton 
            href="mailto:cpenagosguzman@outlook.com"
            icon={<Mail size={18} />}
            label="Email Me"
          />

          <ContactButton
            href="https://www.linkedin.com/in/cpenagosguzman/"
            icon={<Linkedin size={18} />}
            external
            label="LinkedIn"
          />

          <ContactButton 
            href="/Carlos_Penagos_CV.pdf"
            label="Download CV"
          />
        </motion.div>

        {/* ✅ Divider */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="my-12 border-t border-white/10 w-2/3 mx-auto"
        />

        {/* ✅ Response Time Message */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.6 }}
          className="text-gray-400 text-sm"
        >
          I typically respond within 24–48 hours.
        </motion.p>

      </section>
    </PageTransition>
  )
}

/* ✅ Reusable button component */
function ContactButton({
  href,
  icon,
  label,
  external = false,
}: {
  href: string
  icon?: React.ReactNode
  label: string
  external?: boolean
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className="flex items-center justify-center gap-2 px-6 py-3 
                 min-w-[160px] text-sm
                 rounded-lg border border-white/10 
                 bg-white/5 hover:bg-white/10 
                 hover:border-accent/40 transition-all group"
    >
      {icon && (
        <span className="text-accent group-hover:scale-110 transition-transform">
          {icon}
        </span>
      )}
      {label}
    </a>
  )
}