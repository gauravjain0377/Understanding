'use client'

import ProgressiveReveal from '../ProgressiveReveal'

export interface PrimaryVisualProps {
  title?: string
  caption?: string
  children: React.ReactNode
  className?: string
  diagramId?: string
}

export default function PrimaryVisual({
  title,
  caption,
  children,
  className = '',
  diagramId,
}: PrimaryVisualProps) {
  return (
    <div className="my-12 md:my-16 -mx-6 md:-mx-12 lg:-mx-24 xl:-mx-32 w-[calc(100%+3rem)] md:w-[calc(100%+6rem)] lg:!w-[calc(100vw-256px-500px)] xl:!w-[calc(100vw-256px-500px)] lg:!max-w-[calc(100vw-256px-500px)] xl:!max-w-[calc(100vw-256px-500px)]" data-diagram-section="true">
      <ProgressiveReveal>
        <section 
          className={`flex flex-col primary-visual-section ${className}`}
          data-primary-visual="true"
          aria-label={title || 'Primary visual explanation'}
        >
          {title && (
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-reading font-normal mb-12 md:mb-16 text-center max-w-5xl mx-auto px-6 tracking-tight">
              {title}
            </h2>
          )}

          {/* Large diagram container with technical grid background */}
          <div className="flex-1 flex flex-col items-center justify-center diagram-container border-t border-b border-border/40 py-8 md:py-12 lg:py-16 w-full bg-gradient-to-br from-background via-subtle/20 to-background border-x border-border/60 rounded-sm shadow-sm">
            <div className="w-full max-w-full pb-20" style={{ height: 'min(75vh, 800px)' }}>
              {children}
            </div>
          </div>

          {caption && (
            <figcaption className="mt-10 md:mt-12 text-sm md:text-base text-text-secondary/80 font-reading text-center italic max-w-4xl mx-auto leading-relaxed px-4">
              {caption}
            </figcaption>
          )}
        </section>
      </ProgressiveReveal>
    </div>
  )
}
