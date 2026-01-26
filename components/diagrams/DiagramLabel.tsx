'use client'

import { DIAGRAM_INK, TYPOGRAPHY, getTextColor } from '@/lib/diagram-theme'

export interface DiagramLabelProps {
  x: number
  y: number
  text: string
  isActive?: boolean
  isPast?: boolean
  isFuture?: boolean
  size?: 'small' | 'normal' | 'large'
  textAnchor?: 'start' | 'middle' | 'end'
  className?: string
}

/**
 * DiagramLabel - Technical typography label for diagrams
 * 
 * Uses JetBrains Mono, uppercase, with proper spacing.
 * Automatically adjusts opacity based on animation state.
 */
export default function DiagramLabel({
  x,
  y,
  text,
  isActive = false,
  isPast = false,
  isFuture = true,
  size = 'normal',
  textAnchor = 'middle',
  className = '',
}: DiagramLabelProps) {
  const fontSize = size === 'large' 
    ? TYPOGRAPHY.fontSize.large 
    : size === 'small' 
    ? TYPOGRAPHY.fontSize.small 
    : TYPOGRAPHY.fontSize.label

  const color = getTextColor(isActive, isPast, isFuture)

  return (
    <text
      x={x}
      y={y}
      textAnchor={textAnchor}
      fontSize={fontSize}
      fill={color}
      fontFamily={TYPOGRAPHY.fontFamily}
      fontWeight={TYPOGRAPHY.fontWeight.medium}
      letterSpacing={`${TYPOGRAPHY.letterSpacing}em`}
      textTransform="uppercase"
      className={`diagram-label diagram-label-${size} ${className}`}
    >
      {text.toUpperCase()}
    </text>
  )
}
