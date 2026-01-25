'use client'

import { useEffect, useRef, useState } from 'react'

export default function UnderstandingSystemDiagram() {
  const [mounted, setMounted] = useState(false)
  const [activeNodes, setActiveNodes] = useState<Set<number>>(new Set())
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setMounted(true)
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate nodes appearing one by one
            let nodeIndex = 0
            const interval = setInterval(() => {
              setActiveNodes(prev => new Set([...prev, nodeIndex]))
              nodeIndex++
              if (nodeIndex >= 8) {
                clearInterval(interval)
              }
            }, 200)
            
            observer.unobserve(entry.target)
            return () => clearInterval(interval)
          }
        })
      },
      { threshold: 0.2 }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  // Central node and surrounding concept nodes
  const nodes = [
    { id: 0, label: 'UNDERSTANDING', x: 400, y: 250, isCentral: true },
    { id: 1, label: 'CONCEPTS', x: 200, y: 150 },
    { id: 2, label: 'DOMAINS', x: 600, y: 150 },
    { id: 3, label: 'VISUALS', x: 150, y: 350 },
    { id: 4, label: 'SYSTEMS', x: 650, y: 350 },
    { id: 5, label: 'MENTAL MODELS', x: 100, y: 250 },
    { id: 6, label: 'EXPLORATION', x: 700, y: 250 },
    { id: 7, label: 'CLARITY', x: 400, y: 100 },
  ]

  const connections = [
    { from: 0, to: 1 },
    { from: 0, to: 2 },
    { from: 0, to: 3 },
    { from: 0, to: 4 },
    { from: 0, to: 5 },
    { from: 0, to: 6 },
    { from: 0, to: 7 },
  ]

  return (
    <div 
      ref={containerRef}
      className="w-full technical-grid py-16 md:py-20 relative"
      style={{ minHeight: '80vh', maxHeight: '90vh' }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Diagram label */}
        <div className="mb-8 md:mb-10 text-center">
          <span className="font-technical text-sm md:text-base uppercase tracking-wider text-text-secondary/60">
            FIG_001
          </span>
          <span className="font-technical text-sm md:text-base uppercase tracking-wider text-text-secondary/40 mx-4">
            |
          </span>
          <span className="font-technical text-sm md:text-base uppercase tracking-wider text-text-secondary/60">
            SYSTEM ARCHITECTURE
          </span>
        </div>
        
        <svg 
          viewBox="0 0 800 500" 
          className="w-full h-auto"
          style={{ minHeight: '60vh', maxHeight: '70vh' }}
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <marker
              id="arrow-understanding"
              markerWidth="8"
              markerHeight="8"
              refX="7"
              refY="4"
              orient="auto"
            >
              <path
                d="M 0 0 L 8 4 L 0 8"
                fill="rgba(74, 124, 143, 0.3)"
              />
            </marker>
          </defs>

          {/* Connections */}
          {connections.map((conn, idx) => {
            const fromNode = nodes[conn.from]
            const toNode = nodes[conn.to]
            const isActive = activeNodes.has(conn.from) && activeNodes.has(conn.to)
            
            return (
              <line
                key={idx}
                x1={fromNode.x}
                y1={fromNode.y}
                x2={toNode.x}
                y2={toNode.y}
                stroke={isActive ? 'rgba(74, 124, 143, 0.3)' : 'rgba(232, 232, 230, 0.5)'}
                strokeWidth={isActive ? 1.5 : 1}
                markerEnd="url(#arrow-understanding)"
                className="transition-all duration-700 ease-out"
                style={{
                  opacity: isActive ? 1 : 0.3,
                  transitionDelay: `${idx * 100}ms`,
                }}
              />
            )
          })}

          {/* Nodes */}
          {nodes.map((node) => {
            const isActive = activeNodes.has(node.id)
            const isCentral = node.isCentral
            
            return (
              <g key={node.id}>
                {/* Node circle */}
                <circle
                  cx={node.x}
                  cy={node.y}
                  r={isCentral ? 70 : 50}
                  fill={isActive ? (isCentral ? '#4A7C8F' : 'rgba(74, 124, 143, 0.1)') : 'rgba(232, 232, 230, 0.3)'}
                  stroke={isActive ? '#4A7C8F' : 'rgba(232, 232, 230, 0.5)'}
                  strokeWidth={isActive ? 2.5 : 1.5}
                  className="transition-all duration-700 ease-out"
                  style={{
                    opacity: mounted ? 1 : 0,
                    transform: `scale(${isActive ? 1 : 0.8})`,
                    transformOrigin: `${node.x}px ${node.y}px`,
                  }}
                />
                
                {/* Node label */}
                <text
                  x={node.x}
                  y={node.y + (isCentral ? 0 : 6)}
                  textAnchor="middle"
                  fontSize={isCentral ? 16 : 13}
                  fill={isActive ? (isCentral ? '#FAFAF9' : '#4A7C8F') : 'rgba(90, 90, 90, 0.5)'}
                  fontWeight={isCentral ? 600 : 500}
                  className="font-technical uppercase tracking-wider transition-all duration-700"
                  style={{
                    opacity: mounted ? 1 : 0,
                  }}
                >
                  {node.label}
                </text>
              </g>
            )
          })}
        </svg>

        <div className="mt-8 md:mt-10 text-center">
          <p className="font-reading text-lg md:text-xl text-text-secondary/80 max-w-3xl mx-auto leading-relaxed">
            Understanding emerges from the connections between concepts, domains, and mental models. 
            Each element informs the others, creating a system of knowledge.
          </p>
        </div>
      </div>
    </div>
  )
}
