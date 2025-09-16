import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface SectionProps {
  children: ReactNode
  className?: string
}

export default function Section({ children, className }: SectionProps) {
  return (
    <section className={twMerge(
      'py-4 md:py-6 lg:py-8',
      className
    )}>
      {children}
    </section>
  )
}
