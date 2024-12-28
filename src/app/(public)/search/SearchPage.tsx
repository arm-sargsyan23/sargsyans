'use client'

import { useQuery } from '@tanstack/react-query'
import { Search } from 'lucide-react'
import { useSearchParams } from 'next/navigation'

import { Heading } from '@/ui/Heading'
import { SkeletonLoader } from '@/ui/SkeletonLoader'
import { VideoItem } from '@/ui/video-item/VideoItem'

import { videoService } from '@/services/video.service'

export function SearchPage() {
  const searchParams = useSearchParams()

  const { data, isLoading } = useQuery({
    queryKey: ['search', searchParams.get('term')],
    queryFn: () => videoService.getAll(searchParams.get('term'))
  })

  return (
    <section>
      <Heading
        isH1
        Icon={Search}
      >
        Search &quot;{searchParams.get('term')}&quot;
      </Heading>
      <div className='grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6'>
        {isLoading ? (
          <SkeletonLoader
            count={6}
            className='h-36 rounded-md'
          />
        ) : data?.data.videos.length ? (
          data.data.videos.map(video => (
            <VideoItem
              video={video}
              key={video.id}
            />
          ))
        ) : (
          <p className='text-gray-500'>Videos not found</p>
        )}
      </div>
    </section>
  )
}
