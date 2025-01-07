import { useMutation } from '@tanstack/react-query'
import { AnimatePresence } from 'framer-motion'
import * as m from 'framer-motion/m'
import { Check, ListVideo } from 'lucide-react'
import toast from 'react-hot-toast'

import { useOutside } from '@/hooks/useOutside'

import { useUserPlaylists } from '@/app/(user)/playlists/useUserPlaylists'
import { playlistService } from '@/services/playlist.service'
import type { ISingleVideoResponse } from '@/types/video.types'

interface Props {
  video: ISingleVideoResponse
}

export function SaveToPlaylist({ video }: Props) {
  const { data, refetch: refetchPLaylists } = useUserPlaylists()

  const isInPlaylist = data?.data.some(playlist => playlist.videos.some(v => v.id === video.id))

  const { mutate: togglePlaylist, isPending } = useMutation({
    mutationKey: ['create a playlist'],
    mutationFn: (playlistId: string) => playlistService.toggleVideoInPlaylist(playlistId, video.id),
    onSuccess() {
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      isInPlaylist ? toast.success('Successfully removed!') : toast.success('Successfully added!')
      setIsShow(false)
      refetchPLaylists()
    },
    onError() {
      toast.error('Playlist has error!')
    }
  })

  const { isShow, setIsShow, ref } = useOutside(false)

  return (
    <div
      className='relative z-10'
      ref={ref}
    >
      <button
        onClick={() => {
          setIsShow(!isShow)
        }}
        className='flex items-center gap-1 transition-opacity opacity-85 hover:opacity-100'
      >
        <ListVideo size={20} />
        Save
      </button>
      <AnimatePresence>
        {isShow && (
          <div>
            <m.ul
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.3 }}
              className='bg-gray-800/95 py-2 px-3 rounded absolute bottom-[125%] right-0 shadow w-max max-w-32'
            >
              {data?.data?.map(playlist => (
                <li
                  key={playlist.id}
                  className='mb-2 text-sm'
                >
                  <button
                    onClick={() => {
                      togglePlaylist(playlist.id)
                    }}
                    className={
                      'transition-colors text-white hover:text-primary flex items-center gap-1'
                    }
                    disabled={isPending}
                  >
                    {playlist.title}
                    {playlist.videos.some(v => v.id === video.id) && <Check size={15} />}
                  </button>
                </li>
              ))}
            </m.ul>
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}
