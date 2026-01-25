'use client'

import AnimatedDiagram, { type DiagramStep } from '../diagrams/AnimatedDiagram'

export default function LeakyAbstractionDiagram() {
  const steps: DiagramStep[] = [
    {
      id: 'ideal',
      label: 'Ideal Abstraction',
      render: (isActive) => (
        <svg width="100%" height="100%" viewBox="0 0 900 500" className="overflow-visible">
          <rect x="100" y="100" width="300" height="300" rx="4" fill={isActive ? '#FAFAF9' : '#FAFAF9'} stroke={isActive ? '#5B8FA3' : '#E5E5E5'} strokeWidth={isActive ? 2 : 1} className="transition-all duration-500" />
          <text x="250" y="130" textAnchor="middle" fontSize="14" fill={isActive ? '#1A1A1A' : '#4A4A4A'} fontWeight="600" className="font-ui">Abstraction</text>
          <text x="250" y="200" textAnchor="middle" fontSize="12" fill="#4A4A4A" className="font-ui">Simple Interface</text>
          <rect x="500" y="100" width="300" height="300" rx="4" fill={isActive ? '#FAFAF9' : '#FAFAF9'} stroke={isActive ? '#5B8FA3' : '#E5E5E5'} strokeWidth={isActive ? 2 : 1} className="transition-all duration-500" />
          <text x="650" y="130" textAnchor="middle" fontSize="14" fill={isActive ? '#1A1A1A' : '#4A4A4A'} fontWeight="600" className="font-ui">Implementation</text>
          <text x="650" y="200" textAnchor="middle" fontSize="12" fill="#4A4A4A" className="font-ui">Complex Details</text>
          <path d="M 400 250 L 500 250" stroke="#5B8FA3" strokeWidth="2" markerEnd="url(#arrow-ideal)" />
          <text x="450" y="240" textAnchor="middle" fontSize="11" fill="#4A4A4A" className="font-ui">Hides</text>
          <defs>
            <marker id="arrow-ideal" markerWidth="10" markerHeight="10" refX="9" refY="5" orient="auto">
              <polygon points="0 0, 10 5, 0 10" fill="#5B8FA3" />
            </marker>
          </defs>
        </svg>
      ),
    },
    {
      id: 'leaky',
      label: 'Leaky Abstraction',
      render: (isActive, isPast) => (
        <svg width="100%" height="100%" viewBox="0 0 900 500" className="overflow-visible">
          <g opacity={isPast ? 0.4 : 1}>
            <rect x="100" y="100" width="300" height="300" rx="4" fill="#FAFAF9" stroke="#E5E5E5" strokeWidth="1" />
            <rect x="500" y="100" width="300" height="300" rx="4" fill="#FAFAF9" stroke="#E5E5E5" strokeWidth="1" />
          </g>
          <rect x="100" y="100" width="300" height="300" rx="4" fill={isActive ? '#FAFAF9' : '#FAFAF9'} stroke={isActive ? '#5B8FA3' : '#E5E5E5'} strokeWidth={isActive ? 2 : 1} className="transition-all duration-500" />
          <text x="250" y="130" textAnchor="middle" fontSize="14" fill={isActive ? '#1A1A1A' : '#4A4A4A'} fontWeight="600" className="font-ui">Abstraction</text>
          <rect x="500" y="100" width="300" height="300" rx="4" fill={isActive ? '#FAFAF9' : '#FAFAF9'} stroke={isActive ? '#5B8FA3' : '#E5E5E5'} strokeWidth={isActive ? 2 : 1} className="transition-all duration-500" />
          <text x="650" y="130" textAnchor="middle" fontSize="14" fill={isActive ? '#1A1A1A' : '#4A4A4A'} fontWeight="600" className="font-ui">Implementation</text>
          <path d="M 400 250 L 500 250" stroke="#5B8FA3" strokeWidth="2" />
          <path d="M 350 200 L 550 300" stroke={isActive ? '#DC2626' : '#E5E5E5'} strokeWidth="3" markerEnd="url(#arrow-leak)" className="transition-all duration-500" />
          <text x="450" y="240" textAnchor="middle" fontSize="11" fill={isActive ? '#DC2626' : '#4A4A4A'} fontWeight="600" className="font-ui">Leaks Through</text>
          <defs>
            <marker id="arrow-leak" markerWidth="10" markerHeight="10" refX="9" refY="5" orient="auto">
              <polygon points="0 0, 10 5, 0 10" fill="#DC2626" />
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
      stepDuration={2000}
      size="primary"
      diagramId="leaky-abstraction"
    />
  )
}
