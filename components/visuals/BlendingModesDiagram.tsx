'use client'

import AnimatedDiagram, { type DiagramStep } from '../diagrams/AnimatedDiagram'

export default function BlendingModesDiagram() {
  const steps: DiagramStep[] = [
    {
      id: 'layers',
      label: 'Two Layers',
      render: (isActive) => (
        <svg width="100%" height="100%" viewBox="0 0 800 400" className="overflow-visible">
          <rect x="200" y="150" width="200" height="100" fill="#5B8FA3" opacity={isActive ? 0.8 : 0.5} stroke={isActive ? '#5B8FA3' : '#E5E5E5'} strokeWidth={isActive ? 2 : 1} className="transition-all duration-500" />
          <text x="300" y="120" textAnchor="middle" fontSize="12" fill="#4A4A4A" className="font-ui">Layer 1</text>
          <rect x="300" y="180" width="200" height="100" fill="#E5BFA3" opacity={isActive ? 0.8 : 0.5} stroke={isActive ? '#5B8FA3' : '#E5E5E5'} strokeWidth={isActive ? 2 : 1} className="transition-all duration-500" />
          <text x="400" y="300" textAnchor="middle" fontSize="12" fill="#4A4A4A" className="font-ui">Layer 2</text>
        </svg>
      ),
    },
    {
      id: 'blend',
      label: 'Blend Together',
      render: (isActive, isPast) => (
        <svg width="100%" height="100%" viewBox="0 0 800 400" className="overflow-visible">
          <g opacity={isPast ? 0.6 : 1}>
            <rect x="200" y="150" width="200" height="100" fill="#5B8FA3" opacity="0.8" />
            <rect x="300" y="180" width="200" height="100" fill="#E5BFA3" opacity="0.8" />
          </g>
          <line x1="400" y1="200" x2="500" y2="200" stroke={isActive ? '#5B8FA3' : '#E5E5E5'} strokeWidth="2" markerEnd="url(#arrow)" className="transition-colors duration-500" />
          <rect x="500" y="150" width="200" height="100" fill="#8FA3B0" stroke={isActive ? '#5B8FA3' : '#E5E5E5'} strokeWidth={isActive ? 2 : 1} className="transition-all duration-500" />
          <text x="600" y="210" textAnchor="middle" fontSize="14" fill={isActive ? '#1A1A1A' : '#4A4A4A'} fontWeight={isActive ? '600' : '400'} className="font-ui">Result</text>
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
      stepDuration={1500}
      size="primary"
      diagramId="blending-modes"
    />
  )
}
