import type { Metadata } from 'next'
import { Inter, Source_Code_Pro } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const sourceCodePro = Source_Code_Pro({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  variable: '--font-source-code-pro'
})

export const metadata: Metadata = {
  title: 'JBro Dev',
  description: 'Welcome to my personal website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-TW" className="dark">
      <body className={`${sourceCodePro.className} ${sourceCodePro.variable} overflow-x-hidden`}>
        {children}
      </body>
    </html>
  )
}
