import { SideBarHeader } from './header/SideBarHeader'
import { SideBarMenu } from './menus/SideBarMenu'
import { SideBarSubscriptions } from './menus/subscriptions/SideBarSubscriptions'
import { MORE_SIDEBAR_DATA, SIDEBAR_DATA } from './side-bar.data'

export function SideBar({ toggleSidebar }: { toggleSidebar: () => void }) {
  return (
    <aside className='p-layout border-r border-border whitespace-nowrap overflow-hidden'>
      <SideBarHeader toggleSidebar={toggleSidebar} />
      <SideBarMenu menu={SIDEBAR_DATA} />
      <SideBarSubscriptions />
      <SideBarMenu
        title='More from youtube'
        menu={MORE_SIDEBAR_DATA}
      />
    </aside>
  )
}
