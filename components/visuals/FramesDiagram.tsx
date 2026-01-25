'use client'

import AnimatedDiagram, { type DiagramStep } from '../diagrams/AnimatedDiagram'

export default function FramesDiagram() {
  const steps: DiagramStep[] = [
    {
      id: 'frame1',
      label: 'Frame 1',
      render: (isActive) => (
        <svg width="100%" height="100%" viewBox="0 0 900 500" className="overflow-visible">
          <rect x="200" y="150" width="500" height="200" rx="4" fill={isActive ? '#5B8FA3' : '#E5E5E5'} className="transition-all duration-500" />
          <text x="450" y="260" textAnchor="middle" fontSize="16" fill={isActive ? '#1A1A1A' : '#4A4A4A'} fontWeight="600" className="font-ui">Frame 1</text>
          <text x="450" y="400" textAnchor="middle" fontSize="14" fill="#4A4A4A" className="font-ui">16.67ms (60 FPS)</text>
        </svg>
      ),
    },
    {
      id: 'frame2',
      label: 'Frame 2',
      render: (isActive, isPast) => (
        <svg width="100%" height="100%" viewBox="0 0 900 500" className="overflow-visible">
          <g opacity={isPast ? 0.3 : 1}>
            <rect x="200" y="150" width="500" height="200" rx="4" fill="#E5E5E5" />
          </g>
          <rect x="220" y="170" width="500" height="200" rx="4" fill={isActive ? '#5B8FA3' : '#E5E5E5'} className="transition-all duration-500" />
          <text x="470" y="280" textAnchor="middle" fontSize="16" fill={isActive ? '#1A1A1A' : '#4A4A4A'} fontWeight="600" className="font-ui">Frame 2</text>
          <text x="450" y="400" textAnchor="middle" fontSize="14" fill={isActive ? '#1A1A1A' : '#4A4A4A'} className="font-ui">16.67ms (60 FPS)</text>
        </svg>
      ),
    },
    {
      id: 'smooth',
      label: 'Smooth Animation',
      render: (isActive, isPast) => (
        <svg width="100%" height="100%" viewBox="0 0 900 500" className="overflow-visible">
          <g opacity={0.2}>
            <rect x="200" y="150" width="500" height="200" rx="4" fill="#E5E5E5" />
            <rect x="220" y="170" width="500" height="200" rx="4" fill="#E5E5E5" />
          </g>
          <rect x="240" y="190" width="500" height="200" rx="4" fill={isActive ? '#5B8FA3' : '#E5E5E5'} className="transition-all duration-500" />
          <text x="490" y="300" textAnchor="middle" fontSize="16" fill={isActive ? '#1A1A1A' : '#4A4A4A'} fontWeight="600" className="font-ui">Frame 3</text>
          <text x="450" y="400" textAnchor="middle" fontSize="14" fill={isActive ? '#1A1A1A' : '#4A4A4A'} className="font-ui">Smooth 60 FPS</text>
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
      diagramId="frames"
    />
  )
}
