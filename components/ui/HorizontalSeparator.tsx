import { twMerge } from 'tailwind-merge'

interface HorizontalSeparatorProps {
  className?: string
}

export default function HorizontalSeparator({ className }: HorizontalSeparatorProps) {
  return (
    <div className={twMerge(
      'w-full h-px bg-gray-700 my-0',
      className
    )} />
  )
}
