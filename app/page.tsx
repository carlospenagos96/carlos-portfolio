import React from 'react'

export default function Home() {
  return (
    <section className="py-16">
      <h1 className="text-4xl font-bold">Carlos Penagos</h1>
      <p className="text-accent mt-2">Logistics & Supply Chain Specialist</p>
      <p className="mt-4 max-w-2xl text-gray-300">
        Proactive logistics professional with 7+ years of international experience. 
        I combine operations knowledge with data skills (Power BI, SQL, Python) 
        to optimize processes and reduce costs.
      </p>

      <div className="mt-6 flex gap-3">
        <a href="mailto:cpenagosguzman@outlook.com" className="px-4 py-2 border rounded-md">Email</a>
        <a href="https://www.linkedin.com/in/cpenagosguzman/" target="_blank" rel="noreferrer" className="px-4 py-2 border rounded-md">LinkedIn</a>
        <a href="/Carlos_Penagos_CV.pdf" download className="px-4 py-2 border rounded-md">Download CV</a>
      </div>
    </section>
  )
}