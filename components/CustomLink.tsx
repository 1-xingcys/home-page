import Link from 'next/link'
import { ReactNode, AnchorHTMLAttributes } from 'react'

interface CustomLinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
  href: string
  isExternal: boolean
  children: ReactNode
  className?: string
}

export default function CustomLink({
  href,
  isExternal,
  children,
  className,
  ...props
}: CustomLinkProps) {
  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        {...props}
      >
        {children}
      </a>
    )
  }

  return (
    <Link href={href} className={className} {...props}>
      {children}
    </Link>
  )
}
