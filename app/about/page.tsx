'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Container, Section, H1, H4, P, Timeline, GradientText } from '@/components/ui'
import StandardLayout from '@/components/StandardLayout'

export default function About() {

  const timeLineItems = [
    {
      time: '2018/09',
      title: '就讀台北市立建國高級中學',
      description: '透過體育績優管道錄取',
      detail: (
        <div className="space-y-4">
          <P>
            我從小學二年級就參加游泳校隊，一路當游泳選手到國三，當時成功透過體育績優管道「游」進建中。
          </P>
          <P>
            不同於一般體保生的點是，體優生就讀的是普通班，因此我需要在充滿會考5A++學霸的環境中生存，這對當時考不上前三志願的我來說屬實是個大挑戰。
          </P>
        </div>
      )
    },
    {
      time: '2021/06',
      title: '建中畢業',
      description: '順利畢業！',
      detail: (
        <div className="space-y-4">
          <P>
            在建中受到學校自由開放的校風影響，我天天翹課、翻牆到校外玩，也玩了社團，嘗試了許多未曾想過能做的事情，真的非常有趣。
          </P>
          <P>
            不過當時也發現，很多同學們雖然玩得很兇，但他們都會安排時間把該讀的書讀好，甚至是其它各種才藝都能兼顧，這對我影響很大，既然自己幸運地可以待在這個環境，我應該要把握機會跟身邊同學們學習、提升自己。
          </P>
          <P>
            在高二時，我決定要開始認真讀書，準備一年後的學測，當時幾乎都是早上8點開始讀書一路讀到晚上12點，這輩子不曾如此努力讀書過。
          </P>
          <P>
            不過當時我只知道要讀書而已，不知道交作業也是一件重要的事情，因此我都是翹課去圖書館或是k書中心讀書，結果就是大考準備的還不錯，在校成績喜提90%，不過利用了體優生 40分及格標準順利拿到畢業證書。
          </P>
        </div>
      )
    },
    {
      time: '2021/09',
      title: '台大資管系入學',
      description: '快樂上大學',
      detail: (
        <div className="space-y-4">
          <P>
            高中時以為努力考好大考，之後應該沒有什麼需要煩惱的事情了吧。現實卻完全不是這樣，事實是我要拿著在校90%的成績單和毫無內容的備審資料去申請完全不理解的各個校系。
          </P>
          <P>
            經過一番研究，我最後選擇就讀台大資管系，選擇這個科系有幾個理由：
          </P>
          <ul className="list-disc list-inside space-y-1 ml-4 text-sm md:text-base text-gray-300">
            <li>相對其它理工科系來說負擔輕鬆</li>
            <li>涉略範圍廣，可以嘗試過後選擇要走「資」還是走「管」</li>
            <li>資訊領域感覺很熱門，出路應該不差</li>
          </ul>
          <P>
            我就以一個完全沒寫過程式的狀態去念了資管系，當時的策略就是學到有趣的東西再去鑽研，不急著規劃長遠目標。
          </P>
        </div>
      )
    },
    {
      time: '2022/09 - now',
      title: '雙主修經濟系',
      description: '開始增加畢業難度',
      detail: (
        <div className="space-y-4">
          <P>
            大一時修習了資管系必修「個體經濟學原理與實習」aka 個經原，修得還不錯、同時也覺得滿有趣的，於是就接續修了下學期的總經原。
          </P>
          <P>
            承接著高中被在校成績扯後腿的教訓，加上經濟學學到傳訊（signaling）這個概念，我覺得應該得要顧一下課業的「表面功夫」，除了「實質學到東西」之外，也得多花力氣說服別人「我具備足夠知識和學習能力」。
          </P>
          <P>
            於是我覺得雙主修會是個不錯的選擇，一方面可以裝逼、另一方面也可以學到更多的經濟學，相當不錯。
          </P>
        </div>
      )
    },
    {
      time: '2023/09 - now',
      title: '轉系台大資工',
      description: '只差解鎖輔系這個成就了',
      detail: (
        <div className="space-y-4">
          <P>
            大二上，才正要開啟資管雙經濟的課表時，系上突然有朋友在揪團修資工系的「演算法設計與分析」 也就是大名鼎鼎的ADA。身為一個跟風仔，我當然是跟著大家把必修管理學退掉直接硬上了ADA。
          </P>
          <P>
            這堂300人的大課在當時刷新了我對硬課的想像，沒有想過一份作業需要花上20小時還不一定寫得完。總之，強大的教學團隊、幾乎24小時的TA hour、期考教室會有零食，這些都讓我覺得資工系有點牛逼。
          </P>
          <P>
            升大三時因為雙主修，不少本系必修因衝堂沒有修，加上兩年的探索已經確認自己喜歡的方向是資訊領域，讓我開始有轉系的念頭。對此也是糾結很久，畢竟轉系付出的代價也不小 e.g. 晚一年畢業、離開社交舒適圈等等。
          </P>
          <P>
            無論如何，最後是幸運地低空飛過轉系考，來到了資工系，發現比ADA硬的課到處都是，而我現在只想修甜涼課能順利畢業就好。
          </P>
        </div>
      )
    },
    {
      time: '2025/07 - now',
      title: 'Portaly.cc 全端工程實習生',
      description: '加入台灣新創團隊，參與高速成長的產品開發',
      detail: (
        <div className="space-y-4">
          <P>
            Portaly 是一個由台灣團隊「真實引擎」開發的社群微型網站工具，又被稱為「傳送門」。使用者可以快速建立一個客製化的個人頁面，不僅能作為數位名片，更能進一步實現流量變現。
          </P>

          <div className="bg-gray-800/50 rounded-lg p-4 space-y-2">
            <H4 className="text-blue-400 font-semibold">公司成就</H4>
            <ul className="list-disc list-inside space-y-1 text-sm md:text-base text-gray-300">
              <li>2023 獲選台灣年度 30 新創</li>
              <li>獲得美國 Product Hunt - Product of the Day 榮譽</li>
              <li>2024 - 2025 年間於 18 個月創造 24x 的營收成長</li>
              <li>累積超過 15 萬名全球創作者用戶</li>
              <li>獲 Meet Taipei 評選為 2023 新創 30</li>
            </ul>
          </div>

          <P>
            團隊文化為「高速迭代成長」，採取 Scrum 敏捷開發，落實 Data Driven 的決策模式。
          </P>
        </div>
      )
    }
  ]
  return (
    <StandardLayout>
      <Container className="py-16 flex-1">
        <Section>

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Timeline
              items={timeLineItems}
              className="max-w-6xl mx-auto"
            />
          </motion.div>
        </Section>
      </Container>
    </StandardLayout>
  )
}
