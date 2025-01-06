import type { IChannel } from './channel.types'
import type { IWatchHistory } from './history.types'
import type { IFullVideo, IVideo } from './video.types'

export interface IUser {
  id: string
  name?: string
  email: string
  password: string
  verificationToken?: string | null
  createdAt: Date
  updatedAt: Date
}

export interface IVideoLike {
  id: string
  video: IFullVideo
  userID: string
}

export interface IFullUser extends IUser {
  channel?: IChannel
  subscriptions: IChannel[]
  subscribedVideos: IVideo[]
  watchHistory: IWatchHistory[]
  likes: IVideoLike[]
}
