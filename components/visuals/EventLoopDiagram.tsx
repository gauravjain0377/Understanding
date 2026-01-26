'use client'

import AnimatedDiagram, { type DiagramStep } from '../diagrams/AnimatedDiagram'

export default function EventLoopDiagram() {
  const steps: DiagramStep[] = [
    {
      id: 'check',
      label: 'Check Queue',
      render: (isActive) => (
        <svg width="100%" height="100%" viewBox="0 0 800 400" className="overflow-visible">
          <circle cx="400" cy="200" r="120" fill="none" stroke={isActive ? '#5B8FA3' : '#1A1A1A'} strokeWidth={isActive ? 3 : 2} className="transition-all duration-500" />
          <rect x="320" y="120" width="160" height="40" rx="4" fill={isActive ? '#5B8FA3' : '#FAFAF9'} stroke={isActive ? '#5B8FA3' : '#1A1A1A'} strokeWidth={isActive ? 3 : 2} className="transition-all duration-500" />
          <text x="400" y="145" textAnchor="middle" fontSize="12" fill={isActive ? '#FFFFFF' : '#1A1A1A'} fontWeight="600" className="font-ui">Check Queue</text>
        </svg>
      ),
    },
    {
      id: 'execute',
      label: 'Execute Callbacks',
      render: (isActive, isPast) => (
        <svg width="100%" height="100%" viewBox="0 0 800 400" className="overflow-visible">
          <g opacity={isPast ? 0.6 : 1}>
            <circle cx="400" cy="200" r="120" fill="none" stroke="#1A1A1A" strokeWidth="2" />
            <rect x="320" y="120" width="160" height="40" rx="4" fill="#FAFAF9" stroke="#1A1A1A" strokeWidth="2" />
          </g>
          <rect x="320" y="240" width="160" height="40" rx="4" fill={isActive ? '#5B8FA3' : '#FAFAF9'} stroke={isActive ? '#5B8FA3' : '#1A1A1A'} strokeWidth={isActive ? 3 : 2} className="transition-all duration-500" />
          <text x="400" y="265" textAnchor="middle" fontSize="12" fill={isActive ? '#FFFFFF' : '#1A1A1A'} fontWeight="600" className="font-ui">Execute</text>
        </svg>
      ),
    },
    {
      id: 'wait',
      label: 'Wait for Events',
      render: (isActive, isPast) => (
        <svg width="100%" height="100%" viewBox="0 0 800 400" className="overflow-visible">
          <g opacity={0.6}>
            <circle cx="400" cy="200" r="120" fill="none" stroke="#1A1A1A" strokeWidth="2" />
            <rect x="320" y="120" width="160" height="40" rx="4" fill="#FAFAF9" stroke="#1A1A1A" strokeWidth="2" />
            <rect x="320" y="240" width="160" height="40" rx="4" fill="#FAFAF9" stroke="#1A1A1A" strokeWidth="2" />
          </g>
          <rect x="280" y="180" width="240" height="40" rx="4" fill={isActive ? '#5B8FA3' : '#FAFAF9'} stroke={isActive ? '#5B8FA3' : '#1A1A1A'} strokeWidth={isActive ? 3 : 2} className="transition-all duration-500" />
          <text x="400" y="205" textAnchor="middle" fontSize="12" fill={isActive ? '#FFFFFF' : '#1A1A1A'} fontWeight="600" className="font-ui">Wait</text>
        </svg>
      ),
    },
    {
      id: 'repeat',
      label: 'Repeat',
      render: (isActive, isPast) => (
        <svg width="100%" height="100%" viewBox="0 0 800 400" className="overflow-visible">
          <g opacity={0.6}>
            <circle cx="400" cy="200" r="120" fill="none" stroke="#1A1A1A" strokeWidth="2" />
            <rect x="320" y="120" width="160" height="40" rx="4" fill="#FAFAF9" stroke="#1A1A1A" strokeWidth="2" />
            <rect x="320" y="240" width="160" height="40" rx="4" fill="#FAFAF9" stroke="#1A1A1A" strokeWidth="2" />
            <rect x="280" y="180" width="240" height="40" rx="4" fill="#FAFAF9" stroke="#1A1A1A" strokeWidth="2" />
          </g>
          <path d="M 400 80 L 400 120" stroke={isActive ? '#5B8FA3' : '#1A1A1A'} strokeWidth="3" markerEnd="url(#arrow)" className="transition-colors duration-500" />
          <text x="400" y="60" textAnchor="middle" fontSize="14" fill="#1A1A1A" fontWeight="600" className="font-ui">Repeat</text>
          <defs>
            <marker id="arrow" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto">
              <polygon points="0 0, 10 5, 0 10" fill={isActive ? '#5B8FA3' : '#1A1A1A'} />
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
      stepDuration={1200}
      size="primary"
      diagramId="event-loop"
    />
  )
}
