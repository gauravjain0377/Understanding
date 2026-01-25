import { getAllConcepts } from '@/lib/concepts'
import { getAllDomains } from '@/lib/domains'
import ConceptCard from '@/components/ConceptCard'
import DomainSection from '@/components/DomainSection'
import SidebarNavigation from '@/components/SidebarNavigation'

export default function ConceptsPage() {
  const concepts = getAllConcepts()
  const domains = getAllDomains()

  // Group concepts by domain
  const conceptsByDomain = new Map<string, typeof concepts>()
  
  concepts.forEach(concept => {
    const domainId = concept.domain || 'fundamentals'
    if (!conceptsByDomain.has(domainId)) {
      conceptsByDomain.set(domainId, [])
    }
    conceptsByDomain.get(domainId)!.push(concept)
  })

  // Update domain concepts lists
  domains.forEach(domain => {
    const domainConcepts = conceptsByDomain.get(domain.id) || []
    domain.concepts = domainConcepts.map(c => c.slug)
  })

  return (
    <main id="main-content" className="min-h-screen pt-16 lg:pl-64">
      <SidebarNavigation domains={domains} concepts={concepts} />
      <div className="max-w-reading mx-auto px-6 md:px-12 lg:px-20 xl:px-32 py-16 md:py-24 lg:py-32">
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-reading font-normal mb-6">
            Concepts
          </h1>
          <p className="text-lg text-text-secondary font-reading leading-relaxed">
            Deep explorations of how software actually works, organized by domain.
          </p>
        </div>

        <div className="space-y-16">
          {domains
            .filter(domain => {
              const domainConcepts = conceptsByDomain.get(domain.id) || []
              return domainConcepts.length > 0
            })
            .map((domain) => {
              const domainConcepts = conceptsByDomain.get(domain.id) || []
              return (
                <DomainSection
                  key={domain.id}
                  domain={domain}
                  concepts={domainConcepts}
                />
              )
            })}
        </div>
      </div>
    </main>
  )
}
