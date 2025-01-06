import { useEffect } from 'react'
import { useHotkeys } from 'react-hotkeys-hook'

import type { TSkipTime } from './useSkipTime'

interface Props {
  togglePlayPause: () => void
  toggleFullScreen: () => void
  skipTime: (type?: TSkipTime) => void
  changeVolume: (value: number) => void
  toggleMute: () => void
  volume: number
  toggleTheaterMode: () => void
}

export function useVideoHotkeys({
  changeVolume,
  skipTime,
  toggleFullScreen,
  toggleMute,
  togglePlayPause,
  toggleTheaterMode,
  volume
}: Props) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'space' || e.key === ' ') {
        e.preventDefault()
        togglePlayPause()
      }
    }
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [togglePlayPause])

  useHotkeys('left', () => {
    skipTime('backward')
  })

  useHotkeys('right', () => {
    skipTime('forward')
  })

  useHotkeys('up', e => {
    e.preventDefault()
    changeVolume(Math.min(volume + 0.1, 1))
  })

  useHotkeys('down', e => {
    e.preventDefault()
    changeVolume(Math.max(volume - 0.1, 0))
  })

  useHotkeys('f', () => {
    toggleFullScreen()
  })

  useHotkeys('m', () => {
    toggleMute()
  })

  useHotkeys('t', () => {
    toggleTheaterMode()
  })
}
