import { Domain } from '@/lib/domains'
import { Concept } from '@/lib/concepts'
import ConceptCard from './ConceptCard'

interface DomainSectionProps {
  domain: Domain
  concepts: Concept[]
}

export default function DomainSection({ domain, concepts }: DomainSectionProps) {
  return (
    <section>
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-reading font-normal mb-3">
          {domain.name}
        </h2>
        <p className="text-base text-text-secondary font-reading leading-relaxed">
          {domain.description}
        </p>
      </div>
      
      <div className="space-y-6">
        {concepts.map((concept) => (
          <ConceptCard key={concept.slug} concept={concept} />
        ))}
      </div>
    </section>
  )
}
