import { Dot, Link, Radio } from 'lucide-react'
import Image from 'next/image'

import type { ISideBarSubItem } from '../../side-bar.types'

interface Props {
  item: ISideBarSubItem
}

export function SubItem({ item }: Props) {
  return (
    <li>
      <Link href={item.link}>
        {item.avatar && (
          <Image
            src={item.avatar}
            alt='avatar'
            width={30}
            height={30}
          />
        )}
        <span>
          <span>{item.label}</span>
          {item.isLiveNow && <Radio />}
          {item.isRecentUpload && <Dot />}
        </span>
      </Link>
    </li>
  )
}
