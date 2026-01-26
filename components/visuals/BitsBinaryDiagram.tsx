'use client'

import AnimatedDiagram, { type DiagramStep } from '../diagrams/AnimatedDiagram'

export default function BitsBinaryDiagram() {
  const steps: DiagramStep[] = [
    {
      id: 'information',
      label: 'Information',
      render: (isActive) => (
        <svg width="100%" height="100%" viewBox="0 0 800 400" className="overflow-visible">
          <rect x="200" y="150" width="200" height="100" rx="4" fill={isActive ? '#5B8FA3' : '#FAFAF9'} stroke={isActive ? '#5B8FA3' : '#1A1A1A'} strokeWidth={isActive ? 3 : 2} className="transition-all duration-500" />
          <text x="300" y="200" textAnchor="middle" fontSize="14" fill={isActive ? '#FFFFFF' : '#1A1A1A'} fontWeight="600" className="font-ui">Information</text>
          <text x="300" y="220" textAnchor="middle" fontSize="11" fill={isActive ? '#FFFFFF' : '#1A1A1A'} className="font-ui">Text, numbers, images</text>
        </svg>
      ),
    },
    {
      id: 'encode',
      label: 'Encode as Bits',
      render: (isActive, isPast) => {
        // Text colors: dark when background is light (past/inactive), white when active on colored bg
        const pastTextColor = '#1A1A1A' // Always dark for past steps
        const activeTextColor = isActive ? '#FFFFFF' : '#1A1A1A' // White on colored bg, dark on light bg
        
        return (
        <svg width="100%" height="100%" viewBox="0 0 800 400" className="overflow-visible">
          <g opacity={isPast ? 0.8 : 1}>
            <rect x="200" y="150" width="200" height="100" rx="4" fill="#FAFAF9" stroke="#1A1A1A" strokeWidth="2" />
            <text x="300" y="200" textAnchor="middle" fontSize="14" fill={pastTextColor} fontWeight="600" className="font-ui">Information</text>
            <text x="300" y="220" textAnchor="middle" fontSize="11" fill={pastTextColor} className="font-ui">Text, numbers, images</text>
          </g>
          <line x1="400" y1="200" x2="450" y2="200" stroke={isActive ? '#5B8FA3' : '#1A1A1A'} strokeWidth="3" markerEnd="url(#arrow)" className="transition-colors duration-500" />
          <rect x="450" y="150" width="200" height="100" rx="4" fill={isActive ? '#5B8FA3' : '#FAFAF9'} stroke={isActive ? '#5B8FA3' : '#1A1A1A'} strokeWidth={isActive ? 3 : 2} className="transition-all duration-500" />
          {[0, 1, 0, 1, 1, 0, 1, 0].map((bit, i) => (
            <rect
              key={i}
              x={460 + i * 22}
              y="160"
              width="18"
              height="80"
              fill={bit === 1 ? (isActive ? '#8FA3B0' : '#FAFAF9') : '#FAFAF9'}
              stroke={isActive ? '#5B8FA3' : '#1A1A1A'}
              strokeWidth="2"
              className="transition-all duration-500"
            />
          ))}
          <text x="550" y="120" textAnchor="middle" fontSize="12" fill="#1A1A1A" fontWeight="600" className="font-ui">Binary: 01011010</text>
          <defs>
            <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
              <polygon points="0 0, 10 3, 0 6" fill={isActive ? '#5B8FA3' : '#1A1A1A'} />
            </marker>
          </defs>
        </svg>
        )
      },
    },
  ]

  return (
    <AnimatedDiagram
      steps={steps}
      autoPlay={true}
      stepDuration={1500}
      size="primary"
      diagramId="bits-binary"
    />
  )
}
