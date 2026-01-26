'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function HashScrollHandler() {
  const pathname = usePathname()

  useEffect(() => {
    // Only handle hash scrolling on concepts page
    if (pathname === '/concepts') {
      const hash = window.location.hash
      if (hash) {
        // Remove the # from the hash
        const id = hash.substring(1)
        
        // Wait for DOM to be ready, then scroll to the element
        setTimeout(() => {
          const element = document.getElementById(id)
          if (element) {
            // Calculate offset for fixed header
            const headerHeight = 80 // Approximate header height
            const elementPosition = element.getBoundingClientRect().top
            const offsetPosition = elementPosition + window.pageYOffset - headerHeight

            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            })
          }
        }, 300)
      }
    }
  }, [pathname])

  return null
}
