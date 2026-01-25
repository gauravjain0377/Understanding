'use client'

import AnimatedDiagram, { type DiagramStep } from '../diagrams/AnimatedDiagram'

export default function BezierCurveDiagram() {
  const steps: DiagramStep[] = [
    {
      id: 'points',
      label: 'Control Points',
      render: (isActive) => (
        <svg width="100%" height="100%" viewBox="0 0 800 400" className="overflow-visible">
          <circle cx="100" cy="200" r="6" fill={isActive ? '#5B8FA3' : '#E5E5E5'} className="transition-all duration-500" />
          <circle cx="300" cy="100" r="6" fill={isActive ? '#5B8FA3' : '#E5E5E5'} className="transition-all duration-500" />
          <circle cx="500" cy="100" r="6" fill={isActive ? '#5B8FA3' : '#E5E5E5'} className="transition-all duration-500" />
          <circle cx="700" cy="200" r="6" fill={isActive ? '#5B8FA3' : '#E5E5E5'} className="transition-all duration-500" />
          <text x="100" y="220" textAnchor="middle" fontSize="12" fill="#4A4A4A" className="font-ui">P0</text>
          <text x="300" y="80" textAnchor="middle" fontSize="12" fill="#4A4A4A" className="font-ui">P1</text>
          <text x="500" y="80" textAnchor="middle" fontSize="12" fill="#4A4A4A" className="font-ui">P2</text>
          <text x="700" y="220" textAnchor="middle" fontSize="12" fill="#4A4A4A" className="font-ui">P3</text>
        </svg>
      ),
    },
    {
      id: 'curve',
      label: 'Curve Emerges',
      render: (isActive, isPast) => (
        <svg width="100%" height="100%" viewBox="0 0 800 400" className="overflow-visible">
          <g opacity={isPast ? 0.6 : 1}>
            <circle cx="100" cy="200" r="6" fill="#5B8FA3" />
            <circle cx="300" cy="100" r="6" fill="#5B8FA3" />
            <circle cx="500" cy="100" r="6" fill="#5B8FA3" />
            <circle cx="700" cy="200" r="6" fill="#5B8FA3" />
          </g>
          <path
            d="M 100 200 Q 300 100, 500 100 T 700 200"
            fill="none"
            stroke={isActive ? '#5B8FA3' : '#E5E5E5'}
            strokeWidth="3"
            className="transition-colors duration-500"
          />
          <text x="400" y="50" textAnchor="middle" fontSize="14" fill={isActive ? '#1A1A1A' : '#4A4A4A'} fontWeight={isActive ? '600' : '400'} className="font-ui">Smooth Curve</text>
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
      diagramId="bezier-curve"
    />
  )
}
