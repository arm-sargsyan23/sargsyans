import type { IChannel } from './channel.types'

export interface IMain {
  videos: IVideo[]
  page: number
  limit: number
  totalCount: number
  totalPages: number
}

export interface IVideo {
  id: string
  title: string
  slug: string
  description: string
  publicId: string
  isPublic: boolean
  thumbnailUrl: string
  viewsFileName: string
  viewsCount: number
  createdAt: string
  channel: IChannel
  tags: ITag[]
  maxResolution: IMaxResolution
}

export enum IMaxResolution {
  The1080P = '1080p',
  The4K = '4K',
  The720P = '720p'
}

export interface ITag {
  id: string
  name: string
  createdAt: Date
  updatedAt: Date
}
