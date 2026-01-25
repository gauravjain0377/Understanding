'use client'

import ProgressiveReveal from './ProgressiveReveal'

export interface ClosingInsightProps {
  children: React.ReactNode
  className?: string
}

export default function ClosingInsight({ children, className = '' }: ClosingInsightProps) {
  return (
    <ProgressiveReveal>
      <section className={`py-20 md:py-24 lg:py-28 border-t border-border/50 mt-16 md:mt-20 ${className}`}>
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-2xl md:text-3xl lg:text-3.5xl font-reading font-light text-text-primary/90 leading-[1.6] text-center italic tracking-tight">
            {children}
          </p>
        </div>
      </section>
    </ProgressiveReveal>
  )
}
