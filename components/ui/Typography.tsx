import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface TypographyProps {
  children: ReactNode
  className?: string
}

// H1 組件
export function H1({ children, className }: TypographyProps) {
  return (
    <h1 className={twMerge(
      'text-3xl md:text-5xl lg:text-6xl font-bold text-white my-6',
      className
    )}>
      {children}
    </h1>
  )
}

// H2 組件
export function H2({ children, className }: TypographyProps) {
  return (
    <h2 className={twMerge(
      'text-xl md:text-3xl lg:text-4xl font-semibold text-white mb-4',
      className
    )}>
      {children}
    </h2>
  )
}

// H3 組件
export function H3({ children, className }: TypographyProps) {
  return (
    <h3 className={twMerge(
      'text-lg md:text-2xl lg:text-3xl font-semibold text-white mb-3',
      className
    )}>
      {children}
    </h3>
  )
}

// H4 組件
export function H4({ children, className }: TypographyProps) {
  return (
    <h4 className={twMerge(
      'text-base md:text-xl font-semibold text-white mb-2',
      className
    )}>
      {children}
    </h4>
  )
}

// P 組件
export function P({ children, className }: TypographyProps) {
  return (
    <p className={twMerge(
      'text-sm md:text-base text-gray-300 leading-relaxed mb-4 my-auto',
      className
    )}>
      {children}
    </p>
  )
}

// Lead 組件（大型段落文字）
export function Lead({ children, className }: TypographyProps) {
  return (
    <p className={twMerge(
      'text-base md:text-xl text-gray-200 leading-relaxed mb-6 font-medium',
      className
    )}>
      {children}
    </p>
  )
}

// LinkText 組件
export function LinkText({ children, className }: TypographyProps) {
  return (
    <span className={twMerge(
      'text-sm md:text-base hover:text-blue-400 transition-colors duration-200 underline',
      className
    )}>
      {children}
    </span>
  )
}
