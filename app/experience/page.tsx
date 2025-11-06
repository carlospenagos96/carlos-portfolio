'use client'
import React from 'react'
import { motion } from 'framer-motion'
import PageTransition from '../../components/PageTransition'

// ✅ Experience data (easy to edit later)
const experiences = [
  {
    company: 'CMA CGM Iberica',
    title: 'Documentation Specialist',
    period: '2022 – 2024',
    details: [
      'Managed export documentation processes, ensuring accuracy, compliance, and timely delivery.',
      'Acted as liaison between outsourced teams in India and local operations to improve workflows.',
      'Analyzed KPIs and operational performance to drive process improvements.',
      'Collaborated with global stakeholders to ensure quality and reliability.',
    ],
  },
  {
    company: 'Containerships – CMA CGM Group',
    title: 'Transportation Specialist',
    period: '2019 – 2022',
    details: [
      'Oversaw land and rail transport operations and vendor coordination across Spain.',
      'Led cost optimization initiatives and built KPI reporting dashboards.',
      'Improved communication channels between operations, customer service, and finance.',
    ],
  },
  {
    company: 'Across Logistics SL',
    title: 'Operations Specialist',
    period: '2017 – 2019',
    details: [
      'Coordinated sea, air, and road shipments end-to-end.',
      'Managed customs documentation and regulatory compliance.',
      'Maintained strong relationships with carriers and international agents.',
    ],
  },
]

export default function Experience() {
  return (
    <PageTransition>
      <section className="py-20 max-w-4xl mx-auto">

        {/* ✅ Page Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-12 text-center"
        >
          Experience
        </motion.h1>

        {/* ✅ Vertical Timeline */}
        <div className="relative border-l border-white/10 pl-6 space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* ✅ Timeline Dot */}
              <div className="w-3 h-3 bg-accent rounded-full absolute -left-[1.65rem] top-2 shadow-lg shadow-cyan-500/30" />

              {/* ✅ Title + Company */}
              <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
              <p className="text-accent text-sm font-medium">{exp.company}</p>
              <p className="text-gray-400 text-sm mb-4">{exp.period}</p>

              {/* ✅ Bullet Points */}
              <ul className="list-disc ml-6 text-gray-300 space-y-2 text-sm leading-relaxed">
                {exp.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

      </section>
    </PageTransition>
  )
}
