'use client'

import { useEffect } from 'react'
import type { MDXRemoteSerializeResult } from 'next-mdx-remote'
import { MDXRemote } from 'next-mdx-remote'
import { mdxComponents } from './mdx-components-client'

interface MdxContentProps {
  source: MDXRemoteSerializeResult
}

export default function MdxContent({ source }: MdxContentProps) {
  useEffect(() => {
    // Apply progressive reveal to elements with the target class
    const targets = document.querySelectorAll('.progressive-reveal-target')
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    )

    targets.forEach((target) => {
      observer.observe(target)
    })

    return () => {
      targets.forEach((target) => {
        observer.unobserve(target)
      })
    }
  }, [])

  return <MDXRemote {...source} components={mdxComponents} />
}
