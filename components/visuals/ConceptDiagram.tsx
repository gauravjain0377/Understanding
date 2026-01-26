'use client'

import ProgressiveReveal from '../ProgressiveReveal'

interface ConceptDiagramProps {
  children: React.ReactNode
  caption?: string
  className?: string
}

export default function ConceptDiagram({ children, caption, className = '' }: ConceptDiagramProps) {
  return (
    <div className="my-12 md:my-16 -mx-6 md:-mx-12 lg:-mx-24 xl:-mx-32 w-[calc(100%+3rem)] md:w-[calc(100%+6rem)] lg:!w-[calc(100vw-256px-500px)] xl:!w-[calc(100vw-256px-500px)] lg:!max-w-[calc(100vw-256px-500px)] xl:!max-w-[calc(100vw-256px-500px)]" data-diagram-section="true">
      <ProgressiveReveal>
        <figure className={`w-full ${className}`}>
          <div className="bg-gradient-to-br from-background via-subtle/20 to-background border border-border/60 p-8 md:p-12 lg:p-16 rounded-sm w-full shadow-sm">
            {children}
          </div>
          {caption && (
            <figcaption className="mt-10 md:mt-12 text-sm md:text-base text-text-secondary/80 font-reading text-center italic max-w-4xl mx-auto leading-relaxed px-4">
              {caption}
            </figcaption>
          )}
        </figure>
      </ProgressiveReveal>
    </div>
  )
}
