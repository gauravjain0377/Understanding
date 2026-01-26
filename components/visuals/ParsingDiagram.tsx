'use client'

import AnimatedDiagram, { type DiagramStep } from '../diagrams/AnimatedDiagram'

export default function ParsingDiagram() {
  const steps: DiagramStep[] = [
    {
      id: 'tokens',
      label: 'Token Stream',
      render: (isActive) => (
        <svg width="100%" height="100%" viewBox="0 0 900 500" className="overflow-visible">
          <rect x="50" y="200" width="300" height="100" rx="4" fill={isActive ? '#FAFAF9' : '#FAFAF9'} stroke={isActive ? '#5B8FA3' : '#1A1A1A'} strokeWidth={isActive ? 3 : 2} className="transition-all duration-500" />
          <text x="200" y="230" textAnchor="middle" fontSize="14" fill="#1A1A1A" fontWeight="600" className="font-ui">Tokens</text>
          <circle cx="100" cy="260" r="15" fill={isActive ? '#5B8FA3' : '#FAFAF9'} stroke={isActive ? '#5B8FA3' : '#1A1A1A'} strokeWidth="2" className="transition-all duration-500" />
          <text x="100" y="265" textAnchor="middle" fontSize="10" fill={isActive ? '#FFFFFF' : '#1A1A1A'} className="font-ui">if</text>
          <circle cx="150" cy="260" r="15" fill={isActive ? '#5B8FA3' : '#FAFAF9'} stroke={isActive ? '#5B8FA3' : '#1A1A1A'} strokeWidth="2" className="transition-all duration-500" />
          <text x="150" y="265" textAnchor="middle" fontSize="10" fill={isActive ? '#FFFFFF' : '#1A1A1A'} className="font-ui">(</text>
          <circle cx="200" cy="260" r="15" fill={isActive ? '#5B8FA3' : '#FAFAF9'} stroke={isActive ? '#5B8FA3' : '#1A1A1A'} strokeWidth="2" className="transition-all duration-500" />
          <text x="200" y="265" textAnchor="middle" fontSize="10" fill={isActive ? '#FFFFFF' : '#1A1A1A'} className="font-ui">x</text>
          <circle cx="250" cy="260" r="15" fill={isActive ? '#5B8FA3' : '#FAFAF9'} stroke={isActive ? '#5B8FA3' : '#1A1A1A'} strokeWidth="2" className="transition-all duration-500" />
          <text x="250" y="265" textAnchor="middle" fontSize="10" fill={isActive ? '#FFFFFF' : '#1A1A1A'} className="font-ui">{'>'}</text>
          <circle cx="300" cy="260" r="15" fill={isActive ? '#5B8FA3' : '#FAFAF9'} stroke={isActive ? '#5B8FA3' : '#1A1A1A'} strokeWidth="2" className="transition-all duration-500" />
          <text x="300" y="265" textAnchor="middle" fontSize="10" fill={isActive ? '#FFFFFF' : '#1A1A1A'} className="font-ui">0</text>
        </svg>
      ),
    },
    {
      id: 'tree',
      label: 'Parse Tree',
      render: (isActive, isPast) => (
        <svg width="100%" height="100%" viewBox="0 0 900 500" className="overflow-visible">
          <g opacity={isPast ? 0.4 : 1}>
            <rect x="50" y="200" width="300" height="100" rx="4" fill="#FAFAF9" stroke="#1A1A1A" strokeWidth="2" />
          </g>
          <path d="M 400 250 L 500 100" stroke="#5B8FA3" strokeWidth="2" markerEnd="url(#arrow-parse)" />
          <g opacity={isActive ? 1 : 0.8}>
            <circle cx="600" cy="80" r="40" fill={isActive ? '#5B8FA3' : '#FAFAF9'} stroke={isActive ? '#5B8FA3' : '#1A1A1A'} strokeWidth="2" className="transition-all duration-500" />
            <text x="600" y="87" textAnchor="middle" fontSize="12" fill={isActive ? '#FFFFFF' : '#1A1A1A'} fontWeight="600" className="font-ui">If</text>
            <circle cx="500" cy="180" r="30" fill={isActive ? '#5B8FA3' : '#FAFAF9'} stroke={isActive ? '#5B8FA3' : '#1A1A1A'} strokeWidth="2" className="transition-all duration-500" />
            <text x="500" y="187" textAnchor="middle" fontSize="11" fill={isActive ? '#FFFFFF' : '#1A1A1A'} className="font-ui">{'>'}</text>
            <circle cx="700" cy="180" r="30" fill={isActive ? '#5B8FA3' : '#FAFAF9'} stroke={isActive ? '#5B8FA3' : '#1A1A1A'} strokeWidth="2" className="transition-all duration-500" />
            <text x="700" y="187" textAnchor="middle" fontSize="11" fill={isActive ? '#FFFFFF' : '#1A1A1A'} className="font-ui">x</text>
            <circle cx="600" cy="180" r="30" fill={isActive ? '#5B8FA3' : '#FAFAF9'} stroke={isActive ? '#5B8FA3' : '#1A1A1A'} strokeWidth="2" className="transition-all duration-500" />
            <text x="600" y="187" textAnchor="middle" fontSize="11" fill={isActive ? '#FFFFFF' : '#1A1A1A'} className="font-ui">0</text>
            <line x1="600" y1="120" x2="500" y2="150" stroke={isActive ? '#5B8FA3' : '#1A1A1A'} strokeWidth="2" className="transition-all duration-500" />
            <line x1="600" y1="120" x2="600" y2="150" stroke={isActive ? '#5B8FA3' : '#1A1A1A'} strokeWidth="2" className="transition-all duration-500" />
            <line x1="600" y1="120" x2="700" y2="150" stroke={isActive ? '#5B8FA3' : '#1A1A1A'} strokeWidth="2" className="transition-all duration-500" />
          </g>
          <defs>
            <marker id="arrow-parse" markerWidth="10" markerHeight="10" refX="9" refY="5" orient="auto">
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
      autoPlay={true}
      stepDuration={2000}
      size="primary"
      diagramId="parsing"
    />
  )
}
