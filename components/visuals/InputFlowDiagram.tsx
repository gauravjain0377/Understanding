'use client'

import { useEffect, useRef, useState } from 'react'
import ConceptDiagram from './ConceptDiagram'

export default function InputFlowDiagram() {
  const [highlightedStep, setHighlightedStep] = useState<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            let step = 0
            const interval = setInterval(() => {
              setHighlightedStep(step)
              step++
              if (step > 4) {
                clearInterval(interval)
                setHighlightedStep(null)
              }
            }, 800)
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

  const steps = [
    { id: 1, label: 'Physical Action', x: 80, y: 100, color: '#5B8FA3' },
    { id: 2, label: 'Hardware Signal', x: 280, y: 100, color: '#8FA3B0' },
    { id: 3, label: 'OS Event', x: 480, y: 100, color: '#A3B0C0' },
    { id: 4, label: 'Application', x: 680, y: 100, color: '#B0C0D0' },
  ]

  return (
    <ConceptDiagram caption="The journey from physical action to application understanding">
      <div ref={containerRef} className="relative" style={{ height: '300px' }}>
        <svg width="100%" height="100%" viewBox="0 0 900 300" className="overflow-visible" preserveAspectRatio="xMidYMid meet">
          {/* Arrows */}
          {steps.slice(0, -1).map((step, index) => (
            <line
              key={`arrow-${index}`}
              x1={step.x + 140}
              y1={step.y + 40}
              x2={steps[index + 1].x - 20}
              y2={steps[index + 1].y + 40}
              stroke={highlightedStep !== null && highlightedStep >= index ? '#5B8FA3' : '#E5E5E5'}
              strokeWidth="3"
              markerEnd="url(#arrowhead)"
              className="transition-colors duration-700"
            />
          ))}
          
          {/* Arrow marker */}
          <defs>
            <marker
              id="arrowhead"
              markerWidth="12"
              markerHeight="12"
              refX="11"
              refY="4"
              orient="auto"
            >
              <polygon
                points="0 0, 12 4, 0 8"
                fill={highlightedStep !== null ? '#5B8FA3' : '#E5E5E5'}
                className="transition-colors duration-700"
              />
            </marker>
          </defs>

          {/* Step boxes */}
          {steps.map((step) => {
            const isHighlighted = highlightedStep !== null && highlightedStep >= step.id - 1
            return (
              <g key={step.id}>
                <rect
                  x={step.x}
                  y={step.y}
                  width="160"
                  height="80"
                  rx="8"
                  fill={isHighlighted ? step.color : '#FAFAF9'}
                  stroke={isHighlighted ? step.color : '#E5E5E5'}
                  strokeWidth={isHighlighted ? '3' : '2'}
                  className="transition-all duration-700"
                  opacity={isHighlighted ? 1 : 0.6}
                />
                <text
                  x={step.x + 80}
                  y={step.y + 48}
                  textAnchor="middle"
                  fontSize="18"
                  fill={isHighlighted ? '#1A1A1A' : '#4A4A4A'}
                  fontWeight={isHighlighted ? '600' : '400'}
                  className="font-ui transition-all duration-700"
                >
                  {step.label}
                </text>
              </g>
            )
          })}

          {/* Labels */}
          <text x="80" y="200" fontSize="14" fill="#4A4A4A" className="font-ui">
            Your finger
          </text>
          <text x="280" y="200" fontSize="14" fill="#4A4A4A" className="font-ui">
            Electrical signal
          </text>
          <text x="480" y="200" fontSize="14" fill="#4A4A4A" className="font-ui">
            Structured event
          </text>
          <text x="680" y="200" fontSize="14" fill="#4A4A4A" className="font-ui">
            Meaning
          </text>
        </svg>
      </div>
    </ConceptDiagram>
  )
}
