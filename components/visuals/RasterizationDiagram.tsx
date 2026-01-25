'use client'

import AnimatedDiagram, { type DiagramStep } from '../diagrams/AnimatedDiagram'

export default function RasterizationDiagram() {
  const steps: DiagramStep[] = [
    {
      id: 'vector',
      label: 'Vector Path',
      render: (isActive) => (
        <svg width="100%" height="100%" viewBox="0 0 1200 600" className="overflow-visible" preserveAspectRatio="xMidYMid meet">
          <path
            d="M 250 300 Q 500 150, 750 300 T 1100 300"
            fill="none"
            stroke={isActive ? '#4A7C8F' : '#E8E8E6'}
            strokeWidth="8"
            className="transition-colors duration-700"
          />
          <text x="600" y="120" textAnchor="middle" fontSize="24" fill={isActive ? '#1C1C1C' : '#5A5A5A'} fontWeight={isActive ? '600' : '400'} className="font-ui">Smooth Vector Curve</text>
        </svg>
      ),
      duration: 2500, // Slower for first step to let users understand
    },
    {
      id: 'grid',
      label: 'Pixel Grid',
      render: (isActive, isPast) => (
        <svg width="100%" height="100%" viewBox="0 0 1200 600" className="overflow-visible" preserveAspectRatio="xMidYMid meet">
          <g opacity={isPast ? 0.6 : 1}>
            <path
              d="M 200 250 Q 400 120, 600 250 T 900 250"
              fill="none"
              stroke="#4A7C8F"
              strokeWidth="6"
            />
          </g>
          {/* Larger, more visible pixel grid */}
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20].map(i => 
            [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(j => (
              <rect
                key={`${i}-${j}`}
                x={150 + i * 35}
                y={150 + j * 35}
                width="35"
                height="35"
                fill="none"
                stroke={isActive ? '#E5E5E5' : '#F5F5F5'}
                strokeWidth="1.5"
                className="transition-colors duration-700"
              />
            ))
          )}
          <text x="600" y="120" textAnchor="middle" fontSize="24" fill={isActive ? '#1C1C1C' : '#5A5A5A'} fontWeight={isActive ? '600' : '400'} className="font-ui">Pixel Grid Overlay</text>
        </svg>
      ),
      duration: 2500, // Slower to see the grid clearly
    },
    {
      id: 'pixels',
      label: 'Rasterized',
      render: (isActive, isPast) => (
        <svg width="100%" height="100%" viewBox="0 0 1200 600" className="overflow-visible" preserveAspectRatio="xMidYMid meet">
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20].map(i => 
            [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(j => {
              const x = 150 + i * 35
              const y = 150 + j * 35
              // Calculate distance from curve (simplified)
              const centerX = x + 17.5
              const centerY = y + 17.5
              // Approximate curve position at this x
              const curveY = 250 + Math.sin((centerX - 500) / 200) * 100
              const dist = Math.abs(centerY - curveY) / 100
              const fill = dist < 0.25 ? '#4A7C8F' : dist < 0.4 ? '#6A8C9F' : dist < 0.6 ? '#8A9CAF' : '#FBFBF9'
              return (
                <rect
                  key={`${i}-${j}`}
                  x={x}
                  y={y}
                  width="35"
                  height="35"
                  fill={fill}
                  stroke="#E8E8E6"
                  strokeWidth="1.5"
                  className="transition-all duration-700"
                />
              )
            })
          )}
          <text x="600" y="120" textAnchor="middle" fontSize="24" fill={isActive ? '#1C1C1C' : '#5A5A5A'} fontWeight={isActive ? '600' : '400'} className="font-ui">Rasterized Pixels</text>
        </svg>
      ),
      duration: 3000, // Longest step to appreciate the result
    },
  ]

  return (
    <AnimatedDiagram
      steps={steps}
      autoPlay={true}
      stepDuration={2500} // Base duration - individual steps can override
      size="primary"
      diagramId="rasterization"
      animationSpeed="normal"
    />
  )
}
