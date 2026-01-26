'use client'

import AnimatedDiagram, { type DiagramStep } from '../diagrams/AnimatedDiagram'
import { DIAGRAM_INK, DIAGRAM_BACKGROUND, LINE_WEIGHTS, OPACITY, getInkColor, getStateColor } from '@/lib/diagram-theme'
import DiagramLabel from '../diagrams/DiagramLabel'

export default function RasterizationDiagram() {
  const steps: DiagramStep[] = [
    {
      id: 'vector',
      label: 'Vector Path',
      render: (isActive, isPast, isFuture) => (
        <svg width="100%" height="100%" viewBox="0 0 1200 600" className="overflow-visible" preserveAspectRatio="xMidYMid meet">
          <path
            d="M 250 300 Q 500 150, 750 300 T 1100 300"
            fill="none"
            stroke={getStateColor(isActive, isPast, isFuture)}
            strokeWidth={LINE_WEIGHTS.primary}
            style={{ transition: `stroke ${700}ms ease-out` }}
          />
          <DiagramLabel 
            x={600} 
            y={120} 
            text="Smooth Vector Curve" 
            isActive={isActive}
            isPast={isPast}
            isFuture={isFuture}
            size="large"
          />
        </svg>
      ),
    },
    {
      id: 'grid',
      label: 'Pixel Grid',
      render: (isActive, isPast, isFuture) => {
        const pastOpacity = isPast ? OPACITY.past : OPACITY.active
        return (
          <svg width="100%" height="100%" viewBox="0 0 1200 600" className="overflow-visible" preserveAspectRatio="xMidYMid meet">
            <g opacity={pastOpacity}>
              <path
                d="M 200 250 Q 400 120, 600 250 T 900 250"
                fill="none"
                stroke={getInkColor(pastOpacity)}
                strokeWidth={LINE_WEIGHTS.secondary}
              />
            </g>
            {/* Pixel grid - guide lines */}
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20].map(i => 
              [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(j => (
                <rect
                  key={`${i}-${j}`}
                  x={150 + i * 35}
                  y={150 + j * 35}
                  width="35"
                  height="35"
                  fill="none"
                  stroke={isActive ? getInkColor(OPACITY.muted) : getInkColor(OPACITY.future)}
                  strokeWidth={LINE_WEIGHTS.guide}
                  style={{ transition: `stroke ${700}ms ease-out` }}
                />
              ))
            )}
            <DiagramLabel 
              x={600} 
              y={120} 
              text="Pixel Grid Overlay" 
              isActive={isActive}
              isPast={isPast}
              isFuture={isFuture}
              size="large"
            />
          </svg>
        )
      },
    },
    {
      id: 'pixels',
      label: 'Rasterized',
      render: (isActive, isPast, isFuture) => {
        // Use single ink color with opacity variations based on distance from curve
        return (
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
                // Use single ink color with opacity based on distance (no gradients)
                const pixelOpacity = dist < 0.25 ? OPACITY.active : dist < 0.4 ? 0.7 : dist < 0.6 ? 0.4 : 0.1
                const fill = dist < 0.6 ? getInkColor(pixelOpacity) : DIAGRAM_BACKGROUND
                return (
                  <rect
                    key={`${i}-${j}`}
                    x={x}
                    y={y}
                    width="35"
                    height="35"
                    fill={fill}
                    stroke={getInkColor(OPACITY.muted)}
                    strokeWidth={LINE_WEIGHTS.guide}
                    style={{ transition: `fill ${700}ms ease-out` }}
                  />
                )
              })
            )}
            <DiagramLabel 
              x={600} 
              y={120} 
              text="Rasterized Pixels" 
              isActive={isActive}
              isPast={isPast}
              isFuture={isFuture}
              size="large"
            />
          </svg>
        )
      },
    },
  ]

  return (
    <AnimatedDiagram
      steps={steps}
      stepDuration={2500}
      size="primary"
      diagramId="rasterization"
      animationSpeed="normal"
    />
  )
}
