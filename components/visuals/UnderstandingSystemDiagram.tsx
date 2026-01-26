'use client'

import { useEffect, useRef, useState } from 'react'
import { DIAGRAM_INK, DIAGRAM_BACKGROUND, LINE_WEIGHTS, OPACITY, getInkColor } from '@/lib/diagram-theme'

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
            // Animate nodes appearing one by one with calm timing
            let nodeIndex = 0
            const interval = setInterval(() => {
              setActiveNodes(prev => new Set([...prev, nodeIndex]))
              nodeIndex++
              if (nodeIndex >= 8) {
                clearInterval(interval)
              }
            }, 400) // Slower, calmer animation
            
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

  // Central node position
  const centerX = 400
  const centerY = 250
  const radius = 180 // Distance from center to surrounding nodes
  
  // Calculate evenly spaced positions around the circle
  // 7 nodes around the center, evenly distributed
  const surroundingNodes = [
    { id: 1, label: 'CONCEPTS' },
    { id: 2, label: 'DOMAINS' },
    { id: 3, label: 'VISUALS' },
    { id: 4, label: 'SYSTEMS' },
    { id: 5, label: 'MENTAL MODELS' },
    { id: 6, label: 'EXPLORATION' },
    { id: 7, label: 'CLARITY' },
  ]
  
  // Calculate positions evenly spaced around circle
  const nodes = [
    { id: 0, label: 'UNDERSTANDING', x: centerX, y: centerY, isCentral: true },
    ...surroundingNodes.map((node, index) => {
      // Start from top (12 o'clock) and distribute evenly
      // Offset by -90 degrees to start from top
      const angle = (index * (2 * Math.PI) / surroundingNodes.length) - (Math.PI / 2)
      const x = centerX + radius * Math.cos(angle)
      const y = centerY + radius * Math.sin(angle)
      return {
        ...node,
        x: Math.round(x),
        y: Math.round(y),
        radius: node.label === 'MENTAL MODELS' ? 60 : undefined, // Larger radius for longer text
      }
    }),
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
                fill={getInkColor(OPACITY.past)}
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
                stroke={isActive ? getInkColor(OPACITY.active) : getInkColor(OPACITY.future)}
                strokeWidth={isActive ? LINE_WEIGHTS.secondary : LINE_WEIGHTS.guide}
                markerEnd="url(#arrow-understanding)"
                style={{
                  transition: `stroke ${700}ms ease-out`,
                  transitionDelay: `${idx * 100}ms`,
                }}
              />
            )
          })}

          {/* Nodes */}
          {nodes.map((node) => {
            const isActive = activeNodes.has(node.id)
            const isCentral = node.isCentral
            const radius = (node as any).radius || (isCentral ? 70 : 50)
            
            // Use single ink color with opacity variations
            const fillColor = isActive 
              ? (isCentral ? getInkColor(OPACITY.active) : getInkColor(0.1))
              : getInkColor(0.05)
            const strokeColor = isActive 
              ? getInkColor(OPACITY.active) 
              : getInkColor(OPACITY.future)
            const textColor = isActive 
              ? (isCentral ? DIAGRAM_BACKGROUND : getInkColor(OPACITY.active))
              : getInkColor(OPACITY.future)
            
            return (
              <g key={node.id}>
                {/* Node circle */}
                <circle
                  cx={node.x}
                  cy={node.y}
                  r={radius}
                  fill={fillColor}
                  stroke={strokeColor}
                  strokeWidth={isActive ? LINE_WEIGHTS.primary : LINE_WEIGHTS.secondary}
                  style={{
                    opacity: mounted ? 1 : 0,
                    transition: `fill ${700}ms ease-out, stroke ${700}ms ease-out`,
                    transform: `scale(${isActive ? 1 : 0.9})`,
                    transformOrigin: `${node.x}px ${node.y}px`,
                  }}
                />
                
                {/* Node label */}
                <text
                  x={node.x}
                  y={node.y + (isCentral ? 0 : 6)}
                  textAnchor="middle"
                  fontSize={isCentral ? 16 : 13}
                  fill={textColor}
                  fontFamily="var(--font-technical)"
                  fontWeight={isCentral ? 600 : 500}
                  letterSpacing="0.1em"
                  textTransform="uppercase"
                  style={{
                    opacity: mounted ? 1 : 0,
                    transition: `fill ${700}ms ease-out`,
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
