'use client'

import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'
import TimelineItem from './TimelineItem'

interface TimelineItemData {
  time: string
  title: string
  description: string
  detail: ReactNode
}

interface TimelineProps {
  items: TimelineItemData[]
  className?: string
}

export default function Timeline({ items, className }: TimelineProps) {
  return (
    <div className={twMerge('relative', className)}>
      {/* 垂直線 - 電腦版置中，手機版靠左 */}
      <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-0.5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 via-purple-500 to-pink-500"></div>

      {/* Timeline 項目 */}
      <div className="space-y-8 md:space-y-12">
        {items.map((item, index) => (
          <TimelineItem
            key={index}
            time={item.time}
            title={item.title}
            description={item.description}
            detail={item.detail}
            isLeft={index % 2 === 0}
          />
        ))}
      </div>
    </div>
  )
}
