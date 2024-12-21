import { SquarePlay } from 'lucide-react'
import Link from 'next/link'

import { COLORS } from '@/constants/colors.constants'

import { PAGE } from '@/config/public-page.config'

export function Logo() {
  return (
    <Link
      href={PAGE.HOME}
      className='inline-flex items-center gap-1.5'
    >
      <SquarePlay
        size={29}
        color={COLORS.primary}
      />
      <span className='font-medium text-xl'>Sargsyan&apos;s</span>
    </Link>
  )
}
