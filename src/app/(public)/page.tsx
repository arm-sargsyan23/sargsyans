import { Flame } from 'lucide-react'
import type { Metadata } from 'next'

import { Heading } from '@/ui/Heading'
import { VideoItem } from '@/ui/video-item/VideoItem'

import { PAGE } from '@/config/public-page.config'

import { Explore } from './explore/Explore'
import { videoService } from '@/services/video.service'
import type { IVideo } from '@/types/video.types'

export const metadata: Metadata = {
  title: "Sargsyan's",
  description: "Best video from Sargsyan's",
  alternates: {
    canonical: PAGE.HOME
  },
  openGraph: {
    type: 'website',
    url: PAGE.HOME,
    title: "Sargsyan's"
  }
}

export default async function Home() {
  const { data } = await videoService.getTrendingVideos()
  const trendingVideos = data.slice(0, 6)

  return (
    <section>
      {!!trendingVideos.length && (
        <section className='mb-10'>
          <Heading Icon={Flame}>TrendingVideos</Heading>
          <div className='grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6'>
            {!!trendingVideos?.length &&
              trendingVideos.map((video: IVideo) => (
                <VideoItem
                  video={video}
                  key={video.id}
                  Icon={Flame}
                />
              ))}
          </div>
        </section>
      )}

      <Explore />
    </section>
  )
}
