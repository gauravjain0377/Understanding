'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { ANIMATION, OPACITY } from '@/lib/diagram-theme'

export type PlaybackState = 'idle' | 'playing'

export interface DiagramStep {
  id: string
  render: (isActive: boolean, isPast: boolean, isFuture: boolean) => React.ReactNode
  label?: string
  duration?: number // Optional custom duration for this step
}

export interface AnimatedDiagramProps {
  steps: DiagramStep[]
  stepDuration?: number // Default duration for steps (calm, readable animations)
  size?: 'primary' | 'secondary'
  onStepChange?: (step: number) => void
  className?: string
  diagramId?: string // Optional explicit diagram ID
  animationSpeed?: 'slow' | 'normal' | 'fast' // Speed modifier for dense diagrams
}

export default function AnimatedDiagram({
  steps,
  stepDuration = ANIMATION.stepDuration, // Use theme default: 2500ms for calm animations
  size = 'primary',
  onStepChange,
  className = '',
  diagramId,
  animationSpeed = 'normal',
}: AnimatedDiagramProps) {
  // Calculate actual step duration based on speed modifier
  const speedMultiplier = animationSpeed === 'slow' ? 1.5 : animationSpeed === 'fast' ? 0.7 : 1
  const actualStepDuration = stepDuration * speedMultiplier
  const id = diagramId || steps[0]?.id || 'diagram'
  const [currentStep, setCurrentStep] = useState<number>(-1)
  const [playbackState, setPlaybackState] = useState<PlaybackState>('idle')
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const advanceStep = useCallback(() => {
    if (currentStep < steps.length - 1) {
      const nextStep = currentStep + 1
      setCurrentStep(nextStep)
      onStepChange?.(nextStep)
    } else {
      // Loop back to beginning for continuous animation
      setCurrentStep(0)
      onStepChange?.(0)
    }
  }, [currentStep, steps.length, onStepChange])

  const start = useCallback(() => {
    setPlaybackState('playing')
    
    // Start immediately if we're at the beginning or completed
    if (currentStep === -1 || currentStep >= steps.length - 1) {
      setCurrentStep(0)
      onStepChange?.(0)
    }

    // Clear any existing interval
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }

    // Set up interval for continuous looping
    intervalRef.current = setInterval(() => {
      advanceStep()
    }, actualStepDuration)
  }, [currentStep, advanceStep, actualStepDuration, steps.length, onStepChange])

  const pause = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
    setPlaybackState('idle')
  }, [])

  // Auto-play continuously when diagram enters viewport (always enabled)
  useEffect(() => {
    const container = document.querySelector(`[data-diagram-id="${id}"]`)
    if (!container) return

    let timer: NodeJS.Timeout | null = null

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && playbackState === 'idle') {
            // Small delay to ensure smooth entry
            timer = setTimeout(() => {
              start()
            }, 600)
          } else if (!entry.isIntersecting && playbackState === 'playing') {
            // Pause when out of viewport to save resources
            pause()
          }
        })
      },
      {
        threshold: 0.25, // Trigger when 25% of diagram is visible
        rootMargin: '50px', // Start slightly before fully visible
      }
    )

    observer.observe(container)

    return () => {
      observer.disconnect()
      if (timer) clearTimeout(timer)
    }
  }, [playbackState, start, pause, id])

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [])


  // Determine step states
  const getStepState = (index: number) => {
    if (currentStep === -1) {
      return { isActive: false, isPast: false, isFuture: true }
    }
    if (index < currentStep) {
      return { isActive: false, isPast: true, isFuture: false }
    }
    if (index === currentStep) {
      return { isActive: true, isPast: false, isFuture: false }
    }
    return { isActive: false, isPast: false, isFuture: true }
  }

  // Balanced aspect ratio for large screens - prevents overly wide diagrams
  const sizeClasses = size === 'primary' 
    ? 'w-full h-full min-h-[70vh] lg:min-h-[75vh]' 
    : 'w-full h-full min-h-[50vh]'

  return (
    <div 
      className={`relative ${sizeClasses} ${className}`}
      data-diagram-id={id}
    >
      <div className="w-full h-full relative overflow-hidden">
        {steps.map((step, index) => {
          const { isActive, isPast, isFuture } = getStepState(index)
          // Use theme opacity values for calm, technical appearance
          const opacity = isActive ? OPACITY.active : isPast ? OPACITY.past : OPACITY.future
          return (
            <div
              key={step.id}
              className="absolute inset-0 z-0"
              style={{
                opacity,
                transition: `opacity ${ANIMATION.transitionDuration}ms ${ANIMATION.easing}`,
                zIndex: isActive ? 10 : 0,
              }}
            >
              {step.render(isActive, isPast, isFuture)}
            </div>
          )
        })}
      </div>
    </div>
  )
}
