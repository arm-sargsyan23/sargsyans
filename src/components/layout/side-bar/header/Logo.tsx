import { SquarePlay } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { COLORS } from '@/constants/colors.constants'

import { PAGE } from '@/config/public-page.config'
import { STUDIO_PAGE } from '@/config/studio-page.config'

export function Logo() {
  const pathname = usePathname()
  return (
    <Link
      href={PAGE.HOME}
      className='inline-flex items-center gap-1.5'
    >
      <SquarePlay
        size={29}
        color={COLORS.primary}
      />
      <span className='font-medium text-xl'>
        {!!pathname.includes(STUDIO_PAGE.HOME) ? 'Studio' : `Sargsyan's`}
      </span>
    </Link>
  )
}
