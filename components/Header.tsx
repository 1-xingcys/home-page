'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import CustomLink from './CustomLink'
import { navigationItems } from '@/constant/navigationItem'
import Sidebar from './Sidebar'

export default function Header({ isBackdropBlur = false }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const pathname = usePathname()

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  // 判斷是否為當前頁面
  const isCurrentPage = (href: string) => {
    if (href === '/') {
      return pathname === '/'
    }
    return pathname.startsWith(href)
  }

  const homeLogo = (
    <CustomLink
      href="/"
      isExternal={false}
      className="flex items-center space-x-3 hover:opacity-80 transition-opacity duration-200"
    >
      <div>
        <Image
          src="/images/jbroLogo.png"
          alt="JBro"
          width={100}
          height={40}
          className="h-8 w-auto object-contain"
          priority
        />
      </div>
    </CustomLink>
  );

  const desktopLayout = (
    <div className="hidden md:flex items-center justify-between h-16">
      {homeLogo}

      <nav className="flex items-center space-x-8">
        {navigationItems.map((item) => {
          const isCurrent = !item.isExternal && isCurrentPage(item.href)
          return (
            <CustomLink
              key={item.name}
              href={item.href}
              isExternal={item.isExternal}
              className={`font-medium transition-colors duration-200 relative group ${isCurrent
                ? 'text-blue-500'
                : 'text-gray-300 hover:text-blue-600'
                }`}
            >
              {item.name}
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-blue-600 transition-all duration-200 ${isCurrent
                ? 'w-full'
                : 'w-0 group-hover:w-full'
                }`}></span>
            </CustomLink>
          )
        })}
      </nav>
    </div>
  );

  const mobileLayout = (
    <div className="md:hidden flex items-center justify-between h-16">
      <div className="w-10"></div>

      {homeLogo}

      <button
        onClick={toggleSidebar}
        className="p-2 rounded-lg text-gray-300 hover:bg-gray-800 transition-colors duration-200"
        aria-label="開啟選單"
      >
        <svg
          className={`w-6 h-6 transition-transform duration-200 ${isSidebarOpen ? 'rotate-90' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isSidebarOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>
    </div>
  );

  return (
    <>
      <header className={`bg-transparent ${isBackdropBlur ? 'backdrop-blur-sm' : ''} sticky top-0 z-40 font-source-code-pro `}>
        <div className="container mx-auto px-4 max-w-sm sm:max-w-md md:max-w-lg lg:max-w-4xl">
          {desktopLayout}
          {mobileLayout}
        </div>
      </header>

      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />
    </>
  )
}
