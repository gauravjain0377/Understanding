export interface Domain {
  id: string
  name: string
  description: string
  concepts: string[] // slugs of concepts in this domain
}

export const domains: Domain[] = [
  {
    id: 'fundamentals',
    name: 'Fundamentals',
    description: 'Core concepts that underlie all software',
    concepts: ['how-software-understands-input', 'what-state-really-means', 'why-async-systems-exist', 'between-click-and-result'],
  },
  {
    id: 'pixels-color',
    name: 'Pixels & Color',
    description: 'How screens display images, color spaces, and visual perception',
    concepts: ['how-screens-work', 'color-spaces', 'contrast-perception', 'blending-modes', 'color-models'],
  },
  {
    id: 'fonts-vectors',
    name: 'Fonts & Vectors',
    description: 'Drawing curves, Bézier mathematics, and vector graphics',
    concepts: ['bezier-curves', 'rasterization'],
  },
  {
    id: '3d-graphics',
    name: '3D & Graphics',
    description: 'GPUs, shaders, rendering, and three-dimensional computation',
    concepts: ['gpu-mental-model', 'shaders', 'transformations'],
  },
  {
    id: 'networking-web',
    name: 'Networking & The Web',
    description: 'How data travels, servers work, and browsers function',
    concepts: ['internet-routing', 'browser-internals'],
  },
  {
    id: 'ai-ml',
    name: 'AI & Machine Learning',
    description: 'Neural networks, transformers, and how machines learn',
    concepts: ['neural-networks', 'transformers'],
  },
  {
    id: 'data-compression',
    name: 'Data & Compression',
    description: 'Bits, bytes, entropy, compression, and cryptography',
    concepts: ['compression', 'bits-binary'],
  },
  {
    id: 'compilers-interpreters',
    name: 'Compilers & Interpreters',
    description: 'How code becomes execution, and what makes it fast or slow',
    concepts: ['lexing-tokenization', 'parsing', 'abstract-syntax-trees', 'type-checking', 'compilation-vs-interpretation', 'optimization'],
  },
  {
    id: 'time-systems',
    name: 'Time & Systems',
    description: 'Event loops, latency, frames, and why software feels instant',
    concepts: ['event-loops', 'latency', 'frames'],
  },
  {
    id: 'human-computer-interaction',
    name: 'Human–Computer Interaction',
    description: 'Cognitive load, feedback loops, and perceived performance',
    concepts: ['cognitive-load', 'feedback-loops', 'perceived-performance'],
  },
  {
    id: 'abstractions-complexity',
    name: 'Abstractions & Complexity',
    description: 'What abstraction is, leaky abstractions, and emergent behavior',
    concepts: ['abstractions', 'leaky-abstractions', 'emergent-behavior'],
  },
  {
    id: 'misc',
    name: 'Miscellaneous',
    description: 'Regular expressions, QR codes, and other concepts',
    concepts: ['regular-expressions'],
  },
]

export function getDomainById(id: string): Domain | undefined {
  return domains.find(d => d.id === id)
}

export function getDomainForConcept(conceptSlug: string): Domain | undefined {
  return domains.find(d => d.concepts.includes(conceptSlug))
}

export function getAllDomains(): Domain[] {
  return domains
}
