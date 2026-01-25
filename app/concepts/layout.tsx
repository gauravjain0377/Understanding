import FocusMode from '@/components/FocusMode'

export default function ConceptsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <FocusMode />
      {children}
    </>
  )
}
