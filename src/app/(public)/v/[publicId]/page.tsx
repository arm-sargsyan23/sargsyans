import { stripHtml } from '@/utils/strip-html'

import { SingleVideo } from './SingleVideo'
import { videoService } from '@/services/video.service'
import type { TPagePublicIdProp } from '@/types/page.types'

export async function generateMetadata({ params }: TPagePublicIdProp) {
  const { publicId } = await params
  const { data: video } = await videoService.byPublicId(publicId)

  return {
    title: video.title,
    description: stripHtml(video.description).slice(0, 150),
    openGraph: {
      type: 'video.other',
      images: [video.thumbnailUrl]
    }
  }
}

export async function generateStaticParams() {
  const { data } = await videoService.getAll()

  return data.videos.map(video => ({
    publicId: video.publicId
  }))
}

export const revalidate = 100
export const dynamic = 'force-static'

export default async function VideoPage({ params }: TPagePublicIdProp) {
  const { publicId } = await params
  const { data: video } = await videoService.byPublicId(publicId)

  return <SingleVideo video={video} />
}
