import { ReactNode } from 'react'
import Header from './Header'
import Footer from './Footer'

interface StandardLayoutProps {
  children: ReactNode
}

export default function StandardLayout({ children }: StandardLayoutProps) {
  return (
    <div className="font-source-code-pro min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex flex-col">
      {/* Header 不與背景重疊，有自己的背景 */}
      <Header isBackdropBlur={true} />
      {/* 主要內容區域 */}
      <main className="flex-1">
        {children}
      </main>
      {/* Footer 區域 */}
      <Footer />
    </div>
  )
}
