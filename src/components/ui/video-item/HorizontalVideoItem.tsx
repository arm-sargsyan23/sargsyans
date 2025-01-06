import * as m from 'framer-motion/m'
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
}

export function HorizontalVideoItem({ video }: Props) {
  return (
    <m.div
      whileHover={{
        scale: 1.01,
        y: -2
      }}
      transition={{
        type: 'spring',
        stiffness: 500,
        damping: 30
      }}
    >
      <div className='flex items-stretch gap-4 mb-6'>
        <Link
          href={PAGE.VIDEO(video.publicId)}
          className='flex-shrink-0'
        >
          <Image
            src={video.thumbnailUrl}
            width={206}
            height={116}
            alt={video.title}
            className='rounded-md'
          />
        </Link>
        <div className='flex flex-col justify-between'>
          <div>
            <div className='mb-1 text-lg'>
              <VideoItemTitle video={video} />
            </div>
            <div className='mb-1'>
              <VideoChannelName
                channel={video.channel}
                spanClassName='text-base mr-0.5'
              />
            </div>
          </div>
          <div className='flex items-center gap-2 pb-1 text-[0.8rem] text-gray-500'>
            <span>{transformCount(video.viewsCount)} views</span>
            <span>•</span>
            <span>{transformDate(video.createdAt)}</span>
          </div>
        </div>
      </div>
    </m.div>
  )
}
