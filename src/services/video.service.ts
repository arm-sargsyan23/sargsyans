import { axiosClassic } from '@/api/axios'

import type { IMain, ISingleVideoResponse, IVideoPagination } from '@/types/video.types'

class VideoService {
  private _VIDEOS = '/videos'

  getAll(searchTerm?: string | null) {
    return axiosClassic.get<IVideoPagination>(
      this._VIDEOS,
      searchTerm ? { params: { searchTerm } } : {}
    )
  }

  byPublicId(publicId?: string | null) {
    return axiosClassic.get<ISingleVideoResponse>(`${this._VIDEOS}/by-publicId/${publicId}`)
  }

  getExploreVideos() {
    return axiosClassic.get<IMain>(`${this._VIDEOS}/explore`)
  }
  getTrendingVideos() {
    return axiosClassic.get(`${this._VIDEOS}/trending`)
  }
  getVideoGames() {
    return axiosClassic.get<IMain>(`${this._VIDEOS}/games`)
  }
}
export const videoService = new VideoService()
