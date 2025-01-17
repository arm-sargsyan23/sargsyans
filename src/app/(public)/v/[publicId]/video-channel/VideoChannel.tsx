'use client'

import dynamic from 'next/dynamic'
import Image from 'next/image'
import Link from 'next/link'

import { Heading } from '@/ui/Heading'
import { SkeletonLoader } from '@/ui/SkeletonLoader'
import { VerifiedBadge } from '@/ui/VerifiedBadge'

import { PAGE } from '@/config/public-page.config'

import { transformCount } from '@/utils/transform-count'

import type { ISingleVideoResponse } from '@/types/video.types'

const DynamicSubscribeButton = dynamic(
  () => import('@/components/SubscribeButton').then(mod => mod.SubscribeButton),
  { ssr: false, loading: () => <SkeletonLoader className='mb-0 w-[125px] h-10 rounded' /> }
)

export function VideoChannel({ video }: { video: ISingleVideoResponse }) {
  return (
    <div className='flex items-center justify-between mb-6'>
      <div className='flex items-center gap-3'>
        <Link href={PAGE.CHANNEL(video?.channel?.slug)}>
          <Image
            src={video?.channel.avatarUrl}
            alt={video?.channel?.user?.name || ''}
            width={55}
            height={55}
            className='rounded-xl flex-shrink-0'
            priority
          />
        </Link>
        <div>
          <Link href={PAGE.CHANNEL(video?.channel?.slug)}>
            <Heading
              className='mb-0'
              classNameHeading='text-lg'
            >
              <span className='flex items-center gap-2'>
                {video?.channel?.user?.name}
                {video?.channel?.isVerified && <VerifiedBadge size={14} />}
              </span>
            </Heading>
          </Link>

          <div className='text-gray-400 text-sm flex items-center gap-1'>
            <span>{transformCount(video?.channel?.subscribers?.length)} subscribers</span>
          </div>
        </div>
      </div>
      <DynamicSubscribeButton slug={video.channel.slug} />
    </div>
  )
}
