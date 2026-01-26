import FocusMode from '@/components/FocusMode'
import HashScrollHandler from '@/components/HashScrollHandler'

export default function ConceptsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <FocusMode />
      <HashScrollHandler />
      {children}
    </>
  )
}
