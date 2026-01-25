'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

export default function ReadingProgress() {
  const [progress, setProgress] = useState(0)
  const pathname = usePathname()
  const isConceptPage = pathname?.startsWith('/concepts')

  useEffect(() => {
    const updateProgress = () => {
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      const scrollTop = window.scrollY
      const progress = (scrollTop / (documentHeight - windowHeight)) * 100
      setProgress(Math.min(100, Math.max(0, progress)))
    }

    window.addEventListener('scroll', updateProgress)
    updateProgress() // Initial calculation

    return () => window.removeEventListener('scroll', updateProgress)
  }, [])

  return (
    <div className={`fixed top-[4.5rem] md:top-20 left-0 right-0 h-1 bg-border/30 z-50 ${isConceptPage ? 'lg:left-64' : ''}`}>
      <div
        className="h-full bg-accent transition-all duration-150 ease-out"
        style={{ width: `${progress}%` }}
        aria-label={`Reading progress: ${Math.round(progress)}%`}
        role="progressbar"
        aria-valuenow={Math.round(progress)}
        aria-valuemin={0}
        aria-valuemax={100}
      />
    </div>
  )
}
