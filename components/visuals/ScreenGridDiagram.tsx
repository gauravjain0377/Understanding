'use client'

import { useEffect, useRef, useState } from 'react'
import ConceptDiagram from './ConceptDiagram'

export default function ScreenGridDiagram() {
  const [activeStep, setActiveStep] = useState<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            let step = 0
            const interval = setInterval(() => {
              setActiveStep(step)
              step++
              if (step > 4) {
                clearInterval(interval)
                setActiveStep(null)
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

  // Create a simplified grid representation
  const gridSize = 8
  const pixelSize = 30
  const spacing = 2

  return (
    <ConceptDiagram caption="A screen is a grid of millions of individual lights, each controlled independently">
      <div ref={containerRef} className="relative" style={{ height: '300px' }}>
        <svg width="100%" height="100%" viewBox="0 0 500 300" className="overflow-visible">
          {/* Grid representation */}
          <g transform="translate(50, 50)">
            {Array.from({ length: gridSize }).map((_, row) =>
              Array.from({ length: gridSize }).map((_, col) => {
                const x = col * (pixelSize + spacing)
                const y = row * (pixelSize + spacing)
                const isActive = activeStep !== null && activeStep >= 0
                const intensity = isActive ? 0.8 : 0.3
                
                return (
                  <g key={`${row}-${col}`}>
                    <rect
                      x={x}
                      y={y}
                      width={pixelSize}
                      height={pixelSize}
                      fill={`rgba(91, 143, 163, ${intensity})`}
                      stroke="#E5E5E5"
                      strokeWidth="1"
                      rx="2"
                      className="transition-all duration-500"
                    />
                    {/* RGB subpixels */}
                    {isActive && (
                      <>
                        <rect
                          x={x + 2}
                          y={y + 2}
                          width={pixelSize / 3 - 1}
                          height={pixelSize - 4}
                          fill="rgba(255, 0, 0, 0.6)"
                        />
                        <rect
                          x={x + pixelSize / 3 + 1}
                          y={y + 2}
                          width={pixelSize / 3 - 1}
                          height={pixelSize - 4}
                          fill="rgba(0, 255, 0, 0.6)"
                        />
                        <rect
                          x={x + (pixelSize * 2) / 3}
                          y={y + 2}
                          width={pixelSize / 3 - 1}
                          height={pixelSize - 4}
                          fill="rgba(0, 0, 255, 0.6)"
                        />
                      </>
                    )}
                  </g>
                )
              })
            )}
          </g>

          {/* Labels and flow */}
          <text x="250" y="20" textAnchor="middle" fontSize="14" fill="#4A4A4A" fontWeight="600" className="font-ui">
            Digital Data → Electrical Signals → Light
          </text>

          {/* Flow arrows */}
          {activeStep !== null && activeStep >= 1 && (
            <g>
              <line
                x1="350"
                y1="150"
                x2="400"
                y2="150"
                stroke="#5B8FA3"
                strokeWidth="2"
                markerEnd="url(#arrow-diagram)"
                className="transition-opacity duration-500"
              />
              <text x="375" y="145" textAnchor="middle" fontSize="11" fill="#4A4A4A" className="font-ui">
                Controller
              </text>
            </g>
          )}

          {activeStep !== null && activeStep >= 2 && (
            <g>
              <line
                x1="400"
                y1="150"
                x2="450"
                y2="150"
                stroke="#5B8FA3"
                strokeWidth="2"
                markerEnd="url(#arrow-diagram)"
                className="transition-opacity duration-500"
              />
              <text x="425" y="145" textAnchor="middle" fontSize="11" fill="#4A4A4A" className="font-ui">
                Signals
              </text>
            </g>
          )}

          {activeStep !== null && activeStep >= 3 && (
            <g>
              <line
                x1="450"
                y1="150"
                x2="450"
                y2="200"
                stroke="#5B8FA3"
                strokeWidth="2"
                markerEnd="url(#arrow-diagram)"
                className="transition-opacity duration-500"
              />
              <text x="455" y="175" fontSize="11" fill="#4A4A4A" className="font-ui">
                Pixels
              </text>
            </g>
          )}

          {/* Explanation text */}
          {activeStep !== null && activeStep >= 4 && (
            <text
              x="250"
              y="280"
              textAnchor="middle"
              fontSize="12"
              fill="#4A4A4A"
              className="font-reading transition-opacity duration-500"
            >
              Each pixel contains red, green, and blue subpixels that combine to create color
            </text>
          )}

          <defs>
            <marker
              id="arrow-diagram"
              markerWidth="10"
              markerHeight="10"
              refX="9"
              refY="3"
              orient="auto"
            >
              <polygon points="0 0, 10 3, 0 6" fill="#5B8FA3" />
            </marker>
          </defs>
        </svg>
      </div>
    </ConceptDiagram>
  )
}
