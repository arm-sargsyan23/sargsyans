'use client'

import cn from 'clsx'
import Link from 'next/link'

import type { ISideBarItem } from '../side-bar.types'

interface Props {
  item: ISideBarItem
  isActive: boolean
}

export function MenuItem({ item, isActive }: Props) {
  return (
    <li>
      <Link
        href={item.link}
        className={cn('group flex items-center gap-5 py-3')}
      >
        <item.icon
          className={cn('min-w-6', {
            'group-hover:text-primary transition group-hover:rotate-6': !isActive
          })}
        />
        <span
          className={cn('border-b', {
            'border-b border-white': isActive,
            'border-transparent': !isActive
          })}
        >
          {item.label}
        </span>
      </Link>
      {item.isBottomBorder && <span className='h-[1px] bg-border my-5 w-full block' />}
    </li>
  )
}
