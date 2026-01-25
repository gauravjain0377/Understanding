import type { Metadata } from 'next'
import { Crimson_Pro, Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import ReadingProgress from '@/components/ReadingProgress'
import BackToTop from '@/components/BackToTop'

const crimsonPro = Crimson_Pro({
  variable: '--font-reading',
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600'],
})

const inter = Inter({
  variable: '--font-ui',
  subsets: ['latin'],
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-technical',
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600'],
})

export const metadata: Metadata = {
  title: 'Understanding',
  description: 'A thinking space for learning how software actually works',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${crimsonPro.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="focus-tunnel">
        <Navigation />
        <ReadingProgress />
        <BackToTop />
        {children}
      </body>
    </html>
  )
}
