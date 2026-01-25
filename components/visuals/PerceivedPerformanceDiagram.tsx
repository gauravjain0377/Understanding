'use client'

import AnimatedDiagram, { type DiagramStep } from '../diagrams/AnimatedDiagram'

export default function PerceivedPerformanceDiagram() {
  const steps: DiagramStep[] = [
    {
      id: 'slow',
      label: 'Actual Speed',
      render: (isActive) => (
        <svg width="100%" height="100%" viewBox="0 0 900 500" className="overflow-visible">
          <rect x="100" y="200" width="200" height="100" rx="4" fill={isActive ? '#FAFAF9' : '#FAFAF9'} stroke={isActive ? '#5B8FA3' : '#E5E5E5'} strokeWidth={isActive ? 2 : 1} className="transition-all duration-500" />
          <text x="200" y="230" textAnchor="middle" fontSize="14" fill={isActive ? '#1A1A1A' : '#4A4A4A'} fontWeight="600" className="font-ui">Operation</text>
          <rect x="120" y="250" width="160" height="30" rx="2" fill={isActive ? '#DC2626' : '#E5E5E5'} className="transition-all duration-500" />
          <text x="200" y="270" textAnchor="middle" fontSize="12" fill={isActive ? '#FFFFFF' : '#4A4A4A'} className="font-ui">3 seconds</text>
          <text x="200" y="330" textAnchor="middle" fontSize="14" fill="#4A4A4A" className="font-ui">Feels Slow</text>
        </svg>
      ),
    },
    {
      id: 'fast',
      label: 'Perceived Speed',
      render: (isActive, isPast) => (
        <svg width="100%" height="100%" viewBox="0 0 900 500" className="overflow-visible">
          <g opacity={isPast ? 0.4 : 1}>
            <rect x="100" y="200" width="200" height="100" rx="4" fill="#FAFAF9" stroke="#E5E5E5" strokeWidth="1" />
          </g>
          <path d="M 350 250 L 450 250" stroke="#5B8FA3" strokeWidth="2" markerEnd="url(#arrow-perf)" />
          <rect x="600" y="200" width="200" height="100" rx="4" fill={isActive ? '#FAFAF9' : '#FAFAF9'} stroke={isActive ? '#5B8FA3' : '#E5E5E5'} strokeWidth={isActive ? 2 : 1} className="transition-all duration-500" />
          <text x="700" y="230" textAnchor="middle" fontSize="14" fill={isActive ? '#1A1A1A' : '#4A4A4A'} fontWeight="600" className="font-ui">With Feedback</text>
          <rect x="620" y="250" width="160" height="30" rx="2" fill={isActive ? '#10B981' : '#E5E5E5'} className="transition-all duration-500" />
          <text x="700" y="270" textAnchor="middle" fontSize="12" fill={isActive ? '#FFFFFF' : '#4A4A4A'} className="font-ui">Still 3 seconds</text>
          <text x="700" y="330" textAnchor="middle" fontSize="14" fill={isActive ? '#1A1A1A' : '#4A4A4A'} className="font-ui">Feels Fast</text>
          <defs>
            <marker id="arrow-perf" markerWidth="10" markerHeight="10" refX="9" refY="5" orient="auto">
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
      diagramId="perceived-performance"
    />
  )
}
