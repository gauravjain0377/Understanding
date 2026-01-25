'use client'

import { ReactNode } from 'react'
import Link from 'next/link'
import { getAllConcepts } from '@/lib/concepts'
import ConceptConnections from './ConceptConnections'

export interface ConceptPageLayoutProps {
  title: string
  description?: string
  category?: string
  primaryVisual: ReactNode
  narrative: ReactNode
  secondaryVisual?: ReactNode
  closingInsight?: string
  currentSlug: string
  relatedConcepts?: string[]
}

export default function ConceptPageLayout({
  title,
  description,
  category,
  primaryVisual,
  narrative,
  secondaryVisual,
  closingInsight,
  currentSlug,
  relatedConcepts = [],
}: ConceptPageLayoutProps) {
  // Get navigation concepts
  const allConcepts = getAllConcepts()
  const currentIndex = allConcepts.findIndex(c => c.slug === currentSlug)
  const previousConcept = currentIndex > 0 ? allConcepts[currentIndex - 1] : null
  const nextConcept = currentIndex < allConcepts.length - 1 ? allConcepts[currentIndex + 1] : null

  const related = relatedConcepts.length > 0
    ? allConcepts.filter(c => relatedConcepts.includes(c.slug))
    : []

  return (
    <main id="main-content" className="min-h-screen pt-16">
      <ConceptConnections relatedConcepts={related} currentSlug={currentSlug} />
      
      <article className="max-w-reading mx-auto px-6 md:px-12 lg:px-20 xl:px-32">
        {/* 1. Title + One-Line Idea */}
        <header className="py-16 md:py-24 lg:py-32">
          {category && (
            <div className="mb-4">
              <span className="font-ui text-xs text-text-secondary uppercase tracking-wider">
                {category}
              </span>
            </div>
          )}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-reading font-normal mb-6">
            {title}
          </h1>
          {description && (
            <p className="text-xl md:text-2xl text-text-secondary font-reading leading-relaxed">
              {description}
            </p>
          )}
        </header>

        {/* 2. PRIMARY VISUAL (Large, Controlled) */}
        <section className="primary-visual-section">
          {primaryVisual}
        </section>

        {/* 3. Narrative Explanation */}
        <section className="narrative-section py-12 md:py-16">
          <div className="prose prose-lg max-w-none">
            {narrative}
          </div>
        </section>

        {/* 4. Secondary Visual / Variation */}
        {secondaryVisual && (
          <section className="secondary-visual-section">
            {secondaryVisual}
          </section>
        )}

        {/* 5. Closing Insight */}
        {closingInsight && (
          <section className="closing-insight-section py-16 md:py-20 border-t border-border">
            <div className="max-w-3xl mx-auto">
              <p className="text-2xl md:text-3xl font-reading font-normal text-text-primary leading-relaxed text-center italic">
                {closingInsight}
              </p>
            </div>
          </section>
        )}

        {/* Navigation */}
        <nav className="mt-20 pt-12 border-t border-border">
          <div className="flex items-center justify-between font-ui text-sm">
            {previousConcept ? (
              <Link
                href={`/concepts/${previousConcept.slug}`}
                className="text-text-secondary hover:text-text-primary transition-colors"
              >
                ← {previousConcept.title}
              </Link>
            ) : (
              <span></span>
            )}
            
            {nextConcept ? (
              <Link
                href={`/concepts/${nextConcept.slug}`}
                className="text-text-secondary hover:text-text-primary transition-colors"
              >
                {nextConcept.title} →
              </Link>
            ) : (
              <span></span>
            )}
          </div>
        </nav>
      </article>
    </main>
  )
}
