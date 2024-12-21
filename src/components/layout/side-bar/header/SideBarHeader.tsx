import { Menu } from 'lucide-react'

import { Logo } from './Logo'

export function SideBarHeader({ toggleSidebar }: { toggleSidebar: () => void }) {
  return (
    <div className='flex gap-6 items-center mb-12'>
      <button
        className='opacity-85 hover:opacity-100 transition-opacity'
        onClick={toggleSidebar}
      >
        <Menu />
      </button>
      <Logo />
    </div>
  )
}
