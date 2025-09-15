import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface LinkTextProps {
  children: ReactNode
  className?: string
}

export default function LinkText({ children, className }: LinkTextProps) {
  return (
    <span className={twMerge(
      'text-base hover:text-blue-400 transition-colors duration-200 underline',
      className
    )}>
      {children}
    </span>
  )
}
