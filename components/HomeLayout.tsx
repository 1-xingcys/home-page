import { ReactNode } from 'react'
import Header from './Header'

interface HomeLayoutProps {
  children: ReactNode
}

export default function HomeLayout({ children }: HomeLayoutProps) {
  return (
    <div className="h-screen relative overflow-hidden">
      {/* Header 覆蓋在背景圖上，使用透明背景和模糊效果 */}
      <Header isBackdropBlur={false} />
      {/* 主要內容，背景圖片會在 children 中處理，占滿整個螢幕 */}
      <main className="h-screen overflow-hidden">
        {children}
      </main>
      {/* HomeLayout 不包含 footer */}
    </div>
  )
}
