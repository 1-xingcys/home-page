import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface ContainerProps {
  children: ReactNode
  className?: string
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | 'full' | 'responsive'
  padding?: 'none' | 'sm' | 'md' | 'lg'
}

export default function Container({
  children,
  className,
  maxWidth = 'responsive',
  padding = 'md'
}: ContainerProps) {
  const maxWidthClasses = {
    'sm': 'max-w-sm',
    'md': 'max-w-md',
    'lg': 'max-w-lg',
    'xl': 'max-w-5xl',
    'full': 'max-w-full',
    'responsive': 'max-w-sm sm:max-w-md md:max-w-lg lg:max-w-4xl'
  }

  const paddingClasses = {
    'none': '',
    'sm': 'px-2 sm:px-4',
    'md': 'px-4 sm:px-6 lg:px-8',
    'lg': 'px-6 sm:px-8 lg:px-12 xl:px-16'
  }

  return (
    <div className={twMerge(
      'container mx-auto',
      maxWidthClasses[maxWidth],
      paddingClasses[padding],
      className
    )}>
      {children}
    </div>
  )
}
