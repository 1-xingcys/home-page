import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface H1Props {
  children: ReactNode
  className?: string
}

export default function H1({ children, className }: H1Props) {
  return (
    <h1 className={twMerge(
      'text-4xl md:text-5xl lg:text-6xl font-bold text-white my-6',
      className
    )}>
      {children}
    </h1>
  )
}
