'use client'

import { Heart } from 'lucide-react'

import { Heading } from '@/ui/Heading'
import { SkeletonLoader } from '@/ui/SkeletonLoader'
import { VideoItem } from '@/ui/video-item/VideoItem'

import { useProfile } from '@/hooks/useProfile'

export function SubscriptionsPage() {
  const { profile, isLoading } = useProfile()

  return (
    <section>
      <Heading
        isH1
        Icon={Heart}
        classNameHeading='text-xl'
      >
        Subscriptions
      </Heading>
      <div className='grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6'>
        {isLoading ? (
          <SkeletonLoader
            count={6}
            className='h-36 rounded-md'
          />
        ) : profile?.subscribedVideos.length ? (
          profile?.subscribedVideos?.map(video => (
            <VideoItem
              video={video}
              key={video.id}
            />
          ))
        ) : (
          <p className='text-gray-500'>Subscriptions not found</p>
        )}
      </div>
    </section>
  )
}
