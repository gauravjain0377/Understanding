'use client'

import { useEffect, useRef, useState } from 'react'
import ConceptDiagram from './ConceptDiagram'

export default function StateLayersDiagram() {
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
              if (layer > 3) {
                clearInterval(interval)
                setActiveLayer(null)
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

  const layers = [
    { id: 0, label: 'Persistent State', description: 'Database, files', y: 20, color: '#5B8FA3' },
    { id: 1, label: 'Global State', description: 'Application-wide', y: 80, color: '#8FA3B0' },
    { id: 2, label: 'Component State', description: 'Component-scoped', y: 140, color: '#A3B0C0' },
    { id: 3, label: 'Local State', description: 'Function-scoped', y: 200, color: '#B0C0D0' },
  ]

  return (
    <ConceptDiagram caption="State exists at different scales, each with different properties">
      <div ref={containerRef} className="relative" style={{ height: '280px' }}>
        <svg width="100%" height="100%" viewBox="0 0 500 280" className="overflow-visible">
          {layers.map((layer) => {
            const isActive = activeLayer === layer.id || activeLayer === null
            return (
              <g key={layer.id}>
                <rect
                  x="50"
                  y={layer.y}
                  width="400"
                  height="50"
                  rx="4"
                  fill={isActive ? layer.color : '#FAFAF9'}
                  stroke={isActive ? layer.color : '#E5E5E5'}
                  strokeWidth={isActive ? '2' : '1'}
                  className="transition-all duration-700"
                  opacity={isActive ? 1 : 0.5}
                />
                <text
                  x="70"
                  y={layer.y + 20}
                  fontSize="14"
                  fill={isActive ? '#1A1A1A' : '#4A4A4A'}
                  fontWeight={isActive ? '600' : '400'}
                  className="font-ui transition-all duration-700"
                >
                  {layer.label}
                </text>
                <text
                  x="70"
                  y={layer.y + 35}
                  fontSize="11"
                  fill={isActive ? '#4A4A4A' : '#8A8A8A'}
                  className="font-ui transition-all duration-700"
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
