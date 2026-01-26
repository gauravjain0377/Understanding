'use client'

import AnimatedDiagram, { type DiagramStep } from '../diagrams/AnimatedDiagram'

export default function InternetRoutingDiagram() {
  const steps: DiagramStep[] = [
    {
      id: 'source',
      label: 'Source',
      render: (isActive) => (
        <svg width="100%" height="100%" viewBox="0 0 800 400" className="overflow-visible">
          <rect x="50" y="150" width="100" height="60" rx="4" fill={isActive ? '#5B8FA3' : '#FAFAF9'} stroke={isActive ? '#5B8FA3' : '#E5E5E5'} strokeWidth={isActive ? 2 : 1} className="transition-all duration-500" />
          <text x="100" y="185" textAnchor="middle" fontSize="12" fill={isActive ? '#1A1A1A' : '#4A4A4A'} className="font-ui">Your Device</text>
          <circle cx="100" cy="120" r="4" fill={isActive ? '#5B8FA3' : '#E5E5E5'} className="transition-all duration-500" />
          <text x="100" y="105" textAnchor="middle" fontSize="10" fill="#4A4A4A" className="font-ui">Packet</text>
        </svg>
      ),
    },
    {
      id: 'router1',
      label: 'Local Router',
      render: (isActive, isPast) => (
        <svg width="100%" height="100%" viewBox="0 0 800 400" className="overflow-visible">
          <g opacity={isPast ? 0.6 : 1}>
            <rect x="50" y="150" width="100" height="60" rx="4" fill="#FAFAF9" stroke="#E5E5E5" strokeWidth="1" />
          </g>
          <line x1="150" y1="180" x2="200" y2="180" stroke={isActive ? '#5B8FA3' : '#E5E5E5'} strokeWidth="2" markerEnd="url(#arrow1)" className="transition-colors duration-500" />
          <rect x="200" y="150" width="100" height="60" rx="4" fill={isActive ? '#5B8FA3' : '#FAFAF9'} stroke={isActive ? '#5B8FA3' : '#E5E5E5'} strokeWidth={isActive ? 2 : 1} className="transition-all duration-500" />
          <text x="250" y="185" textAnchor="middle" fontSize="12" fill={isActive ? '#1A1A1A' : '#4A4A4A'} className="font-ui">Router 1</text>
          <defs>
            <marker id="arrow1" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
              <polygon points="0 0, 10 3, 0 6" fill={isActive ? '#5B8FA3' : '#E5E5E5'} />
            </marker>
          </defs>
        </svg>
      ),
    },
    {
      id: 'network',
      label: 'Network Path',
      render: (isActive, isPast) => (
        <svg width="100%" height="100%" viewBox="0 0 800 400" className="overflow-visible">
          <g opacity={0.6}>
            <rect x="50" y="150" width="100" height="60" rx="4" fill="#FAFAF9" stroke="#E5E5E5" />
            <rect x="200" y="150" width="100" height="60" rx="4" fill="#FAFAF9" stroke="#E5E5E5" />
          </g>
          <line x1="150" y1="180" x2="200" y2="180" stroke="#5B8FA3" strokeWidth="2" markerEnd="url(#arrow1)" />
          <line x1="300" y1="180" x2="350" y2="180" stroke={isActive ? '#5B8FA3' : '#E5E5E5'} strokeWidth="2" markerEnd="url(#arrow2)" className="transition-colors duration-500" />
          <rect x="350" y="150" width="100" height="60" rx="4" fill={isActive ? '#5B8FA3' : '#FAFAF9'} stroke={isActive ? '#5B8FA3' : '#E5E5E5'} strokeWidth={isActive ? 2 : 1} className="transition-all duration-500" />
          <text x="400" y="185" textAnchor="middle" fontSize="12" fill={isActive ? '#1A1A1A' : '#4A4A4A'} className="font-ui">Router 2</text>
          <text x="400" y="250" textAnchor="middle" fontSize="11" fill="#4A4A4A" className="font-ui">Routing decision</text>
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
    {
      id: 'destination',
      label: 'Destination',
      render: (isActive, isPast) => (
        <svg width="100%" height="100%" viewBox="0 0 800 400" className="overflow-visible">
          <g opacity={0.6}>
            <rect x="50" y="150" width="100" height="60" rx="4" fill="#FAFAF9" stroke="#E5E5E5" />
            <rect x="200" y="150" width="100" height="60" rx="4" fill="#FAFAF9" stroke="#E5E5E5" />
            <rect x="350" y="150" width="100" height="60" rx="4" fill="#FAFAF9" stroke="#E5E5E5" />
          </g>
          <line x1="150" y1="180" x2="200" y2="180" stroke="#5B8FA3" strokeWidth="2" markerEnd="url(#arrow1)" />
          <line x1="300" y1="180" x2="350" y2="180" stroke="#5B8FA3" strokeWidth="2" markerEnd="url(#arrow2)" />
          <line x1="450" y1="180" x2="500" y2="180" stroke={isActive ? '#5B8FA3' : '#E5E5E5'} strokeWidth="2" markerEnd="url(#arrow3)" className="transition-colors duration-500" />
          <rect x="500" y="150" width="100" height="60" rx="4" fill={isActive ? '#5B8FA3' : '#FAFAF9'} stroke={isActive ? '#5B8FA3' : '#E5E5E5'} strokeWidth={isActive ? 2 : 1} className="transition-all duration-500" />
          <text x="550" y="185" textAnchor="middle" fontSize="12" fill={isActive ? '#1A1A1A' : '#4A4A4A'} className="font-ui">Server</text>
          <defs>
            <marker id="arrow1" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
              <polygon points="0 0, 10 3, 0 6" fill="#5B8FA3" />
            </marker>
            <marker id="arrow2" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
              <polygon points="0 0, 10 3, 0 6" fill="#5B8FA3" />
            </marker>
            <marker id="arrow3" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
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
      stepDuration={1200}
      size="primary"
      diagramId="internet-routing"
    />
  )
}
