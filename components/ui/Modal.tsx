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
  // 防止背景滾動
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

  if (!isOpen) return null

  return (
    <div
      className={twMerge(
        'fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center text-left p-4',
        overlayClassName
      )}
      onClick={closeOnOverlayClick ? onClose : undefined}
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
        <div className="overflow-y-auto p-8">
          {children}
        </div>
      </div>
    </div>
  )
}
