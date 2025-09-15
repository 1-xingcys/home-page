import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface H4Props {
  children: ReactNode
  className?: string
}

export default function H4({ children, className }: H4Props) {
  return (
    <h4 className={twMerge(
      'text-lg md:text-xl font-semibold text-white mb-2',
      className
    )}>
      {children}
    </h4>
  )
}
