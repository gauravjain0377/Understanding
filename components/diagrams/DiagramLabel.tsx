export default function DiagramLabel({
  children,
  position = 'top-left',
  className = '',
}: {
  children: React.ReactNode
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
  className?: string
}) {
  const positionClasses = {
    'top-left': 'top-4 left-4',
    'top-right': 'top-4 right-4',
    'bottom-left': 'bottom-4 left-4',
    'bottom-right': 'bottom-4 right-4',
  }

  return (
    <div
      className={`absolute ${positionClasses[position]} font-technical text-xs text-accent/70 uppercase tracking-wider ${className}`}
    >
      {children}
    </div>
  )
}
