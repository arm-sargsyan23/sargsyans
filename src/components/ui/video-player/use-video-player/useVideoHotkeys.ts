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
  useHotkeys('space', e => {
    e.preventDefault()
    togglePlayPause()
  })

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
