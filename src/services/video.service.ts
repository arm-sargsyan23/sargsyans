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

  getExploreVideos(userid?: string) {
    return axiosClassic.get<IVideoPagination>(`${this._VIDEOS}/explore`, {
      params: { userid }
    })
  }
  getTrendingVideos() {
    return axiosClassic.get(`${this._VIDEOS}/trending`)
  }
  getVideoGames() {
    return axiosClassic.get<IMain>(`${this._VIDEOS}/games`)
  }

  updateViews(publicId: string) {
    return axiosClassic.put(`${this._VIDEOS}/update-views-count/${publicId}`)
  }
}
export const videoService = new VideoService()
