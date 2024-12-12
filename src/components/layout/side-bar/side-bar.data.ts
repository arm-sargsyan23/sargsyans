import {
  CircleAlert,
  CirclePlay,
  Compass,
  Flame,
  FolderHeart,
  Gamepad2,
  History,
  Settings,
  TvMinimalPlay
} from 'lucide-react'

import { PAGE } from '@/config/public-page.config'
import { STUDIO_PAGE } from '@/config/studio-page.config'

import type { ISideBarItem } from './side-bar.types'

export const SIDEBAR_DATA: ISideBarItem[] = [
  {
    icon: Compass,
    label: 'Explore',
    link: PAGE.HOME
  },
  {
    icon: Flame,
    label: 'Trending',
    link: PAGE.TRENDING
  },
  {
    icon: Gamepad2,
    label: 'Video games',
    link: PAGE.VIDEO_GAMES,
    isBottomBorder: true
  },
  {
    icon: TvMinimalPlay,
    label: 'My channel',
    link: PAGE.MY_CHANNEL
  },
  {
    icon: CirclePlay,
    label: 'subscriptions',
    link: PAGE.SUBSCRIPTION
  },
  {
    icon: History,
    label: 'History',
    link: PAGE.HISTORY
  },
  {
    icon: FolderHeart,
    label: 'Liked videos',
    link: PAGE.LIKED_VIDEOS,
    isBottomBorder: true
  }
]

export const MORE_SIDEBAR_DATA: ISideBarItem[] = [
  {
    icon: Settings,
    label: 'Settings',
    link: STUDIO_PAGE.SETTINGS
  },
  {
    icon: CircleAlert,
    label: 'Send feedback',
    link: PAGE.FEEDBACK
  }
]
