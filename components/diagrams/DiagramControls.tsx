'use client'

import { useEffect, useRef } from 'react'

export type PlaybackState = 'idle' | 'playing' | 'paused' | 'completed'

export interface DiagramControlsProps {
  playbackState: PlaybackState
  onStart: () => void
  onPause: () => void
  onRestart: () => void
  currentStep?: number
  totalSteps?: number
  className?: string
}

export default function DiagramControls({
  playbackState,
  onStart,
  onPause,
  onRestart,
  currentStep = -1,
  totalSteps = 0,
  className = '',
}: DiagramControlsProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      // Only handle if focus is within the diagram area
      if (containerRef.current?.contains(document.activeElement) || 
          document.activeElement === document.body) {
        if (e.key === ' ' || e.key === 'Spacebar') {
          e.preventDefault()
          if (playbackState === 'playing') {
            onPause()
          } else if (playbackState === 'paused' || playbackState === 'idle' || playbackState === 'completed') {
            onStart()
          }
        }
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [playbackState, onStart, onPause])

  const showStart = playbackState === 'idle' || playbackState === 'completed'
  const showPause = playbackState === 'playing'

  return (
    <div 
      ref={containerRef}
      className={`flex items-center gap-4 font-ui text-sm ${className}`}
      role="group"
      aria-label="Diagram playback controls"
    >
      {showStart && (
        <button
          onClick={onStart}
          className="px-4 py-2 border border-border bg-background text-text-primary hover:bg-accent hover:text-white hover:border-accent transition-colors duration-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 whitespace-nowrap"
          aria-label="Start animation"
        >
          Start
        </button>
      )}
      
      {showPause && (
        <button
          onClick={onPause}
          className="px-4 py-2 border border-border bg-background text-text-primary hover:bg-accent hover:text-white hover:border-accent transition-colors duration-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 whitespace-nowrap"
          aria-label="Pause animation"
        >
          Pause
        </button>
      )}

      <button
        onClick={onRestart}
        className="px-4 py-2 border border-border bg-background text-text-secondary hover:text-text-primary hover:border-accent transition-colors duration-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 whitespace-nowrap"
        aria-label="Restart animation"
      >
        Restart
      </button>

      {totalSteps > 0 && currentStep >= 0 && (
        <span className="ml-4 text-text-secondary text-xs whitespace-nowrap">
          {currentStep + 1} / {totalSteps}
        </span>
      )}
    </div>
  )
}
