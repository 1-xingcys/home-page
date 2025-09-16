import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface ListItemProps {
  children: ReactNode
  className?: string
}

export default function ListItem({ children, className }: ListItemProps) {
  return (
    <li className={twMerge(
      'text-gray-300 leading-relaxed',
      className
    )}>
      {children}
    </li>
  )
}
