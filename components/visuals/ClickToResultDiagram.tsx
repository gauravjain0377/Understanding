'use client'

import { useEffect, useRef, useState } from 'react'
import ConceptDiagram from './ConceptDiagram'

export default function ClickToResultDiagram() {
  const [activeLayer, setActiveLayer] = useState<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            let layer = 0
            const interval = setInterval(() => {
              setActiveLayer(layer)
              layer++
              if (layer > 5) {
                clearInterval(interval)
                setActiveLayer(null)
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

  const layers = [
    { id: 0, label: 'Hardware', description: 'Physical interaction', x: 50, y: 20 },
    { id: 1, label: 'OS Input', description: 'Event translation', x: 200, y: 20 },
    { id: 2, label: 'Application', description: 'Logic & decision', x: 350, y: 20 },
    { id: 3, label: 'Network', description: 'Server request', x: 50, y: 120 },
    { id: 4, label: 'Server', description: 'Processing', x: 200, y: 120 },
    { id: 5, label: 'Render', description: 'Display update', x: 350, y: 120 },
  ]

  return (
    <ConceptDiagram caption="The invisible journey: multiple systems coordinate between click and result">
      <div ref={containerRef} className="relative" style={{ height: '220px' }}>
        <svg width="100%" height="100%" viewBox="0 0 500 220" className="overflow-visible">
          {/* Flow arrows */}
          <line x1="150" y1="45" x2="200" y2="45" stroke={activeLayer !== null && activeLayer >= 0 ? '#5B8FA3' : '#E5E5E5'} strokeWidth="2" markerEnd="url(#arrow)" className="transition-colors duration-500" />
          <line x1="300" y1="45" x2="350" y2="45" stroke={activeLayer !== null && activeLayer >= 1 ? '#5B8FA3' : '#E5E5E5'} strokeWidth="2" markerEnd="url(#arrow)" className="transition-colors duration-500" />
          <line x1="350" y1="70" x2="350" y2="100" stroke={activeLayer !== null && activeLayer >= 2 ? '#5B8FA3' : '#E5E5E5'} strokeWidth="2" markerEnd="url(#arrow)" className="transition-colors duration-500" />
          <line x1="150" y1="145" x2="200" y2="145" stroke={activeLayer !== null && activeLayer >= 3 ? '#5B8FA3' : '#E5E5E5'} strokeWidth="2" markerEnd="url(#arrow)" className="transition-colors duration-500" />
          <line x1="300" y1="145" x2="350" y2="145" stroke={activeLayer !== null && activeLayer >= 4 ? '#5B8FA3' : '#E5E5E5'} strokeWidth="2" markerEnd="url(#arrow)" className="transition-colors duration-500" />
          <line x1="350" y1="120" x2="350" y2="90" stroke={activeLayer !== null && activeLayer >= 5 ? '#5B8FA3' : '#E5E5E5'} strokeWidth="2" markerEnd="url(#arrow)" className="transition-colors duration-500" />

          <defs>
            <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
              <polygon points="0 0, 10 3, 0 6" fill="currentColor" />
            </marker>
          </defs>

          {layers.map((layer) => {
            const isActive = activeLayer === layer.id || (activeLayer !== null && activeLayer > layer.id)
            return (
              <g key={layer.id}>
                <rect
                  x={layer.x}
                  y={layer.y}
                  width="100"
                  height="50"
                  rx="4"
                  fill={isActive ? '#5B8FA3' : '#FAFAF9'}
                  stroke={isActive ? '#5B8FA3' : '#E5E5E5'}
                  strokeWidth={isActive ? '2' : '1'}
                  className="transition-all duration-500"
                  opacity={isActive ? 1 : 0.6}
                />
                <text
                  x={layer.x + 50}
                  y={layer.y + 20}
                  textAnchor="middle"
                  fontSize="12"
                  fill={isActive ? '#1A1A1A' : '#4A4A4A'}
                  fontWeight={isActive ? '600' : '400'}
                  className="font-ui transition-all duration-500"
                >
                  {layer.label}
                </text>
                <text
                  x={layer.x + 50}
                  y={layer.y + 35}
                  textAnchor="middle"
                  fontSize="10"
                  fill={isActive ? '#4A4A4A' : '#8A8A8A'}
                  className="font-ui transition-all duration-500"
                >
                  {layer.description}
                </text>
              </g>
            )
          })}
        </svg>
      </div>
    </ConceptDiagram>
  )
}
