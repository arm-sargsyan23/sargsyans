'use client'

import { type RefObject, useEffect, useState } from 'react'

import { type HTMLCustomVideoElement } from '../video-player.types'
import { getVideoInfo } from '../video-player.utils'

export function useVideoProgress(playerRef: RefObject<HTMLCustomVideoElement | null>) {
  const [currentTime, setCurrentTime] = useState(0)
  const [videoTime, setVideoTime] = useState(0)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (!playerRef?.current) return

    const { currentTime, progress, originalTime } = getVideoInfo(playerRef?.current)

    setVideoTime(originalTime)
    setCurrentTime(currentTime)
    setProgress(progress)
  }, [playerRef, playerRef?.current?.duration])

  useEffect(() => {
    const player = playerRef?.current

    const updateProgress = () => {
      if (!player) return

      const { currentTime, progress } = getVideoInfo(player)

      setCurrentTime(currentTime)
      setProgress(progress)
    }

    player?.addEventListener('timeupdate', updateProgress)

    return () => {
      player?.removeEventListener('timeupdate', updateProgress)
    }
  }, [playerRef])

  return {
    currentTime,
    progress,
    videoTime,
    setCurrentTime
  }
}
