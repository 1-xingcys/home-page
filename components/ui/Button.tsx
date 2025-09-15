import { ReactNode, ButtonHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className,
  ...props
}: ButtonProps) {
  const variantClasses = {
    'primary': 'bg-blue-600 hover:bg-blue-700 text-white border-transparent',
    'secondary': 'bg-gray-600 hover:bg-gray-700 text-white border-transparent',
    'outline': 'bg-transparent hover:bg-gray-800 text-gray-300 hover:text-white border-gray-600',
    'ghost': 'bg-transparent hover:bg-gray-800 text-gray-300 hover:text-white border-transparent'
  }

  const sizeClasses = {
    'sm': 'px-3 py-1.5 text-sm',
    'md': 'px-4 py-2 text-base',
    'lg': 'px-6 py-3 text-lg'
  }

  return (
    <button
      className={twMerge(
        'inline-flex items-center justify-center rounded-lg border font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900',
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
