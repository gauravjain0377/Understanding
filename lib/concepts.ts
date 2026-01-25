import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export interface Concept {
  slug: string
  title: string
  description: string
  category?: string
  domain?: string
  related?: string[]
  wordCount?: number
  content: string
}

const conceptsDirectory = path.join(process.cwd(), 'content/concepts')

export function getAllConcepts(): Concept[] {
  if (!fs.existsSync(conceptsDirectory)) {
    return []
  }

  const fileNames = fs.readdirSync(conceptsDirectory)
  const allConceptsData = fileNames
    .filter(name => name.endsWith('.mdx'))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, '')
      const fullPath = path.join(conceptsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data, content } = matter(fileContents)

      // Estimate word count
      const wordCount = content.split(/\s+/).length

      return {
        slug,
        title: data.title || slug,
        description: data.description || '',
        category: data.category,
        domain: data.domain,
        related: data.related || [],
        wordCount,
        content,
      }
    })

  return allConceptsData
}

export function getConceptBySlug(slug: string): Concept | null {
  try {
    const fullPath = path.join(conceptsDirectory, `${slug}.mdx`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    const wordCount = content.split(/\s+/).length

    return {
      slug,
      title: data.title || slug,
      description: data.description || '',
      category: data.category,
      domain: data.domain,
      related: data.related || [],
      wordCount,
      content,
    }
  } catch (error) {
    return null
  }
}

export function getRelatedConcepts(relatedSlugs: string[]): Concept[] {
  const allConcepts = getAllConcepts()
  return allConcepts.filter(concept => relatedSlugs.includes(concept.slug))
}
