import { notFound } from 'next/navigation'
import { getConceptBySlug, getRelatedConcepts, getAllConcepts } from '@/lib/concepts'
import { getAllDomains } from '@/lib/domains'
import { serializeMdx } from '@/lib/mdx'
import ConceptConnections from '@/components/ConceptConnections'
import ProgressiveReveal from '@/components/ProgressiveReveal'
import MdxContent from '@/components/MdxContent'
import ConceptPageLayout from '@/components/ConceptPageLayout'
import SidebarNavigation from '@/components/SidebarNavigation'
import Breadcrumbs from '@/components/Breadcrumbs'
import Link from 'next/link'
import type { Metadata } from 'next'
import matter from 'gray-matter'

interface ConceptPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const concepts = getAllConcepts()
  return concepts.map((concept) => ({
    slug: concept.slug,
  }))
}

export async function generateMetadata({ params }: ConceptPageProps): Promise<Metadata> {
  const concept = getConceptBySlug(params.slug)
  
  if (!concept) {
    return {
      title: 'Not Found',
    }
  }

  return {
    title: `${concept.title} | Understanding`,
    description: concept.description,
  }
}

export default async function ConceptPage({ params }: ConceptPageProps) {
  const concept = getConceptBySlug(params.slug)

  if (!concept) {
    notFound()
  }

  const mdxSource = await serializeMdx(concept.content)
  const relatedConcepts = concept.related
    ? getRelatedConcepts(concept.related)
    : []

  // Get all concepts for navigation
  const allConcepts = getAllConcepts()
  const domains = getAllDomains()
  const currentIndex = allConcepts.findIndex(c => c.slug === params.slug)
  const previousConcept = currentIndex > 0 ? allConcepts[currentIndex - 1] : null
  const nextConcept = currentIndex < allConcepts.length - 1 ? allConcepts[currentIndex + 1] : null

  const readingTime = Math.ceil((concept.wordCount || 1000) / 200) // ~200 words per minute

  return (
    <main id="main-content" className="min-h-screen pt-16 lg:pl-64">
      <SidebarNavigation domains={domains} concepts={allConcepts} />
      <ConceptConnections relatedConcepts={relatedConcepts} currentSlug={params.slug} />
      
      <article className="max-w-reading mx-auto px-6 md:px-12 lg:px-24 xl:px-32 py-24 md:py-32 lg:py-40">
        {/* Breadcrumbs */}
        <Breadcrumbs domain={concept.domain} conceptTitle={concept.title} />

        {/* Metadata */}
        <div className="flex items-center gap-4 text-sm text-text-secondary font-ui mb-8">
          {concept.wordCount && (
            <>
              <span>{concept.wordCount.toLocaleString()} WORDS</span>
              <span>•</span>
            </>
          )}
          <span>{readingTime} MIN READ</span>
          {concept.domain && (
            <>
              <span>•</span>
              <span className="font-technical uppercase text-xs">
                {concept.domain}
              </span>
            </>
          )}
        </div>

        {/* Title + Short Framing Paragraph Section */}
        <ProgressiveReveal>
          <header className="mb-24 md:mb-32">
            {concept.category && (
              <div className="mb-8">
                <span className="font-ui text-xs text-text-secondary/70 uppercase tracking-[0.15em] font-medium">
                  {concept.category}
                </span>
              </div>
            )}
            <h1 className="font-reading font-normal mb-10 md:mb-12 tracking-tight">
              {concept.title}
            </h1>
            {concept.description && (
              <p className="text-xl md:text-2xl text-text-secondary/90 font-reading leading-relaxed max-w-4xl font-light">
                {concept.description}
              </p>
            )}
          </header>
        </ProgressiveReveal>

        <div className="prose prose-lg max-w-[65ch]">
          <MdxContent source={mdxSource} />
        </div>

        <nav className="mt-24 md:mt-28 pt-16 border-t border-border/50">
          <div className="flex items-center justify-between font-ui text-sm md:text-base">
            {previousConcept ? (
              <Link
                href={`/concepts/${previousConcept.slug}`}
                className="text-text-secondary/70 hover:text-text-primary transition-colors tracking-wide"
              >
                ← {previousConcept.title}
              </Link>
            ) : (
              <span></span>
            )}
            
            {nextConcept ? (
              <Link
                href={`/concepts/${nextConcept.slug}`}
                className="text-text-secondary/70 hover:text-text-primary transition-colors tracking-wide"
              >
                {nextConcept.title} →
              </Link>
            ) : (
              <span></span>
            )}
          </div>
        </nav>
      </article>
    </main>
  )
}
