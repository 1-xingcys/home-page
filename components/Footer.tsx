import { P } from '@/components/ui'
import CustomLink from './ui/CustomLink'
import {
  EMAIL_ADDRESS,
  GITHUB_URL,
  LINKEDIN_URL,
  INSTAGRAM_URL
} from '@/constant/externalLinks'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="mx-auto w-full bg-gray-900/50 backdrop-blur-sm border-t border-gray-700/50 py-8">
      <P className="text-center text-gray-400 text-sm mb-4 md:mb-0">
        © {currentYear} JBro Dev. All rights reserved.
      </P>
    </footer>
  )
}
