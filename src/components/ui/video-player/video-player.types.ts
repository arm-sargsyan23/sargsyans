export enum EnumVideoPlayerQuality {
  '2160p' = '4K',
  '1440p' = '2K',
  '1080p' = '1080p',
  '720p' = '720p',
  '480p' = '480p',
  '360p' = '360p'
}

export interface HTMLCustomVideoElement extends HTMLVideoElement {
  mozRequestFullScreen?: () => Promise<void>
  webkitRequestFullScreen?: () => Promise<void>
  msRequestFullScreen?: () => Promise<void>
}
