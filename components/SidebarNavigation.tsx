'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import type { Domain } from '@/lib/domains'
import type { Concept } from '@/lib/concepts'

interface SidebarNavigationProps {
  domains: Domain[]
  concepts: Concept[]
}

export default function SidebarNavigation({ domains, concepts }: SidebarNavigationProps) {
  const pathname = usePathname()
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set())

  const toggleSection = (domainId: string) => {
    setExpandedSections(prev => {
      const newExpanded = new Set(prev)
      if (newExpanded.has(domainId)) {
        newExpanded.delete(domainId)
      } else {
        newExpanded.add(domainId)
      }
      return newExpanded
    })
  }

  // Get current concept's domain
  const currentConcept = concepts.find(c => pathname?.includes(c.slug))
  const currentDomain = currentConcept 
    ? domains.find(d => d.id === currentConcept.domain)
    : null

  // Auto-expand current domain on mount and scroll to active concept
  useEffect(() => {
    if (currentDomain) {
      setExpandedSections(prev => new Set([...prev, currentDomain!.id]))
      
      // Scroll to active concept after a short delay to ensure DOM is ready
      setTimeout(() => {
        const activeLink = document.querySelector('[aria-current="page"]')
        if (activeLink) {
          activeLink.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
          })
        }
      }, 300)
    }
  }, [currentDomain, pathname])

  // Only show on concept pages
  if (!pathname?.startsWith('/concepts')) {
    return null
  }

  return (
    <aside className="hidden lg:block fixed left-0 top-0 bottom-0 w-64 bg-background border-r border-border overflow-y-auto z-30 pt-20">
      <div className="p-6">
        <h2 className="font-technical text-xs uppercase tracking-wider text-text-secondary mb-6">
          CONCEPTS
        </h2>
        
        <nav className="space-y-2" aria-label="Concept navigation">
          {domains
            .filter(domain => {
              const domainConcepts = concepts.filter(c => c.domain === domain.id)
              return domainConcepts.length > 0
            })
            .map((domain) => {
              const domainConcepts = concepts.filter(c => c.domain === domain.id)
              const isExpanded = expandedSections.has(domain.id)
              const isCurrentDomain = currentDomain?.id === domain.id

              return (
                <div key={domain.id} className="mb-4">
                  <button
                    onClick={() => toggleSection(domain.id)}
                    className={`w-full text-left font-technical text-xs uppercase tracking-wider py-2 px-3 rounded transition-colors ${
                      isCurrentDomain
                        ? 'text-accent font-semibold'
                        : 'text-text-secondary hover:text-text-primary'
                    }`}
                    aria-expanded={isExpanded}
                    aria-controls={`section-${domain.id}`}
                  >
                    <span className="inline-block w-4 mr-2" aria-hidden="true">
                      {isExpanded ? '▼' : '▶'}
                    </span>
                    {domain.name.toUpperCase()}
                  </button>

                  {isExpanded && (
                    <ul id={`section-${domain.id}`} className="ml-6 mt-1 space-y-1">
                      {domainConcepts.map((concept) => {
                        const isActive = pathname?.includes(concept.slug)
                        return (
                          <li key={concept.slug}>
                            <Link
                              href={`/concepts/${concept.slug}`}
                              className={`block py-1.5 px-3 rounded text-sm font-reading transition-colors ${
                                isActive
                                  ? 'text-accent font-medium bg-accent/5'
                                  : 'text-text-secondary hover:text-text-primary'
                              }`}
                              aria-current={isActive ? 'page' : undefined}
                            >
                              {concept.title}
                            </Link>
                          </li>
                        )
                      })}
                    </ul>
                  )}
                </div>
              )
            })}
        </nav>
      </div>
    </aside>
  )
}
