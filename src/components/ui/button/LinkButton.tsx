import type { LinkProps } from 'next/link'
import Link from 'next/link'
import type { AnchorHTMLAttributes, ReactNode } from 'react'

type TLink = LinkProps & AnchorHTMLAttributes<HTMLAnchorElement>

interface Props extends TLink {
  isLoading?: boolean
  children: ReactNode
}

export function LinkButton({ isLoading, children, ...props }: Props) {
  return (
    <Link
      className='py-2 px-5 bg-primary text-white font-semibold rounded hover:bg-red-400 transition-colors disabled:bg-gray-400 flex items-center gap-2'
      {...props}
    >
      {isLoading ? 'Loading...' : children}
    </Link>
  )
}
