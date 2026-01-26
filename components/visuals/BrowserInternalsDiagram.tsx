'use client'

import AnimatedDiagram, { type DiagramStep } from '../diagrams/AnimatedDiagram'
import { DIAGRAM_INK, DIAGRAM_BACKGROUND, LINE_WEIGHTS, OPACITY, getInkColor, getStateColor } from '@/lib/diagram-theme'
import DiagramLabel from '../diagrams/DiagramLabel'

export default function BrowserInternalsDiagram() {
  const steps: DiagramStep[] = [
    {
      id: 'parse',
      label: 'Parse HTML/CSS',
      render: (isActive, isPast, isFuture) => (
        <svg width="100%" height="100%" viewBox="0 0 1000 600" className="overflow-visible" preserveAspectRatio="xMidYMid meet">
          <rect 
            x="100" 
            y="200" 
            width="220" 
            height="120" 
            rx="4" 
            fill={DIAGRAM_BACKGROUND} 
            stroke={getStateColor(isActive, isPast, isFuture)} 
            strokeWidth={isActive ? LINE_WEIGHTS.primary : LINE_WEIGHTS.secondary}
            style={{ transition: `stroke ${700}ms ease-out` }}
          />
          <DiagramLabel 
            x={210} 
            y={265} 
            text="HTML/CSS" 
            isActive={isActive}
            isPast={isPast}
            isFuture={isFuture}
            size="normal"
          />
        </svg>
      ),
    },
    {
      id: 'dom',
      label: 'Build DOM',
      render: (isActive, isPast, isFuture) => {
        const pastOpacity = isPast ? OPACITY.past : OPACITY.active
        return (
          <svg width="100%" height="100%" viewBox="0 0 1000 600" className="overflow-visible" preserveAspectRatio="xMidYMid meet">
            <defs>
              <marker id="arrow-browser-1" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
                <path d="M 0 0 L 8 4 L 0 8" fill={getStateColor(isActive, isPast, isFuture)} />
              </marker>
            </defs>
            <g opacity={pastOpacity}>
              <rect x="100" y="200" width="220" height="120" rx="4" fill={DIAGRAM_BACKGROUND} stroke={getInkColor(OPACITY.past)} strokeWidth={LINE_WEIGHTS.secondary} />
            </g>
            <line 
              x1="320" 
              y1="260" 
              x2="380" 
              y2="260" 
              stroke={getStateColor(isActive, isPast, isFuture)} 
              strokeWidth={LINE_WEIGHTS.secondary} 
              markerEnd="url(#arrow-browser-1)"
              style={{ transition: `stroke ${700}ms ease-out` }}
            />
            <rect 
              x="380" 
              y="200" 
              width="220" 
              height="120" 
              rx="4" 
              fill={DIAGRAM_BACKGROUND} 
              stroke={getStateColor(isActive, isPast, isFuture)} 
              strokeWidth={isActive ? LINE_WEIGHTS.primary : LINE_WEIGHTS.secondary}
              style={{ transition: `stroke ${700}ms ease-out` }}
            />
            <DiagramLabel 
              x={490} 
              y={265} 
              text="DOM Tree" 
              isActive={isActive}
              isPast={isPast}
              isFuture={isFuture}
              size="normal"
            />
          </svg>
        )
      },
    },
    {
      id: 'render',
      label: 'Render Tree',
      render: (isActive, isPast, isFuture) => {
        const pastOpacity = OPACITY.past
        return (
          <svg width="100%" height="100%" viewBox="0 0 1000 600" className="overflow-visible" preserveAspectRatio="xMidYMid meet">
            <defs>
              <marker id="arrow-browser-2a" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
                <path d="M 0 0 L 8 4 L 0 8" fill={getInkColor(pastOpacity)} />
              </marker>
              <marker id="arrow-browser-2b" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
                <path d="M 0 0 L 8 4 L 0 8" fill={getStateColor(isActive, isPast, isFuture)} />
              </marker>
            </defs>
            <g opacity={pastOpacity}>
              <rect x="100" y="200" width="220" height="120" rx="4" fill={DIAGRAM_BACKGROUND} stroke={getInkColor(pastOpacity)} strokeWidth={LINE_WEIGHTS.secondary} />
              <rect x="380" y="200" width="220" height="120" rx="4" fill={DIAGRAM_BACKGROUND} stroke={getInkColor(pastOpacity)} strokeWidth={LINE_WEIGHTS.secondary} />
            </g>
            <line x1="320" y1="260" x2="380" y2="260" stroke={getInkColor(pastOpacity)} strokeWidth={LINE_WEIGHTS.secondary} markerEnd="url(#arrow-browser-2a)" />
            <line 
              x1="600" 
              y1="260" 
              x2="660" 
              y2="260" 
              stroke={getStateColor(isActive, isPast, isFuture)} 
              strokeWidth={LINE_WEIGHTS.secondary} 
              markerEnd="url(#arrow-browser-2b)"
              style={{ transition: `stroke ${700}ms ease-out` }}
            />
            <rect 
              x="660" 
              y="200" 
              width="220" 
              height="120" 
              rx="4" 
              fill={DIAGRAM_BACKGROUND} 
              stroke={getStateColor(isActive, isPast, isFuture)} 
              strokeWidth={isActive ? LINE_WEIGHTS.primary : LINE_WEIGHTS.secondary}
              style={{ transition: `stroke ${700}ms ease-out` }}
            />
            <DiagramLabel 
              x={770} 
              y={265} 
              text="Render Tree" 
              isActive={isActive}
              isPast={isPast}
              isFuture={isFuture}
              size="normal"
            />
          </svg>
        )
      },
    },
    {
      id: 'paint',
      label: 'Paint Pixels',
      render: (isActive, isPast, isFuture) => {
        const pastOpacity = OPACITY.past
        const pixelFill = isActive ? getInkColor(OPACITY.active) : getInkColor(OPACITY.future)
        return (
          <svg width="100%" height="100%" viewBox="0 0 1000 600" className="overflow-visible" preserveAspectRatio="xMidYMid meet">
            <defs>
              <marker id="arrow-browser-3a" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
                <path d="M 0 0 L 8 4 L 0 8" fill={getInkColor(pastOpacity)} />
              </marker>
              <marker id="arrow-browser-3b" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
                <path d="M 0 0 L 8 4 L 0 8" fill={getInkColor(pastOpacity)} />
              </marker>
              <marker id="arrow-browser-3c" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
                <path d="M 0 0 L 8 4 L 0 8" fill={getStateColor(isActive, isPast, isFuture)} />
              </marker>
            </defs>
            <g opacity={pastOpacity}>
              <rect x="100" y="200" width="220" height="120" rx="4" fill={DIAGRAM_BACKGROUND} stroke={getInkColor(pastOpacity)} strokeWidth={LINE_WEIGHTS.secondary} />
              <rect x="380" y="200" width="220" height="120" rx="4" fill={DIAGRAM_BACKGROUND} stroke={getInkColor(pastOpacity)} strokeWidth={LINE_WEIGHTS.secondary} />
              <rect x="660" y="200" width="220" height="120" rx="4" fill={DIAGRAM_BACKGROUND} stroke={getInkColor(pastOpacity)} strokeWidth={LINE_WEIGHTS.secondary} />
            </g>
            <line x1="320" y1="260" x2="380" y2="260" stroke={getInkColor(pastOpacity)} strokeWidth={LINE_WEIGHTS.secondary} markerEnd="url(#arrow-browser-3a)" />
            <line x1="600" y1="260" x2="660" y2="260" stroke={getInkColor(pastOpacity)} strokeWidth={LINE_WEIGHTS.secondary} markerEnd="url(#arrow-browser-3b)" />
            <line 
              x1="880" 
              y1="260" 
              x2="920" 
              y2="260" 
              stroke={getStateColor(isActive, isPast, isFuture)} 
              strokeWidth={LINE_WEIGHTS.secondary} 
              markerEnd="url(#arrow-browser-3c)"
              style={{ transition: `stroke ${700}ms ease-out` }}
            />
            <rect 
              x="920" 
              y="160" 
              width="60" 
              height="200" 
              rx="4" 
              fill={DIAGRAM_BACKGROUND} 
              stroke={getStateColor(isActive, isPast, isFuture)} 
              strokeWidth={isActive ? LINE_WEIGHTS.primary : LINE_WEIGHTS.secondary}
              style={{ transition: `stroke ${700}ms ease-out` }}
            />
            {[0, 1, 2, 3, 4].map(i => 
              [0, 1, 2, 3, 4, 5].map(j => (
                <rect
                  key={`${i}-${j}`}
                  x={930 + i * 20}
                  y={170 + j * 28}
                  width="18"
                  height="24"
                  fill={pixelFill}
                  stroke={getInkColor(OPACITY.muted)}
                  strokeWidth={0.5}
                  style={{ transition: `fill ${700}ms ease-out` }}
                />
              ))
            )}
            <DiagramLabel 
              x={950} 
              y={380} 
              text="Pixels" 
              isActive={isActive}
              isPast={isPast}
              isFuture={isFuture}
              size="small"
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
      diagramId="browser-internals"
    />
  )
}
