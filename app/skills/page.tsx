'use client'
import React from 'react'
import { motion } from 'framer-motion'
import PageTransition from '../../components/PageTransition'

// ✅ Your structured skills data
const skills = {
  logistics: [
    "Logistics Operations",
    "Transportation Coordination",
    "Import/Export Documentation",
    "Customs & Incoterms",
    "Inventory & Stock Control",
    "Route Optimization",
    "Reverse Logistics",
  ],
  analytics: [
    "Power BI",
    "SQL",
    "Python (Pandas)",
    "Excel (Advanced)",
    "KPI Reporting",
    "Data Visualization",
    "Process Analysis",
  ],
  soft: [
    "Communication",
    "Team Collaboration",
    "Problem Solving",
    "Stakeholder Management",
    "Attention to Detail",
    "Decision Making",
    "Adaptability",
  ],
  languages: [
    "Spanish (Native)",
    "English (Fluent)",
    "Catalan (Fluent)",
    "French (Basic)",
    "Finnish (Basic)",
  ],
}

// ✅ Skill groups with labels
const skillGroups = [
  { title: "Logistics & Operations", items: skills.logistics },
  { title: "Data & Analytical Tools", items: skills.analytics },
  { title: "Soft Skills", items: skills.soft },
  { title: "Languages", items: skills.languages },
]

export default function Skills() {
  return (
    <PageTransition>
      <section className="py-20 max-w-5xl mx-auto">

        {/* ✅ Page Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-12 text-center"
        >
          Skills
        </motion.h1>

        {/* ✅ Grid of Skill Cards */}
        <div className="grid md:grid-cols-2 gap-10">
          {skillGroups.map((group, idx) => (
            <SkillCard 
              key={idx} 
              title={group.title} 
              items={group.items} 
              delay={idx * 0.12} 
            />
          ))}
        </div>

      </section>
    </PageTransition>
  )
}

/* ✅ Reusable Skill Card Component */
function SkillCard({
  title,
  items,
  delay,
}: {
  title: string
  items: string[]
  delay: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="card p-6 border border-white/10 shadow-lg hover:border-accent/40 transition-all duration-300"
    >
      <h3 className="text-xl font-semibold text-white mb-4">{title}</h3>

      <ul className="space-y-2">
        {items.map((skill, idx) => (
          <motion.li
            key={idx}
            whileHover={{ x: 6 }}
            transition={{ type: 'spring', stiffness: 200, damping: 12 }}
            className="bg-white/5 border border-white/10 px-3 py-2 rounded-md text-gray-300 text-sm hover:bg-white/10 transition-all"
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  )
}