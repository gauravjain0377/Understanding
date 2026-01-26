'use client'

import { DIAGRAM_INK, LINE_WEIGHTS, OPACITY, getStateColor } from '@/lib/diagram-theme'

export interface LeaderLineProps {
  x1: number
  y1: number
  x2: number
  y2: number
  isActive?: boolean
  isPast?: boolean
  isFuture?: boolean
  weight?: 'primary' | 'secondary' | 'guide'
  dashed?: boolean
  showArrow?: boolean
  markerId?: string
  className?: string
}

/**
 * LeaderLine - Straight leader line connecting labels to diagram elements
 * 
 * Always straight (no curves). Uses theme line weights and opacity.
 * Optional arrow marker at the end.
 */
export default function LeaderLine({
  x1,
  y1,
  x2,
  y2,
  isActive = false,
  isPast = false,
  isFuture = true,
  weight = 'secondary',
  dashed = false,
  showArrow = false,
  markerId,
  className = '',
}: LeaderLineProps) {
  const strokeWidth = weight === 'primary' 
    ? LINE_WEIGHTS.primary 
    : weight === 'guide' 
    ? LINE_WEIGHTS.guide 
    : LINE_WEIGHTS.secondary

  const color = getStateColor(isActive, isPast, isFuture)
  const uniqueMarkerId = markerId || `arrow-${x1}-${y1}-${x2}-${y2}`

  return (
    <>
      {showArrow && (
        <defs>
          <marker
            id={uniqueMarkerId}
            markerWidth="8"
            markerHeight="8"
            refX="7"
            refY="4"
            orient="auto"
          >
            <path
              d="M 0 0 L 8 4 L 0 8"
              fill={color}
            />
          </marker>
        </defs>
      )}
      <line
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
        stroke={color}
        strokeWidth={strokeWidth}
        strokeDasharray={dashed ? '4 4' : undefined}
        markerEnd={showArrow ? `url(#${uniqueMarkerId})` : undefined}
        className={className}
        style={{
          opacity: isActive ? OPACITY.active : isPast ? OPACITY.past : OPACITY.future,
        }}
      />
    </>
  )
}
