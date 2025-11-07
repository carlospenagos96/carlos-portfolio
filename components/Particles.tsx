'use client'
import React, { useMemo } from 'react'

type Particle = {
  id: number
  left: number
  top: number
  size: number
  dx: number
  dy: number
  duration: number
  delay: number
  opacity: number
}

export default function Particles({ count = 40 }: { count?: number }) {
  const dots = useMemo<Particle[]>(() => {
    return Array.from({ length: count }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,         // %
      top: Math.random() * 100,          // %
      size: 1 + Math.random() * 2.5,     // px
      dx: (Math.random() * 24 - 12),     // px
      dy: (Math.random() * 28 - 14),     // px
      duration: 10 + Math.random() * 10, // s
      delay: Math.random() * 6,          // s
      opacity: 0.55 + Math.random() * 0.35,
    }))
  }, [count])

  return (
    <div className="particle-layer">
      {dots.map((p) => (
        <span
          key={p.id}
          className="particle"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: p.size,
            height: p.size,
            opacity: p.opacity,
            // custom properties used in CSS animation
            // @ts-ignore - CSS custom props
            '--dx': `${p.dx}px`,
            '--dy': `${p.dy}px`,
            '--d': `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          } as React.CSSProperties}
        />
      ))}
    </div>
  )
}