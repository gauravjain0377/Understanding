/**
 * Diagram Theme Constants
 * 
 * Defines the visual design system for all diagrams following
 * engineering blueprint aesthetics: single ink color, technical typography,
 * clear line hierarchies, and calm animations.
 */

// Single ink color - soft blue for all diagram elements
export const DIAGRAM_INK = '#4A7C8F'

// Background color - off-white
export const DIAGRAM_BACKGROUND = '#FBFBF9'

// Text colors - always dark for readability
export const TEXT_COLORS = {
  primary: '#1A1A1A',      // Dark text for active/past states
  secondary: '#4A4A4A',    // Medium dark for secondary text
  muted: '#6A6A6A',        // Slightly lighter but still readable
  border: '#1A1A1A',       // Dark borders for visibility
} as const

// Line weight hierarchy
export const LINE_WEIGHTS = {
  primary: 4,    // Main outlines and structural elements (increased from 2.5)
  secondary: 2.5,  // Internal details and connections (increased from 1.5)
  guide: 1,      // Dashed guides and reference lines (increased from 0.5)
} as const

// Opacity levels for animation states
export const OPACITY = {
  active: 1.0,     // Currently active step
  past: 0.4,       // Previously shown steps
  future: 0.15,    // Upcoming steps
  muted: 0.2,      // Inactive elements
} as const

// Animation timing (calm, readable, not aggressive)
export const ANIMATION = {
  stepDuration: 2200,      // Default duration per step (ms) - medium speed, ~2.2 seconds
  transitionDuration: 700,  // Transition between steps (ms)
  easing: 'ease-out',      // Calm easing, no bounce
} as const

// Typography settings
export const TYPOGRAPHY = {
  fontFamily: 'var(--font-technical)', // JetBrains Mono
  fontSize: {
    label: 20,      // Standard label size (increased from 14)
    large: 24,      // Important labels (increased from 16)
    small: 16,     // Secondary labels (increased from 12)
  },
  letterSpacing: 0.1,  // Uppercase letter spacing
  fontWeight: {
    normal: 400,
    medium: 500,
    bold: 600,
  },
} as const

// Helper functions for color with opacity
export const getInkColor = (opacity: number = 1): string => {
  const r = parseInt(DIAGRAM_INK.slice(1, 3), 16)
  const g = parseInt(DIAGRAM_INK.slice(3, 5), 16)
  const b = parseInt(DIAGRAM_INK.slice(5, 7), 16)
  return `rgba(${r}, ${g}, ${b}, ${opacity})`
}

// Helper to get color for animation state (for shapes/lines)
export const getStateColor = (
  isActive: boolean,
  isPast: boolean,
  isFuture: boolean
): string => {
  if (isActive) return getInkColor(OPACITY.active)
  if (isPast) return getInkColor(OPACITY.past)
  if (isFuture) return getInkColor(OPACITY.future)
  return getInkColor(OPACITY.muted)
}

// Helper to get text color - always dark for readability
export const getTextColor = (
  isActive: boolean,
  isPast: boolean,
  isFuture: boolean
): string => {
  if (isActive) return TEXT_COLORS.primary
  if (isPast) return TEXT_COLORS.secondary
  return TEXT_COLORS.muted // Even future text should be readable
}

// Helper to get border color - always visible
export const getBorderColor = (
  isActive: boolean,
  isPast: boolean,
  isFuture: boolean
): string => {
  if (isActive) return getInkColor(OPACITY.active)
  if (isPast) return getInkColor(OPACITY.past)
  return TEXT_COLORS.border // Future borders should be dark and visible
}

// Helper to get text color for elements on colored backgrounds (boxes, circles, etc.)
// Returns white when active (on colored bg), dark when inactive/past (on light bg)
export const getTextColorForShape = (
  isActive: boolean,
  isPast: boolean,
  hasColoredBackground: boolean = false
): string => {
  // If the shape has a colored background when active, use white text
  // Otherwise, always use dark text for visibility
  if (hasColoredBackground && isActive) {
    return '#FFFFFF'
  }
  // When past or inactive, background is light, so text must be dark
  return TEXT_COLORS.primary
}
