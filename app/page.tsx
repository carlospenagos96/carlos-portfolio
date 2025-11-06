'use client'
import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Home() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [centerOffset, setCenterOffset] = useState({ x: 0, y: 0 })

  // ✅ Track mouse position on the client only
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // ✅ Calculate screen center offset (NOW it's safe because we are in useEffect)
  useEffect(() => {
    setCenterOffset({
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    })
  }, [])

  return (
    <section className="relative py-24 text-center overflow-hidden">
      {/* === Floating Glow Behind Hero === */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          x: (position.x - centerOffset.x) / 20,
          y: (position.y - centerOffset.y) / 20,
        }}
        transition={{ type: 'spring', stiffness: 50, damping: 20 }}
      >
        <motion.div
          className="w-[450px] h-[450px] bg-cyan-500/40 rounded-full blur-[120px] mx-auto"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.25, 0.35, 0.25],
            rotate: [0, 8, -8, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </motion.div>

      {/* === HERO CONTENT === */}
      <div className="relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-5xl font-bold tracking-tight"
        >
          Carlos Penagos
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-accent text-lg mt-3"
        >
          Logistics & Supply Chain Specialist
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-6 max-w-2xl text-gray-300 mx-auto leading-relaxed"
        >
          Proactive logistics professional with 7+ years of international experience. 
          I combine operations knowledge with data skills (<span className="text-accent">Power BI</span>, <span className="text-accent">SQL</span>, <span className="text-accent">Python</span>) 
          to optimize processes and reduce costs.
        </motion.p>

        {/* === Buttons === */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-8 flex justify-center gap-4 flex-wrap"
        >
          <a
            href="mailto:cpenagosguzman@outlook.com"
            className="px-5 py-2 border border-white/10 rounded-lg hover:bg-white/10 transition-all"
          >
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/cpenagosguzman/"
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2 border border-white/10 rounded-lg hover:bg-white/10 transition-all"
          >
            LinkedIn
          </a>
          <a
            href="/Carlos_Penagos_CV.pdf"
            download
            className="px-5 py-2 border border-white/10 rounded-lg hover:bg-white/10 transition-all"
          >
            Download CV
          </a>
        </motion.div>
      </div>
    </section>
  )
}