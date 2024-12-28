import Image from 'next/image'

import { SkeletonLoader } from '../SkeletonLoader'

interface Props {
  isLoading: boolean
  value?: string
  overlay?: string
  aspectRation?: '16:9' | '1:1'
}

export function ImagePreview({ isLoading, value, overlay, aspectRation }: Props) {
  const isWidescreenRation = aspectRation === '16:9'
  const width = isWidescreenRation ? 446 : 100
  const height = isWidescreenRation ? 250 : 100

  return (
    <div className='mt-3'>
      {isLoading ? (
        <SkeletonLoader style={{ width, height }} />
      ) : (
        !!value && (
          <div className='relative '>
            {!!overlay && (
              <Image
                src='/overlay.png'
                alt='Overlay'
                className='rounded-md absolute top-0 left-0 h-full'
                width={width}
                height={height}
                priority
              />
            )}
            <Image
              src={value}
              alt='Uploaded file'
              className='rounded-md'
              width={width}
              height={height}
              priority
            />
          </div>
        )
      )}
    </div>
  )
}
