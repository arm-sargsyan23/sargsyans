import { Flame } from 'lucide-react'
import type { Metadata } from 'next'

import { Heading } from '@/ui/Heading'
import { VideoItem } from '@/ui/video-item/VideoItem'

import { PAGE } from '@/config/public-page.config'

import { videoService } from '@/services/video.service'
import type { IVideo } from '@/types/video.types'

export const metadata: Metadata = {
  title: 'Trending',
  description: 'Best video in trends.',
  alternates: {
    canonical: PAGE.TRENDING
  },
  openGraph: {
    type: 'website',
    url: PAGE.TRENDING,
    title: 'Trending'
  }
}

export const revalidate = 100
export const dynamic = 'force-static'

export default async function TrendingPage() {
  const { data: trendingVideos } = await videoService.getTrendingVideos()

  return (
    <section className='mb-10'>
      <Heading Icon={Flame}>Trending</Heading>
      <div className='grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6'>
        {!!trendingVideos?.length ? (
          trendingVideos.map((video: IVideo) => (
            <VideoItem
              video={video}
              key={video.id}
              Icon={Flame}
            />
          ))
        ) : (
          <div>Trends are temporarily unavailable</div>
        )}
      </div>
    </section>
  )
}
