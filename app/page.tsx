import Link from 'next/link'
import { getAllDomains } from '@/lib/domains'
import { getAllConcepts } from '@/lib/concepts'
import LandingProgress from '@/components/LandingProgress'
import ProgressiveReveal from '@/components/ProgressiveReveal'
import UnderstandingSystemDiagram from '@/components/visuals/UnderstandingSystemDiagram'
import LandingFooter from '@/components/LandingFooter'

export default function Home() {
  const domains = getAllDomains()
  const concepts = getAllConcepts()
  const totalConcepts = concepts.length

  return (
    <main className="min-h-screen">
      <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-20 xl:px-32 py-24 md:py-32 lg:py-40">
        {/* Progress Indicator */}
        <ProgressiveReveal>
          <LandingProgress totalConcepts={totalConcepts} />
        </ProgressiveReveal>

        {/* Divider */}
        <ProgressiveReveal>
          <div className="flex items-center justify-center mb-16 md:mb-24">
            <span className="font-technical text-text-secondary/40 text-lg tracking-widest">
              ***
            </span>
          </div>
        </ProgressiveReveal>

        {/* Main Title */}
        <ProgressiveReveal>
          <div className="mb-20 md:mb-32">
            <h1 className="font-technical text-4xl md:text-5xl lg:text-6xl font-medium mb-8 md:mb-12 tracking-tight text-center">
              | UNDERSTANDING |
            </h1>
            <p className="font-reading text-xl md:text-2xl lg:text-3xl text-text-secondary/90 leading-relaxed text-center max-w-3xl mx-auto font-light">
              A thinking space for learning how software actually works, 
              conceptually, visually, and intuitively.
            </p>
          </div>
        </ProgressiveReveal>

        {/* Editorial Introduction */}
        <div className="mb-32 md:mb-40 space-y-8">
          <ProgressiveReveal>
            <p className="font-reading text-lg md:text-xl lg:text-2xl leading-relaxed max-w-3xl mx-auto text-center text-text-primary">
              Have you ever wondered how a screen displays an image, or how code becomes execution? 
              Perhaps you&apos;ve questioned why some interfaces feel instant while others lag, or how 
              abstractions both simplify and complicate our work.
            </p>
          </ProgressiveReveal>
          <ProgressiveReveal>
            <p className="font-reading text-lg md:text-xl lg:text-2xl leading-relaxed max-w-3xl mx-auto text-center text-text-secondary">
              This is not a tutorial or a guide. It&apos;s a reference manual that explains how the 
              things you use every day actually work. Each concept is explored deeply, with visual 
              explanations and mental models that help you understand systems, not just use them.
            </p>
          </ProgressiveReveal>
        </div>

        {/* Domains Section */}
        <ProgressiveReveal>
          <div className="mt-32 md:mt-40 pt-20 md:pt-24 border-t border-border/50">
            <div className="mb-16 md:mb-20">
              <h2 className="font-technical text-xs uppercase tracking-wider text-text-secondary mb-3 text-center">
                CONCEPT DOMAINS
              </h2>
              <p className="font-reading text-base md:text-lg text-text-secondary/80 leading-relaxed max-w-2xl mx-auto text-center">
                Explore software concepts organized by domain. Each domain contains deep explorations 
                of related ideas, with visual explanations and mental models.
              </p>
            </div>
            
            {/* Domains as List, not Grid */}
            <div className="space-y-1 max-w-2xl mx-auto">
              {domains
                .filter(domain => domain.id !== 'misc' || domain.concepts.length > 0)
                .map((domain, index) => {
                  const domainConcepts = concepts.filter(c => c.domain === domain.id)
                  const conceptCount = domainConcepts.length
                  // Link to concepts page with anchor to specific domain section
                  const href = `/concepts#${domain.id}`
                  
                  return (
                    <ProgressiveReveal key={domain.id}>
                      <Link
                        href={href}
                        className="block py-4 md:py-5 px-4 md:px-6 hover:bg-subtle/50 transition-colors duration-300 group"
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <span className="font-technical text-xs text-text-secondary/60 uppercase tracking-wider">
                                {String(index + 1).padStart(2, '0')}
                              </span>
                              <h3 className="font-reading text-lg md:text-xl font-normal group-hover:text-accent transition-colors">
                                {domain.name}
                              </h3>
                            </div>
                            <p className="text-sm md:text-base text-text-secondary/80 font-reading leading-relaxed ml-8">
                              {domain.description}
                            </p>
                          </div>
                          {conceptCount > 0 && (
                            <span className="font-technical text-xs text-text-secondary/50 uppercase tracking-wider whitespace-nowrap">
                              {conceptCount} {conceptCount === 1 ? 'CONCEPT' : 'CONCEPTS'}
                            </span>
                          )}
                        </div>
                      </Link>
                    </ProgressiveReveal>
                  )
                })}
            </div>
          </div>
        </ProgressiveReveal>

        {/* System Diagram */}
        <ProgressiveReveal>
          <div className="mt-32 md:mt-40">
            <UnderstandingSystemDiagram />
          </div>
        </ProgressiveReveal>

        {/* Footer */}
        <LandingFooter />
      </div>
    </main>
  )
}
