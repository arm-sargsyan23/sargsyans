'use client'

import { useQuery } from '@tanstack/react-query'
import { Compass } from 'lucide-react'

import { Heading } from '@/ui/Heading'
import { SkeletonLoader } from '@/ui/SkeletonLoader'
import { VideoItem } from '@/ui/video-item/VideoItem'

import { useAuth } from '@/hooks/useAuth'

import { videoService } from '@/services/video.service'

export function Explore() {
  const { user } = useAuth()

  const { data, isLoading } = useQuery({
    queryKey: ['explore'],
    queryFn: () => videoService.getExploreVideos(user?.id)
  })

  return (
    <section>
      <Heading Icon={Compass}>Explore</Heading>
      <div className='grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6'>
        {isLoading ? (
          <SkeletonLoader
            count={6}
            className='h-36 rounded-md'
          />
        ) : !!data?.data.videos.length ? (
          data.data.videos.map(video => (
            <VideoItem
              video={video}
              key={video.id}
            />
          ))
        ) : (
          <div>Explore are temporarily unavailable</div>
        )}
      </div>
    </section>
  )
}
