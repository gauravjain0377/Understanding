'use client'

import AnimatedDiagram, { type DiagramStep } from '../diagrams/AnimatedDiagram'

export default function AbstractionLayersDiagram() {
  const steps: DiagramStep[] = [
    {
      id: 'layers',
      label: 'Abstraction Layers',
      render: (isActive) => (
        <svg width="100%" height="100%" viewBox="0 0 900 500" className="overflow-visible">
          <rect x="100" y="50" width="700" height="60" rx="4" fill={isActive ? '#FAFAF9' : '#FAFAF9'} stroke={isActive ? '#5B8FA3' : '#E5E5E5'} strokeWidth={isActive ? 2 : 1} className="transition-all duration-500" />
          <text x="450" y="90" textAnchor="middle" fontSize="14" fill={isActive ? '#1A1A1A' : '#4A4A4A'} fontWeight="600" className="font-ui">High Level (Simple)</text>
          <rect x="100" y="130" width="700" height="60" rx="4" fill={isActive ? '#FAFAF9' : '#FAFAF9'} stroke={isActive ? '#5B8FA3' : '#E5E5E5'} strokeWidth={isActive ? 2 : 1} className="transition-all duration-500" />
          <text x="450" y="170" textAnchor="middle" fontSize="14" fill={isActive ? '#1A1A1A' : '#4A4A4A'} fontWeight="600" className="font-ui">Middle Level</text>
          <rect x="100" y="210" width="700" height="60" rx="4" fill={isActive ? '#FAFAF9' : '#FAFAF9'} stroke={isActive ? '#5B8FA3' : '#E5E5E5'} strokeWidth={isActive ? 2 : 1} className="transition-all duration-500" />
          <text x="450" y="250" textAnchor="middle" fontSize="14" fill={isActive ? '#1A1A1A' : '#4A4A4A'} fontWeight="600" className="font-ui">Lower Level</text>
          <rect x="100" y="290" width="700" height="60" rx="4" fill={isActive ? '#FAFAF9' : '#FAFAF9'} stroke={isActive ? '#5B8FA3' : '#E5E5E5'} strokeWidth={isActive ? 2 : 1} className="transition-all duration-500" />
          <text x="450" y="330" textAnchor="middle" fontSize="14" fill={isActive ? '#1A1A1A' : '#4A4A4A'} fontWeight="600" className="font-ui">Hardware (Complex)</text>
          <path d="M 450 50 L 450 350" stroke="#5B8FA3" strokeWidth="2" strokeDasharray="5,5" />
        </svg>
      ),
    },
    {
      id: 'leak',
      label: 'Leaky Abstraction',
      render: (isActive, isPast) => (
        <svg width="100%" height="100%" viewBox="0 0 900 500" className="overflow-visible">
          <g opacity={isPast ? 0.4 : 1}>
            <rect x="100" y="50" width="700" height="60" rx="4" fill="#FAFAF9" stroke="#E5E5E5" strokeWidth="1" />
            <rect x="100" y="130" width="700" height="60" rx="4" fill="#FAFAF9" stroke="#E5E5E5" strokeWidth="1" />
            <rect x="100" y="210" width="700" height="60" rx="4" fill="#FAFAF9" stroke="#E5E5E5" strokeWidth="1" />
            <rect x="100" y="290" width="700" height="60" rx="4" fill="#FAFAF9" stroke="#E5E5E5" strokeWidth="1" />
          </g>
          <path d="M 450 50 L 450 350" stroke="#5B8FA3" strokeWidth="2" strokeDasharray="5,5" />
          <path d="M 500 200 L 600 300" stroke={isActive ? '#DC2626' : '#E5E5E5'} strokeWidth="3" markerEnd="url(#arrow-leak)" className="transition-all duration-500" />
          <text x="550" y="240" textAnchor="middle" fontSize="12" fill={isActive ? '#DC2626' : '#4A4A4A'} fontWeight="600" className="font-ui">Leak</text>
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
      stepDuration={2000}
      size="primary"
      diagramId="abstraction-layers"
    />
  )
}
