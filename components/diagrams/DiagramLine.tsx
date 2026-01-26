'use client'

import { DIAGRAM_INK, LINE_WEIGHTS, OPACITY, getStateColor } from '@/lib/diagram-theme'

export interface DiagramLineProps {
  x1: number
  y1: number
  x2: number
  y2: number
  isActive?: boolean
  isPast?: boolean
  isFuture?: boolean
  weight?: 'primary' | 'secondary' | 'guide'
  dashed?: boolean
  className?: string
}

/**
 * DiagramLine - Base line component with weight hierarchy
 * 
 * Supports primary (thick), secondary (medium), and guide (thin) weights.
 * Can be solid or dashed for guides.
 */
export default function DiagramLine({
  x1,
  y1,
  x2,
  y2,
  isActive = false,
  isPast = false,
  isFuture = true,
  weight = 'primary',
  dashed = false,
  className = '',
}: DiagramLineProps) {
  const strokeWidth = weight === 'primary' 
    ? LINE_WEIGHTS.primary 
    : weight === 'guide' 
    ? LINE_WEIGHTS.guide 
    : LINE_WEIGHTS.secondary

  const color = getStateColor(isActive, isPast, isFuture)

  return (
    <line
      x1={x1}
      y1={y1}
      x2={x2}
      y2={y2}
      stroke={color}
      strokeWidth={strokeWidth}
      strokeDasharray={dashed ? '4 4' : undefined}
      className={className}
      style={{
        opacity: isActive ? OPACITY.active : isPast ? OPACITY.past : OPACITY.future,
      }}
    />
  )
}
