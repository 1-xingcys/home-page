import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface LeadProps {
  children: ReactNode
  className?: string
}

export default function Lead({ children, className }: LeadProps) {
  return (
    <p className={twMerge(
      'text-lg md:text-xl text-gray-200 leading-relaxed mb-6 font-medium',
      className
    )}>
      {children}
    </p>
  )
}
