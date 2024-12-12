import { HeaderLinks } from './HeaderLinks'
import { SearchField } from './SearchField'
import { HeaderProfile } from './profile/HeaderProfile'

export function Header() {
  return (
    <header
      className='p-layout
      border-b border-border 
      flex justify-between items-center'
    >
      <SearchField />
      <div className='flex items-center gap-5'>
        <HeaderLinks />
        <HeaderProfile />
      </div>
    </header>
  )
}
