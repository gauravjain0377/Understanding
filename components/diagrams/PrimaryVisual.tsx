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
    <ProgressiveReveal>
      <section 
        className={`my-24 md:my-32 lg:my-40 flex flex-col primary-visual-section ${className}`}
        data-primary-visual="true"
        aria-label={title || 'Primary visual explanation'}
      >
        {title && (
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-reading font-normal mb-12 md:mb-16 text-center max-w-5xl mx-auto px-6 tracking-tight">
            {title}
          </h2>
        )}

        {/* Large diagram container with technical grid background */}
        <div className="flex-1 flex flex-col items-center justify-center diagram-container border-t border-b border-border/40 py-8 md:py-12 lg:py-16 w-full">
          <div className="w-full max-w-[95vw] md:max-w-[90vw] lg:max-w-[min(85vw,1400px)] xl:max-w-[min(80vw,1600px)] pb-20" style={{ height: 'min(75vh, 800px)' }}>
            {children}
          </div>
        </div>

        {caption && (
          <figcaption className="mt-8 md:mt-10 text-sm md:text-base text-text-secondary/80 font-reading text-center italic max-w-4xl mx-auto leading-relaxed">
            {caption}
          </figcaption>
        )}
      </section>
    </ProgressiveReveal>
  )
}
