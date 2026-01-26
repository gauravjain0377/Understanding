'use client'

import AnimatedDiagram, { type DiagramStep } from '../diagrams/AnimatedDiagram'

export default function TypeCheckingDiagram() {
  const steps: DiagramStep[] = [
    {
      id: 'code',
      label: 'Code with Types',
      render: (isActive) => (
        <svg width="100%" height="100%" viewBox="0 0 900 500" className="overflow-visible">
          <rect x="50" y="50" width="400" height="400" rx="4" fill={isActive ? '#FAFAF9' : '#FAFAF9'} stroke={isActive ? '#5B8FA3' : '#1A1A1A'} strokeWidth={isActive ? 3 : 2} className="transition-all duration-500" />
          <text x="250" y="80" textAnchor="middle" fontSize="14" fill="#1A1A1A" fontWeight="600" className="font-ui">Code</text>
          <text x="70" y="120" fontSize="12" fill="#4A4A4A" className="font-mono">let x: number = 42;</text>
          <text x="70" y="150" fontSize="12" fill="#4A4A4A" className="font-mono">let y: string = &quot;hello&quot;;</text>
          <text x="70" y="180" fontSize="12" fill="#4A4A4A" className="font-mono">let z = x + y; Error!</text>
        </svg>
      ),
    },
    {
      id: 'check',
      label: 'Type Checking',
      render: (isActive, isPast) => (
        <svg width="100%" height="100%" viewBox="0 0 900 500" className="overflow-visible">
          <g opacity={isPast ? 0.4 : 1}>
            <rect x="50" y="50" width="400" height="400" rx="4" fill="#FAFAF9" stroke="#1A1A1A" strokeWidth="2" />
          </g>
          <path d="M 500 250 L 550 250" stroke="#5B8FA3" strokeWidth="2" markerEnd="url(#arrow-type)" />
          <rect x="550" y="150" width="300" height="200" rx="4" fill={isActive ? '#FAFAF9' : '#FAFAF9'} stroke={isActive ? '#5B8FA3' : '#1A1A1A'} strokeWidth={isActive ? 3 : 2} className="transition-all duration-500" />
          <text x="700" y="180" textAnchor="middle" fontSize="14" fill="#1A1A1A" fontWeight="600" className="font-ui">Type Checker</text>
          <circle cx="600" cy="220" r="20" fill={isActive ? '#5B8FA3' : '#FAFAF9'} stroke={isActive ? '#5B8FA3' : '#1A1A1A'} strokeWidth="2" className="transition-all duration-500" />
          <text x="600" y="227" textAnchor="middle" fontSize="10" fill={isActive ? '#FFFFFF' : '#1A1A1A'} className="font-ui">x</text>
          <text x="630" y="227" fontSize="11" fill="#1A1A1A" className="font-ui">: number</text>
          <circle cx="600" cy="260" r="20" fill={isActive ? '#5B8FA3' : '#FAFAF9'} stroke={isActive ? '#5B8FA3' : '#1A1A1A'} strokeWidth="2" className="transition-all duration-500" />
          <text x="600" y="267" textAnchor="middle" fontSize="10" fill={isActive ? '#FFFFFF' : '#1A1A1A'} className="font-ui">y</text>
          <text x="630" y="267" fontSize="11" fill="#1A1A1A" className="font-ui">: string</text>
          <rect x="580" y="290" width="140" height="30" rx="2" fill={isActive ? '#DC2626' : '#FAFAF9'} stroke={isActive ? '#DC2626' : '#1A1A1A'} strokeWidth="2" className="transition-all duration-500" />
          <text x="650" y="310" textAnchor="middle" fontSize="11" fill={isActive ? '#FFFFFF' : '#1A1A1A'} className="font-ui">Type Error!</text>
          <defs>
            <marker id="arrow-type" markerWidth="10" markerHeight="10" refX="9" refY="5" orient="auto">
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
      diagramId="type-checking"
    />
  )
}
