'use client'

import AnimatedDiagram, { type DiagramStep } from '../diagrams/AnimatedDiagram'

export default function BrowserInternalsDiagram() {
  const steps: DiagramStep[] = [
    {
      id: 'parse',
      label: 'Parse HTML/CSS',
      render: (isActive) => (
        <svg width="100%" height="100%" viewBox="0 0 1000 600" className="overflow-visible" preserveAspectRatio="xMidYMid meet">
          <rect x="100" y="200" width="220" height="120" rx="8" fill={isActive ? '#5B8FA3' : '#FAFAF9'} stroke={isActive ? '#5B8FA3' : '#E5E5E5'} strokeWidth={isActive ? 3 : 2} className="transition-all duration-700" />
          <text x="210" y="265" textAnchor="middle" fontSize="20" fill={isActive ? '#1A1A1A' : '#4A4A4A'} fontWeight={isActive ? '600' : '400'} className="font-ui">HTML/CSS</text>
        </svg>
      ),
    },
    {
      id: 'dom',
      label: 'Build DOM',
      render: (isActive, isPast) => (
        <svg width="100%" height="100%" viewBox="0 0 1000 600" className="overflow-visible" preserveAspectRatio="xMidYMid meet">
          <g opacity={isPast ? 0.6 : 1}>
            <rect x="100" y="200" width="220" height="120" rx="8" fill="#FAFAF9" stroke="#E5E5E5" strokeWidth="2" />
          </g>
          <line x1="320" y1="260" x2="380" y2="260" stroke={isActive ? '#5B8FA3' : '#E5E5E5'} strokeWidth="3" markerEnd="url(#arrow1)" className="transition-colors duration-700" />
          <rect x="380" y="200" width="220" height="120" rx="8" fill={isActive ? '#5B8FA3' : '#FAFAF9'} stroke={isActive ? '#5B8FA3' : '#E5E5E5'} strokeWidth={isActive ? 3 : 2} className="transition-all duration-700" />
          <text x="490" y="265" textAnchor="middle" fontSize="20" fill={isActive ? '#1A1A1A' : '#4A4A4A'} fontWeight={isActive ? '600' : '400'} className="font-ui">DOM Tree</text>
          <defs>
            <marker id="arrow1" markerWidth="12" markerHeight="12" refX="11" refY="4" orient="auto">
              <polygon points="0 0, 12 4, 0 8" fill={isActive ? '#5B8FA3' : '#E5E5E5'} />
            </marker>
          </defs>
        </svg>
      ),
    },
    {
      id: 'render',
      label: 'Render Tree',
      render: (isActive, isPast) => (
        <svg width="100%" height="100%" viewBox="0 0 1000 600" className="overflow-visible" preserveAspectRatio="xMidYMid meet">
          <g opacity={0.6}>
            <rect x="100" y="200" width="220" height="120" rx="8" fill="#FAFAF9" stroke="#E5E5E5" strokeWidth="2" />
            <rect x="380" y="200" width="220" height="120" rx="8" fill="#FAFAF9" stroke="#E5E5E5" strokeWidth="2" />
          </g>
          <line x1="320" y1="260" x2="380" y2="260" stroke="#5B8FA3" strokeWidth="3" markerEnd="url(#arrow1)" />
          <line x1="600" y1="260" x2="660" y2="260" stroke={isActive ? '#5B8FA3' : '#E5E5E5'} strokeWidth="3" markerEnd="url(#arrow2)" className="transition-colors duration-700" />
          <rect x="660" y="200" width="220" height="120" rx="8" fill={isActive ? '#5B8FA3' : '#FAFAF9'} stroke={isActive ? '#5B8FA3' : '#E5E5E5'} strokeWidth={isActive ? 3 : 2} className="transition-all duration-700" />
          <text x="770" y="265" textAnchor="middle" fontSize="20" fill={isActive ? '#1A1A1A' : '#4A4A4A'} fontWeight={isActive ? '600' : '400'} className="font-ui">Render Tree</text>
          <defs>
            <marker id="arrow1" markerWidth="12" markerHeight="12" refX="11" refY="4" orient="auto">
              <polygon points="0 0, 12 4, 0 8" fill="#5B8FA3" />
            </marker>
            <marker id="arrow2" markerWidth="12" markerHeight="12" refX="11" refY="4" orient="auto">
              <polygon points="0 0, 12 4, 0 8" fill={isActive ? '#5B8FA3' : '#E5E5E5'} />
            </marker>
          </defs>
        </svg>
      ),
    },
    {
      id: 'paint',
      label: 'Paint Pixels',
      render: (isActive, isPast) => (
        <svg width="100%" height="100%" viewBox="0 0 1000 600" className="overflow-visible" preserveAspectRatio="xMidYMid meet">
          <g opacity={0.6}>
            <rect x="100" y="200" width="220" height="120" rx="8" fill="#FAFAF9" stroke="#E5E5E5" strokeWidth="2" />
            <rect x="380" y="200" width="220" height="120" rx="8" fill="#FAFAF9" stroke="#E5E5E5" strokeWidth="2" />
            <rect x="660" y="200" width="220" height="120" rx="8" fill="#FAFAF9" stroke="#E5E5E5" strokeWidth="2" />
          </g>
          <line x1="320" y1="260" x2="380" y2="260" stroke="#5B8FA3" strokeWidth="3" markerEnd="url(#arrow1)" />
          <line x1="600" y1="260" x2="660" y2="260" stroke="#5B8FA3" strokeWidth="3" markerEnd="url(#arrow2)" />
          <line x1="880" y1="260" x2="920" y2="260" stroke={isActive ? '#5B8FA3' : '#E5E5E5'} strokeWidth="3" markerEnd="url(#arrow3)" className="transition-colors duration-700" />
          <rect x="920" y="160" width="60" height="200" rx="8" fill={isActive ? '#5B8FA3' : '#FAFAF9'} stroke={isActive ? '#5B8FA3' : '#E5E5E5'} strokeWidth={isActive ? 3 : 2} className="transition-all duration-700" />
          {[0, 1, 2, 3, 4].map(i => 
            [0, 1, 2, 3, 4, 5].map(j => (
              <rect
                key={`${i}-${j}`}
                x={930 + i * 20}
                y={170 + j * 28}
                width="18"
                height="24"
                fill={isActive ? (i + j) % 2 === 0 ? '#8FA3B0' : '#5B8FA3' : '#E5E5E5'}
                className="transition-all duration-700"
              />
            ))
          )}
          <text x="950" y="380" textAnchor="middle" fontSize="16" fill={isActive ? '#1A1A1A' : '#4A4A4A'} fontWeight={isActive ? '600' : '400'} className="font-ui">Pixels</text>
          <defs>
            <marker id="arrow1" markerWidth="12" markerHeight="12" refX="11" refY="4" orient="auto">
              <polygon points="0 0, 12 4, 0 8" fill="#5B8FA3" />
            </marker>
            <marker id="arrow2" markerWidth="12" markerHeight="12" refX="11" refY="4" orient="auto">
              <polygon points="0 0, 12 4, 0 8" fill="#5B8FA3" />
            </marker>
            <marker id="arrow3" markerWidth="12" markerHeight="12" refX="11" refY="4" orient="auto">
              <polygon points="0 0, 12 4, 0 8" fill={isActive ? '#5B8FA3' : '#E5E5E5'} />
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
      diagramId="browser-internals"
    />
  )
}
