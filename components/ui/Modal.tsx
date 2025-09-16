'use client'

import { ReactNode, useEffect } from 'react'
import { twMerge } from 'tailwind-merge'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children: ReactNode
  className?: string
  overlayClassName?: string
  showCloseButton?: boolean
  closeOnOverlayClick?: boolean
}

export default function Modal({
  isOpen,
  onClose,
  children,
  className,
  overlayClassName,
  showCloseButton = true,
  closeOnOverlayClick = true
}: ModalProps) {
  // 防止背景滾動 - iOS Safari 兼容版本
  useEffect(() => {
    if (isOpen) {
      // 保存當前滾動位置
      const scrollY = window.scrollY

      // 設置 body 樣式來防止滾動
      document.body.style.position = 'fixed'
      document.body.style.top = `-${scrollY}px`
      document.body.style.left = '0'
      document.body.style.right = '0'
      document.body.style.overflow = 'hidden'

      return () => {
        // 恢復原始狀態
        document.body.style.position = ''
        document.body.style.top = ''
        document.body.style.left = ''
        document.body.style.right = ''
        document.body.style.overflow = ''

        // 恢復滾動位置
        window.scrollTo(0, scrollY)
      }
    }
  }, [isOpen])

  // ESC 鍵關閉 Modal
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscKey)
    }

    return () => {
      document.removeEventListener('keydown', handleEscKey)
    }
  }, [isOpen, onClose])

  // 防止 iOS Safari 背景滾動的額外處理
  useEffect(() => {
    if (isOpen) {
      const preventScroll = (e: TouchEvent) => {
        // 只有當觸摸事件不在 Modal 內容區域時才阻止
        const target = e.target as Element
        const modalContent = document.querySelector('[data-modal-content]')

        if (modalContent && !modalContent.contains(target)) {
          e.preventDefault()
        }
      }

      document.addEventListener('touchmove', preventScroll, { passive: false })

      return () => {
        document.removeEventListener('touchmove', preventScroll)
      }
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div
      className={twMerge(
        'fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center text-left p-4',
        // iOS Safari 優化
        'touch-none overscroll-none',
        overlayClassName
      )}
      onClick={closeOnOverlayClick ? onClose : undefined}
      style={{ WebkitOverflowScrolling: 'touch' }}
    >
      <div
        className={twMerge(
          'bg-gray-900 border border-gray-700 rounded-xl relative max-w-4xl max-h-[90vh] overflow-hidden flex flex-col',
          className
        )}
        onClick={(e) => e.stopPropagation()}
      >
        {/* 關閉按鈕 */}
        {showCloseButton && (
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 text-gray-400 hover:text-white transition-colors duration-200 text-2xl bg-gray-800/50 hover:bg-gray-700/50 rounded-full w-8 h-8 flex items-center justify-center"
            aria-label="關閉"
          >
            ×
          </button>
        )}

        {/* Modal 內容 - 可滾動區域 */}
        <div
          className="overflow-y-auto p-8 overscroll-contain"
          data-modal-content
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          {children}
        </div>
      </div>
    </div>
  )
}
