'use client'

import { useState, useEffect } from 'react'

export default function FocusMode() {
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    // Load preference from localStorage
    const saved = localStorage.getItem('focusMode')
    if (saved === 'true') {
      setIsActive(true)
    }
  }, [])

  useEffect(() => {
    // Update localStorage when toggled
    localStorage.setItem('focusMode', isActive.toString())
    
    if (isActive) {
      // Create overlay element
      const overlay = document.createElement('div')
      overlay.id = 'focus-overlay'
      overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        pointer-events: none;
        z-index: 50;
        transition: opacity 0.3s ease;
      `
      document.body.appendChild(overlay)

      const updateOverlay = () => {
        const scrollY = window.scrollY
        const windowHeight = window.innerHeight
        const centerY = scrollY + windowHeight / 2
        
        // Check if we're over a primary visual (they have min-h-[80vh])
        const primaryVisuals = document.querySelectorAll('.primary-visual-section, [data-primary-visual="true"]')
        let isOverPrimaryVisual = false
        
        primaryVisuals.forEach((visual) => {
          const rect = visual.getBoundingClientRect()
          const visualCenter = rect.top + rect.height / 2
          if (Math.abs(visualCenter - windowHeight / 2) < windowHeight / 3) {
            isOverPrimaryVisual = true
          }
        })
        
        // Adjust gradient based on content type
        const gradientSize = isOverPrimaryVisual ? '1200px 900px' : '900px 700px'
        const gradientIntensity = isOverPrimaryVisual ? 0.08 : 0.12
        
        overlay.style.background = `
          radial-gradient(
            ellipse ${gradientSize} at 50% ${(centerY / window.innerHeight) * 100}%,
            transparent 0%,
            transparent 35%,
            rgba(0, 0, 0, 0.015) 45%,
            rgba(0, 0, 0, 0.03) 55%,
            rgba(0, 0, 0, 0.05) 65%,
            rgba(0, 0, 0, 0.08) 75%,
            rgba(0, 0, 0, ${gradientIntensity}) 100%
          )
        `
      }

      updateOverlay()
      window.addEventListener('scroll', updateOverlay)
      window.addEventListener('resize', updateOverlay)

      return () => {
        window.removeEventListener('scroll', updateOverlay)
        window.removeEventListener('resize', updateOverlay)
        const existing = document.getElementById('focus-overlay')
        if (existing) {
          existing.remove()
        }
      }
    } else {
      const existing = document.getElementById('focus-overlay')
      if (existing) {
        existing.remove()
      }
    }
  }, [isActive])

  return (
    <button
      onClick={() => setIsActive(!isActive)}
      className="fixed top-24 md:top-28 right-4 md:right-8 lg:right-20 xl:right-32 z-50 font-ui text-xs text-text-secondary hover:text-text-primary transition-colors bg-background/80 backdrop-blur-sm border border-border px-4 py-2 rounded-sm"
      aria-label={isActive ? 'Disable focus mode' : 'Enable focus mode'}
    >
      {isActive ? 'Focus: On' : 'Focus: Off'}
    </button>
  )
}
