import Link from 'next/link'
import { Concept } from '@/lib/concepts'

interface ConceptCardProps {
  concept: Concept
}

export default function ConceptCard({ concept }: ConceptCardProps) {
  const readTime = Math.ceil((concept.wordCount || 1000) / 200) // ~200 words per minute

  return (
    <Link
      href={`/concepts/${concept.slug}`}
      className="block border border-border p-6 md:p-8 hover:border-accent transition-colors duration-200 group"
    >
      <h2 className="font-reading text-2xl mb-3 group-hover:text-accent transition-colors">
        {concept.title}
      </h2>
      <p className="text-text-secondary font-reading text-base leading-relaxed mb-4">
        {concept.description}
      </p>
      <div className="flex items-center gap-4 font-ui text-xs text-text-secondary">
        <span>{readTime} min read</span>
        {concept.category && (
          <>
            <span>•</span>
            <span>{concept.category}</span>
          </>
        )}
      </div>
    </Link>
  )
}
