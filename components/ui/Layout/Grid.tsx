import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface GridProps {
  children: ReactNode
  cols?: 1 | 2 | 3 | 4 | 5 | 6 | 12
  gap?: number
  className?: string
}

export default function Grid({
  children,
  cols = 1,
  gap = 4,
  className
}: GridProps) {
  const colsClasses = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
    5: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-5',
    6: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-6',
    12: 'grid-cols-12'
  }

  const gapClass = `gap-${gap}`

  return (
    <div className={twMerge(
      'grid',
      colsClasses[cols],
      gapClass,
      className
    )}>
      {children}
    </div>
  )
}
