import React from 'react'

export default function Skills() {
  const skills = [
    'Logistics & Supply Chain Operations',
    'Process Optimization & KPI Analysis',
    'Data & Reporting (Excel, Power BI, SQL)',
    'Trade Compliance & Incoterms',
    'Cross-Functional Collaboration',
    'Continuous Improvement & Automation',
  ]

  return (
    <section className="mt-8">
      <h2 className="text-2xl font-semibold mb-4">Skills</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {skills.map((skill, index) => (
          <div key={index} className="card text-sm text-gray-200">
            {skill}
          </div>
        ))}
      </div>
    </section>
  )
}