'use client'

import { useEffect, useRef, useState } from 'react'
import ProgressiveReveal from '../ProgressiveReveal'

interface ConceptDiagramProps {
  children: React.ReactNode
  caption?: string
  className?: string
}

export default function ConceptDiagram({ children, caption, className = '' }: ConceptDiagramProps) {
  return (
    <ProgressiveReveal>
      <figure className={`my-12 md:my-16 ${className}`}>
        <div className="bg-gradient-to-br from-background via-subtle/20 to-background border border-border/60 p-8 md:p-12 lg:p-16 rounded-sm w-full shadow-sm">
          {children}
        </div>
        {caption && (
          <figcaption className="mt-8 text-sm md:text-base text-text-secondary/80 font-reading text-center italic max-w-4xl mx-auto leading-relaxed">
            {caption}
          </figcaption>
        )}
      </figure>
    </ProgressiveReveal>
  )
}
