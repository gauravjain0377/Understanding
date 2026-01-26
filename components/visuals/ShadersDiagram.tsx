'use client'

import AnimatedDiagram, { type DiagramStep } from '../diagrams/AnimatedDiagram'

export default function ShadersDiagram() {
  const steps: DiagramStep[] = [
    {
      id: 'vertex',
      label: 'Vertex Shader',
      render: (isActive) => (
        <svg width="100%" height="100%" viewBox="0 0 900 500" className="overflow-visible">
          <rect x="100" y="100" width="250" height="300" rx="4" fill={isActive ? '#FAFAF9' : '#FAFAF9'} stroke={isActive ? '#5B8FA3' : '#E5E5E5'} strokeWidth={isActive ? 2 : 1} className="transition-all duration-500" />
          <text x="225" y="130" textAnchor="middle" fontSize="14" fill={isActive ? '#1A1A1A' : '#4A4A4A'} fontWeight="600" className="font-ui">Vertex Shader</text>
          <circle cx="150" cy="200" r="20" fill={isActive ? '#5B8FA3' : '#E5E5E5'} className="transition-all duration-500" />
          <circle cx="225" cy="200" r="20" fill={isActive ? '#5B8FA3' : '#E5E5E5'} className="transition-all duration-500" />
          <circle cx="300" cy="200" r="20" fill={isActive ? '#5B8FA3' : '#E5E5E5'} className="transition-all duration-500" />
          <text x="225" y="250" textAnchor="middle" fontSize="12" fill="#4A4A4A" className="font-ui">Positions</text>
        </svg>
      ),
    },
    {
      id: 'fragment',
      label: 'Fragment Shader',
      render: (isActive, isPast) => (
        <svg width="100%" height="100%" viewBox="0 0 900 500" className="overflow-visible">
          <g opacity={isPast ? 0.4 : 1}>
            <rect x="100" y="100" width="250" height="300" rx="4" fill="#FAFAF9" stroke="#E5E5E5" strokeWidth="1" />
          </g>
          <path d="M 380 250 L 450 250" stroke="#5B8FA3" strokeWidth="2" markerEnd="url(#arrow-shader)" />
          <rect x="550" y="100" width="250" height="300" rx="4" fill={isActive ? '#FAFAF9' : '#FAFAF9'} stroke={isActive ? '#5B8FA3' : '#E5E5E5'} strokeWidth={isActive ? 2 : 1} className="transition-all duration-500" />
          <text x="675" y="130" textAnchor="middle" fontSize="14" fill={isActive ? '#1A1A1A' : '#4A4A4A'} fontWeight="600" className="font-ui">Fragment Shader</text>
          <rect x="600" y="180" width="150" height="150" rx="4" fill={isActive ? '#5B8FA3' : '#E5E5E5'} className="transition-all duration-500" />
          <text x="675" y="260" textAnchor="middle" fontSize="12" fill={isActive ? '#1A1A1A' : '#4A4A4A'} className="font-ui">Pixels</text>
          <defs>
            <marker id="arrow-shader" markerWidth="10" markerHeight="10" refX="9" refY="5" orient="auto">
              <polygon points="0 0, 10 5, 0 10" fill="#5B8FA3" />
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
      diagramId="shaders"
    />
  )
}
