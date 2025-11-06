import React from 'react'

export default function Contact() {
  return (
    <section className="mt-8">
      <h2 className="text-2xl font-semibold mb-4">Contact</h2>

      <div className="card flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <a
          href="mailto:cpenagosguzman@outlook.com"
          className="px-4 py-2 rounded-md border border-white/10 hover:bg-white/5"
        >
          Email
        </a>

        <a
          href="https://www.linkedin.com/in/cpenagosguzman/"
          target="_blank"
          rel="noreferrer"
          className="px-4 py-2 rounded-md border border-white/10 hover:bg-white/5"
        >
          LinkedIn
        </a>

        <a
          href="/Carlos_Penagos_CV.pdf"
          download
          className="px-4 py-2 rounded-md border border-white/10 hover:bg-white/5"
        >
          Download CV
        </a>
      </div>

      <p className="mt-6 text-gray-400 text-sm">
        I’m based in Finland and open to international opportunities in logistics & supply chain.
        Feel free to reach out via email or LinkedIn.
      </p>
    </section>
  )
}