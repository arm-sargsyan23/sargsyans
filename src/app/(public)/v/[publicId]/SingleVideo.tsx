'use client'

import cn from 'clsx'
import { useState } from 'react'

import { Heading } from '@/ui/Heading'
import { VideoPlayer } from '@/ui/video-player/VideoPlayer'

import { SimilarVideos } from './SimilarVideos'
import { Comments } from './comments/Comments'
import { VideoDescription } from './descriptions/VideoDescription'
import { useUpdateViews } from './useUpdateViews'
import { VideoActions } from './video-actions/VideoActions'
import { VideoChannel } from './video-channel/VideoChannel'
import type { ISingleVideoResponse } from '@/types/video.types'

interface Props {
  video: ISingleVideoResponse
}

export function SingleVideo({ video }: Props) {
  const [isTheaterMode, setTheaterMode] = useState(false)

  useUpdateViews({ video })

  return (
    <section className='grid gap-20 grid-cols-[3fr_.8fr] relative'>
      <div>
        <div className={cn('mb-6', isTheaterMode ? 'absolute top-0 left-0 w-full' : 'relative')}>
          <VideoPlayer
            toggleTheaterMode={() => {
              setTheaterMode(!isTheaterMode)
            }}
            fileName={video.videoFileName}
            maxResolution={video.maxResolution}
          />
        </div>

        <div
          className={cn('flex justify-between items-start pb-6 border-b border-border mb-6', {
            'pt-[58rem]': isTheaterMode
          })}
        >
          <div>
            <Heading
              className='mb-1'
              isH1
              classNameHeading='text-xl'
            >
              {video.title}
            </Heading>
            <div className='text-gray-500'>{video.viewsCount.toLocaleString()} views</div>
          </div>
          <VideoActions video={video} />
        </div>

        <VideoChannel video={video} />

        <VideoDescription description={video.description} />

        <Comments video={video} />
      </div>

      {!!video.similarVideos.length && (
        <div className={cn({ 'pt-[58rem]': isTheaterMode })}>
          <SimilarVideos videos={video.similarVideos} />
        </div>
      )}
    </section>
  )
}
