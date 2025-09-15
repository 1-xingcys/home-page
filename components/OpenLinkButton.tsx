import { twMerge } from 'tailwind-merge'

interface OpenLinkButtonProps {
  href: string
  className?: string
}

export default function OpenLinkButton({ href, className }: OpenLinkButtonProps) {
  return (
    <div
      className={twMerge(
        'flex items-center justify-center p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-700 transition-all duration-200',
        className
      )}
    >
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
      </svg>
    </div>
  )
}
