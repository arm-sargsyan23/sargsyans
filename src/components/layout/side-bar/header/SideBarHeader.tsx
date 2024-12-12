import { Menu, SquarePlay } from 'lucide-react'
import Link from 'next/link'

import { COLORS } from '@/constants/colors.constants'

import { PAGE } from '@/config/public-page.config'

export function SideBarHeader({ toggleSidebar }: { toggleSidebar: () => void }) {
  return (
    <div className='flex gap-6 items-center mb-12'>
      <button
        className='opacity-85 hover:opacity-100 transition-opacity'
        onClick={toggleSidebar}
      >
        <Menu />
      </button>
      <Link
        href={PAGE.HOME}
        className='flex items-center gap-1.5'
      >
        <SquarePlay
          size={29}
          color={COLORS.primary}
        />
        <span className='font-medium text-xl'>Sargsyan&apos;s</span>
      </Link>
    </div>
  )
}
