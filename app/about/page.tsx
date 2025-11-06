import React from 'react'

export default function About() {
  return (
    <section className="mt-8">
      <h2 className="text-2xl font-semibold mb-4">About</h2>
      <div className="card">
        <p>
          Proactive logistics professional with 7+ years of international experience in shipping lines and freight forwarding. 
          Skilled in transport coordination, process optimization, and KPI analysis. 
          Passionate about sustainability, efficiency, and using data to drive smarter logistics decisions.
        </p>

        <h3 className="mt-6 font-medium">Education</h3>
        <ul className="list-disc ml-6 mt-2 text-sm text-gray-300">
          <li>Bachelor of Business Administration — Open University of Catalonia (2020 - expected Jan 2026)</li>
          <li>Diploma of Transport & Logistics — Prat Institute, Barcelona (2017 - 2019)</li>
          <li>Diploma of International Trade — Joan Brossa Institute, Barcelona (2015 - 2017)</li>
        </ul>

        <h3 className="mt-6 font-medium">Languages</h3>
        <p className="text-sm text-gray-300">Spanish (Native), English (Fluent), Catalan (Fluent), French (Basic), Finnish (Basic)</p>
      </div>
    </section>
  )
}