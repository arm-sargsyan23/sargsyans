import type { IVideo } from './video.types'

export interface IChannel {
  id: string
  name: string
  slug: string
  description: string
  isVerified: boolean
  avatarUrl: string
  bannerUrl: string
  user: IUser
  userId: string
  videos: IVideo[]
  subscribers: []
  createdAt: string
}

export interface IUser {
  id: string
  name: string
  email: string
  password: string
  verificationToken: string
  createdAt: Date
  updatedAt: Date
}
