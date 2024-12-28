import { useMutation } from '@tanstack/react-query'

import { useAuth } from '@/hooks/useAuth'

import { commentService } from '@/services/comment.service'
import type { IComment } from '@/types/comment.types'

interface Props {
  comment: IComment
  refetch: () => void
  newText: string
}

export function CommentActions({ comment, refetch, newText }: Props) {
  const { isLoggedIn, user } = useAuth()

  const { mutate: update, isPending: isUpdatePending } = useMutation({
    mutationKey: ['update comment'],
    mutationFn: () =>
      commentService.update(comment.id, { text: newText, videoId: comment.videoId }),
    onSuccess: () => {
      refetch()
    }
  })
  const { mutate: remove, isPending: isDeletePending } = useMutation({
    mutationKey: ['delete comment'],
    mutationFn: () => commentService.delete(comment.id),
    onSuccess: () => {
      refetch()
    }
  })

  if (!isLoggedIn) {
    return null
  }
  if (user?.id !== comment.user?.id) return null
  return (
    <div className='flex items-center gap-3'>
      <button
        disabled={isUpdatePending}
        onClick={() => update()}
        className='text-gray-500 text-sm opacity-90 hover:opacity-100 transition-opacity'
      >
        Save
      </button>
      <button
        disabled={isDeletePending}
        onClick={() => remove()}
        className='text-gray-500 text-sm opacity-90 hover:opacity-100 transition-opacity'
      >
        delete
      </button>
    </div>
  )
}
