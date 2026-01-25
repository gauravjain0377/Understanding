'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import type { PlaybackState } from './AnimatedDiagram'

export interface DiagramControls {
  start: () => void
  pause: () => void
  restart: () => void
  playbackState: PlaybackState
  currentStep: number
  totalSteps: number
}

export function useDiagramControls(diagramId?: string): DiagramControls | null {
  const [playbackState, setPlaybackState] = useState<PlaybackState>('idle')
  const [currentStep, setCurrentStep] = useState(-1)
  const [totalSteps, setTotalSteps] = useState(0)
  const controlsRef = useRef<{
    start: () => void
    pause: () => void
    restart: () => void
  } | null>(null)

  useEffect(() => {
    const selector = diagramId 
      ? `[data-diagram-id="${diagramId}"]`
      : '[data-diagram-controls]'
    
    const extractControls = () => {
      const diagramElement = document.querySelector(selector)
      if (diagramElement) {
        try {
          const data = diagramElement.getAttribute('data-diagram-controls')
          if (data) {
            const parsed = JSON.parse(data)
            
            controlsRef.current = {
              start: () => {
                const event = new CustomEvent('diagram-start', { bubbles: true })
                diagramElement.dispatchEvent(event)
              },
              pause: () => {
                const event = new CustomEvent('diagram-pause', { bubbles: true })
                diagramElement.dispatchEvent(event)
              },
              restart: () => {
                const event = new CustomEvent('diagram-restart', { bubbles: true })
                diagramElement.dispatchEvent(event)
              },
            }

            if (parsed.currentStep !== undefined) {
              setCurrentStep(parsed.currentStep)
            }
            if (parsed.totalSteps !== undefined) {
              setTotalSteps(parsed.totalSteps)
            } else if (parsed.steps) {
              setTotalSteps(parsed.steps.length)
            }
            if (parsed.playbackState) {
              setPlaybackState(parsed.playbackState)
            }
          }
        } catch (e) {
          // Silently fail
        }
      }
    }

    // Listen for state changes
    const handleStateChange = (e: CustomEvent<PlaybackState>) => {
      setPlaybackState(e.detail)
    }

    const handleStepChange = (e: CustomEvent<number>) => {
      setCurrentStep(e.detail)
    }

    document.addEventListener('diagram-state-change', handleStateChange as EventListener)
    document.addEventListener('diagram-step-change', handleStepChange as EventListener)

    // Extract controls periodically
    extractControls()
    const interval = setInterval(extractControls, 100)

    return () => {
      clearInterval(interval)
      document.removeEventListener('diagram-state-change', handleStateChange as EventListener)
      document.removeEventListener('diagram-step-change', handleStepChange as EventListener)
    }
  }, [diagramId])

  if (!controlsRef.current) {
    return null
  }

  return {
    start: controlsRef.current.start,
    pause: controlsRef.current.pause,
    restart: controlsRef.current.restart,
    playbackState,
    currentStep,
    totalSteps,
  }
}
