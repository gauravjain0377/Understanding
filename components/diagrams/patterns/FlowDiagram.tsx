'use client'

import AnimatedDiagram, { type DiagramStep } from '../AnimatedDiagram'

export interface FlowStep {
  id: string
  label: string
  description?: string
  x: number
  y: number
  color?: string
  width?: number
  height?: number
}

export interface FlowDiagramProps {
  steps: FlowStep[]
  arrows?: Array<{ from: number; to: number }>
  viewBox?: string
  autoPlay?: boolean
  stepDuration?: number
  size?: 'primary' | 'secondary'
  className?: string
}

export default function FlowDiagram({
  steps,
  arrows,
  viewBox = '0 0 800 300',
  autoPlay = true,
  stepDuration = 1000,
  size = 'primary',
  className = '',
}: FlowDiagramProps) {
  // Generate arrows if not provided
  const generatedArrows = arrows || steps.slice(0, -1).map((_, i) => ({
    from: i,
    to: i + 1,
  }))

  const diagramSteps: DiagramStep[] = steps.map((step, index) => ({
    id: step.id,
    label: step.label,
    duration: stepDuration,
    render: (isActive, isPast, isFuture) => {
      const stepColor = step.color || '#5B8FA3'
      const isHighlighted = isActive || isPast
      const opacity = isActive ? 1 : isPast ? 0.6 : 0.3
      const strokeWidth = isActive ? 2 : 1

      return (
        <svg
          width="100%"
          height="100%"
          viewBox={viewBox}
          className="overflow-visible"
          key={step.id}
        >
          <defs>
            <marker
              id={`arrowhead-${step.id}`}
              markerWidth="10"
              markerHeight="10"
              refX="9"
              refY="3"
              orient="auto"
            >
              <polygon
                points="0 0, 10 3, 0 6"
                fill={isHighlighted ? stepColor : '#E5E5E5'}
                className="transition-colors duration-500"
              />
            </marker>
          </defs>

          {/* Render all steps up to current */}
          {steps.slice(0, index + 1).map((s, i) => {
            const stepIsActive = i === index && isActive
            const stepIsPast = i < index || (i === index && isPast)
            const stepOpacity = stepIsActive ? 1 : stepIsPast ? 0.6 : 0.3
            const stepStrokeWidth = stepIsActive ? 2 : 1
            const stepColor = s.color || '#5B8FA3'

            return (
              <g key={s.id}>
                {/* Step box */}
                <rect
                  x={s.x}
                  y={s.y}
                  width={s.width || 120}
                  height={s.height || 60}
                  rx="4"
                  fill={stepIsActive ? stepColor : '#FAFAF9'}
                  stroke={stepIsActive || stepIsPast ? stepColor : '#E5E5E5'}
                  strokeWidth={stepStrokeWidth}
                  className="transition-all duration-500"
                  opacity={stepOpacity}
                />
                <text
                  x={s.x + (s.width || 120) / 2}
                  y={s.y + (s.height || 60) / 2}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fontSize="14"
                  fill={stepIsActive ? '#1A1A1A' : '#4A4A4A'}
                  fontWeight={stepIsActive ? '600' : '400'}
                  className="font-ui transition-all duration-500"
                >
                  {s.label}
                </text>
              </g>
            )
          })}

          {/* Render arrows */}
          {generatedArrows
            .filter(arrow => arrow.to <= index + 1)
            .map((arrow, arrowIndex) => {
              const fromStep = steps[arrow.from]
              const toStep = steps[arrow.to]
              const arrowIsActive = arrow.to === index + 1 && isActive
              const arrowIsPast = arrow.to <= index || (arrow.to === index + 1 && isPast)
              const arrowColor = arrowIsActive || arrowIsPast ? (toStep.color || '#5B8FA3') : '#E5E5E5'
              const arrowOpacity = arrowIsActive ? 1 : arrowIsPast ? 0.6 : 0.3

              if (!fromStep || !toStep) return null

              const fromX = fromStep.x + (fromStep.width || 120)
              const fromY = fromStep.y + (fromStep.height || 60) / 2
              const toX = toStep.x
              const toY = toStep.y + (toStep.height || 60) / 2

              return (
                <line
                  key={`arrow-${arrowIndex}`}
                  x1={fromX}
                  y1={fromY}
                  x2={toX}
                  y2={toY}
                  stroke={arrowColor}
                  strokeWidth="2"
                  markerEnd={`url(#arrowhead-${toStep.id})`}
                  className="transition-colors duration-500"
                  opacity={arrowOpacity}
                />
              )
            })}
        </svg>
      )
    },
  }))

  return (
    <AnimatedDiagram
      steps={diagramSteps}
      autoPlay={autoPlay}
      stepDuration={stepDuration}
      size={size}
      className={className}
    />
  )
}
