'use client'

import Image from 'next/image'
import { Container, Section, H1, H2, P, GradientText, Card, Flex, IconBox } from '@/components/ui'
import CustomLink from '@/components/ui/CustomLink'
import CopyButton from '@/components/ui/Button/CopyButton'
import OpenLinkButton from '@/components/ui/Button/OpenLinkButton'
import StandardLayout from '@/components/StandardLayout'
import {
  EMAIL_ADDRESS,
  LINKEDIN_URL,
  INSTAGRAM_URL,
  FACEBOOK_URL,
  THREADS_URL,
  GITHUB_URL,
  PHONE_NUMBER
} from '@/constant/externalLinks'

export default function Contact() {
  return (
    <StandardLayout>
      <Container className="py-16 flex-1">
        <H1 className="text-center">Contact Me</H1>

        <Section>
          <Card className="max-w-2xl mx-auto" hover={false}>
            <div className="space-y-6">
              {/* Phone number */}
              <Flex
                direction="row"
                align="center"
                justify="between"
                gap={4}
                className="p-4 rounded-lg bg-gray-700/50 hover:bg-gray-700 transition-colors duration-200"
              >
                <div className="shrink-0 bg-gray-100 rounded-2xl">
                  <Image
                    src="/images/phone-call.png"
                    alt="Phone number"
                    width={32}
                    height={32}
                    className="w-12 h-12"
                  />
                </div>
                <div className="flex-1">
                  <P
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {PHONE_NUMBER}
                  </P>
                </div>
                <CopyButton text={EMAIL_ADDRESS} />
              </Flex>

              {/* Email */}
              <Flex
                direction="row"
                align="center"
                justify="between"
                gap={4}
                className="p-4 rounded-lg bg-gray-700/50 hover:bg-gray-700 transition-colors duration-200"
              >
                <div className="shrink-0 bg-gray-100 rounded-md p-2">
                  <Image
                    src="/images/gmail.png"
                    alt="Gmail"
                    width={32}
                    height={32}
                    className="w-8 h-8"
                  />
                </div>
                <div className="flex-1">
                  <P
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {EMAIL_ADDRESS}
                  </P>
                </div>
                <CopyButton text={EMAIL_ADDRESS} />
              </Flex>

              {/* Instagram */}
              <CustomLink
                href={INSTAGRAM_URL}
                isExternal={true}
                className="flex items-center gap-4 p-4 rounded-lg bg-gray-700/50 hover:bg-gray-700 transition-colors duration-200"
              >
                <div className="shrink-0">
                  <Image
                    src="/images/instagram.png"
                    alt="Instagram"
                    width={48}
                    height={48}
                    className="w-12 h-12"
                  />
                </div>
                <div className="flex-1">
                  <P
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    Instagram
                  </P>
                </div>
                <OpenLinkButton href={INSTAGRAM_URL} />
              </CustomLink>

              {/* Threads */}
              <CustomLink
                href={THREADS_URL}
                isExternal={true}
                className="flex items-center gap-4 p-4 rounded-lg bg-gray-700/50 hover:bg-gray-700 transition-colors duration-200"
              >
                <div className="shrink-0">
                  <Image
                    src="/images/threads.png"
                    alt="Instagram"
                    width={48}
                    height={48}
                    className="w-12 h-12"
                  />
                </div>
                <div className="flex-1">
                  <P
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    Threads
                  </P>
                </div>
                <OpenLinkButton href={THREADS_URL} />
              </CustomLink>

              {/* Facebook */}
              <CustomLink
                href={FACEBOOK_URL}
                isExternal={true}
                className="flex items-center gap-4 p-4 rounded-lg bg-gray-700/50 hover:bg-gray-700 transition-colors duration-200"
              >
                <div className="shrink-0">
                  <Image
                    src="/images/facebook.png"
                    alt="Facebook"
                    width={48}
                    height={48}
                    className="w-12 h-12"
                  />
                </div>
                <div className="flex-1">
                  <P
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    Facebook
                  </P>
                </div>
                <OpenLinkButton href={FACEBOOK_URL} />
              </CustomLink>

              {/* Linkedin */}
              <CustomLink
                href={LINKEDIN_URL}
                isExternal={true}
                className="flex items-center gap-4 p-4 rounded-lg bg-gray-700/50 hover:bg-gray-700 transition-colors duration-200"
              >
                <div className="shrink-0">
                  <Image
                    src="/images/linkedin.png"
                    alt="Linkedin"
                    width={48}
                    height={48}
                    className="w-12 h-12"
                  />
                </div>
                <div className="flex-1">
                  <P
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    Linkedin
                  </P>
                </div>
                <OpenLinkButton href={LINKEDIN_URL} />
              </CustomLink>

              {/* Github */}
              <CustomLink
                href={GITHUB_URL}
                isExternal={true}
                className="flex items-center gap-4 p-4 rounded-lg bg-gray-700/50 hover:bg-gray-700 transition-colors duration-200"
              >
                <div className="shrink-0 bg-gray-100 rounded-lg">
                  <Image
                    src="/images/github.png"
                    alt="Github"
                    width={48}
                    height={48}
                    className="w-12 h-12"
                  />
                </div>
                <div className="flex-1">
                  <P
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    Github
                  </P>
                </div>
                <OpenLinkButton href={GITHUB_URL} />
              </CustomLink>
            </div>
          </Card>
        </Section>
      </Container>
    </StandardLayout>
  )
}
