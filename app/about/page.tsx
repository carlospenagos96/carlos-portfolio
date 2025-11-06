'use client'
import React from 'react'
import { motion } from 'framer-motion'
import PageTransition from '../../components/PageTransition'

export default function About() {
  return (
    <PageTransition>
      <section className="py-20 max-w-4xl mx-auto">
        
        {/* Page Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-12 text-center"
        >
          About Me
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          
          {/* LEFT COLUMN — Summary */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-5 text-gray-300 leading-relaxed"
          >
            <p>
              Proactive logistics professional with 
              <span className="text-accent"> 7+ years of international experience </span> 
              in shipping lines and freight forwarding.
            </p>

            <p>
              Skilled in transport coordination, process optimization, KPI analysis, and improving end-to-end logistics flows.
            </p>

            <p>
              Passionate about sustainability, operational efficiency, and using data tools like 
              <span className="text-accent"> Power BI</span>, 
              <span className="text-accent"> SQL</span>, and 
              <span className="text-accent"> Python</span> 
              to support smarter decision-making.
            </p>
          </motion.div>

          {/* RIGHT COLUMN — Strengths / Languages */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Strengths */}
            <div className="card p-5 border border-white/10">
              <h3 className="font-semibold text-white mb-2">⭐ Key Strengths</h3>
              <ul className="list-disc ml-5 text-gray-300 space-y-1">
                <li>Logistics Operations & Optimization</li>
                <li>Transport Coordination (road, sea)</li>
                <li>Data Analysis & KPI Tracking</li>
                <li>Process Automation & Efficiency</li>
                <li>International & multicultural work experience</li>
              </ul>
            </div>

            {/* Languages */}
            <div className="card p-5 border border-white/10">
              <h3 className="font-semibold text-white mb-2">🌐 Languages</h3>
              <p className="text-gray-300 text-sm">
                Spanish (Native) • English (Fluent) • Catalan (Fluent) • 
                French (Basic) • Finnish (Basic)
              </p>
            </div>
          </motion.div>
        </div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-16 card p-6 border border-white/10"
        >
          <h3 className="font-semibold text-white mb-4 text-xl">🎓 Education</h3>
          <ul className="list-disc ml-6 text-gray-300 space-y-2 text-sm">
            <li>
              <strong>Bachelor of Business Administration</strong> — Open University of Catalonia 
              <span className="text-gray-400"> (2020 – expected Jan 2026)</span>
            </li>
            <li>
              <strong>Diploma in Transport & Logistics</strong> — Prat Institute, Barcelona 
              <span className="text-gray-400"> (2017 – 2019)</span>
            </li>
            <li>
              <strong>Diploma in International Trade</strong> — Joan Brossa Institute, Barcelona 
              <span className="text-gray-400"> (2015 – 2017)</span>
            </li>
          </ul>
        </motion.div>

      </section>
    </PageTransition>
  )
}