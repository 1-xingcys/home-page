'use client'

import Image from 'next/image'
import { twMerge } from 'tailwind-merge'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'

// 引入 Swiper 樣式
import 'swiper/css'

interface ImageCarouselProps {
  images: string[]
  alt: string
  width?: number
  height?: number
  interval?: number
  className?: string
  classImage?: string
}

export default function ImageCarousel({
  images,
  alt,
  width = 400,
  height = 300,
  interval = 0,
  className,
  classImage
}: ImageCarouselProps) {
  if (images.length === 0) return null

  return (
    <div className={twMerge('overflow-hidden rounded-lg', className)}>
      <Swiper
        modules={[Autoplay]}
        slidesPerView={1}
        spaceBetween={16}
        breakpoints={{
          768: {
            slidesPerView: 2,
          }
        }}
        autoplay={{
          delay: interval,
          disableOnInteraction: false,
        }}
        speed={2000}
        freeMode={true}
        loop={true}
        className="w-full"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <Image
              src={image}
              alt={`${alt} ${index + 1}`}
              width={width}
              height={height}
              className={twMerge('w-full h-auto object-cover', classImage)}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
