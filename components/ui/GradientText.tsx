import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface GradientTextProps {
  children: ReactNode
  className?: string
}

export default function GradientText({ children, className }: GradientTextProps) {
  return (
    <span className={twMerge(
      'bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent font-bold',
      className
    )}>
      {children}
    </span>
  )
}
