'use client'

import { useEffect, useRef, useState } from 'react'
import ConceptDiagram from './ConceptDiagram'

export default function AsyncTimelineDiagram() {
  const [activePhase, setActivePhase] = useState<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            let phase = 0
            const interval = setInterval(() => {
              setActivePhase(phase)
              phase++
              if (phase > 3) {
                clearInterval(interval)
                setActivePhase(null)
              }
            }, 1000)
            observer.unobserve(entry.target)
            return () => clearInterval(interval)
          }
        })
      },
      { threshold: 0.3 }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <ConceptDiagram caption="Synchronous vs Asynchronous: the difference is what happens while waiting">
      <div ref={containerRef} className="relative" style={{ height: '250px' }}>
        <svg width="100%" height="100%" viewBox="0 0 600 250" className="overflow-visible">
          {/* Timeline line */}
          <line
            x1="50"
            y1="125"
            x2="550"
            y2="125"
            stroke="#E5E5E5"
            strokeWidth="2"
          />

          {/* Synchronous flow */}
          <text x="300" y="30" textAnchor="middle" fontSize="14" fill="#4A4A4A" fontWeight="600" className="font-ui">
            Synchronous (Blocking)
          </text>
          <rect
            x="80"
            y="50"
            width="100"
            height="30"
            rx="4"
            fill={activePhase === 0 ? '#5B8FA3' : '#E5E5E5'}
            className="transition-all duration-500"
          />
          <text x="130" y="70" textAnchor="middle" fontSize="11" fill={activePhase === 0 ? '#1A1A1A' : '#4A4A4A'} className="font-ui">
            Start
          </text>
          
          <rect
            x="220"
            y="50"
            width="150"
            height="30"
            rx="4"
            fill={activePhase === 1 ? '#5B8FA3' : '#E5E5E5'}
            className="transition-all duration-500"
          />
          <text x="295" y="70" textAnchor="middle" fontSize="11" fill={activePhase === 1 ? '#1A1A1A' : '#4A4A4A'} className="font-ui">
            Wait (frozen)
          </text>
          
          <rect
            x="400"
            y="50"
            width="100"
            height="30"
            rx="4"
            fill={activePhase === 2 ? '#5B8FA3' : '#E5E5E5'}
            className="transition-all duration-500"
          />
          <text x="450" y="70" textAnchor="middle" fontSize="11" fill={activePhase === 2 ? '#1A1A1A' : '#4A4A4A'} className="font-ui">
            Continue
          </text>

          {/* Asynchronous flow */}
          <text x="300" y="160" textAnchor="middle" fontSize="14" fill="#4A4A4A" fontWeight="600" className="font-ui">
            Asynchronous (Non-blocking)
          </text>
          <rect
            x="80"
            y="180"
            width="100"
            height="30"
            rx="4"
            fill={activePhase === 0 ? '#5B8FA3' : '#E5E5E5'}
            className="transition-all duration-500"
          />
          <text x="130" y="200" textAnchor="middle" fontSize="11" fill={activePhase === 0 ? '#1A1A1A' : '#4A4A4A'} className="font-ui">
            Start
          </text>
          
          <rect
            x="220"
            y="180"
            width="80"
            height="30"
            rx="4"
            fill={activePhase === 1 ? '#5B8FA3' : '#E5E5E5'}
            className="transition-all duration-500"
          />
          <text x="260" y="200" textAnchor="middle" fontSize="11" fill={activePhase === 1 ? '#1A1A1A' : '#4A4A4A'} className="font-ui">
            Request
          </text>
          
          <rect
            x="330"
            y="180"
            width="100"
            height="30"
            rx="4"
            fill={activePhase === 2 ? '#5B8FA3' : '#E5BFA3'}
            className="transition-all duration-500"
          />
          <text x="380" y="200" textAnchor="middle" fontSize="11" fill={activePhase === 2 ? '#1A1A1A' : '#4A4A4A'} className="font-ui">
            Other work
          </text>
          
          <rect
            x="460"
            y="180"
            width="80"
            height="30"
            rx="4"
            fill={activePhase === 3 ? '#5B8FA3' : '#E5E5E5'}
            className="transition-all duration-500"
          />
          <text x="500" y="200" textAnchor="middle" fontSize="11" fill={activePhase === 3 ? '#1A1A1A' : '#4A4A4A'} className="font-ui">
            Handle
          </text>

          {/* Arrows */}
          <line x1="180" y1="65" x2="220" y2="65" stroke={activePhase === 0 ? '#5B8FA3' : '#E5E5E5'} strokeWidth="2" markerEnd="url(#arrow)" className="transition-colors duration-500" />
          <line x1="370" y1="65" x2="400" y2="65" stroke={activePhase === 1 ? '#5B8FA3' : '#E5E5E5'} strokeWidth="2" markerEnd="url(#arrow)" className="transition-colors duration-500" />
          
          <line x1="180" y1="195" x2="220" y2="195" stroke={activePhase === 0 ? '#5B8FA3' : '#E5E5E5'} strokeWidth="2" markerEnd="url(#arrow)" className="transition-colors duration-500" />
          <line x1="300" y1="195" x2="330" y2="195" stroke={activePhase === 1 ? '#5B8FA3' : '#E5E5E5'} strokeWidth="2" markerEnd="url(#arrow)" className="transition-colors duration-500" />
          <line x1="430" y1="195" x2="460" y2="195" stroke={activePhase === 2 ? '#5B8FA3' : '#E5E5E5'} strokeWidth="2" markerEnd="url(#arrow)" className="transition-colors duration-500" />

          <defs>
            <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
              <polygon points="0 0, 10 3, 0 6" fill="currentColor" />
            </marker>
          </defs>
        </svg>
      </div>
    </ConceptDiagram>
  )
}
