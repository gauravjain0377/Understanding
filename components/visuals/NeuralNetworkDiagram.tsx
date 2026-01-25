'use client'

import AnimatedDiagram, { type DiagramStep } from '../diagrams/AnimatedDiagram'

export default function NeuralNetworkDiagram() {
  const steps: DiagramStep[] = [
    {
      id: 'input',
      label: 'Input Layer',
      render: (isActive) => (
        <svg width="100%" height="100%" viewBox="0 0 800 400" className="overflow-visible">
          {[0, 1, 2].map(i => (
            <circle key={i} cx="100" cy={150 + i * 50} r="15" fill={isActive ? '#5B8FA3' : '#E5E5E5'} stroke={isActive ? '#5B8FA3' : '#E5E5E5'} strokeWidth={isActive ? 2 : 1} className="transition-all duration-500" />
          ))}
          <text x="100" y="320" textAnchor="middle" fontSize="12" fill={isActive ? '#1A1A1A' : '#4A4A4A'} className="font-ui">Input</text>
        </svg>
      ),
    },
    {
      id: 'hidden',
      label: 'Hidden Layer',
      render: (isActive, isPast) => (
        <svg width="100%" height="100%" viewBox="0 0 800 400" className="overflow-visible">
          <g opacity={isPast ? 0.6 : 1}>
            {[0, 1, 2].map(i => (
              <circle key={i} cx="100" cy={150 + i * 50} r="15" fill="#5B8FA3" stroke="#5B8FA3" strokeWidth="1" />
            ))}
          </g>
          {[0, 1, 2].map(i => (
            <line key={i} x1="115" y1={150 + i * 50} x2="285" y2={150 + i * 50} stroke={isActive ? '#5B8FA3' : '#E5E5E5'} strokeWidth="1" opacity={isActive ? 0.6 : 0.3} className="transition-all duration-500" />
          ))}
          {[0, 1, 2, 3].map(i => (
            <circle key={i} cx="400" cy={120 + i * 40} r="15" fill={isActive ? '#5B8FA3' : '#E5E5E5'} stroke={isActive ? '#5B8FA3' : '#E5E5E5'} strokeWidth={isActive ? 2 : 1} className="transition-all duration-500" />
          ))}
          <text x="400" y="320" textAnchor="middle" fontSize="12" fill={isActive ? '#1A1A1A' : '#4A4A4A'} className="font-ui">Hidden</text>
        </svg>
      ),
    },
    {
      id: 'output',
      label: 'Output Layer',
      render: (isActive, isPast) => (
        <svg width="100%" height="100%" viewBox="0 0 800 400" className="overflow-visible">
          <g opacity={0.6}>
            {[0, 1, 2].map(i => (
              <circle key={i} cx="100" cy={150 + i * 50} r="15" fill="#5B8FA3" />
            ))}
            {[0, 1, 2, 3].map(i => (
              <circle key={i} cx="400" cy={120 + i * 40} r="15" fill="#5B8FA3" />
            ))}
          </g>
          {[0, 1, 2, 3].map(i => (
            <line key={i} x1="415" y1={120 + i * 40} x2="585" y2={200} stroke={isActive ? '#5B8FA3' : '#E5E5E5'} strokeWidth="1" opacity={isActive ? 0.6 : 0.3} className="transition-all duration-500" />
          ))}
          <circle cx="700" cy="200" r="15" fill={isActive ? '#5B8FA3' : '#E5E5E5'} stroke={isActive ? '#5B8FA3' : '#E5E5E5'} strokeWidth={isActive ? 2 : 1} className="transition-all duration-500" />
          <text x="700" y="240" textAnchor="middle" fontSize="12" fill={isActive ? '#1A1A1A' : '#4A4A4A'} className="font-ui">Output</text>
        </svg>
      ),
    },
  ]

  return (
    <AnimatedDiagram
      steps={steps}
      autoPlay={true}
      stepDuration={1500}
      size="primary"
      diagramId="neural-network"
    />
  )
}
