'use client'

import AnimatedDiagram, { type DiagramStep } from '../diagrams/AnimatedDiagram'

export default function FeedbackLoopsDiagram() {
  const steps: DiagramStep[] = [
    {
      id: 'action',
      label: 'User Action',
      render: (isActive) => (
        <svg width="100%" height="100%" viewBox="0 0 900 500" className="overflow-visible">
          <circle cx="200" cy="250" r="60" fill={isActive ? '#5B8FA3' : '#E5E5E5'} className="transition-all duration-500" />
          <text x="200" y="260" textAnchor="middle" fontSize="14" fill={isActive ? '#1A1A1A' : '#4A4A4A'} fontWeight="600" className="font-ui">Action</text>
        </svg>
      ),
    },
    {
      id: 'feedback',
      label: 'System Feedback',
      render: (isActive, isPast) => (
        <svg width="100%" height="100%" viewBox="0 0 900 500" className="overflow-visible">
          <g opacity={isPast ? 0.6 : 1}>
            <circle cx="200" cy="250" r="60" fill="#5B8FA3" />
            <text x="200" y="260" textAnchor="middle" fontSize="14" fill="#1A1A1A" fontWeight="600" className="font-ui">Action</text>
          </g>
          <path d="M 280 250 L 400 250" stroke="#5B8FA3" strokeWidth="3" markerEnd="url(#arrow-feedback)" />
          <circle cx="500" cy="250" r="60" fill={isActive ? '#5B8FA3' : '#E5E5E5'} className="transition-all duration-500" />
          <text x="500" y="260" textAnchor="middle" fontSize="14" fill={isActive ? '#1A1A1A' : '#4A4A4A'} fontWeight="600" className="font-ui">Feedback</text>
        </svg>
      ),
    },
    {
      id: 'loop',
      label: 'Feedback Loop',
      render: (isActive, isPast) => (
        <svg width="100%" height="100%" viewBox="0 0 900 500" className="overflow-visible">
          <g opacity={isPast ? 0.6 : 1}>
            <circle cx="200" cy="250" r="60" fill="#5B8FA3" />
            <text x="200" y="260" textAnchor="middle" fontSize="14" fill="#1A1A1A" fontWeight="600" className="font-ui">Action</text>
            <circle cx="500" cy="250" r="60" fill="#5B8FA3" />
            <text x="500" y="260" textAnchor="middle" fontSize="14" fill="#1A1A1A" fontWeight="600" className="font-ui">Feedback</text>
          </g>
          <path d="M 280 250 L 400 250" stroke="#5B8FA3" strokeWidth="3" />
          <path d="M 560 250 L 700 250 L 700 350 L 200 350 L 200 310" stroke={isActive ? '#5B8FA3' : '#E5E5E5'} strokeWidth="3" markerEnd="url(#arrow-loop)" className="transition-all duration-500" />
          <text x="450" y="380" textAnchor="middle" fontSize="14" fill={isActive ? '#1A1A1A' : '#4A4A4A'} fontWeight="600" className="font-ui">Adjust & Repeat</text>
          <defs>
            <marker id="arrow-feedback" markerWidth="10" markerHeight="10" refX="9" refY="5" orient="auto">
              <polygon points="0 0, 10 5, 0 10" fill="#5B8FA3" />
            </marker>
            <marker id="arrow-loop" markerWidth="10" markerHeight="10" refX="9" refY="5" orient="auto">
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
      diagramId="feedback-loops"
    />
  )
}
