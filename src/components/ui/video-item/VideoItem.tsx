import * as m from 'framer-motion/m'
import { BadgeCheck, type LucideIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { PAGE } from '@/config/public-page.config'

import { transformViews } from '@/utils/transform-views'
import { transformDate } from '@/utils/transform.date'

import type { IVideo } from '@/types/video.types'

interface Props {
  video: IVideo
  Icon?: LucideIcon
}

export function VideoItem({ video, Icon }: Props) {
  return (
    <m.div
      whileHover={{ scale: 1.03, y: -5 }}
      transition={{ type: 'spring', stiffness: 500, damping: 20 }}
    >
      <div className='relative mb-1.5'>
        <Link href={PAGE.VIDEO(video.publicId)}>
          <Image
            src={video.thumbnailUrl}
            alt={video.title}
            width={250}
            height={140}
            className='rounded-md'
            priority
          />
        </Link>
        <Link
          href={PAGE.CHANNEL(video.channel.slug)}
          className='absolute left-1.5 bottom-2'
        >
          <Image
            src={video.channel.avatarUrl}
            alt={video.channel.description}
            width={40}
            height={40}
            className='rounded-full shadow'
            priority
          />
        </Link>
      </div>
      <div className='mb-1.5 flex items-center justify-between'>
        <div className='flex items-center gap-0.5'>
          {Icon && (
            <Icon
              className='text-red-600'
              size={20}
            />
          )}
          <span className='text-gray-500 text-sm'>{transformViews(video.viewsCount)}</span>
        </div>
        <div>
          <span className='text-gray-500 text-xs'>{transformDate(video.createdAt)}</span>
        </div>
      </div>
      <div className='mb-1'>
        <Link
          href={PAGE.VIDEO(video.publicId)}
          className='text-sm line-clamp-2 leading-[1.3]'
        >
          {video.title}
        </Link>
      </div>
      <div>
        <Link
          href={PAGE.VIDEO(video.publicId)}
          className='flex items-center gap-1'
        >
          <span className='text-gray-500 text-xs'>{video.channel.slug}</span>
          {video.channel.isVerified && (
            <span>
              <BadgeCheck
                className='text-green-500'
                size={15}
              />
            </span>
          )}
        </Link>
      </div>
    </m.div>
  )
}
