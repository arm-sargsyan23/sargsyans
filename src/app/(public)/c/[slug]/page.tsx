import type { Metadata } from 'next'

import { ChannelVideos } from './ChannelVideos'
import { channelService } from '@/services/channel.service'
import type { TPageSlugProp } from '@/types/page.types'

export const revalidate = 100
export const dynamic = 'force-static'

export async function generateMetadata({ params }: TPageSlugProp): Promise<Metadata> {
  const { slug } = await params
  const data = await channelService.bySlug(slug)
  const channel = data.data

  return {
    title: channel.user.name,
    description: channel.description,
    openGraph: {
      type: 'profile',
      images: [channel.bannerUrl]
    }
  }
}

export async function generateStaticParams() {
  const { data } = await channelService.getAll()

  return data.map(channel => ({
    slug: channel.slug
  }))
}

export default async function Channel({ params }: TPageSlugProp) {
  const { slug } = await params
  const { data: channel } = await channelService.bySlug(slug)

  return <section>{!!channel.videos.length && <ChannelVideos videos={channel.videos} />}</section>
}
