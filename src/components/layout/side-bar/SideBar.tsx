'use client'

import dynamic from 'next/dynamic'
import { usePathname } from 'next/navigation'

import { STUDIO_PAGE } from '@/config/studio-page.config'

import { SideBarHeader } from './header/SideBarHeader'
import { SideBarMenu } from './menus/SideBarMenu'
import { SideBarSubscriptions } from './menus/subscriptions/SideBarSubscriptions'
import { MORE_SIDEBAR_DATA, SIDEBAR_DATA, STUDIO_SIDEBAR_DATA } from './side-bar.data'

const DynamicLogout = dynamic(() => import('./Logout').then(mod => mod.Logout), { ssr: false })

export function SideBar({
  toggleSidebar,
  isShowedSidebar
}: {
  toggleSidebar: () => void
  isShowedSidebar: boolean
}) {
  const pathname = usePathname()
  return (
    <aside className='p-layout border-r border-border whitespace-nowrap overflow-hidden '>
      <SideBarHeader toggleSidebar={toggleSidebar} />

      <SideBarMenu
        menu={SIDEBAR_DATA}
        isShowedSidebar={isShowedSidebar}
      />

      <SideBarSubscriptions />

      {pathname.includes(STUDIO_PAGE.HOME) && (
        <>
          <SideBarMenu
            title='Studio'
            menu={STUDIO_SIDEBAR_DATA}
            isShowedSidebar={isShowedSidebar}
          />
          <span className='h-[1px] bg-border my-5 w-full block' />
        </>
      )}

      <SideBarMenu
        title='More from youtube'
        menu={MORE_SIDEBAR_DATA}
        isShowedSidebar={isShowedSidebar}
      />

      <DynamicLogout />
    </aside>
  )
}
