import { axiosClassic } from '@/api/axios'

import type { IMain } from '@/types/video.types'

class VideoService {
  private _VIDEOS = '/videos'

  getAll(searchTerm: string | null) {
    return axiosClassic.get<IMain>(this._VIDEOS, searchTerm ? { params: { searchTerm } } : {})
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
