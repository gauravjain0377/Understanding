'use client'

import AnimatedDiagram, { type DiagramStep } from '../diagrams/AnimatedDiagram'

export default function ColorSpaceFlowDiagram() {
  const steps: DiagramStep[] = [
    {
      id: 'perception',
      label: 'Human Perception',
      render: (isActive) => (
        <svg width="100%" height="100%" viewBox="0 0 800 400" className="overflow-visible">
          <rect x="50" y="150" width="140" height="80" rx="4" fill={isActive ? '#5B8FA3' : '#FAFAF9'} stroke={isActive ? '#5B8FA3' : '#E5E5E5'} strokeWidth={isActive ? 2 : 1} className="transition-all duration-500" />
          <text x="120" y="195" textAnchor="middle" fontSize="14" fill={isActive ? '#1A1A1A' : '#4A4A4A'} fontWeight={isActive ? '600' : '400'} className="font-ui transition-all duration-500">Human Perception</text>
          <text x="120" y="220" textAnchor="middle" fontSize="11" fill="#4A4A4A" className="font-ui">Continuous experience</text>
        </svg>
      ),
    },
    {
      id: 'rgb',
      label: 'RGB Space',
      render: (isActive, isPast) => (
        <svg width="100%" height="100%" viewBox="0 0 800 400" className="overflow-visible">
          <g opacity={isPast ? 0.6 : 1}>
            <rect x="50" y="150" width="140" height="80" rx="4" fill="#FAFAF9" stroke="#E5E5E5" strokeWidth="1" />
            <text x="120" y="195" textAnchor="middle" fontSize="14" fill="#4A4A4A" className="font-ui">Human Perception</text>
          </g>
          <line x1="190" y1="190" x2="250" y2="190" stroke={isActive ? '#5B8FA3' : '#E5E5E5'} strokeWidth="2" markerEnd="url(#arrow1)" className="transition-colors duration-500" />
          <rect x="260" y="150" width="140" height="80" rx="4" fill={isActive ? '#5B8FA3' : '#FAFAF9'} stroke={isActive ? '#5B8FA3' : '#E5E5E5'} strokeWidth={isActive ? 2 : 1} className="transition-all duration-500" />
          <text x="330" y="195" textAnchor="middle" fontSize="14" fill={isActive ? '#1A1A1A' : '#4A4A4A'} fontWeight={isActive ? '600' : '400'} className="font-ui transition-all duration-500">RGB Space</text>
          <text x="330" y="220" textAnchor="middle" fontSize="11" fill="#4A4A4A" className="font-ui">(R, G, B) coordinates</text>
          <defs>
            <marker id="arrow1" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
              <polygon points="0 0, 10 3, 0 6" fill={isActive ? '#5B8FA3' : '#E5E5E5'} />
            </marker>
          </defs>
        </svg>
      ),
    },
    {
      id: 'storage',
      label: 'Digital Storage',
      render: (isActive, isPast) => (
        <svg width="100%" height="100%" viewBox="0 0 800 400" className="overflow-visible">
          <g opacity={0.6}>
            <rect x="50" y="150" width="140" height="80" rx="4" fill="#FAFAF9" stroke="#E5E5E5" strokeWidth="1" />
            <rect x="260" y="150" width="140" height="80" rx="4" fill="#FAFAF9" stroke="#E5E5E5" strokeWidth="1" />
          </g>
          <line x1="190" y1="190" x2="250" y2="190" stroke="#5B8FA3" strokeWidth="2" markerEnd="url(#arrow1)" />
          <line x1="400" y1="190" x2="460" y2="190" stroke={isActive ? '#5B8FA3' : '#E5E5E5'} strokeWidth="2" markerEnd="url(#arrow2)" className="transition-colors duration-500" />
          <rect x="470" y="150" width="140" height="80" rx="4" fill={isActive ? '#5B8FA3' : '#FAFAF9'} stroke={isActive ? '#5B8FA3' : '#E5E5E5'} strokeWidth={isActive ? 2 : 1} className="transition-all duration-500" />
          <text x="540" y="195" textAnchor="middle" fontSize="14" fill={isActive ? '#1A1A1A' : '#4A4A4A'} fontWeight={isActive ? '600' : '400'} className="font-ui transition-all duration-500">Digital Storage</text>
          <text x="540" y="220" textAnchor="middle" fontSize="11" fill="#4A4A4A" className="font-ui">Binary numbers</text>
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
      stepDuration={1200}
      size="primary"
      diagramId="color-space-flow"
    />
  )
}
