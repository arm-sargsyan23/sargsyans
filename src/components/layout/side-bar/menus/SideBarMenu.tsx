import { usePathname } from 'next/navigation'
import { match } from 'path-to-regexp'

import type { ISideBarItem } from '../side-bar.types'

import { MenuItem } from './MenuItem'

interface Props {
  title?: string
  menu: ISideBarItem[]
}

export function SideBarMenu({ title, menu }: Props) {
  const pathname = usePathname()

  return (
    <nav>
      {title && <div className='opacity-40 uppercase text-xs mb-3'>{title}</div>}
      <ul>
        {menu.map(menuItem => (
          <MenuItem
            key={menuItem.label}
            item={menuItem}
            isActive={!!match(menuItem.link)(pathname)}
          />
        ))}
      </ul>
    </nav>
  )
}
