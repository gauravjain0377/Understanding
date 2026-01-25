import Link from 'next/link'
import { getAllDomains } from '@/lib/domains'

export default function Breadcrumbs({ 
  domain, 
  conceptTitle 
}: { 
  domain?: string
  conceptTitle: string 
}) {
  const domains = getAllDomains()
  const domainName = domain 
    ? domains.find(d => d.id === domain)?.name 
    : null

  return (
    <nav className="mb-8" aria-label="Breadcrumb">
      <div className="flex items-center gap-2 text-sm text-text-secondary font-ui">
        <Link href="/concepts" className="hover:text-text-primary transition-colors text-accent">
          Concepts
        </Link>
        {domainName && (
          <>
            <span aria-hidden="true">/</span>
            <Link 
              href="/concepts" 
              className="font-technical uppercase text-xs hover:text-text-primary transition-colors text-accent"
            >
              {domainName}
            </Link>
          </>
        )}
        <span aria-hidden="true">/</span>
        <span className="text-text-primary">{conceptTitle}</span>
      </div>
    </nav>
  )
}
