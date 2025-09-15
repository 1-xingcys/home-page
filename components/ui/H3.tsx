import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface H3Props {
  children: ReactNode
  className?: string
}

export default function H3({ children, className }: H3Props) {
  return (
    <h3 className={twMerge(
      'text-xl md:text-2xl lg:text-3xl font-semibold text-white mb-3',
      className
    )}>
      {children}
    </h3>
  )
}
