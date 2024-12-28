import { useRef, useState } from 'react'

import { type HTMLCustomVideoElement } from '../video-player.types'

import { useFullScreen } from './useFullScreen'
import { useOnSeek } from './useOnSeek'
import { usePlayPause } from './usePlayPause'
import { useSkipTime } from './useSkipTime'
import { useVideoHotkeys } from './useVideoHotkeys'
import { useVideoProgress } from './useVideoProgress'
import { useVIdeoQuality } from './useVideoQuality'
import { useVideoVolume } from './useVideoVolume'

interface Props {
  fileName: string
  toggleTheaterMode: () => void
}

export function useVideoPlayer({ fileName, toggleTheaterMode }: Props) {
  const playerRef = useRef<HTMLCustomVideoElement>(null)
  const bgRef = useRef<HTMLCustomVideoElement>(null)

  const [isLightingMode, setIsLightingMode] = useState(true)

  const { isPlaying, setIsPlaying, togglePlayPause } = usePlayPause(playerRef, bgRef)

  const { currentTime, progress, videoTime, setCurrentTime } = useVideoProgress(playerRef)

  const { changeQuality, quality } = useVIdeoQuality(playerRef, {
    currentTime,
    fileName,
    setIsPlaying
  })

  const { toggleFullScreen } = useFullScreen(playerRef)

  const { skipTime } = useSkipTime(playerRef, bgRef)

  const { isMuted, volume, changeVolume, toggleMute } = useVideoVolume(playerRef)

  const { onSeek } = useOnSeek(playerRef, setCurrentTime, bgRef)

  useVideoHotkeys({
    volume,
    changeVolume,
    skipTime,
    toggleFullScreen,
    toggleMute,
    togglePlayPause,
    toggleTheaterMode
  })

  return {
    state: {
      isPlaying,
      progress,
      currentTime,
      videoTime,
      quality,
      volume,
      isMuted,
      isLightingMode
    },
    fn: {
      togglePlayPause,
      changeQuality,
      toggleFullScreen,
      skipTime,
      changeVolume,
      toggleMute,
      toggleTheaterMode,
      setIsPlaying,
      onSeek,
      toggleLightingMode: () => setIsLightingMode(!isLightingMode)
    },
    playerRef,
    bgRef
  }
}
