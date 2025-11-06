import React from 'react'

export default function Experience() {
  const experiences = [
    {
      company: 'CMA CGM Iberica',
      title: 'Documentation Specialist',
      period: '2022 – 2024',
      details: [
        'Managed export documentation processes, ensuring accuracy, compliance, and timely delivery.',
        'Acted as liaison between the outsourced team in India and local operations to drive process improvements.',
        'Analyzed KPIs and performance data to streamline workflows and enhance efficiency.',
      ],
    },
    {
      company: 'Containerships – CMA CGM Group',
      title: 'Transportation Specialist',
      period: '2019 – 2022',
      details: [
        'Oversaw land and rail transport operations, vendor coordination, and stock management in Spain.',
        'Led cost optimization projects and implemented KPI reporting tools to improve visibility and control.',
      ],
    },
    {
      company: 'Across Logistics SL',
      title: 'Operations Specialist',
      period: '2017 – 2019',
      details: [
        'Coordinated end-to-end import/export shipments (Sea, Air, Road) and managed customs documentation.',
        'Maintained relationships with agents and carriers to ensure seamless logistics execution.',
      ],
    },
  ]

  return (
    <section className="mt-8">
      <h2 className="text-2xl font-semibold mb-4">Experience</h2>
      <div className="space-y-4">
        {experiences.map((exp, index) => (
          <article key={index} className="card">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold">{exp.title}</h3>
                <p className="text-sm text-gray-300">{exp.company}</p>
              </div>
              <time className="text-sm text-gray-400">{exp.period}</time>
            </div>
            <ul className="mt-3 list-disc ml-6 text-sm text-gray-300">
              {exp.details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}