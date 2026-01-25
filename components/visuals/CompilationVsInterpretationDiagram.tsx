'use client'

import AnimatedDiagram, { type DiagramStep } from '../diagrams/AnimatedDiagram'

export default function CompilationVsInterpretationDiagram() {
  const steps: DiagramStep[] = [
    {
      id: 'source',
      label: 'Source Code',
      render: (isActive) => (
        <svg width="100%" height="100%" viewBox="0 0 900 500" className="overflow-visible">
          <rect x="50" y="200" width="200" height="100" rx="4" fill={isActive ? '#FAFAF9' : '#FAFAF9'} stroke={isActive ? '#5B8FA3' : '#E5E5E5'} strokeWidth={isActive ? 2 : 1} className="transition-all duration-500" />
          <text x="150" y="230" textAnchor="middle" fontSize="14" fill={isActive ? '#1A1A1A' : '#4A4A4A'} fontWeight="600" className="font-ui">Source</text>
          <text x="70" y="260" fontSize="11" fill="#4A4A4A" className="font-mono">let x = 42;</text>
        </svg>
      ),
    },
    {
      id: 'compile',
      label: 'Compilation Path',
      render: (isActive, isPast) => (
        <svg width="100%" height="100%" viewBox="0 0 900 500" className="overflow-visible">
          <g opacity={isPast ? 0.4 : 1}>
            <rect x="50" y="200" width="200" height="100" rx="4" fill="#FAFAF9" stroke="#E5E5E5" strokeWidth="1" />
          </g>
          <path d="M 280 250 L 350 150" stroke="#5B8FA3" strokeWidth="2" markerEnd="url(#arrow-compile)" />
          <rect x="350" y="50" width="200" height="100" rx="4" fill={isActive ? '#FAFAF9' : '#FAFAF9'} stroke={isActive ? '#5B8FA3' : '#E5E5E5'} strokeWidth={isActive ? 2 : 1} className="transition-all duration-500" />
          <text x="450" y="80" textAnchor="middle" fontSize="14" fill={isActive ? '#1A1A1A' : '#4A4A4A'} fontWeight="600" className="font-ui">Compiler</text>
          <text x="370" y="110" fontSize="11" fill="#4A4A4A" className="font-mono">Machine Code</text>
          <path d="M 580 100 L 650 250" stroke="#5B8FA3" strokeWidth="2" markerEnd="url(#arrow-execute)" />
          <rect x="650" y="200" width="200" height="100" rx="4" fill={isActive ? '#FAFAF9' : '#FAFAF9'} stroke={isActive ? '#5B8FA3' : '#E5E5E5'} strokeWidth={isActive ? 2 : 1} className="transition-all duration-500" />
          <text x="750" y="230" textAnchor="middle" fontSize="14" fill={isActive ? '#1A1A1A' : '#4A4A4A'} fontWeight="600" className="font-ui">Execute</text>
          <defs>
            <marker id="arrow-compile" markerWidth="10" markerHeight="10" refX="9" refY="5" orient="auto">
              <polygon points="0 0, 10 5, 0 10" fill="#5B8FA3" />
            </marker>
            <marker id="arrow-execute" markerWidth="10" markerHeight="10" refX="9" refY="5" orient="auto">
              <polygon points="0 0, 10 5, 0 10" fill="#5B8FA3" />
            </marker>
          </defs>
        </svg>
      ),
    },
    {
      id: 'interpret',
      label: 'Interpretation Path',
      render: (isActive, isPast) => (
        <svg width="100%" height="100%" viewBox="0 0 900 500" className="overflow-visible">
          <g opacity={0.4}>
            <rect x="50" y="200" width="200" height="100" rx="4" fill="#FAFAF9" stroke="#E5E5E5" strokeWidth="1" />
            <rect x="350" y="50" width="200" height="100" rx="4" fill="#FAFAF9" stroke="#E5E5E5" strokeWidth="1" />
            <rect x="650" y="200" width="200" height="100" rx="4" fill="#FAFAF9" stroke="#E5E5E5" strokeWidth="1" />
          </g>
          <rect x="50" y="200" width="200" height="100" rx="4" fill={isActive ? '#FAFAF9' : '#FAFAF9'} stroke={isActive ? '#5B8FA3' : '#E5E5E5'} strokeWidth={isActive ? 2 : 1} className="transition-all duration-500" />
          <path d="M 280 250 L 650 250" stroke="#5B8FA3" strokeWidth="2" markerEnd="url(#arrow-interpret)" />
          <rect x="650" y="200" width="200" height="100" rx="4" fill={isActive ? '#FAFAF9' : '#FAFAF9'} stroke={isActive ? '#5B8FA3' : '#E5E5E5'} strokeWidth={isActive ? 2 : 1} className="transition-all duration-500" />
          <text x="750" y="230" textAnchor="middle" fontSize="14" fill={isActive ? '#1A1A1A' : '#4A4A4A'} fontWeight="600" className="font-ui">Interpreter</text>
          <text x="670" y="260" fontSize="11" fill="#4A4A4A" className="font-mono">Execute Directly</text>
          <defs>
            <marker id="arrow-interpret" markerWidth="10" markerHeight="10" refX="9" refY="5" orient="auto">
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
      diagramId="compilation-vs-interpretation"
    />
  )
}
