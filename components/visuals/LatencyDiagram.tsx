'use client'

import AnimatedDiagram, { type DiagramStep } from '../diagrams/AnimatedDiagram'

export default function LatencyDiagram() {
  const steps: DiagramStep[] = [
    {
      id: 'request',
      label: 'Request Sent',
      render: (isActive) => (
        <svg width="100%" height="100%" viewBox="0 0 900 500" className="overflow-visible">
          <circle cx="200" cy="250" r="40" fill={isActive ? '#5B8FA3' : '#E5E5E5'} className="transition-all duration-500" />
          <text x="200" y="257" textAnchor="middle" fontSize="14" fill={isActive ? '#1A1A1A' : '#4A4A4A'} fontWeight="600" className="font-ui">Client</text>
          <circle cx="700" cy="250" r="40" fill={isActive ? '#E5E5E5' : '#E5E5E5'} />
          <text x="700" y="257" textAnchor="middle" fontSize="14" fill="#4A4A4A" fontWeight="600" className="font-ui">Server</text>
          <path d="M 240 250 L 660 250" stroke={isActive ? '#5B8FA3' : '#E5E5E5'} strokeWidth="2" markerEnd="url(#arrow-lat)" className="transition-all duration-500" />
          <text x="450" y="240" textAnchor="middle" fontSize="12" fill={isActive ? '#1A1A1A' : '#4A4A4A'} className="font-ui">Request</text>
          <defs>
            <marker id="arrow-lat" markerWidth="10" markerHeight="10" refX="9" refY="5" orient="auto">
              <polygon points="0 0, 10 5, 0 10" fill="#5B8FA3" />
            </marker>
          </defs>
        </svg>
      ),
    },
    {
      id: 'wait',
      label: 'Latency',
      render: (isActive, isPast) => (
        <svg width="100%" height="100%" viewBox="0 0 900 500" className="overflow-visible">
          <g opacity={isPast ? 0.4 : 1}>
            <circle cx="200" cy="250" r="40" fill="#5B8FA3" />
            <circle cx="700" cy="250" r="40" fill="#E5E5E5" />
          </g>
          <rect x="300" y="200" width="300" height="100" rx="4" fill={isActive ? '#FAFAF9' : '#FAFAF9'} stroke={isActive ? '#5B8FA3' : '#E5E5E5'} strokeWidth={isActive ? 2 : 1} className="transition-all duration-500" />
          <text x="450" y="250" textAnchor="middle" fontSize="14" fill={isActive ? '#1A1A1A' : '#4A4A4A'} fontWeight="600" className="font-ui">Processing Time</text>
        </svg>
      ),
    },
    {
      id: 'response',
      label: 'Response Received',
      render: (isActive, isPast) => (
        <svg width="100%" height="100%" viewBox="0 0 900 500" className="overflow-visible">
          <g opacity={0.4}>
            <circle cx="200" cy="250" r="40" fill="#5B8FA3" />
            <circle cx="700" cy="250" r="40" fill="#E5E5E5" />
          </g>
          <circle cx="200" cy="250" r="40" fill={isActive ? '#5B8FA3' : '#E5E5E5'} className="transition-all duration-500" />
          <circle cx="700" cy="250" r="40" fill={isActive ? '#5B8FA3' : '#E5E5E5'} className="transition-all duration-500" />
          <path d="M 660 250 L 240 250" stroke={isActive ? '#5B8FA3' : '#E5E5E5'} strokeWidth="2" markerEnd="url(#arrow-resp)" className="transition-all duration-500" />
          <text x="450" y="240" textAnchor="middle" fontSize="12" fill={isActive ? '#1A1A1A' : '#4A4A4A'} className="font-ui">Response</text>
          <defs>
            <marker id="arrow-resp" markerWidth="10" markerHeight="10" refX="1" refY="5" orient="auto">
              <polygon points="10 0, 0 5, 10 10" fill="#5B8FA3" />
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
      diagramId="latency"
    />
  )
}
