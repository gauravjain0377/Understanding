'use client'

import { useEffect, useRef, useState } from 'react'

interface ProgressiveRevealProps {
  children: React.ReactNode
  className?: string
}

export default function ProgressiveReveal({ children, className = '' }: ProgressiveRevealProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`progressive-reveal ${isVisible ? 'visible' : ''} ${className}`}
    >
      {children}
    </div>
  )
}
