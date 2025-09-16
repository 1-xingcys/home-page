'use client'

import { ReactNode, useState } from 'react'
import { twMerge } from 'tailwind-merge'
import Modal from './Modal'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  enableModal?: boolean
  modalContent?: ReactNode
  modalClassName?: string
}

export default function Card({
  children,
  className,
  hover = true,
  enableModal = false,
  modalContent,
  modalClassName
}: CardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => {
    if (enableModal) {
      setIsModalOpen(true)
    }
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <>
      <div
        className={twMerge(
          'bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6',
          hover && 'hover:bg-gray-800/70 hover:border-gray-600/50 transition-all duration-200',
          enableModal && 'cursor-pointer group',
          className
        )}
        onClick={openModal}
      >
        {children}
      </div>

      {/* 使用獨立的 Modal 組件 */}
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        className={modalClassName}
      >
        {modalContent}
      </Modal>
    </>
  )
}
