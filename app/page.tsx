'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { H1, H2, H3, Lead, P, GradientText, Button, Container, Section, Card, Grid, Flex, IconBox } from '@/components/ui'
import Image from 'next/image'
import HomeLayout from '@/components/HomeLayout'

export default function Home() {

  return (
    <HomeLayout>
      {/* 背景圖片占滿整個螢幕，包括 Header 區域 */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image - 絕對定位，占滿整個視口 */}
        <div className="fixed inset-0 z-0">
          <Image
            src="/images/homeBackgroud.jpg"
            alt="Background"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        {/* Content Container - 主頁使用 full 寬度，不受限制 */}
        <Container maxWidth="xl" className="relative z-10 h-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center h-full px-4 lg:px-0">

            {/* Left Side - Text Content */}
            <motion.div
              className="text-center lg:text-left"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <H1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 lg:mb-6">
                Hello, I&apos;m JBro
              </H1>
              <Lead className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-6 lg:mb-8">
                NTU CSIE & ECON B10<br />
                NTUPDC&apos;34
              </Lead>
            </motion.div>

            {/* Right Side - Portrait */}
            <motion.div
              className="flex justify-center lg:justify-end items-center h-full"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative flex items-center h-full">
                <Image
                  src="/images/portrait.png"
                  alt="Portrait"
                  width={300}
                  height={450}
                  className="w-32 sm:w-40 md:w-48 lg:w-60 h-auto object-contain drop-shadow-2xl max-h-[80vh]"
                  priority
                />
              </div>
            </motion.div>

          </div>
        </Container>
      </section>
    </HomeLayout>
  )
}
