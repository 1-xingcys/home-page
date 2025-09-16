'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import CustomLink from './ui/CustomLink'
import { navigationItems } from '@/constant/navigationItem'

interface SidebarProps {
  isOpen: boolean
  onClose: () => void
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const pathname = usePathname()

  // 判斷是否為當前頁面
  const isCurrentPage = (href: string) => {
    if (href === '/') {
      return pathname === '/'
    }
    return pathname.startsWith(href)
  }

  // 當 sidebar 開啟時，禁止背景滾動
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    // 清理函數
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  // 點擊背景遮罩關閉 sidebar
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-50 transition-opacity duration-300 md:hidden ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        onClick={handleBackdropClick}
      />

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-gray-900 shadow-xl z-50 transform transition-transform duration-300 ease-in-out md:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        {/* Sidebar Header */}
        <div className="flex justify-end p-6 border-b border-gray-700">
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-gray-400 hover:bg-gray-800 transition-colors duration-200"
            aria-label="關閉選單"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="p-6">
          <ul className="space-y-4">
            {navigationItems.map((item) => {
              const isCurrent = !item.isExternal && isCurrentPage(item.href)
              return (
                <li key={item.name}>
                  <CustomLink
                    key={item.name}
                    href={item.href}
                    isExternal={item.isExternal}
                    onClick={onClose}
                    className={`flex items-center gap-3 p-3 rounded-lg font-medium transition-colors duration-200 ${isCurrent
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-300 hover:bg-gray-800 hover:text-blue-400'
                      }`}
                  >
                    {item.icon}
                    {item.name}
                  </CustomLink>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
    </>
  )
}
