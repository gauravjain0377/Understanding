'use client'

import AnimatedDiagram, { type DiagramStep } from '../diagrams/AnimatedDiagram'

export default function GpuModelDiagram() {
  const steps: DiagramStep[] = [
    {
      id: 'cpu',
      label: 'CPU (Sequential)',
      render: (isActive, isPast) => {
        // Text should always be dark since background is always light (never colored for CPU step)
        const textColor = '#1A1A1A'
        return (
        <svg width="100%" height="100%" viewBox="0 0 800 400" className="overflow-visible">
          <rect x="100" y="150" width="120" height="100" rx="4" fill={isActive ? '#5B8FA3' : '#FAFAF9'} stroke={isActive ? '#5B8FA3' : '#1A1A1A'} strokeWidth={isActive ? 3 : 2} className="transition-all duration-500" />
          <text x="160" y="200" textAnchor="middle" fontSize="12" fill={isActive ? '#FFFFFF' : textColor} fontWeight="600" className="font-ui">CPU</text>
          <text x="160" y="220" textAnchor="middle" fontSize="10" fill={isActive ? '#FFFFFF' : textColor} className="font-ui">Few cores</text>
          <text x="160" y="280" textAnchor="middle" fontSize="11" fill={isActive ? '#FFFFFF' : textColor} className="font-ui">Sequential</text>
        </svg>
        )
      },
    },
    {
      id: 'gpu',
      label: 'GPU (Parallel)',
      render: (isActive, isPast) => {
        // Text should always be visible: dark on light backgrounds, white on colored backgrounds
        const cpuTextColor = isPast ? '#1A1A1A' : (isActive ? '#1A1A1A' : '#1A1A1A')
        const gpuTextColor = isActive ? '#FFFFFF' : '#1A1A1A'
        const gpuLabelColor = isActive ? '#FFFFFF' : '#1A1A1A'
        
        return (
        <svg width="100%" height="100%" viewBox="0 0 800 400" className="overflow-visible">
          <g opacity={isPast ? 0.8 : 1}>
            <rect x="100" y="150" width="120" height="100" rx="4" fill="#FAFAF9" stroke="#1A1A1A" strokeWidth="2" />
            <text x="160" y="200" textAnchor="middle" fontSize="12" fill={cpuTextColor} fontWeight="600" className="font-ui">CPU</text>
            <text x="160" y="220" textAnchor="middle" fontSize="10" fill={cpuTextColor} className="font-ui">Few cores</text>
            <text x="160" y="280" textAnchor="middle" fontSize="11" fill={cpuTextColor} className="font-ui">Sequential</text>
          </g>
          <line x1="220" y1="200" x2="280" y2="200" stroke={isActive ? '#5B8FA3' : '#1A1A1A'} strokeWidth="3" markerEnd="url(#arrow)" className="transition-colors duration-500" />
          <rect x="280" y="100" width="400" height="200" rx="4" fill={isActive ? '#5B8FA3' : '#FAFAF9'} stroke={isActive ? '#5B8FA3' : '#1A1A1A'} strokeWidth={isActive ? 3 : 2} className="transition-all duration-500" />
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(i => 
            [0, 1, 2, 3].map(j => (
              <rect
                key={`${i}-${j}`}
                x={290 + i * 38}
                y={110 + j * 45}
                width="35"
                height="40"
                fill={isActive ? '#8FA3B0' : '#FAFAF9'}
                stroke={isActive ? '#5B8FA3' : '#1A1A1A'}
                strokeWidth="2"
                className="transition-all duration-500"
              />
            ))
          )}
          <text x="480" y="80" textAnchor="middle" fontSize="14" fill={gpuLabelColor} fontWeight={isActive ? '600' : '400'} className="font-ui">GPU: Thousands of Cores</text>
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
      diagramId="gpu-model"
    />
  )
}
