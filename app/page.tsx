'use client'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-32">

      {/* ✅ Left premium accent bar */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 h-[70%] w-[2px] bg-gradient-to-b from-transparent via-yellow-300/60 to-transparent opacity-70" />

      {/* ✅ Medium-motion glow */}
      <motion.div
        className="absolute left-1/2 top-1/2 w-[900px] h-[900px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(250,204,21,0.25), transparent 70%)",
          filter: "blur(160px)",
          transform: "translate(-50%, -50%)",
        }}
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.35, 0.5, 0.35],
          x: [-25, 25, -25],
          y: [-15, 15, -15],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* ✅ HERO CONTENT */}
      <div className="container mx-auto px-6 relative z-10">

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-[5rem] font-semibold leading-[0.9] tracking-tight whitespace-nowrap"
        >
          Carlos Penagos
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.8 }}
          className="text-[2.5rem] mt-8 text-yellow-300 font-medium"
        >
          Logistics & Supply Chain Specialist
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 1 }}
          className="mt-10 text-gray-200 text-2xl max-w-3xl leading-relaxed"
        >
          Data-driven logistics professional with 7+ years of international experience.  
          Skilled in <span className="text-yellow-300 font-semibold">Power BI</span>,  
          <span className="text-yellow-300 font-semibold"> SQL</span>,  
          and <span className="text-yellow-300 font-semibold"> Python</span>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 1 }}
          className="mt-16 flex gap-8 flex-wrap"
        >
          <a
            href="mailto:cpenagosguzman@outlook.com"
            className="px-10 py-5 rounded-full border border-white/30 hover:bg-white/10 backdrop-blur-lg transition-all text-xl"
          >
            Email
          </a>

          <a
            href="https://www.linkedin.com/in/cpenagosguzman/"
            target="_blank"
            rel="noreferrer"
            className="px-10 py-5 rounded-full border border-white/30 hover:bg-white/10 backdrop-blur-lg transition-all text-xl"
          >
            LinkedIn
          </a>

          <a
            href="/Carlos_Penagos_CV.pdf"
            download
            className="px-10 py-5 rounded-full border border-white/30 hover:bg-white/10 backdrop-blur-lg transition-all text-xl"
          >
            Download CV
          </a>
        </motion.div>

      </div>
    </section>
  )
}