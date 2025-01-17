'use client'

import { useMutation, useQuery } from '@tanstack/react-query'
import { History } from 'lucide-react'

import { Heading } from '@/ui/Heading'
import { SkeletonLoader } from '@/ui/SkeletonLoader'
import { Button } from '@/ui/button/Button'
import { HorizontalVideoItem } from '@/ui/video-item/HorizontalVideoItem'

import { watchHistoryService } from '@/services/watch-history.service'

export function HistoryPage() {
  const { data, isLoading, refetch } = useQuery({
    queryKey: ['watch history'],
    queryFn: () => watchHistoryService.getUserHistory()
  })

  const { mutate, isPending } = useMutation({
    mutationKey: ['clear history'],
    mutationFn: () => watchHistoryService.clearHistory(),
    onSuccess() {
      refetch()
    }
  })

  return (
    <section className='w-[70%]'>
      <div className='flex justify-between items-center mb-10'>
        <Heading
          isH1
          Icon={History}
          classNameHeading='text-xl'
          className='mb-0'
        >
          History
        </Heading>
        <Button
          variant='simple'
          isLoading={isPending}
          onClick={() => {
            mutate()
          }}
        >
          Clear history
        </Button>
      </div>
      <div>
        {isLoading ? (
          <SkeletonLoader
            count={6}
            className='h-36 rounded-md'
          />
        ) : data?.data?.length ? (
          data?.data?.map(history => (
            <HorizontalVideoItem
              key={history.video.id}
              video={history.video}
            />
          ))
        ) : (
          <p className='text-gray-400'>Watch history not found</p>
        )}
      </div>
    </section>
  )
}
