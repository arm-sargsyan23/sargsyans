'use client'

import { useInfiniteQuery } from '@tanstack/react-query'
import { Flame } from 'lucide-react'

import { Heading } from '@/ui/Heading'
import { SkeletonLoader } from '@/ui/SkeletonLoader'
import { VideoItem } from '@/ui/video-item/VideoItem'

import { useAuth } from '@/hooks/useAuth'
import { useEffectScroll } from '@/hooks/useEffectScroll'

import { videoService } from '@/services/video.service'

export function Explore() {
  const { user } = useAuth()

  const { data, isLoading, isFetchingNextPage, fetchNextPage, hasNextPage } = useInfiniteQuery({
    queryKey: ['explore'],
    queryFn: ({ pageParam }) =>
      videoService.getExploreVideos(
        user?.id,
        {
          page: pageParam.page,
          limit: 12
        },
        pageParam.excludeIds
      ),
    initialPageParam: { page: 1, excludeIds: [] as string[] },
    getNextPageParam: (lastPage, allPages) => {
      const { page, totalPages } = lastPage
      const allVideoIds = allPages.flatMap(page => page.videos.map(video => video.id))

      return page < totalPages ? { page: page + 1, excludeIds: allVideoIds } : undefined
    }
  })

  useEffectScroll({
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage
  })

  const allVideos = data?.pages.flatMap(page => page.videos) || []

  return (
    <>
      <Heading Icon={Flame}>Explore</Heading>
      <section className='grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6'>
        {isLoading && !allVideos.length ? (
          <SkeletonLoader
            count={6}
            className='h-36 rounded-md'
          />
        ) : (
          allVideos.map(video => (
            <VideoItem
              key={video.id}
              video={video}
            />
          ))
        )}

        {isFetchingNextPage && (
          <SkeletonLoader
            count={6}
            className='h-36 rounded-md'
          />
        )}
      </section>
    </>
  )
}
