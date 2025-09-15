'use client'

import { Container, Section, H1, H2, P, Flex, HorizontalSeparator, Lead, BulletList, ListItem, H4, LinkText, ImageCarousel, Card, H3 } from '@/components/ui'
import StandardLayout from '@/components/StandardLayout'
import Image from 'next/image'
import CustomLink from '@/components/CustomLink'
import {
  NTUPDC_34_PERFORMANCE_CHEERS_URL,
  NTUPDC_34_PERFORMANCE_UNITY_URL,
  NTUPDC_34_WELCOME_DANCE_URL,
  NTUTDC_PRELIMINARY_URL,
  NTUTDC_FINAL_URL,
  POLITICAL_NIGHT_2023_BIBOS_CREW_URL,
  CSIE_NIGHT_MIX_DANCE_2024_URL,
  CSIE_NIGHT_MIX_DANCE_2025_URL,
  EE_NIGHT_SENIOR_L_2024_URL,
  EE_NIGHT_CROSS_GRADE_L_2025_URL,
  COLLEGE_HIGH_2022_URL,
  COLLEGE_HIGH_2023_URL
} from '@/constant/externalLinks'

export default function Interest() {

  const boardGameCrewModalContent = (
    <div className="mt-8">
      <P className="mx-auto mb-4 font-semibold text-center">
        根據抵達的團員人數，
      </P>
      <P className="mx-auto mb-4 font-semibold text-center">
        我們會稱呼當次團聚為以下的不同種「局」：
      </P>

      <div className="text-left max-w-4xl mx-auto">
        <BulletList spacing="lg">
          <ListItem>
            <strong>讀書局（5人以下）：</strong>當 5 位以下團員抵達時，這稱不上一個局，我們不承認 5 人可以玩阿瓦隆，硬要說的話，這應該是讀書局
          </ListItem>
          <ListItem>
            <strong>六人局：</strong>當 6 位團員抵達時，即可開始遊玩「六人局」，先不要覺得六人局沒意思，梅林視角全開，派西維爾能力直逼梅林，沒有湖中，資訊單純卻又不容易，無論是壞人衝紅車、好人放資訊、雜魚認能力者，都是相當不錯的練習和暖身。
          </ListItem>
          <ListItem>
            <strong>不經典三壞局（7人）：</strong>當 7 位團員抵達時，即可開始遊玩「不經典三壞局」，為何不經典？因為有一個樹人。此組合壞人數量多能力卻不強，相反的，好人數量少，梅林能力極大，十局大概有十局梅林都會被刺中。你是那個七人局刺不中的梅林嗎？歡迎加入我們。
          </ListItem>
          <ListItem>
            <strong>經典三壞局（8-9人）：</strong>當 8 ~ 9 位團員抵達時，即可開始遊玩「經典三壞局」，莫德雷德進入遊戲，能力者比例和能力均衡，並加入湖中女神。資訊不過於複雜但又不至於單薄，相當經典。
          </ListItem>
          <ListItem>
            <strong>滿員局（10人）：</strong>當 10 位團員抵達時，即為滿員局，為阿瓦隆的遊戲人數上限，在經典三壞的情況下加入樹人，邪惡方即便一次爆兩壞仍然有機會獲勝。根據團內潛規則，滿員局的日子需要拍大合照作為紀念。
          </ListItem>
          <ListItem>
            <strong>爆員局（10人以上）：</strong>若超過 10 位團員抵達，則是爆員局，代表有人需要去旁邊打撞球，因為爆員了。
          </ListItem>
        </BulletList>
      </div>
    </div>
  )

  return (
    <StandardLayout>
      <Container className="py-16 flex-1">
        <H1 className="text-center">Street Dance</H1>

        <HorizontalSeparator />

        {/* NTUPDC'34 部分 */}
        <Section>
          <Flex direction="col" align="center" justify="start" gap={8} className="mb-8 md:flex-row">
            <div className="flex-1">
              <H2>NTUPDC&apos;34</H2>
              <P className="mb-4">
                我是台大熱舞社 34 屆 Locking 教學。熱舞社的「教學」是社團的重要幹部，主要職責是規劃與執行社團課程、指導新進社員從零開始學習，並為迎新、成發等年度大型活動進行編舞與創作。
              </P>
              <P className="mb-4">相關作品：</P>
              <BulletList>
                <ListItem>
                  <CustomLink href={NTUPDC_34_PERFORMANCE_CHEERS_URL} isExternal={true}>
                    <LinkText>
                      2023 NTUPDC&apos;34屆成發 - cheers!
                    </LinkText>
                  </CustomLink>
                </ListItem>
                <ListItem>
                  <CustomLink href={NTUPDC_34_WELCOME_DANCE_URL} isExternal={true}>
                    <LinkText>
                      2023 NTUPDC&apos;34屆迎新舞展 - 超級瑪利歐
                    </LinkText>
                  </CustomLink>
                </ListItem>
                <ListItem>
                  <CustomLink href={NTUPDC_34_PERFORMANCE_UNITY_URL} isExternal={true}>
                    <LinkText>
                      2023 NTUPDC&apos;34屆成發學弟妹舞 - Unity
                    </LinkText>
                  </CustomLink>
                </ListItem>
              </BulletList>
            </div>
            <div className="flex-shrink-0">
              <Image src="/images/dancingHeroImage.png" alt="dancing" width={300} height={300} className="rounded-lg" />
            </div>
          </Flex>
        </Section>

        <HorizontalSeparator />

        {/* My Crew 部分 */}
        <Section>
          <Flex direction="col" align="center" justify="start" gap={8} className="mb-8 md:flex-row">
            <div className="flex-1">
              <H2>My Crew: Bibo&apos;s Crew</H2>
              <P className="mb-4">
                與一群愛跳舞的朋友們組了一個團，一起練舞、一起比賽、一起表演，有點那個。
              </P>
              <P className="mb-4">比賽、表演作品：</P>
              <BulletList>
                <ListItem>
                  <CustomLink href={NTUTDC_PRELIMINARY_URL} isExternal={true}>
                    <LinkText>
                      2025 台大盃熱舞大賽初賽
                    </LinkText>
                  </CustomLink>
                </ListItem>
                <ListItem>
                  <CustomLink href={NTUTDC_FINAL_URL} isExternal={true}>
                    <LinkText>
                      2025 台大盃熱舞大賽決賽
                    </LinkText>
                  </CustomLink>
                </ListItem>
                <ListItem>
                  <CustomLink href={POLITICAL_NIGHT_2023_BIBOS_CREW_URL} isExternal={true}>
                    <LinkText>
                      2023 台大政治之夜-Showcase
                    </LinkText>
                  </CustomLink>
                </ListItem>
              </BulletList>
            </div>
            <div className="flex-shrink-0 md:order-first">
              <Image src="/images/bibosCrew.png" alt="bibosCrew" width={300} height={300} className="rounded-lg" />
            </div>
          </Flex>
        </Section>

        <HorizontalSeparator />

        <Section>
          <Flex direction="col" align="center" justify="start" gap={8} className="mb-8 md:flex-row">
            <div className="flex-1">
              <H2>之夜表演編排</H2>
              <P className="mb-4">
                「之夜」是各系所或社團年度最盛大、最受矚目的學生自辦大型晚會活動。它不僅是學生展現創意與才華的舞台，更是凝聚系所向心力、創造共同回憶的重要傳統。我曾擔任多系之夜表演編排，以下是相關作品：
              </P>
              <BulletList>
                <ListItem>
                  <CustomLink href={CSIE_NIGHT_MIX_DANCE_2024_URL} isExternal={true}>
                    <LinkText>
                      2024 台大資訊之夜-混舞
                    </LinkText>
                  </CustomLink>
                </ListItem>
                <ListItem>
                  <CustomLink href={CSIE_NIGHT_MIX_DANCE_2025_URL} isExternal={true}>
                    <LinkText>
                      2025 台大資訊之夜-混舞
                    </LinkText>
                  </CustomLink>
                </ListItem>
                <ListItem>
                  <CustomLink href={EE_NIGHT_SENIOR_L_2024_URL} isExternal={true}>
                    <LinkText>
                      2024 台大電機之夜-大四 Locking
                    </LinkText>
                  </CustomLink>
                </ListItem>
                <ListItem>
                  <CustomLink href={EE_NIGHT_CROSS_GRADE_L_2025_URL} isExternal={true}>
                    <LinkText>
                      2025 台大電機之夜-跨屆 Locking
                    </LinkText>
                  </CustomLink>
                </ListItem>
              </BulletList>
            </div>
            <div className="flex-shrink-0">
              <Image src="/images/csieNight2025.png" alt="csieNight2025" width={300} height={300} className="rounded-lg" />
            </div>
          </Flex>
        </Section>

        <HorizontalSeparator />

        {/* College High 部分 */}
        <Section>
          <Flex direction="col" align="center" justify="start" gap={8} className="mb-8 md:flex-row">
            <div className="flex-1">
              <H2>校外比賽 - College High 大學爽</H2>
              <P className="mb-4">
                College High，又被舞者們暱稱為「大學爽」，是台灣歷史最悠久且最具指標性的大學街舞賽事。自2009年創辦以來，它不僅是各大學校街舞好手夢寐以求的殿堂，更在台灣街舞圈扮演著重要的推手角色，孕育出無數當今線上的頂尖舞者與老師。我曾代表學校參加 College High，有爽到。
              </P>
              <P className="mb-4">排舞比賽影片：</P>
              <BulletList>
                <ListItem>
                  <CustomLink href={COLLEGE_HIGH_2022_URL} isExternal={true}>
                    <LinkText>
                      2022 College High 大學爽
                    </LinkText>
                  </CustomLink>
                </ListItem>
                <ListItem>
                  <CustomLink href={COLLEGE_HIGH_2023_URL} isExternal={true}>
                    <LinkText>
                      2023 College High 大學爽
                    </LinkText>
                  </CustomLink>
                </ListItem>
              </BulletList>
            </div>
            <div className="flex-shrink-0 md:order-first">
              <Image src="/images/collegehigh.png" alt="collegehigh" width={300} height={300} className="rounded-lg" />
            </div>
          </Flex>
        </Section>

        <HorizontalSeparator />

        <H1 className="text-center">桌遊團 Mega Crew</H1>

        {/* 桌遊團部分 */}
        <Section className="text-center">
          <P className="mx-auto text-left mb-4 max-w-4xl">
            桌遊團 Mega Crew 是一個由 29 位正式團員和無數位隱藏團員組成的神秘地下組織，每逢期考結束、寒暑假或是各種大小節慶，不定期舉辦團員桌遊聚。地下組織不是叫假的，我們都在地下室玩。經過長達兩年的嘗試，遊玩了各種桌遊，到最後還是玩萬年不敗的
          </P>

          <H3 className="mx-auto mb-6 font-bold text-center text-xl max-w-4xl text-blue-400">
            - 阿瓦隆（Avalon）
          </H3>

          <P className="mx-auto mb-6 text-left max-w-4xl">
            每次的團聚由團長在群組中發起邀約，並提供遊玩場地和遊戲，為了避免團員們回應冷漠，副團長負責在群組附和團長的邀約，教學長則在團聚時負責打開遊戲並發放角色牌給團員，避免團員們一直聊天。團聚就是如此的歡樂，而我，就是團長本人。
          </P>

          <ImageCarousel
            images={[
              '/images/boardGameCrew/1.png',
              '/images/boardGameCrew/2.png',
              '/images/boardGameCrew/3.png',
              '/images/boardGameCrew/4.png',
              '/images/boardGameCrew/5.png',
              '/images/boardGameCrew/6.png',
              '/images/boardGameCrew/7.png',
            ]}
            alt="桌遊團 Mega Crew"
            width={480}
            height={320}
            className="mx-auto w-full md:w-[56rem] h-[20rem] mb-8"
            classImage="mx-auto my-auto w-115 h-80 object-cover rounded-lg"
          />

          <Card
            enableModal={true}
            className='ml-auto w-fit py-1 px-2 bg-transparent border-none'
            hover={false}
            modalContent={boardGameCrewModalContent}
          >
            <P className='mx-auto text-center w-fit underline group-hover:text-blue-400'>more about 桌遊團 Mega Crew</P>
          </Card>
        </Section>
      </Container>
    </StandardLayout>
  )
}