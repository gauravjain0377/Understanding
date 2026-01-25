'use client'

import ProgressiveReveal from '../ProgressiveReveal'
import ConceptDiagram from '../visuals/ConceptDiagram'

export interface SecondaryVisualProps {
  title?: string
  caption?: string
  children: React.ReactNode
  className?: string
}

export default function SecondaryVisual({
  title,
  caption,
  children,
  className = '',
}: SecondaryVisualProps) {
  return (
    <ProgressiveReveal>
      <section className={`my-20 md:my-24 lg:my-28 ${className}`}>
        {title && (
          <h3 className="text-xl md:text-2xl lg:text-3xl font-reading font-normal mb-10 md:mb-12 tracking-tight">
            {title}
          </h3>
        )}
        
        <ConceptDiagram caption={caption}>
          <div className="w-full" style={{ height: 'min(60vh, 600px)' }}>
            {children}
          </div>
        </ConceptDiagram>
      </section>
    </ProgressiveReveal>
  )
}
