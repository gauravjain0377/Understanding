'use client'

import AnimatedDiagram, { type DiagramStep } from '../diagrams/AnimatedDiagram'

export default function OptimizationDiagram() {
  const steps: DiagramStep[] = [
    {
      id: 'original',
      label: 'Original Code',
      render: (isActive) => (
        <svg width="100%" height="100%" viewBox="0 0 900 500" className="overflow-visible">
          <rect x="50" y="50" width="350" height="400" rx="4" fill={isActive ? '#FAFAF9' : '#FAFAF9'} stroke={isActive ? '#5B8FA3' : '#1A1A1A'} strokeWidth={isActive ? 3 : 2} className="transition-all duration-500" />
          <text x="225" y="80" textAnchor="middle" fontSize="14" fill="#1A1A1A" fontWeight="600" className="font-ui">Original</text>
          <text x="70" y="120" fontSize="11" fill="#4A4A4A" className="font-mono">let x = 2 + 2;</text>
          <text x="70" y="150" fontSize="11" fill="#4A4A4A" className="font-mono">let y = x * 0;</text>
          <text x="70" y="180" fontSize="11" fill="#4A4A4A" className="font-mono">if (false) {'{'}</text>
          <text x="70" y="210" fontSize="11" fill="#4A4A4A" className="font-mono">  doSomething();</text>
          <text x="70" y="240" fontSize="11" fill="#4A4A4A" className="font-mono">{'}'}</text>
        </svg>
      ),
    },
    {
      id: 'optimized',
      label: 'Optimized Code',
      render: (isActive, isPast) => (
        <svg width="100%" height="100%" viewBox="0 0 900 500" className="overflow-visible">
          <g opacity={isPast ? 0.4 : 1}>
            <rect x="50" y="50" width="350" height="400" rx="4" fill="#FAFAF9" stroke="#1A1A1A" strokeWidth="2" />
          </g>
          <path d="M 420 250 L 500 250" stroke="#5B8FA3" strokeWidth="2" markerEnd="url(#arrow-opt)" />
          <rect x="500" y="50" width="350" height="400" rx="4" fill={isActive ? '#FAFAF9' : '#FAFAF9'} stroke={isActive ? '#5B8FA3' : '#1A1A1A'} strokeWidth={isActive ? 3 : 2} className="transition-all duration-500" />
          <text x="675" y="80" textAnchor="middle" fontSize="14" fill="#1A1A1A" fontWeight="600" className="font-ui">Optimized</text>
          <text x="520" y="120" fontSize="11" fill="#4A4A4A" className="font-mono">let x = 4;</text>
          <text x="520" y="150" fontSize="11" fill="#4A4A4A" className="font-mono">let y = 0;</text>
          <text x="520" y="180" fontSize="11" fill="#4A4A4A" className="font-mono">Dead code removed</text>
          <defs>
            <marker id="arrow-opt" markerWidth="10" markerHeight="10" refX="9" refY="5" orient="auto">
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
      diagramId="optimization"
    />
  )
}
