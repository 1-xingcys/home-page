import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface PProps {
  children: ReactNode
  className?: string
}

export default function P({ children, className }: PProps) {
  return (
    <p className={twMerge(
      'text-base text-gray-300 leading-relaxed mb-4 my-auto',
      className
    )}>
      {children}
    </p>
  )
}
