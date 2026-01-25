'use client'

import AnimatedDiagram, { type DiagramStep } from '../diagrams/AnimatedDiagram'

export default function TransformationsDiagram() {
  const steps: DiagramStep[] = [
    {
      id: 'original',
      label: 'Original Object',
      render: (isActive) => (
        <svg width="100%" height="100%" viewBox="0 0 900 500" className="overflow-visible">
          <rect x="350" y="200" width="100" height="100" rx="4" fill={isActive ? '#5B8FA3' : '#E5E5E5'} className="transition-all duration-500" />
          <text x="400" y="330" textAnchor="middle" fontSize="14" fill={isActive ? '#1A1A1A' : '#4A4A4A'} fontWeight="600" className="font-ui">Original</text>
        </svg>
      ),
    },
    {
      id: 'translate',
      label: 'Translation',
      render: (isActive, isPast) => (
        <svg width="100%" height="100%" viewBox="0 0 900 500" className="overflow-visible">
          <g opacity={isPast ? 0.3 : 1}>
            <rect x="350" y="200" width="100" height="100" rx="4" fill="#E5E5E5" />
          </g>
          <rect x="500" y="200" width="100" height="100" rx="4" fill={isActive ? '#5B8FA3' : '#E5E5E5'} className="transition-all duration-500" />
          <path d="M 400 250 L 500 250" stroke="#5B8FA3" strokeWidth="2" markerEnd="url(#arrow-trans)" />
          <text x="450" y="240" textAnchor="middle" fontSize="12" fill="#4A4A4A" className="font-ui">Move</text>
          <text x="550" y="330" textAnchor="middle" fontSize="14" fill={isActive ? '#1A1A1A' : '#4A4A4A'} fontWeight="600" className="font-ui">Translated</text>
          <defs>
            <marker id="arrow-trans" markerWidth="10" markerHeight="10" refX="9" refY="5" orient="auto">
              <polygon points="0 0, 10 5, 0 10" fill="#5B8FA3" />
            </marker>
          </defs>
        </svg>
      ),
    },
    {
      id: 'rotate',
      label: 'Rotation',
      render: (isActive, isPast) => (
        <svg width="100%" height="100%" viewBox="0 0 900 500" className="overflow-visible">
          <g opacity={0.3}>
            <rect x="350" y="200" width="100" height="100" rx="4" fill="#E5E5E5" />
            <rect x="500" y="200" width="100" height="100" rx="4" fill="#E5E5E5" />
          </g>
          <g transform="rotate(45 400 250)">
            <rect x="350" y="200" width="100" height="100" rx="4" fill={isActive ? '#5B8FA3' : '#E5E5E5'} className="transition-all duration-500" />
          </g>
          <text x="400" y="330" textAnchor="middle" fontSize="14" fill={isActive ? '#1A1A1A' : '#4A4A4A'} fontWeight="600" className="font-ui">Rotated</text>
        </svg>
      ),
    },
    {
      id: 'scale',
      label: 'Scaling',
      render: (isActive, isPast) => (
        <svg width="100%" height="100%" viewBox="0 0 900 500" className="overflow-visible">
          <g opacity={0.3}>
            <rect x="350" y="200" width="100" height="100" rx="4" fill="#E5E5E5" />
          </g>
          <rect x="375" y="175" width="150" height="150" rx="4" fill={isActive ? '#5B8FA3' : '#E5E5E5'} className="transition-all duration-500" />
          <text x="450" y="350" textAnchor="middle" fontSize="14" fill={isActive ? '#1A1A1A' : '#4A4A4A'} fontWeight="600" className="font-ui">Scaled</text>
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
      diagramId="transformations"
    />
  )
}
