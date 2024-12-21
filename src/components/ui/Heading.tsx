import cn from 'clsx'
import type { LucideIcon } from 'lucide-react'
import type { ReactNode } from 'react'

interface Props {
  children: ReactNode
  Icon: LucideIcon
  isH1?: boolean
  isPageHeading?: boolean
}

export function Heading({ children, Icon, isH1 = false, isPageHeading = false }: Props) {
  return (
    <div className={cn('flex items-center gap-1.5 mb-4', isPageHeading ? 'gap-2.5' : 'gap-1.5')}>
      {Icon && <Icon className='text-primary' />}
      {isH1 || isPageHeading ? (
        <h1 className={cn('font-semibold text-lg', isPageHeading ? 'text-3xl' : 'text-lg')}>
          {children}
        </h1>
      ) : (
        <h2 className='font-semibold text-lg'>{children}</h2>
      )}
    </div>
  )
}
