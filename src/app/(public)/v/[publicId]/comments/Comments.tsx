'use client'

import { useQuery } from '@tanstack/react-query'
import dynamic from 'next/dynamic'

import { CommentItem } from './CommentItem'
import { commentService } from '@/services/comment.service'
import type { ISingleVideoResponse } from '@/types/video.types'

const DynamicAddCommentsForm = dynamic(
  () => import('./AddCommentsForm').then(mod => mod.AddCommentsForm),
  { ssr: false }
)

interface Props {
  video: ISingleVideoResponse
}

export function Comments({ video }: Props) {
  const { data, refetch } = useQuery({
    queryKey: ['comments', video.id],
    queryFn: () => commentService.byVideoPublicId(video.publicId),
    initialData: video.comments
  })

  return (
    <div className='border-t border-t-border pt-4 mt-8'>
      <DynamicAddCommentsForm
        videoId={video.id}
        refetch={refetch}
      />

      {!!data &&
        data.map(comment => (
          <CommentItem
            refetch={refetch}
            key={comment.id}
            comment={comment}
          />
        ))}
    </div>
  )
}
