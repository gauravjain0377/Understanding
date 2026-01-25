'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navigation() {
  const pathname = usePathname()
  const isConceptPage = pathname?.startsWith('/concepts')

  return (
    <nav className={`fixed top-0 left-0 right-0 z-40 bg-background/75 backdrop-blur-md border-b border-border/50 ${isConceptPage ? 'lg:left-64' : ''}`}>
      <div className="max-w-reading mx-auto px-6 md:px-12 lg:px-20 xl:px-32">
        <div className="flex items-center justify-between h-18 md:h-20">
          <Link 
            href="/" 
            className="font-reading text-base md:text-lg text-text-primary hover:text-accent transition-colors tracking-tight font-medium"
          >
            Understanding
          </Link>
          
          <div className="flex items-center gap-8">
            <Link
              href="/concepts"
              className={`font-ui text-sm md:text-base transition-colors tracking-wide ${
                pathname?.startsWith('/concepts')
                  ? 'text-text-primary font-medium'
                  : 'text-text-secondary/80 hover:text-text-primary'
              }`}
            >
              Concepts
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
