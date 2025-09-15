'use client'

import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'
import Card from './Card'

interface TimelineItemProps {
  time: string
  title: string
  description: string
  detail: ReactNode
  className?: string
  isLeft?: boolean
}

export default function TimelineItem({
  time,
  title,
  description,
  detail,
  className,
  isLeft = true,
}: TimelineItemProps) {
  const cardContent = (
    <div className="space-y-3">
      <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
        {title}
      </h3>

      <p className="text-gray-300 leading-relaxed">
        {description}
      </p>

      {/* 點擊提示 */}
      <div className="flex items-center text-sm text-gray-400 mt-4">
        <span>點擊查看詳細內容</span>
        <svg
          className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </div>
  )

  const modalContent = (
    <div className="space-y-6">
      {/* Modal 標題 */}
      <div className="border-b border-gray-700 pb-4">
        <div className="text-sm text-blue-400 font-semibold mb-2">
          {time}
        </div>
        <h2 className="text-2xl font-bold text-white">
          {title}
        </h2>
      </div>

      {/* Modal 內容 */}
      <div className="text-gray-200 leading-relaxed text-lg">
        {detail}
      </div>
    </div>
  )

  return (
    <div className={twMerge('relative', className)}>
      {/* 手機版佈局 */}
      <div className="flex items-start md:hidden">
        {/* 時間點圓圈 */}
        <div className="relative z-10 flex-shrink-0">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
            <div className="w-3 h-3 bg-white rounded-full"></div>
          </div>
        </div>

        {/* 內容區域 */}
        <div className="ml-6 flex-1">
          {/* 時間標籤 */}
          <div className="text-sm text-blue-400 font-semibold mb-2">
            {time}
          </div>

          {/* Card */}
          <Card
            hover={true}
            enableModal={true}
            modalContent={modalContent}
            className="cursor-pointer transform transition-all duration-200 hover:scale-[1.02] hover:shadow-xl group"
            modalClassName="max-w-4xl"
          >
            {cardContent}
          </Card>
        </div>
      </div>

      {/* 電腦版交錯佈局 */}
      <div className="hidden md:block">
        <div className={twMerge(
          'flex items-start',
          isLeft ? 'justify-end pl-12' : 'justify-start pr-12'
        )}>
          {/* 內容區域 - 左側時在左邊，右側時在右邊 */}
          <div className={twMerge(
            'w-1/2 relative',
            isLeft ? 'text-right' : 'text-left'
          )}>
            {/* 時間標籤 */}
            <div className={twMerge(
              'text-sm text-blue-400 font-semibold mb-2',
              isLeft ? 'text-right' : 'text-left'
            )}>
              {time}
            </div>

            {/* Card */}
            <Card
              hover={true}
              enableModal={true}
              modalContent={modalContent}
              className="cursor-pointer transform transition-all duration-200 hover:scale-[1.02] hover:shadow-xl group"
              modalClassName="max-w-4xl"
            >
              <div className={twMerge('space-y-3', isLeft ? 'text-right' : 'text-left')}>
                <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
                  {title}
                </h3>

                <p className="text-gray-300 leading-relaxed">
                  {description}
                </p>

                {/* 點擊提示 */}
                <div className={twMerge(
                  'flex items-center text-sm text-gray-400 mt-4',
                  isLeft ? 'justify-end' : 'justify-start'
                )}>
                  {!isLeft && (
                    <svg
                      className="w-4 h-4 mr-2 transform group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  )}
                  <span>more...</span>
                  {isLeft && (
                    <svg
                      className="w-4 h-4 ml-2 transform group-hover:-translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  )}
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* 時間點圓圈 - 絕對定位在中央 */}
        <div className="absolute left-1/2 top-[50%] transform -translate-x-1/2 z-10">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
            <div className="w-3 h-3 bg-white rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
