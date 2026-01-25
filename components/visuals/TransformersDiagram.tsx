'use client'

import AnimatedDiagram, { type DiagramStep } from '../diagrams/AnimatedDiagram'

export default function TransformersDiagram() {
  const steps: DiagramStep[] = [
    {
      id: 'input',
      label: 'Input Sequence',
      render: (isActive) => (
        <svg width="100%" height="100%" viewBox="0 0 900 500" className="overflow-visible">
          <rect x="100" y="200" width="700" height="100" rx="4" fill={isActive ? '#FAFAF9' : '#FAFAF9'} stroke={isActive ? '#5B8FA3' : '#E5E5E5'} strokeWidth={isActive ? 2 : 1} className="transition-all duration-500" />
          <circle cx="200" cy="250" r="25" fill={isActive ? '#5B8FA3' : '#E5E5E5'} className="transition-all duration-500" />
          <text x="200" y="257" textAnchor="middle" fontSize="11" fill={isActive ? '#1A1A1A' : '#4A4A4A'} className="font-ui">T1</text>
          <circle cx="350" cy="250" r="25" fill={isActive ? '#5B8FA3' : '#E5E5E5'} className="transition-all duration-500" />
          <text x="350" y="257" textAnchor="middle" fontSize="11" fill={isActive ? '#1A1A1A' : '#4A4A4A'} className="font-ui">T2</text>
          <circle cx="500" cy="250" r="25" fill={isActive ? '#5B8FA3' : '#E5E5E5'} className="transition-all duration-500" />
          <text x="500" y="257" textAnchor="middle" fontSize="11" fill={isActive ? '#1A1A1A' : '#4A4A4A'} className="font-ui">T3</text>
          <text x="400" y="330" textAnchor="middle" fontSize="14" fill={isActive ? '#1A1A1A' : '#4A4A4A'} fontWeight="600" className="font-ui">Input Tokens</text>
        </svg>
      ),
    },
    {
      id: 'attention',
      label: 'Attention Mechanism',
      render: (isActive, isPast) => (
        <svg width="100%" height="100%" viewBox="0 0 900 500" className="overflow-visible">
          <g opacity={isPast ? 0.4 : 1}>
            <rect x="100" y="200" width="700" height="100" rx="4" fill="#FAFAF9" stroke="#E5E5E5" strokeWidth="1" />
          </g>
          <rect x="200" y="50" width="500" height="400" rx="4" fill={isActive ? '#FAFAF9' : '#FAFAF9'} stroke={isActive ? '#5B8FA3' : '#E5E5E5'} strokeWidth={isActive ? 2 : 1} className="transition-all duration-500" />
          <text x="450" y="80" textAnchor="middle" fontSize="14" fill={isActive ? '#1A1A1A' : '#4A4A4A'} fontWeight="600" className="font-ui">Attention</text>
          <line x1="200" y1="250" x2="300" y2="150" stroke={isActive ? '#5B8FA3' : '#E5E5E5'} strokeWidth="2" />
          <line x1="200" y1="250" x2="400" y2="150" stroke={isActive ? '#5B8FA3' : '#E5E5E5'} strokeWidth="2" />
          <line x1="200" y1="250" x2="500" y2="150" stroke={isActive ? '#5B8FA3' : '#E5E5E5'} strokeWidth="2" />
          <line x1="350" y1="250" x2="300" y2="200" stroke={isActive ? '#5B8FA3' : '#E5E5E5'} strokeWidth="2" />
          <line x1="350" y1="250" x2="400" y2="200" stroke={isActive ? '#5B8FA3' : '#E5E5E5'} strokeWidth="2" />
          <line x1="350" y1="250" x2="500" y2="200" stroke={isActive ? '#5B8FA3' : '#E5E5E5'} strokeWidth="2" />
          <line x1="500" y1="250" x2="300" y2="250" stroke={isActive ? '#5B8FA3' : '#E5E5E5'} strokeWidth="2" />
          <line x1="500" y1="250" x2="400" y2="250" stroke={isActive ? '#5B8FA3' : '#E5E5E5'} strokeWidth="2" />
          <line x1="500" y1="250" x2="500" y2="250" stroke={isActive ? '#5B8FA3' : '#E5E5E5'} strokeWidth="2" />
          <text x="450" y="380" textAnchor="middle" fontSize="14" fill={isActive ? '#1A1A1A' : '#4A4A4A'} fontWeight="600" className="font-ui">Relationships</text>
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
      diagramId="transformers"
    />
  )
}
