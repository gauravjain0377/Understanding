'use client'

import AnimatedDiagram, { type DiagramStep } from '../diagrams/AnimatedDiagram'

export default function AstDiagram() {
  const steps: DiagramStep[] = [
    {
      id: 'code',
      label: 'Source Code',
      render: (isActive) => (
        <svg width="100%" height="100%" viewBox="0 0 900 500" className="overflow-visible">
          <rect x="50" y="50" width="400" height="400" rx="4" fill={isActive ? '#FAFAF9' : '#FAFAF9'} stroke={isActive ? '#5B8FA3' : '#1A1A1A'} strokeWidth={isActive ? 3 : 2} className="transition-all duration-500" />
          <text x="250" y="80" textAnchor="middle" fontSize="14" fill="#1A1A1A" fontWeight="600" className="font-ui">Source Code</text>
          <text x="70" y="120" fontSize="12" fill="#4A4A4A" className="font-mono">let result = x + y * 2;</text>
        </svg>
      ),
    },
    {
      id: 'tree',
      label: 'Abstract Syntax Tree',
      render: (isActive, isPast) => (
        <svg width="100%" height="100%" viewBox="0 0 900 500" className="overflow-visible">
          <g opacity={isPast ? 0.4 : 1}>
            <rect x="50" y="50" width="400" height="400" rx="4" fill="#FAFAF9" stroke="#1A1A1A" strokeWidth="2" />
          </g>
          <path d="M 500 250 L 550 100" stroke="#5B8FA3" strokeWidth="2" markerEnd="url(#arrow-ast)" />
          <g opacity={isActive ? 1 : 0.8}>
            <circle cx="700" cy="80" r="35" fill={isActive ? '#5B8FA3' : '#FAFAF9'} stroke={isActive ? '#5B8FA3' : '#1A1A1A'} strokeWidth="2" className="transition-all duration-500" />
            <text x="700" y="88" textAnchor="middle" fontSize="11" fill={isActive ? '#FFFFFF' : '#1A1A1A'} fontWeight="600" className="font-ui">=</text>
            <circle cx="600" cy="180" r="30" fill={isActive ? '#5B8FA3' : '#FAFAF9'} stroke={isActive ? '#5B8FA3' : '#1A1A1A'} strokeWidth="2" className="transition-all duration-500" />
            <text x="600" y="188" textAnchor="middle" fontSize="10" fill={isActive ? '#FFFFFF' : '#1A1A1A'} className="font-ui">result</text>
            <circle cx="800" cy="180" r="30" fill={isActive ? '#5B8FA3' : '#FAFAF9'} stroke={isActive ? '#5B8FA3' : '#1A1A1A'} strokeWidth="2" className="transition-all duration-500" />
            <text x="800" y="188" textAnchor="middle" fontSize="10" fill={isActive ? '#FFFFFF' : '#1A1A1A'} className="font-ui">+</text>
            <circle cx="750" cy="280" r="25" fill={isActive ? '#5B8FA3' : '#FAFAF9'} stroke={isActive ? '#5B8FA3' : '#1A1A1A'} strokeWidth="2" className="transition-all duration-500" />
            <text x="750" y="288" textAnchor="middle" fontSize="10" fill={isActive ? '#FFFFFF' : '#1A1A1A'} className="font-ui">x</text>
            <circle cx="850" cy="280" r="25" fill={isActive ? '#5B8FA3' : '#FAFAF9'} stroke={isActive ? '#5B8FA3' : '#1A1A1A'} strokeWidth="2" className="transition-all duration-500" />
            <text x="850" y="288" textAnchor="middle" fontSize="10" fill={isActive ? '#FFFFFF' : '#1A1A1A'} className="font-ui">*</text>
            <circle cx="800" cy="380" r="20" fill={isActive ? '#5B8FA3' : '#FAFAF9'} stroke={isActive ? '#5B8FA3' : '#1A1A1A'} strokeWidth="2" className="transition-all duration-500" />
            <text x="800" y="388" textAnchor="middle" fontSize="9" fill={isActive ? '#FFFFFF' : '#1A1A1A'} className="font-ui">y</text>
            <circle cx="900" cy="380" r="20" fill={isActive ? '#5B8FA3' : '#FAFAF9'} stroke={isActive ? '#5B8FA3' : '#1A1A1A'} strokeWidth="2" className="transition-all duration-500" />
            <text x="900" y="388" textAnchor="middle" fontSize="9" fill={isActive ? '#FFFFFF' : '#1A1A1A'} className="font-ui">2</text>
            <line x1="700" y1="115" x2="600" y2="150" stroke={isActive ? '#5B8FA3' : '#1A1A1A'} strokeWidth="2" className="transition-all duration-500" />
            <line x1="700" y1="115" x2="800" y2="150" stroke={isActive ? '#5B8FA3' : '#1A1A1A'} strokeWidth="2" className="transition-all duration-500" />
            <line x1="800" y1="210" x2="750" y2="255" stroke={isActive ? '#5B8FA3' : '#1A1A1A'} strokeWidth="2" className="transition-all duration-500" />
            <line x1="800" y1="210" x2="850" y2="255" stroke={isActive ? '#5B8FA3' : '#1A1A1A'} strokeWidth="2" className="transition-all duration-500" />
            <line x1="850" y1="305" x2="800" y2="360" stroke={isActive ? '#5B8FA3' : '#1A1A1A'} strokeWidth="2" className="transition-all duration-500" />
            <line x1="850" y1="305" x2="900" y2="360" stroke={isActive ? '#5B8FA3' : '#1A1A1A'} strokeWidth="2" className="transition-all duration-500" />
          </g>
          <defs>
            <marker id="arrow-ast" markerWidth="10" markerHeight="10" refX="9" refY="5" orient="auto">
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
      diagramId="ast"
    />
  )
}
