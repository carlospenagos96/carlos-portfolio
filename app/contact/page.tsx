'use client'
import { motion } from "framer-motion"

export default function Contact() {
  return (
    <section className="relative py-40 min-h-screen flex items-center">

      {/* ✅ Soft section particles */}
      <div className="particles absolute inset-0 pointer-events-none opacity-60">
        {Array.from({ length: 12 }).map((_, i) => (
          <span
            key={i}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${6 + Math.random() * 6}s`,
            }}
          />
        ))}
      </div>

      {/* ✅ Yellow accent bar (left side) */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 h-[70%] w-[3px] bg-yellow-300/80 rounded-full" />

      {/* ✅ CONTENT */}
      <div className="container mx-auto px-6 max-w-3xl relative z-10">

        {/* ✅ Title with animated underline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative inline-block mb-6"
        >
          <h1 className="text-5xl font-bold">Contact</h1>

          {/* underline */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            className="h-[3px] bg-yellow-300 rounded-full mt-2"
          />
        </motion.div>

        {/* ✅ Contact intro text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-xl text-gray-200 leading-relaxed mb-4"
        >
          I'm based in Finland and open to international opportunities in logistics & supply chain.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-xl text-gray-200 leading-relaxed mb-12"
        >
          Feel free to reach out — I’m always open to connect!
        </motion.p>

        {/* ✅ Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex gap-5 flex-wrap mb-12"
        >
          <a
            href="mailto:cpenagosguzman@outlook.com"
            className="px-6 py-3 rounded-full border border-white/20 hover:bg-white/10 backdrop-blur-lg transition-all"
          >
            Email Me
          </a>

          <a
            href="https://www.linkedin.com/in/cpenagosguzman/"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 rounded-full border border-white/20 hover:bg-white/10 backdrop-blur-lg transition-all"
          >
            LinkedIn
          </a>

          <a
            href="/Carlos_Penagos_CV.pdf"
            download
            className="px-6 py-3 rounded-full border border-white/20 hover:bg-white/10 backdrop-blur-lg transition-all"
          >
            Download CV
          </a>
        </motion.div>

        {/* ✅ Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-gray-400 text-sm"
        >
          I typically respond within 24–48 hours.
        </motion.p>
      </div>
    </section>
  )
}