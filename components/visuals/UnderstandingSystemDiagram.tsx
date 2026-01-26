'use client'

import { useEffect, useState } from 'react'
import { DIAGRAM_BACKGROUND, LINE_WEIGHTS, OPACITY, getInkColor } from '@/lib/diagram-theme'

const ORBIT_DURATION_MS = 28000 // one full clockwise orbit (like Earth around Sun)
const CENTER_X = 750
const CENTER_Y = 550
const ORBIT_RADIUS = 420 // increased to create gap between orbiting circles
const UNDERSTANDING_RADIUS = 200 // larger central circle to fit text
const NODE_RADIUS = 150
const VIEWBOX_WIDTH = 1500
const VIEWBOX_HEIGHT = 1100

const ORBITING_CONCEPTS = [
  'CLARITY',
  'DOMAINS',
  'VISUALS',
  'SYSTEMS',
  'MENTAL MODELS',
  'EXPLORATION',
]

export default function UnderstandingSystemDiagram() {
  const [mounted, setMounted] = useState(false)
  const [angle, setAngle] = useState(0)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    let rafId: number
    let start = performance.now()
    const advance = (now: number) => {
      const elapsed = now - start
      const turns = (elapsed / ORBIT_DURATION_MS) * 2 * Math.PI
      setAngle(turns)
      rafId = requestAnimationFrame(advance)
    }
    rafId = requestAnimationFrame(advance)
    return () => cancelAnimationFrame(rafId)
  }, [])

  return (
    <div 
      className="w-full technical-grid py-12 md:py-16 relative"
      style={{ minHeight: '100vh' }}
    >
      <div className="max-w-[1600px] mx-auto px-4 md:px-8">
        {/* Diagram label */}
        <div className="mb-6 md:mb-8 text-center">
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
          viewBox={`0 0 ${VIEWBOX_WIDTH} ${VIEWBOX_HEIGHT}`}
          className="w-full block"
          style={{ height: '85vh', minHeight: '600px', width: '100%' }}
          preserveAspectRatio="xMidYMid meet"
        >
          {/* Central UNDERSTANDING node (fixed) */}
          <g opacity={mounted ? 1 : 0} style={{ transition: 'opacity 600ms ease-out' }}>
            <circle
              cx={CENTER_X}
              cy={CENTER_Y}
              r={UNDERSTANDING_RADIUS}
              fill={getInkColor(OPACITY.active)}
              stroke={getInkColor(OPACITY.active)}
              strokeWidth={LINE_WEIGHTS.primary}
            />
            <text
              x={CENTER_X}
              y={CENTER_Y}
              dy={6}
              textAnchor="middle"
              fontSize={38}
              fill={DIAGRAM_BACKGROUND}
              fontFamily="var(--font-technical)"
              fontWeight={600}
              letterSpacing="0.05em"
            >
              UNDERSTANDING
            </text>
          </g>

          {/* Orbiting concepts — constant clockwise revolution (Earth around Sun) */}
          <g transform={`translate(${CENTER_X}, ${CENTER_Y})`}>
            <g
              transform={`rotate(${angle * (180 / Math.PI)})`}
              style={{ opacity: mounted ? 1 : 0, transition: 'opacity 600ms ease-out' }}
            >
              {ORBITING_CONCEPTS.map((label, index) => {
                const nodeAngle = (index * (2 * Math.PI) / ORBITING_CONCEPTS.length) - Math.PI / 2
                const x = ORBIT_RADIUS * Math.cos(nodeAngle)
                const y = ORBIT_RADIUS * Math.sin(nodeAngle)
                const r = NODE_RADIUS // All circles same size now
                const isTwoWords = label.includes(' ')
                const [firstWord, secondWord] = isTwoWords ? label.split(' ') : [label, '']
                
                return (
                  <g key={label} transform={`translate(${x}, ${y})`}>
                    <circle
                      cx={0}
                      cy={0}
                      r={r}
                      fill={getInkColor(0.1)}
                      stroke={getInkColor(OPACITY.active)}
                      strokeWidth={LINE_WEIGHTS.secondary}
                    />
                    {isTwoWords ? (
                      <>
                        <text
                          x={0}
                          y={0}
                          dy={-14}
                          textAnchor="middle"
                          fontSize={36}
                          fill={getInkColor(OPACITY.active)}
                          fontFamily="var(--font-technical)"
                          fontWeight={500}
                          letterSpacing="0.08em"
                        >
                          {firstWord}
                        </text>
                        <text
                          x={0}
                          y={0}
                          dy={26}
                          textAnchor="middle"
                          fontSize={36}
                          fill={getInkColor(OPACITY.active)}
                          fontFamily="var(--font-technical)"
                          fontWeight={500}
                          letterSpacing="0.08em"
                        >
                          {secondWord}
                        </text>
                      </>
                    ) : (
                      <text
                        x={0}
                        y={0}
                        dy={8}
                        textAnchor="middle"
                        fontSize={36}
                        fill={getInkColor(OPACITY.active)}
                        fontFamily="var(--font-technical)"
                        fontWeight={500}
                        letterSpacing="0.08em"
                      >
                        {label}
                      </text>
                    )}
                  </g>
                )
              })}
            </g>
          </g>
        </svg>

        <div className="mt-6 md:mt-8 text-center">
          <p className="font-reading text-lg md:text-xl text-text-secondary/80 max-w-3xl mx-auto leading-relaxed">
            Understanding emerges from the connections between concepts, domains, and mental models. 
            Each element informs the others, creating a system of knowledge.
          </p>
        </div>
      </div>
    </div>
  )
}
