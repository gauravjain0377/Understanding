'use client'

import { useEffect, useRef, useState } from 'react'
import ProgressiveReveal from '../ProgressiveReveal'

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
    { id: 1, label: 'Physical Action', x: 200, y: 200, color: '#5B8FA3' },
    { id: 2, label: 'Hardware Signal', x: 800, y: 200, color: '#8FA3B0' },
    { id: 3, label: 'OS Event', x: 1400, y: 200, color: '#A3B0C0' },
    { id: 4, label: 'Application', x: 2000, y: 200, color: '#B0C0D0' },
  ]

  return (
    <div className="my-12 md:my-16 -mx-6 md:-mx-12 lg:-mx-24 xl:-mx-32 w-[calc(100%+3rem)] md:w-[calc(100%+6rem)] lg:!w-[calc(100vw-256px-500px)] xl:!w-[calc(100vw-256px-500px)] lg:!max-w-[calc(100vw-256px-500px)] xl:!max-w-[calc(100vw-256px-500px)]" data-diagram-section="true">
      <ProgressiveReveal>
        <figure className="w-full">
          <div className="bg-gradient-to-br from-background via-subtle/20 to-background border border-border/60 p-8 md:p-12 lg:p-16 rounded-sm w-full shadow-sm">
            <div ref={containerRef} className="relative w-full" style={{ height: '700px' }}>
              <svg width="100%" height="100%" viewBox="0 0 2800 700" className="overflow-visible" preserveAspectRatio="xMidYMid meet">
                {/* Arrows */}
                {steps.slice(0, -1).map((step, index) => (
                  <line
                    key={`arrow-${index}`}
                    x1={step.x + 500}
                    y1={step.y + 100}
                    x2={steps[index + 1].x - 40}
                    y2={steps[index + 1].y + 100}
                    stroke={highlightedStep !== null && highlightedStep >= index ? '#5B8FA3' : '#E5E5E5'}
                    strokeWidth="8"
                    markerEnd="url(#arrowhead)"
                    className="transition-colors duration-700"
                  />
                ))}
                
                {/* Arrow marker */}
                <defs>
                  <marker
                    id="arrowhead"
                    markerWidth="30"
                    markerHeight="30"
                    refX="27"
                    refY="10"
                    orient="auto"
                  >
                    <polygon
                      points="0 0, 30 10, 0 20"
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
                        width="500"
                        height="200"
                        rx="20"
                        fill={isHighlighted ? step.color : '#FAFAF9'}
                        stroke={isHighlighted ? step.color : '#E5E5E5'}
                        strokeWidth={isHighlighted ? '8' : '5'}
                        className="transition-all duration-700"
                        opacity={isHighlighted ? 1 : 0.6}
                      />
                      <text
                        x={step.x + 250}
                        y={step.y + 120}
                        textAnchor="middle"
                        fontSize="56"
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
                <text x="200" y="480" fontSize="40" fill="#4A4A4A" className="font-ui">
                  Your finger
                </text>
                <text x="800" y="480" fontSize="40" fill="#4A4A4A" className="font-ui">
                  Electrical signal
                </text>
                <text x="1400" y="480" fontSize="40" fill="#4A4A4A" className="font-ui">
                  Structured event
                </text>
                <text x="2000" y="480" fontSize="40" fill="#4A4A4A" className="font-ui">
                  Meaning
                </text>
              </svg>
            </div>
          </div>
          <figcaption className="mt-10 md:mt-12 text-sm md:text-base text-text-secondary/80 font-reading text-center italic max-w-4xl mx-auto leading-relaxed px-4">
            The journey from physical action to application understanding
          </figcaption>
        </figure>
      </ProgressiveReveal>
    </div>
  )
}
