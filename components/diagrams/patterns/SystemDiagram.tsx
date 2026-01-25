'use client'

import AnimatedDiagram, { type DiagramStep } from '../AnimatedDiagram'

export interface SystemComponent {
  id: string
  label: string
  description?: string
  x: number
  y: number
  width?: number
  height?: number
  color?: string
}

export interface SystemConnection {
  from: string
  to: string
  label?: string
}

export interface SystemDiagramProps {
  components: SystemComponent[]
  connections?: SystemConnection[]
  viewBox?: string
  autoPlay?: boolean
  stepDuration?: number
  size?: 'primary' | 'secondary'
  className?: string
}

export default function SystemDiagram({
  components,
  connections = [],
  viewBox = '0 0 800 500',
  autoPlay = true,
  stepDuration = 1000,
  size = 'primary',
  className = '',
}: SystemDiagramProps) {
  // Create steps that reveal components one by one
  const diagramSteps: DiagramStep[] = components.map((component, index) => ({
    id: component.id,
    label: component.label,
    duration: stepDuration,
    render: (isActive, isPast, isFuture) => {
      const componentColor = component.color || '#5B8FA3'
      
      return (
        <svg
          width="100%"
          height="100%"
          viewBox={viewBox}
          className="overflow-visible"
          key={component.id}
        >
          {/* Render all components up to current */}
          {components.slice(0, index + 1).map((comp, i) => {
            const compIsActive = i === index && isActive
            const compIsPast = i < index || (i === index && isPast)
            const compOpacity = compIsActive ? 1 : compIsPast ? 0.6 : 0.3
            const compStrokeWidth = compIsActive ? 2 : 1
            const compColor = comp.color || '#5B8FA3'

            return (
              <g key={comp.id} opacity={compOpacity}>
                <rect
                  x={comp.x}
                  y={comp.y}
                  width={comp.width || 120}
                  height={comp.height || 60}
                  rx="4"
                  fill={compIsActive ? compColor : '#FAFAF9'}
                  stroke={compIsActive || compIsPast ? compColor : '#E5E5E5'}
                  strokeWidth={compStrokeWidth}
                  className="transition-all duration-500"
                />
                <text
                  x={comp.x + (comp.width || 120) / 2}
                  y={comp.y + (comp.height || 60) / 2 - 8}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fontSize="14"
                  fill={compIsActive ? '#1A1A1A' : '#4A4A4A'}
                  fontWeight={compIsActive ? '600' : '400'}
                  className="font-ui transition-all duration-500"
                >
                  {comp.label}
                </text>
                {comp.description && (
                  <text
                    x={comp.x + (comp.width || 120) / 2}
                    y={comp.y + (comp.height || 60) / 2 + 12}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fontSize="11"
                    fill="#4A4A4A"
                    className="font-ui"
                  >
                    {comp.description}
                  </text>
                )}
              </g>
            )
          })}

          {/* Render connections */}
          {connections
            .filter(conn => {
              const fromIndex = components.findIndex(c => c.id === conn.from)
              const toIndex = components.findIndex(c => c.id === conn.to)
              return fromIndex >= 0 && toIndex >= 0 && fromIndex <= index && toIndex <= index
            })
            .map((conn, connIndex) => {
              const fromComp = components.find(c => c.id === conn.from)!
              const toComp = components.find(c => c.id === conn.to)!
              
              const fromX = fromComp.x + (fromComp.width || 120) / 2
              const fromY = fromComp.y + (fromComp.height || 60)
              const toX = toComp.x + (toComp.width || 120) / 2
              const toY = toComp.y

              const fromIndex = components.findIndex(c => c.id === conn.from)
              const toIndex = components.findIndex(c => c.id === conn.to)
              const connIsActive = (fromIndex === index || toIndex === index) && isActive
              const connIsPast = fromIndex < index && toIndex < index
              const connOpacity = connIsActive ? 1 : connIsPast ? 0.6 : 0.3
              const connColor = connIsActive || connIsPast ? '#5B8FA3' : '#E5E5E5'

              return (
                <g key={`conn-${connIndex}`} opacity={connOpacity}>
                  <line
                    x1={fromX}
                    y1={fromY}
                    x2={toX}
                    y2={toY}
                    stroke={connColor}
                    strokeWidth="2"
                    markerEnd="url(#arrowhead)"
                    className="transition-colors duration-500"
                  />
                  {conn.label && (
                    <text
                      x={(fromX + toX) / 2}
                      y={(fromY + toY) / 2 - 5}
                      textAnchor="middle"
                      fontSize="11"
                      fill="#4A4A4A"
                      className="font-ui"
                    >
                      {conn.label}
                    </text>
                  )}
                </g>
              )
            })}

          <defs>
            <marker
              id="arrowhead"
              markerWidth="10"
              markerHeight="10"
              refX="9"
              refY="3"
              orient="auto"
            >
              <polygon
                points="0 0, 10 3, 0 6"
                fill="#5B8FA3"
                className="transition-colors duration-500"
              />
            </marker>
          </defs>
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
