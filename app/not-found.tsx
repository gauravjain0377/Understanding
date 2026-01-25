import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="min-h-screen pt-16">
      <div className="max-w-reading mx-auto px-8 md:px-20 lg:px-32 py-20 md:py-32">
        <h1 className="text-4xl md:text-5xl font-reading font-normal mb-6">
          Not Found
        </h1>
        <p className="text-lg text-text-secondary font-reading leading-relaxed mb-8">
          The concept you're looking for doesn't exist.
        </p>
        <Link
          href="/concepts"
          className="inline-block font-ui text-base text-text-primary border border-border px-8 py-3 rounded-sm hover:bg-accent hover:text-white hover:border-accent transition-colors duration-200"
        >
          Browse Concepts
        </Link>
      </div>
    </main>
  )
}
