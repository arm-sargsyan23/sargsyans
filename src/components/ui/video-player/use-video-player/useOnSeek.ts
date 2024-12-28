import { type Dispatch, type RefObject, type SetStateAction } from 'react'

import { type HTMLCustomVideoElement } from '../video-player.types'

export function useOnSeek(
  playerRef: RefObject<HTMLCustomVideoElement | null>,
  setCurrentTime: Dispatch<SetStateAction<number>>,
  bgRef: RefObject<HTMLCustomVideoElement | null>
) {
  const onSeek = (time: number) => {
    if (!playerRef.current?.currentTime) return

    playerRef.current.currentTime = time

    if (bgRef?.current) {
      bgRef.current.currentTime = time
    }

    setCurrentTime(time)
  }

  return {
    onSeek
  }
}
