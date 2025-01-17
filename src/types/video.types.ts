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
  updatedAt: string
  channel: IChannel
  maxResolution: EnumVideoPlayerQuality
}

export interface IFullVideo extends IVideo {
  likes: []
  comments: IComment[]
}

export interface ISingleVideoResponse extends IFullVideo {
  similarVideos: IVideo[]
}

export interface IStudioVideoResponse extends IFullVideo {
  tags: {
    id: string
    name: string
  }[]
}

export interface IVideosPagination extends IPagination {
  videos: IFullVideo[]
}
