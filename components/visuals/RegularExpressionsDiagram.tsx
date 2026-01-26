'use client'

import AnimatedDiagram, { type DiagramStep } from '../diagrams/AnimatedDiagram'

export default function RegularExpressionsDiagram() {
  const steps: DiagramStep[] = [
    {
      id: 'pattern',
      label: 'Pattern',
      render: (isActive) => (
        <svg width="100%" height="100%" viewBox="0 0 900 500" className="overflow-visible">
          <rect x="200" y="200" width="500" height="100" rx="4" fill={isActive ? '#FAFAF9' : '#FAFAF9'} stroke={isActive ? '#5B8FA3' : '#E5E5E5'} strokeWidth={isActive ? 2 : 1} className="transition-all duration-500" />
          <text x="450" y="260" textAnchor="middle" fontSize="14" fill={isActive ? '#1A1A1A' : '#4A4A4A'} fontWeight="600" className="font-mono">/^[a-z]+@[a-z]+\.[a-z]+$/</text>
          <text x="450" y="350" textAnchor="middle" fontSize="14" fill="#4A4A4A" className="font-ui">Regular Expression</text>
        </svg>
      ),
    },
    {
      id: 'match',
      label: 'Matching',
      render: (isActive, isPast) => (
        <svg width="100%" height="100%" viewBox="0 0 900 500" className="overflow-visible">
          <g opacity={isPast ? 0.4 : 1}>
            <rect x="200" y="200" width="500" height="100" rx="4" fill="#FAFAF9" stroke="#E5E5E5" strokeWidth="1" />
          </g>
          <rect x="200" y="100" width="500" height="50" rx="4" fill={isActive ? '#10B981' : '#E5E5E5'} className="transition-all duration-500" />
          <text x="450" y="130" textAnchor="middle" fontSize="12" fill={isActive ? '#FFFFFF' : '#4A4A4A'} className="font-mono">user@example.com</text>
          <text x="450" y="180" textAnchor="middle" fontSize="12" fill={isActive ? '#1A1A1A' : '#4A4A4A'} className="font-ui">✓ Match</text>
          <rect x="200" y="300" width="500" height="50" rx="4" fill={isActive ? '#DC2626' : '#E5E5E5'} className="transition-all duration-500" />
          <text x="450" y="330" textAnchor="middle" fontSize="12" fill={isActive ? '#FFFFFF' : '#4A4A4A'} className="font-mono">invalid-email</text>
          <text x="450" y="380" textAnchor="middle" fontSize="12" fill={isActive ? '#1A1A1A' : '#4A4A4A'} className="font-ui">✗ No Match</text>
        </svg>
      ),
    },
  ]

  return (
    <AnimatedDiagram
      steps={steps}
      stepDuration={2000}
      size="primary"
      diagramId="regular-expressions"
    />
  )
}
