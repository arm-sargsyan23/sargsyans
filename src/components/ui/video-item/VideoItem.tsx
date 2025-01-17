import * as m from 'framer-motion/m'
import { type LucideIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { PAGE } from '@/config/public-page.config'

import { transformCount } from '@/utils/transform-count'
import { transformDate } from '@/utils/transform.date'

import { VideoChannelName } from './VideoChannelName'
import { VideoItemTitle } from './VideoItemTitle'
import type { IVideo } from '@/types/video.types'

interface Props {
  video: IVideo
  Icon?: LucideIcon
}

export function VideoItem({ video, Icon }: Props) {
  return (
    <m.div
      whileHover={{ scale: 1.03, y: -2 }}
      transition={{ type: 'spring', stiffness: 500, damping: 20 }}
    >
      <div className='relative mb-1.5'>
        <Link href={PAGE.VIDEO(video.publicId)}>
          <Image
            src={video.thumbnailUrl}
            alt={video.title}
            width={350}
            height={171}
            className='rounded-md w-full'
            priority
            quality={100}
          />
        </Link>
        <Link
          href={PAGE.CHANNEL(video.channel.slug)}
          className='absolute left-1.5 bottom-2'
          aria-label='Channel name'
        >
          <Image
            src={video.channel.avatarUrl}
            alt={video.channel.description}
            width={40}
            height={40}
            className='rounded-full shadow'
            priority
            quality={100}
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
          <span className='text-gray-400 text-xs'>{transformCount(video.viewsCount)} views</span>
        </div>
        <div className='grid gap-0.5'>
          <span className='text-gray-400 text-xs'>{transformDate(video.createdAt)}</span>
        </div>
      </div>
      <div className='mb-1'>
        <VideoItemTitle video={video} />
      </div>
      <div>
        <VideoChannelName channel={video?.channel} />
      </div>
    </m.div>
  )
}
