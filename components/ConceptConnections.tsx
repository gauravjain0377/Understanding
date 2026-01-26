'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Concept } from '@/lib/concepts'

interface ConceptConnectionsProps {
  relatedConcepts: Concept[]
  currentSlug: string
}

export default function ConceptConnections({ relatedConcepts, currentSlug }: ConceptConnectionsProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      
      // Check if we're near a diagram section
      const diagramSections = document.querySelectorAll('[data-diagram-section="true"]')
      let isNearDiagram = false
      
      diagramSections.forEach((section) => {
        const rect = section.getBoundingClientRect()
        const sectionTop = rect.top + scrollPosition
        const sectionBottom = sectionTop + rect.height
        const viewportTop = scrollPosition
        const viewportBottom = scrollPosition + windowHeight
        
        // Hide if diagram is in viewport (with some buffer)
        if (sectionTop < viewportBottom + 200 && sectionBottom > viewportTop - 200) {
          isNearDiagram = true
        }
      })
      
      // Show after scrolling 20% of the page, but hide when near diagrams
      if (!isNearDiagram && scrollPosition > windowHeight * 0.2 && scrollPosition < documentHeight - windowHeight * 0.8) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleScroll)
    handleScroll() // Check on mount
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [])

  if (relatedConcepts.length === 0) return null

  return (
    <aside
      className={`hidden lg:block fixed right-8 md:right-20 lg:right-32 top-44 md:top-48 z-30 transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4 pointer-events-none'
      }`}
    >
      <div className="bg-background/90 backdrop-blur-sm border border-border p-6 rounded-sm max-w-xs">
        <h3 className="font-ui text-xs text-text-secondary uppercase tracking-wider mb-4">
          Related Concepts
        </h3>
        <ul className="space-y-3">
          {relatedConcepts
            .filter(concept => concept.slug !== currentSlug)
            .map((concept) => (
              <li key={concept.slug}>
                <Link
                  href={`/concepts/${concept.slug}`}
                  className="font-reading text-sm text-text-primary hover:text-accent transition-colors block"
                >
                  {concept.title}
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </aside>
  )
}
