'use client'

import AnimatedDiagram, { type DiagramStep } from '../diagrams/AnimatedDiagram'

export default function ContrastPerceptionDiagram() {
  const steps: DiagramStep[] = [
    {
      id: 'physical',
      label: 'Physical Light',
      render: (isActive) => (
        <svg width="100%" height="100%" viewBox="0 0 800 400" className="overflow-visible">
          <rect x="100" y="150" width="200" height="100" fill="#E5E5E5" stroke={isActive ? '#5B8FA3' : '#E5E5E5'} strokeWidth={isActive ? 2 : 1} className="transition-all duration-500" />
          <rect x="350" y="150" width="200" height="100" fill="#4A4A4A" stroke={isActive ? '#5B8FA3' : '#E5E5E5'} strokeWidth={isActive ? 2 : 1} className="transition-all duration-500" />
          <text x="200" y="120" textAnchor="middle" fontSize="12" fill="#4A4A4A" className="font-ui">Bright</text>
          <text x="450" y="120" textAnchor="middle" fontSize="12" fill="#4A4A4A" className="font-ui">Dark</text>
          <text x="400" y="280" textAnchor="middle" fontSize="14" fill={isActive ? '#1A1A1A' : '#4A4A4A'} fontWeight={isActive ? '600' : '400'} className="font-ui">Physical Difference</text>
        </svg>
      ),
    },
    {
      id: 'perception',
      label: 'Perceived Contrast',
      render: (isActive, isPast) => (
        <svg width="100%" height="100%" viewBox="0 0 800 400" className="overflow-visible">
          <g opacity={isPast ? 0.6 : 1}>
            <rect x="100" y="150" width="200" height="100" fill="#E5E5E5" stroke="#5B8FA3" strokeWidth="1" />
            <rect x="350" y="150" width="200" height="100" fill="#4A4A4A" stroke="#5B8FA3" strokeWidth="1" />
          </g>
          <line x1="300" y1="200" x2="350" y2="200" stroke={isActive ? '#5B8FA3' : '#E5E5E5'} strokeWidth="2" markerEnd="url(#arrow)" className="transition-colors duration-500" />
          <rect x="100" y="150" width="200" height="100" fill="#FAFAF9" stroke={isActive ? '#5B8FA3' : '#E5E5E5'} strokeWidth={isActive ? 2 : 1} className="transition-all duration-500" />
          <rect x="350" y="150" width="200" height="100" fill="#1A1A1A" stroke={isActive ? '#5B8FA3' : '#E5E5E5'} strokeWidth={isActive ? 2 : 1} className="transition-all duration-500" />
          <text x="200" y="120" textAnchor="middle" fontSize="12" fill="#4A4A4A" className="font-ui">Perceived Bright</text>
          <text x="450" y="120" textAnchor="middle" fontSize="12" fill="#4A4A4A" className="font-ui">Perceived Dark</text>
          <text x="400" y="280" textAnchor="middle" fontSize="14" fill={isActive ? '#1A1A1A' : '#4A4A4A'} fontWeight={isActive ? '600' : '400'} className="font-ui">Non-Linear Perception</text>
          <defs>
            <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
              <polygon points="0 0, 10 3, 0 6" fill={isActive ? '#5B8FA3' : '#E5E5E5'} />
            </marker>
          </defs>
        </svg>
      ),
    },
  ]

  return (
    <AnimatedDiagram
      steps={steps}
      autoPlay={true}
      stepDuration={1500}
      size="primary"
      diagramId="contrast-perception"
    />
  )
}
