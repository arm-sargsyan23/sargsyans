import { UploadCloud } from 'lucide-react'
import { useId } from 'react'
import type { FieldError } from 'react-hook-form'

import { ImagePreview } from './ImagePreview'
import { useUpload } from './useUpload'

interface Props {
  folder?: string
  value?: string
  onChange: (url: string) => void
  label: string
  error?: FieldError
  className?: string
  isImage?: boolean
  aspectRation?: '16:9' | '1:1'
  overlay?: string
}

export function UploadField({
  label,
  onChange,
  className,
  error,
  folder,
  isImage = true,
  value,
  aspectRation = '1:1',
  overlay
}: Props) {
  const { isLoading, uploadFile } = useUpload({ onChange, folder })

  const inputId = useId()

  return (
    <div className={className}>
      <label
        className='block text-gray-400 font-semibold mb-2'
        htmlFor={inputId}
      >
        {label}
      </label>

      <label
        className='flex items-center px-4 py-2 bg-transparent hover:text-white rounded-lg 
        shadow-md cursor-pointer hover:bg-primary text-primary border border-primary transition-colors w-max'
        htmlFor={inputId}
      >
        <UploadCloud className='mr-2' />
        Загрузить
      </label>

      <input
        id={inputId}
        type='file'
        onChange={uploadFile}
        accept='image/*'
        className='hidden'
      />
      {error && <p className='text-red-500 text-sm mt-1'>{error.message}</p>}

      {isImage && (
        <ImagePreview
          isLoading={isLoading}
          value={value}
          overlay={overlay}
          aspectRation={aspectRation}
        />
      )}
    </div>
  )
}
