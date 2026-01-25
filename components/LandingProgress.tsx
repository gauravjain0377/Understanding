'use client'

import { useEffect, useState } from 'react'

interface LandingProgressProps {
  totalConcepts: number
}

export default function LandingProgress({ totalConcepts }: LandingProgressProps) {
  const [mounted, setMounted] = useState(false)
  const [filledSegments, setFilledSegments] = useState(0)
  const totalSegments = 20

  useEffect(() => {
    setMounted(true)
    
    // Animate segments filling from left to right
    const timer = setTimeout(() => {
      let current = 0
      const interval = setInterval(() => {
        current++
        setFilledSegments(current)
        if (current >= totalSegments) {
          clearInterval(interval)
        }
      }, 50) // Fill each segment every 50ms for smooth animation
      
      return () => clearInterval(interval)
    }, 300) // Start animation after 300ms
    
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="mb-16 md:mb-24">
      <div className="flex items-center justify-between mb-3">
        <span className="font-technical text-xs uppercase tracking-wider text-text-secondary">
          CURRENT PROGRESS
        </span>
        <span className="font-technical text-xs text-text-secondary">
          {totalConcepts} CONCEPTS
        </span>
      </div>
      
      <div className="flex gap-1">
        {Array.from({ length: totalSegments }).map((_, i) => {
          const filled = i < filledSegments
          return (
            <div
              key={i}
              className={`h-2 flex-1 transition-all duration-500 ease-out ${
                filled
                  ? 'bg-accent'
                  : 'bg-border'
              }`}
              style={{
                transform: filled ? 'scaleY(1)' : 'scaleY(0.8)',
                opacity: mounted ? (filled ? 1 : 0.3) : 0,
              }}
            />
          )
        })}
      </div>
    </div>
  )
}
