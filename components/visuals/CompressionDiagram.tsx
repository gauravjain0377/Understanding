'use client'

import AnimatedDiagram, { type DiagramStep } from '../diagrams/AnimatedDiagram'

export default function CompressionDiagram() {
  const steps: DiagramStep[] = [
    {
      id: 'original',
      label: 'Original Data',
      render: (isActive) => (
        <svg width="100%" height="100%" viewBox="0 0 800 400" className="overflow-visible">
          <rect x="100" y="150" width="200" height="100" fill="#FAFAF9" stroke={isActive ? '#5B8FA3' : '#E5E5E5'} strokeWidth={isActive ? 2 : 1} className="transition-all duration-500" />
          <text x="200" y="200" textAnchor="middle" fontSize="14" fill={isActive ? '#1A1A1A' : '#4A4A4A'} className="font-ui">Original: 1000 bytes</text>
          {[0, 1, 2, 3, 4, 5, 6, 7].map(i => (
            <rect key={i} x={110 + i * 22} y="160" width="18" height="80" fill={i % 2 === 0 ? '#5B8FA3' : '#E5E5E5'} opacity={isActive ? 1 : 0.5} className="transition-opacity duration-500" />
          ))}
        </svg>
      ),
    },
    {
      id: 'analyze',
      label: 'Find Patterns',
      render: (isActive, isPast) => (
        <svg width="100%" height="100%" viewBox="0 0 800 400" className="overflow-visible">
          <g opacity={isPast ? 0.6 : 1}>
            <rect x="100" y="150" width="200" height="100" fill="#FAFAF9" stroke="#5B8FA3" strokeWidth="1" />
          </g>
          <line x1="300" y1="200" x2="350" y2="200" stroke={isActive ? '#5B8FA3' : '#E5E5E5'} strokeWidth="2" markerEnd="url(#arrow1)" className="transition-colors duration-500" />
          <rect x="350" y="150" width="200" height="100" fill={isActive ? '#5B8FA3' : '#FAFAF9'} stroke={isActive ? '#5B8FA3' : '#E5E5E5'} strokeWidth={isActive ? 2 : 1} className="transition-all duration-500" />
          <text x="450" y="200" textAnchor="middle" fontSize="14" fill={isActive ? '#1A1A1A' : '#4A4A4A'} className="font-ui">Patterns Found</text>
          <defs>
            <marker id="arrow1" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
              <polygon points="0 0, 10 3, 0 6" fill={isActive ? '#5B8FA3' : '#E5E5E5'} />
            </marker>
          </defs>
        </svg>
      ),
    },
    {
      id: 'compressed',
      label: 'Compressed Data',
      render: (isActive, isPast) => (
        <svg width="100%" height="100%" viewBox="0 0 800 400" className="overflow-visible">
          <g opacity={0.6}>
            <rect x="100" y="150" width="200" height="100" fill="#FAFAF9" stroke="#5B8FA3" />
            <rect x="350" y="150" width="200" height="100" fill="#FAFAF9" stroke="#5B8FA3" />
          </g>
          <line x1="300" y1="200" x2="350" y2="200" stroke="#5B8FA3" strokeWidth="2" markerEnd="url(#arrow1)" />
          <line x1="550" y1="200" x2="600" y2="200" stroke={isActive ? '#5B8FA3' : '#E5E5E5'} strokeWidth="2" markerEnd="url(#arrow2)" className="transition-colors duration-500" />
          <rect x="600" y="150" width="100" height="100" fill={isActive ? '#5B8FA3' : '#FAFAF9'} stroke={isActive ? '#5B8FA3' : '#E5E5E5'} strokeWidth={isActive ? 2 : 1} className="transition-all duration-500" />
          <text x="650" y="200" textAnchor="middle" fontSize="14" fill={isActive ? '#1A1A1A' : '#4A4A4A'} className="font-ui">Compressed: 300 bytes</text>
          <rect x="610" y="160" width="80" height="80" fill="#8FA3B0" opacity={isActive ? 1 : 0.5} className="transition-opacity duration-500" />
          <defs>
            <marker id="arrow1" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
              <polygon points="0 0, 10 3, 0 6" fill="#5B8FA3" />
            </marker>
            <marker id="arrow2" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
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
      diagramId="compression"
    />
  )
}
