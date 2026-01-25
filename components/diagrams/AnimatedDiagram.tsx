'use client'

import { useState, useEffect, useRef, useCallback } from 'react'

export type PlaybackState = 'idle' | 'playing' | 'paused' | 'completed'

export interface DiagramStep {
  id: string
  render: (isActive: boolean, isPast: boolean, isFuture: boolean) => React.ReactNode
  label?: string
  duration?: number // Optional custom duration for this step
}

export interface AnimatedDiagramProps {
  steps: DiagramStep[]
  autoPlay?: boolean
  stepDuration?: number // Default duration for steps without custom duration (increased default for calm animations)
  size?: 'primary' | 'secondary'
  onStepChange?: (step: number) => void
  onStateChange?: (state: PlaybackState) => void
  className?: string
  diagramId?: string // Optional explicit diagram ID for control integration
  animationSpeed?: 'slow' | 'normal' | 'fast' // Speed modifier for dense diagrams
}

export default function AnimatedDiagram({
  steps,
  autoPlay = true,
  stepDuration = 2000, // Default to 2 seconds for calm, readable animations
  size = 'primary',
  onStepChange,
  onStateChange,
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
  const hasAutoPlayedRef = useRef(false)

  const updateState = useCallback((newState: PlaybackState) => {
    setPlaybackState(newState)
    onStateChange?.(newState)
  }, [onStateChange])

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
    updateState('playing')
    
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
  }, [currentStep, advanceStep, actualStepDuration, updateState, steps.length, onStepChange])

  const pause = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
    updateState('paused')
  }, [updateState])

  const restart = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
    setCurrentStep(-1)
    updateState('idle')
    onStepChange?.(-1)
  }, [updateState, onStepChange])

  // Auto-play continuously when diagram enters viewport if enabled
  useEffect(() => {
    if (!autoPlay) return

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
  }, [autoPlay, playbackState, start, pause, id])

  // Listen for external control events
  useEffect(() => {
    const container = document.querySelector(`[data-diagram-id="${id}"]`)
    if (!container) return

    const handleStart = () => {
      if (playbackState !== 'playing') {
        start()
      }
    }

    const handlePause = () => {
      if (playbackState === 'playing') {
        pause()
      }
    }

    const handleRestart = () => {
      restart()
    }

    container.addEventListener('diagram-start', handleStart)
    container.addEventListener('diagram-pause', handlePause)
    container.addEventListener('diagram-restart', handleRestart)

    return () => {
      container.removeEventListener('diagram-start', handleStart)
      container.removeEventListener('diagram-pause', handlePause)
      container.removeEventListener('diagram-restart', handleRestart)
    }
  }, [playbackState, start, pause, restart, id])

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [])

  // Handle custom step durations - removed as we use setInterval for continuous looping
  // The interval handles all step transitions uniformly

  // Emit events for external control
  useEffect(() => {
    const container = document.querySelector(`[data-diagram-id="${id}"]`)
    if (container) {
      const stateEvent = new CustomEvent('diagram-state-change', { detail: playbackState })
      container.dispatchEvent(stateEvent)
      
      const stepEvent = new CustomEvent('diagram-step-change', { detail: currentStep })
      container.dispatchEvent(stepEvent)
    }
  }, [playbackState, currentStep, id])

  // Expose controls via data attribute (for parent components)
  const controls = {
    start,
    pause,
    restart,
    playbackState,
    currentStep,
    totalSteps: steps.length,
  }

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
      data-diagram-controls={JSON.stringify(controls)}
    >
      <div className="w-full h-full">
        {steps.map((step, index) => {
          const { isActive, isPast, isFuture } = getStepState(index)
          return (
            <div
              key={step.id}
              className={`transition-opacity duration-500 ${
                isActive ? 'opacity-100' : isPast ? 'opacity-60' : 'opacity-30'
              }`}
            >
              {step.render(isActive, isPast, isFuture)}
            </div>
          )
        })}
      </div>
    </div>
  )
}
