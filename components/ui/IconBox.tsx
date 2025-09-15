import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface IconBoxProps {
  children: ReactNode
  size?: 'sm' | 'md' | 'lg'
  variant?: 'solid' | 'outline' | 'ghost'
  className?: string
}

export default function IconBox({
  children,
  size = 'md',
  variant = 'solid',
  className
}: IconBoxProps) {
  const sizeClasses = {
    'sm': 'w-8 h-8 p-1.5',
    'md': 'w-12 h-12 p-3',
    'lg': 'w-16 h-16 p-4'
  }

  const variantClasses = {
    'solid': 'bg-gray-700 text-white',
    'outline': 'border-2 border-gray-600 text-gray-300',
    'ghost': 'text-gray-400 hover:text-white hover:bg-gray-800'
  }

  return (
    <div className={twMerge(
      'flex items-center justify-center rounded-lg transition-all duration-200',
      sizeClasses[size],
      variantClasses[variant],
      className
    )}>
      {children}
    </div>
  )
}
