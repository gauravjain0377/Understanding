'use client'

import AnimatedDiagram, { type DiagramStep } from '../diagrams/AnimatedDiagram'

export default function CognitiveLoadDiagram() {
  const steps: DiagramStep[] = [
    {
      id: 'simple',
      label: 'Low Cognitive Load',
      render: (isActive) => (
        <svg width="100%" height="100%" viewBox="0 0 900 500" className="overflow-visible">
          <circle cx="450" cy="250" r="100" fill={isActive ? '#5B8FA3' : '#FAFAF9'} stroke={isActive ? '#5B8FA3' : '#1A1A1A'} strokeWidth="2" className="transition-all duration-500" />
          <text x="450" y="260" textAnchor="middle" fontSize="16" fill={isActive ? '#FFFFFF' : '#1A1A1A'} fontWeight="600" className="font-ui">User</text>
          <rect x="200" y="100" width="120" height="60" rx="4" fill={isActive ? '#FAFAF9' : '#FAFAF9'} stroke={isActive ? '#5B8FA3' : '#E5E5E5'} strokeWidth={isActive ? 2 : 1} className="transition-all duration-500" />
          <text x="260" y="135" textAnchor="middle" fontSize="12" fill={isActive ? '#1A1A1A' : '#4A4A4A'} className="font-ui">Task 1</text>
          <rect x="580" y="100" width="120" height="60" rx="4" fill={isActive ? '#FAFAF9' : '#FAFAF9'} stroke={isActive ? '#5B8FA3' : '#E5E5E5'} strokeWidth={isActive ? 2 : 1} className="transition-all duration-500" />
          <text x="640" y="135" textAnchor="middle" fontSize="12" fill={isActive ? '#1A1A1A' : '#4A4A4A'} className="font-ui">Task 2</text>
          <line x1="350" y1="250" x2="380" y2="250" stroke={isActive ? '#5B8FA3' : '#E5E5E5'} strokeWidth="2" markerEnd="url(#arrow-cog)" />
          <line x1="520" y1="250" x2="550" y2="250" stroke={isActive ? '#5B8FA3' : '#E5E5E5'} strokeWidth="2" markerEnd="url(#arrow-cog)" />
          <text x="450" y="380" textAnchor="middle" fontSize="14" fill={isActive ? '#1A1A1A' : '#4A4A4A'} fontWeight="600" className="font-ui">Clear, Focused</text>
          <defs>
            <marker id="arrow-cog" markerWidth="10" markerHeight="10" refX="9" refY="5" orient="auto">
              <polygon points="0 0, 10 5, 0 10" fill="#5B8FA3" />
            </marker>
          </defs>
        </svg>
      ),
    },
    {
      id: 'complex',
      label: 'High Cognitive Load',
      render: (isActive, isPast) => (
        <svg width="100%" height="100%" viewBox="0 0 900 500" className="overflow-visible">
          <g opacity={isPast ? 0.4 : 1}>
            <circle cx="450" cy="250" r="100" fill="#FAFAF9" stroke="#1A1A1A" strokeWidth="2" />
          </g>
          <circle cx="450" cy="250" r="100" fill={isActive ? '#DC2626' : '#FAFAF9'} stroke={isActive ? '#DC2626' : '#1A1A1A'} strokeWidth="2" className="transition-all duration-500" />
          <text x="450" y="260" textAnchor="middle" fontSize="16" fill={isActive ? '#FFFFFF' : '#1A1A1A'} fontWeight="600" className="font-ui">User</text>
          <rect x="100" y="80" width="100" height="50" rx="4" fill={isActive ? '#FAFAF9' : '#FAFAF9'} stroke={isActive ? '#DC2626' : '#E5E5E5'} strokeWidth={isActive ? 2 : 1} className="transition-all duration-500" />
          <rect x="250" y="80" width="100" height="50" rx="4" fill={isActive ? '#FAFAF9' : '#FAFAF9'} stroke={isActive ? '#DC2626' : '#E5E5E5'} strokeWidth={isActive ? 2 : 1} className="transition-all duration-500" />
          <rect x="550" y="80" width="100" height="50" rx="4" fill={isActive ? '#FAFAF9' : '#FAFAF9'} stroke={isActive ? '#DC2626' : '#E5E5E5'} strokeWidth={isActive ? 2 : 1} className="transition-all duration-500" />
          <rect x="700" y="80" width="100" height="50" rx="4" fill={isActive ? '#FAFAF9' : '#FAFAF9'} stroke={isActive ? '#DC2626' : '#E5E5E5'} strokeWidth={isActive ? 2 : 1} className="transition-all duration-500" />
          <rect x="200" y="350" width="100" height="50" rx="4" fill={isActive ? '#FAFAF9' : '#FAFAF9'} stroke={isActive ? '#DC2626' : '#E5E5E5'} strokeWidth={isActive ? 2 : 1} className="transition-all duration-500" />
          <rect x="600" y="350" width="100" height="50" rx="4" fill={isActive ? '#FAFAF9' : '#FAFAF9'} stroke={isActive ? '#DC2626' : '#E5E5E5'} strokeWidth={isActive ? 2 : 1} className="transition-all duration-500" />
          <line x1="150" y1="130" x2="400" y2="200" stroke={isActive ? '#DC2626' : '#E5E5E5'} strokeWidth="2" />
          <line x1="300" y1="130" x2="400" y2="200" stroke={isActive ? '#DC2626' : '#E5E5E5'} strokeWidth="2" />
          <line x1="600" y1="130" x2="500" y2="200" stroke={isActive ? '#DC2626' : '#E5E5E5'} strokeWidth="2" />
          <line x1="750" y1="130" x2="500" y2="200" stroke={isActive ? '#DC2626' : '#E5E5E5'} strokeWidth="2" />
          <line x1="250" y1="400" x2="400" y2="300" stroke={isActive ? '#DC2626' : '#E5E5E5'} strokeWidth="2" />
          <line x1="650" y1="400" x2="500" y2="300" stroke={isActive ? '#DC2626' : '#E5E5E5'} strokeWidth="2" />
          <text x="450" y="430" textAnchor="middle" fontSize="14" fill={isActive ? '#1A1A1A' : '#4A4A4A'} fontWeight="600" className="font-ui">Overwhelmed, Scattered</text>
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
      diagramId="cognitive-load"
    />
  )
}
