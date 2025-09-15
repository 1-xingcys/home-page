import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface H2Props {
  children: ReactNode
  className?: string
}

export default function H2({ children, className }: H2Props) {
  return (
    <h2 className={twMerge(
      'text-2xl md:text-3xl lg:text-4xl font-semibold text-white mb-4',
      className
    )}>
      {children}
    </h2>
  )
}
