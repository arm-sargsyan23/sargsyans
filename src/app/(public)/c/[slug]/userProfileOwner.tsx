'use client'

import dynamicNext from 'next/dynamic'
import Image from 'next/image'

import { Heading } from '@/ui/Heading'
import { SkeletonLoader } from '@/ui/SkeletonLoader'
import { VerifiedBadge } from '@/ui/VerifiedBadge'

import { transformCount } from '@/utils/transform-count'

import type { IChannel } from '@/types/channel.types'

const DynamicSubscribeButton = dynamicNext(
  () => import('@/components/SubscribeButton').then(mod => mod.SubscribeButton),
  { ssr: false, loading: () => <SkeletonLoader className='mb-0 w-[125px] h-10 rounded' /> }
)

export function UserProfileOwner({ channel, slug }: { channel: IChannel; slug: string }) {
  return (
    <div>
      <div className='relative w-full h-[249px] rounded-2xl overflow-hidden shadow-lg'>
        <Image
          src={channel?.bannerUrl}
          alt={channel?.user.name || ''}
          fill
          style={{ objectFit: 'cover' }}
          quality={100}
          priority
        />
      </div>
      <div className='flex items-start gap-5 mt-7 mb-10'>
        <Image
          src={channel?.avatarUrl}
          alt={channel?.slug}
          width={155}
          height={155}
          className='rounded-xl flex-shrink-0'
          quality={100}
          priority
        />
        <div>
          <Heading
            className='mb-2'
            isPageHeading
          >
            <span className='flex items-center gap-2'>
              {channel.user.name}
              {channel.isVerified && <VerifiedBadge size={18} />}
            </span>
          </Heading>
          <div className='mb-2  text-gray-400 text-[0.92rem] flex items-center gap-1'>
            <span>/{channel.slug}</span>
            <span>•</span>
            <span>{transformCount(channel.subscribers.length)} subscribers</span>
            <span>•</span>
            <span>{channel.videos.length} videos</span>
          </div>
          <article className='mb-2 text-gray-400 text-sm leading-snug'>
            {channel.description}
          </article>
          <DynamicSubscribeButton slug={slug} />
        </div>
      </div>
    </div>
  )
}
