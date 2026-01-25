'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

interface SocialLink {
  name: string
  url: string
  label: string
}

// Update these URLs with your actual social media profiles
const socialLinks: SocialLink[] = [
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/this-is-gaurav-jain/', label: 'LinkedIn profile' },
  { name: 'GitHub', url: 'https://github.com/gauravjain0377', label: 'GitHub profile' },
  { name: 'Portfolio', url: 'https://www.gauravjain.tech/', label: 'Portfolio website' },
  { name: 'X', url: 'https://x.com/gauravjain0377', label: 'X (Twitter) profile' },
  { name: 'Instagram', url: 'https://www.instagram.com/gauravjain0377/', label: 'Instagram profile' },
]

export default function LandingFooter() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <footer className="border-t border-border/30 mt-32 md:mt-40 pt-20 md:pt-24">
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20 xl:px-32">
        {/* Main footer content */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 mb-16">
          {/* Developer attribution */}
          <div className="text-center md:text-left">
            <p className="font-reading text-base md:text-lg text-text-secondary/70 mb-3">
              Designed and developed by
            </p>
            <p className="font-technical text-xl md:text-2xl uppercase tracking-wider text-text-primary">
              Gaurav Jain
            </p>
          </div>

          {/* Social links */}
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
            {socialLinks.map((link, index) => (
              <Link
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-technical text-sm md:text-base uppercase tracking-wider text-text-secondary/60 hover:text-accent transition-colors duration-300 relative group"
                aria-label={link.label}
                style={{
                  opacity: mounted ? 1 : 0,
                  transform: mounted ? 'translateY(0)' : 'translateY(10px)',
                  transition: `opacity 0.5s ease ${index * 50}ms, transform 0.5s ease ${index * 50}ms, color 0.3s ease`,
                }}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="flex items-center justify-center mb-12">
          <span className="font-technical text-text-secondary/30 text-sm tracking-widest">
            • • •
          </span>
        </div>

        {/* Year and subtle metadata */}
        <div className="text-center space-y-2">
          <p className="font-technical text-xs text-text-secondary/50 uppercase tracking-wider">
            | {new Date().getFullYear()} |
          </p>
          <p className="font-reading text-xs text-text-secondary/40 italic max-w-md mx-auto">
            A thinking space for understanding software
          </p>
        </div>
      </div>
    </footer>
  )
}
