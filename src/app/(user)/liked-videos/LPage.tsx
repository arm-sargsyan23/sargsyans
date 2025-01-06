'use client'

import dynamic from 'next/dynamic'

const DynamicLikedVideosPage = dynamic(
  () => import('./LikedVideosPage').then(mod => mod.LikedVideosPage),
  { ssr: false }
)

export function LPage() {
  return <DynamicLikedVideosPage />
}
