'use client'

import AnimatedDiagram, { type DiagramStep } from '../diagrams/AnimatedDiagram'

export default function EmergentBehaviorDiagram() {
  const steps: DiagramStep[] = [
    {
      id: 'simple',
      label: 'Simple Rules',
      render: (isActive) => (
        <svg width="100%" height="100%" viewBox="0 0 900 500" className="overflow-visible">
          <circle cx="200" cy="200" r="30" fill={isActive ? '#5B8FA3' : '#FAFAF9'} stroke={isActive ? '#5B8FA3' : '#1A1A1A'} strokeWidth="2" className="transition-all duration-500" />
          <text x="200" y="207" textAnchor="middle" fontSize="11" fill={isActive ? '#FFFFFF' : '#1A1A1A'} fontWeight="600" className="font-ui">A</text>
          <circle cx="400" cy="200" r="30" fill={isActive ? '#5B8FA3' : '#FAFAF9'} stroke={isActive ? '#5B8FA3' : '#1A1A1A'} strokeWidth="2" className="transition-all duration-500" />
          <text x="400" y="207" textAnchor="middle" fontSize="11" fill={isActive ? '#FFFFFF' : '#1A1A1A'} fontWeight="600" className="font-ui">B</text>
          <circle cx="600" cy="200" r="30" fill={isActive ? '#5B8FA3' : '#FAFAF9'} stroke={isActive ? '#5B8FA3' : '#1A1A1A'} strokeWidth="2" className="transition-all duration-500" />
          <text x="600" y="207" textAnchor="middle" fontSize="11" fill={isActive ? '#FFFFFF' : '#1A1A1A'} fontWeight="600" className="font-ui">C</text>
          <text x="400" y="280" textAnchor="middle" fontSize="14" fill="#1A1A1A" fontWeight="600" className="font-ui">Simple Components</text>
        </svg>
      ),
    },
    {
      id: 'interaction',
      label: 'Interactions',
      render: (isActive, isPast) => (
        <svg width="100%" height="100%" viewBox="0 0 900 500" className="overflow-visible">
          <g opacity={isPast ? 0.8 : 1}>
            <circle cx="200" cy="200" r="30" fill="#FAFAF9" stroke="#1A1A1A" strokeWidth="2" />
            <circle cx="400" cy="200" r="30" fill="#FAFAF9" stroke="#1A1A1A" strokeWidth="2" />
            <circle cx="600" cy="200" r="30" fill="#FAFAF9" stroke="#1A1A1A" strokeWidth="2" />
            <text x="200" y="207" textAnchor="middle" fontSize="11" fill="#1A1A1A" fontWeight="600" className="font-ui">A</text>
            <text x="400" y="207" textAnchor="middle" fontSize="11" fill="#1A1A1A" fontWeight="600" className="font-ui">B</text>
            <text x="600" y="207" textAnchor="middle" fontSize="11" fill="#1A1A1A" fontWeight="600" className="font-ui">C</text>
          </g>
          <line x1="230" y1="200" x2="370" y2="200" stroke={isActive ? '#5B8FA3' : '#1A1A1A'} strokeWidth="3" />
          <line x1="430" y1="200" x2="570" y2="200" stroke={isActive ? '#5B8FA3' : '#1A1A1A'} strokeWidth="3" />
          <text x="400" y="280" textAnchor="middle" fontSize="14" fill="#1A1A1A" fontWeight="600" className="font-ui">Interactions</text>
        </svg>
      ),
    },
    {
      id: 'emergent',
      label: 'Emergent Behavior',
      render: (isActive, isPast) => (
        <svg width="100%" height="100%" viewBox="0 0 900 500" className="overflow-visible">
          <g opacity={0.6}>
            <circle cx="200" cy="200" r="30" fill="#FAFAF9" stroke="#1A1A1A" strokeWidth="2" />
            <circle cx="400" cy="200" r="30" fill="#FAFAF9" stroke="#1A1A1A" strokeWidth="2" />
            <circle cx="600" cy="200" r="30" fill="#FAFAF9" stroke="#1A1A1A" strokeWidth="2" />
            <text x="200" y="207" textAnchor="middle" fontSize="11" fill="#1A1A1A" fontWeight="600" className="font-ui">A</text>
            <text x="400" y="207" textAnchor="middle" fontSize="11" fill="#1A1A1A" fontWeight="600" className="font-ui">B</text>
            <text x="600" y="207" textAnchor="middle" fontSize="11" fill="#1A1A1A" fontWeight="600" className="font-ui">C</text>
            <line x1="230" y1="200" x2="370" y2="200" stroke="#1A1A1A" strokeWidth="2" />
            <line x1="430" y1="200" x2="570" y2="200" stroke="#1A1A1A" strokeWidth="2" />
          </g>
          <rect x="300" y="100" width="300" height="300" rx="4" fill={isActive ? '#5B8FA3' : '#FAFAF9'} stroke={isActive ? '#5B8FA3' : '#1A1A1A'} strokeWidth={isActive ? 3 : 2} className="transition-all duration-500" />
          <text x="450" y="260" textAnchor="middle" fontSize="16" fill={isActive ? '#FFFFFF' : '#1A1A1A'} fontWeight="600" className="font-ui">Complex System</text>
          <text x="450" y="420" textAnchor="middle" fontSize="14" fill={isActive ? '#FFFFFF' : '#1A1A1A'} fontWeight="600" className="font-ui">Emergent Properties</text>
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
      diagramId="emergent-behavior"
    />
  )
}
