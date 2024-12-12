import { Gamepad2 } from 'lucide-react'
import type { Metadata } from 'next'

import { Heading } from '@/ui/Heading'
import { VideoItem } from '@/ui/video-item/VideoItem'

import { PAGE } from '@/config/public-page.config'

import { videoService } from '@/services/video.service'
import type { IVideo } from '@/types/video.types'

export const metadata: Metadata = {
  title: 'Video games',
  description: 'Best game`s videos.',
  alternates: {
    canonical: PAGE.VIDEO_GAMES
  },
  openGraph: {
    type: 'website',
    url: PAGE.VIDEO_GAMES,
    title: 'Video games'
  }
}

export const revalidate = 100
export const dynamic = 'force-static'

export default async function VideoGamesPage() {
  const { data: VideoGames } = await videoService.getVideoGames()

  return (
    <section className='mb-10'>
      <Heading Icon={Gamepad2}>Video games</Heading>
      <div className='grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6'>
        {!!VideoGames?.videos.length ? (
          VideoGames.videos.map((video: IVideo) => (
            <VideoItem
              video={video}
              key={video.id}
            />
          ))
        ) : (
          <div>Video games are temporarily unavailable</div>
        )}
      </div>
    </section>
  )
}
