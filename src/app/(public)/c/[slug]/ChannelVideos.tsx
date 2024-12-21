import { Flame, Video } from 'lucide-react'

import { Heading } from '@/ui/Heading'
import { VideoItem } from '@/ui/video-item/VideoItem'

import type { IChannel } from '@/types/channel.types'
import type { IVideo } from '@/types/video.types'

export function ChannelVideos({ videos }: { videos: IChannel['videos'] }) {
  return (
    <section className='mb-10'>
      <Heading Icon={Video}>Videos</Heading>
      <div className='grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6'>
        {!!videos.length &&
          videos.map((video: IVideo) => (
            <VideoItem
              video={video}
              key={video.id}
              Icon={Flame}
            />
          ))}
      </div>
    </section>
  )
}
