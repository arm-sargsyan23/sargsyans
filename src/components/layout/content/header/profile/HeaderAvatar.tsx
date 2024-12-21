import Image from 'next/image'
import Link from 'next/link'

import { SkeletonLoader } from '@/ui/SkeletonLoader'

import { useProfile } from '@/hooks/useProfile'

import { STUDIO_PAGE } from '@/config/studio-page.config'

export function HeaderAvatar() {
  const { profile, isLoading } = useProfile()

  if (isLoading) return <SkeletonLoader className='w-10 mb-0 rounded-md' />

  return (
    <Link
      href={STUDIO_PAGE.SETTINGS}
      className='shrink-0'
    >
      <Image
        src={profile?.channel?.avatarUrl || '/avatar.webp'}
        alt=''
        width={40}
        height={40}
        className='rounded-lg'
      />
    </Link>
  )
}
