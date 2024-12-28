'use client'

import dynamic from 'next/dynamic'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

import { Heading } from '@/ui/Heading'
import { VerifiedBadge } from '@/ui/VerifiedBadge'
import { Textarea } from '@/ui/field/textarea'

import { PAGE } from '@/config/public-page.config'

import { transformDate } from '@/utils/transform.date'

import { getInitials } from './get-initials'
import type { ISingleVideoResponse } from '@/types/video.types'

const DynamicCommentActions = dynamic(
  () => import('./CommentActions').then(mod => mod.CommentActions),
  { ssr: false }
)

interface Props {
  comment: ISingleVideoResponse['comments'][0]
  refetch: () => void
}

export function CommentItem({ comment, refetch }: Props) {
  const [text, setText] = useState(comment.text)

  return (
    <div className='flex items-start gap-3.5 mb-5 pb-5 border-b border-b-border last:border-b-transparent'>
      {comment.user?.channel ? (
        <Link href={PAGE.CHANNEL(comment.user.channel?.slug || '')}>
          <Image
            src={comment.user.channel?.avatarUrl || ''}
            alt={comment.user.name || ''}
            width={40}
            height={40}
            className='rounded-lg flex-shrink-0'
          />
        </Link>
      ) : (
        <div
          className='w-10 h-10 text-xl bg-gray-300 text-gray-900 
          flex justify-center items-center rounded-lg flex-shrink-0 shadow font-medium'
        >
          {getInitials(comment.user.name || 'Anonym')}
        </div>
      )}
      <div className='w-full flex flex-col gap-1.5'>
        <div className='flex items-start gap-3.5 '>
          <Link href={PAGE.CHANNEL(comment?.user?.channel?.slug || '')}>
            <Heading
              className='mb-0'
              classNameHeading='text-[0.2rem]'
            >
              <span className='flex items-center gap-1.5 text-base text-gray-300'>
                {comment.user?.name}
                {comment.user.channel?.isVerified && <VerifiedBadge size={14} />}
              </span>
            </Heading>
          </Link>

          <div className='text-gray-500 text-[0.80rem]'>
            <span>{transformDate(comment?.createdAt)}</span>
          </div>
        </div>
        <div>
          <div className='m-0'>
            <Textarea
              className='text-gray-400 text-[0.85rem] leading-snug bg-transparent resize-none outline-none overflow-y-hidden border border-transparent focus:border-border'
              value={text}
              onChange={e => setText(e.target.value)}
              wrapperClassName='m-0'
            />
          </div>
          {
            <DynamicCommentActions
              refetch={refetch}
              comment={comment}
              newText={text}
            />
          }
        </div>
      </div>
    </div>
  )
}
