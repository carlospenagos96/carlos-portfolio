import React from 'react'
import { Mail, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10 py-10 text-center text-gray-400">
      <div className="flex flex-col items-center gap-4">

        {/* Name + Location */}
        <p className="text-sm">
          © {new Date().getFullYear()} Carlos Penagos — Based in Finland
        </p>

        {/* Social Icons */}
        <div className="flex gap-5">
          <a
            href="mailto:cpenagosguzman@outlook.com"
            className="hover:text-white transition-colors"
          >
            <Mail size={20} />
          </a>

          <a
            href="https://www.linkedin.com/in/cpenagosguzman/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors"
          >
            <Linkedin size={20} />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-xs text-gray-500 mt-2">
          All rights reserved.
        </p>
      </div>
    </footer>
  )
}