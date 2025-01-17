'use client'

import { useMutation } from '@tanstack/react-query'
import { Heart } from 'lucide-react'
import { startTransition, useEffect, useState } from 'react'

import { useProfile } from '@/hooks/useProfile'

import { transformCount } from '@/utils/transform-count'

import { SaveToPlaylist } from './SaveToPlaylist'
import { userService } from '@/services/studio/user.service'
import type { ISingleVideoResponse } from '@/types/video.types'

export function VideoActions({ video }: { video: ISingleVideoResponse }) {
  const { profile, refetch } = useProfile()

  const isLiked = profile?.likes.some(like => like.videoId === video.id) || false

  const [isLikedLocal, setIsLikedLocal] = useState(isLiked)

  const [optimisticLike, setOptimisticLike] = useState<number>(video.likes.length)

  useEffect(() => {
    setIsLikedLocal(isLiked)
  }, [isLiked])

  const { mutate } = useMutation({
    mutationKey: ['like'],
    mutationFn: () => userService.toggleLike(video.id),
    onMutate() {
      startTransition(() => {
        const newIsLiked = !isLikedLocal
        setIsLikedLocal(newIsLiked)
        setOptimisticLike(prev => {
          if (newIsLiked) return prev + 1
          else return prev - 1
        })
      })
    },
    onError() {
      startTransition(() => {
        const revertedIsLiked = !isLikedLocal
        setIsLikedLocal(revertedIsLiked)
        setOptimisticLike(prev => {
          if (revertedIsLiked) return prev + 1
          else return prev - 1
        })
      })
    },
    onSuccess() {
      refetch()
    }
  })

  return (
    <div className='flex items-center gap-7 '>
      <SaveToPlaylist video={video} />
      <button
        onClick={() => {
          mutate()
        }}
        className='text-[#FF453A] flex items-center gap-1.5 transition-opacity opacity-85 hover:opacity-100'
      >
        <Heart
          size={20}
          fill={isLikedLocal ? '#FF453A' : 'transparent'}
        />
        {transformCount(optimisticLike)}
      </button>
    </div>
  )
}
