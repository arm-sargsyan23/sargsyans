import type { LucideIcon } from 'lucide-react'
import type { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface Props {
  children: ReactNode
  Icon?: LucideIcon
  isH1?: boolean
  isPageHeading?: boolean
  className?: string
  classNameHeading?: string
}

export function Heading({
  className,
  children,
  Icon,
  isH1 = false,
  isPageHeading = false,
  classNameHeading
}: Props) {
  return (
    <div
      className={twMerge(
        'flex items-center gap-1.5 mb-4',
        isPageHeading ? 'gap-2.5' : 'gap-1.5',
        className
      )}
    >
      {Icon && <Icon className='text-primary' />}
      {isH1 || isPageHeading ? (
        <h1
          className={twMerge(
            'font-semibold text-lg',
            isPageHeading ? 'text-[2rem]' : 'text-lg',
            classNameHeading
          )}
        >
          {children}
        </h1>
      ) : (
        <h2 className={twMerge('font-semibold text-lg', classNameHeading)}>{children}</h2>
      )}
    </div>
  )
}
