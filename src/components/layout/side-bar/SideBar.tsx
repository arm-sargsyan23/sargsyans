import dynamic from 'next/dynamic'

import { SideBarHeader } from './header/SideBarHeader'
import { SideBarMenu } from './menus/SideBarMenu'
import { SideBarSubscriptions } from './menus/subscriptions/SideBarSubscriptions'
import { MORE_SIDEBAR_DATA, SIDEBAR_DATA } from './side-bar.data'

const DynamicLogout = dynamic(() => import('./Logout').then(mod => mod.Logout), { ssr: false })

export function SideBar({
  toggleSidebar,
  isShowedSidebar
}: {
  toggleSidebar: () => void
  isShowedSidebar: boolean
}) {
  return (
    <aside className='p-layout border-r border-border whitespace-nowrap overflow-hidden'>
      <SideBarHeader toggleSidebar={toggleSidebar} />
      <SideBarMenu
        menu={SIDEBAR_DATA}
        isShowedSidebar={isShowedSidebar}
      />
      <SideBarSubscriptions />
      <SideBarMenu
        title='More from youtube'
        menu={MORE_SIDEBAR_DATA}
        isShowedSidebar={isShowedSidebar}
      />
      <DynamicLogout />
    </aside>
  )
}
