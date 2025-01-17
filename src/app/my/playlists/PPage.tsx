'use client'

import dynamic from 'next/dynamic'

import { SkeletonLoader } from '@/ui/SkeletonLoader'

const DynamicPlaylistsPage = dynamic(
  () => import('./PlaylistsPage').then(mod => mod.PlaylistsPage),
  {
    ssr: false,
    loading: () => (
      <div>
        <SkeletonLoader className='w-[170px] h-[31px]' />
        <div className='w-1/2'>
          <SkeletonLoader
            count={3}
            className='h-28 rounded-md'
          />
        </div>
      </div>
    )
  }
)

export function PPage() {
  return <DynamicPlaylistsPage />
}
