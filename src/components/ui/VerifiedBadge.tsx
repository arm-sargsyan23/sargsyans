import { BadgeCheck } from 'lucide-react'

export function VerifiedBadge({ size }: { size?: number }) {
  return (
    <span>
      <BadgeCheck
        className='text-green-500'
        size={size}
      />
    </span>
  )
}
