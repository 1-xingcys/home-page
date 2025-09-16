import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface BulletListProps {
  children: ReactNode
  spacing?: 'sm' | 'md' | 'lg'
  className?: string
}

export default function BulletList({
  children,
  spacing = 'md',
  className
}: BulletListProps) {
  const spacingClasses = {
    'sm': 'space-y-2',
    'md': 'space-y-3',
    'lg': 'space-y-4'
  }

  return (
    <ul className={twMerge(
      'list-disc list-inside text-gray-300',
      spacingClasses[spacing],
      className
    )}>
      {children}
    </ul>
  )
}
