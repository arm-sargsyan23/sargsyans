'use client'

import cn from 'clsx'
import { AnimatePresence } from 'framer-motion'
import * as m from 'framer-motion/m'

import { useOutside } from '@/hooks/useOutside'

import type { EnumVideoPlayerQuality } from '../video-player.types'

import { VIDEO_QUALITIES } from './qualities.data'

interface Props {
  currentValue: EnumVideoPlayerQuality
  onChange: (quality: EnumVideoPlayerQuality) => void
  maxResolution: EnumVideoPlayerQuality
}

export function SelectQuality({ currentValue, onChange, maxResolution }: Props) {
  const { isShow, ref, setIsShow } = useOutside(false)

  const availableQualities = VIDEO_QUALITIES.slice(VIDEO_QUALITIES.indexOf(maxResolution))

  return (
    <div
      className='relative'
      ref={ref}
    >
      <button
        className='transition-colors hover:text-primary'
        onClick={() => setIsShow(!isShow)}
      >
        {currentValue}
      </button>
      <AnimatePresence>
        {isShow && (
          <m.ul
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.3 }}
            className='bg-gray-800/60 py-2 px-4 rounded absolute bottom-[125%] right-0 z-10 shadow'
          >
            {availableQualities.map(quality => (
              <li key={quality}>
                <button
                  onClick={() => {
                    onChange(quality)
                    setIsShow(false)
                  }}
                  className={cn('transition-colors hover:text-primary', {
                    'text-primary': quality === currentValue
                  })}
                  disabled={quality === currentValue}
                >
                  {quality}
                </button>
              </li>
            ))}
          </m.ul>
        )}
      </AnimatePresence>
    </div>
  )
}
