'use client'

import AnimatedDiagram, { type DiagramStep } from '../diagrams/AnimatedDiagram'

export default function LexingDiagram() {
  const steps: DiagramStep[] = [
    {
      id: 'source',
      label: 'Source Code',
      render: (isActive) => (
        <svg width="100%" height="100%" viewBox="0 0 900 500" className="overflow-visible">
          <rect x="50" y="50" width="350" height="400" rx="4" fill={isActive ? '#FAFAF9' : '#FAFAF9'} stroke={isActive ? '#5B8FA3' : '#1A1A1A'} strokeWidth={isActive ? 3 : 2} className="transition-all duration-500" />
          <text x="225" y="80" textAnchor="middle" fontSize="14" fill="#1A1A1A" fontWeight="600" className="font-ui">Source Code</text>
          <text x="70" y="120" fontSize="12" fill="#4A4A4A" className="font-mono">let x = 42;</text>
          <text x="70" y="150" fontSize="12" fill="#4A4A4A" className="font-mono">if (x {'>'} 0) {'{'}</text>
          <text x="70" y="180" fontSize="12" fill="#4A4A4A" className="font-mono">  return x;</text>
          <text x="70" y="210" fontSize="12" fill="#4A4A4A" className="font-mono">{'}'}</text>
        </svg>
      ),
    },
    {
      id: 'tokens',
      label: 'Tokenization',
      render: (isActive, isPast) => (
        <svg width="100%" height="100%" viewBox="0 0 900 500" className="overflow-visible">
          <g opacity={isPast ? 0.4 : 1}>
            <rect x="50" y="50" width="350" height="400" rx="4" fill="#FAFAF9" stroke="#1A1A1A" strokeWidth="2" />
            <text x="225" y="80" textAnchor="middle" fontSize="14" fill="#1A1A1A" fontWeight="600" className="font-ui">Source Code</text>
          </g>
          <path d="M 420 250 L 500 250" stroke="#5B8FA3" strokeWidth="2" markerEnd="url(#arrow-lex)" />
          <rect x="500" y="50" width="350" height="400" rx="4" fill={isActive ? '#FAFAF9' : '#FAFAF9'} stroke={isActive ? '#5B8FA3' : '#1A1A1A'} strokeWidth={isActive ? 3 : 2} className="transition-all duration-500" />
          <text x="675" y="80" textAnchor="middle" fontSize="14" fill="#1A1A1A" fontWeight="600" className="font-ui">Tokens</text>
          <rect x="520" y="110" width="80" height="30" rx="2" fill={isActive ? '#5B8FA3' : '#FAFAF9'} stroke={isActive ? '#5B8FA3' : '#1A1A1A'} strokeWidth="2" className="transition-all duration-500" />
          <text x="560" y="130" textAnchor="middle" fontSize="11" fill={isActive ? '#FFFFFF' : '#1A1A1A'} className="font-ui">let</text>
          <rect x="620" y="110" width="40" height="30" rx="2" fill={isActive ? '#5B8FA3' : '#FAFAF9'} stroke={isActive ? '#5B8FA3' : '#1A1A1A'} strokeWidth="2" className="transition-all duration-500" />
          <text x="640" y="130" textAnchor="middle" fontSize="11" fill={isActive ? '#FFFFFF' : '#1A1A1A'} className="font-ui">x</text>
          <rect x="680" y="110" width="30" height="30" rx="2" fill={isActive ? '#5B8FA3' : '#FAFAF9'} stroke={isActive ? '#5B8FA3' : '#1A1A1A'} strokeWidth="2" className="transition-all duration-500" />
          <text x="695" y="130" textAnchor="middle" fontSize="11" fill={isActive ? '#FFFFFF' : '#1A1A1A'} className="font-ui">=</text>
          <rect x="730" y="110" width="50" height="30" rx="2" fill={isActive ? '#5B8FA3' : '#FAFAF9'} stroke={isActive ? '#5B8FA3' : '#1A1A1A'} strokeWidth="2" className="transition-all duration-500" />
          <text x="755" y="130" textAnchor="middle" fontSize="11" fill={isActive ? '#FFFFFF' : '#1A1A1A'} className="font-ui">42</text>
          <rect x="790" y="110" width="30" height="30" rx="2" fill={isActive ? '#5B8FA3' : '#FAFAF9'} stroke={isActive ? '#5B8FA3' : '#1A1A1A'} strokeWidth="2" className="transition-all duration-500" />
          <text x="805" y="130" textAnchor="middle" fontSize="11" fill={isActive ? '#FFFFFF' : '#1A1A1A'} className="font-ui">;</text>
          <defs>
            <marker id="arrow-lex" markerWidth="10" markerHeight="10" refX="9" refY="5" orient="auto">
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
      stepDuration={2000}
      size="primary"
      diagramId="lexing"
    />
  )
}
