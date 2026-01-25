'use client'

import { useEffect, useState } from 'react'

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when page is scrolled down 300px
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  if (!isVisible) {
    return null
  }

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-4 md:right-8 lg:right-20 xl:right-32 z-50 font-ui text-xs text-text-secondary hover:text-text-primary transition-all duration-300 bg-background/80 backdrop-blur-sm border border-border px-4 py-3 rounded-sm hover:bg-accent hover:text-white hover:border-accent"
      aria-label="Back to top"
    >
      ↑ TOP
    </button>
  )
}
