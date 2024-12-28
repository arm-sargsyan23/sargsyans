'use client'

import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'

import { useProfile } from '@/hooks/useProfile'

import { PAGE } from '@/config/public-page.config'

import { Button } from './ui/button/Button'
import { channelService } from '@/services/channel.service'

export function SubscribeButton({ slug }: { slug: string }) {
  const { profile, refetch } = useProfile()
  const router = useRouter()

  const { mutate } = useMutation({
    mutationKey: ['subscribe'],
    mutationFn: () => channelService.toggleSubscribe(slug),
    onSuccess: () => {
      refetch()
    }
  })

  const clickHandler = () => {
    if (profile) {
      mutate()
    } else {
      router.push(PAGE.AUTH)
    }
  }

  const isSubscribed = profile?.subscriptions.some(sub => sub.slug === slug)

  return (
    <Button
      variant={isSubscribed ? 'secondary' : 'primary'}
      onClick={clickHandler}
    >
      {isSubscribed ? 'Subscribed' : 'Subscribe'}
    </Button>
  )
}
