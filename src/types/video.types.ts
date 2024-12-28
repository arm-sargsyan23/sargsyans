import type { EnumVideoPlayerQuality } from '@/ui/video-player/video-player.types'

import type { IChannel } from './channel.types'
import type { IComment } from './comment.types'
import type { IPagination } from './pagination.types'

export interface IMain {
  videos: IVideo[]
}

export interface IVideo {
  id: string
  title: string
  description: string
  publicId: string
  isPublic: boolean
  thumbnailUrl: string
  videoFileName: string
  viewsCount: number
  createdAt: string
  channel: IChannel
  tags: ITag[]
  maxResolution: EnumVideoPlayerQuality
}

export interface ITag {
  id: string
  name: string
  createdAt: Date
  updatedAt: Date
}

export interface IFullVideo extends IVideo {
  likes: []
  comments: IComment[]
}

export interface ISingleVideoResponse extends IFullVideo {
  similarVideos: IVideo[]
}

export interface IVideoPagination extends IPagination {
  videos: IVideo[]
}
