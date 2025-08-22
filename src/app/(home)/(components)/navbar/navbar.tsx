import { poppins } from '@/fonts/fonts'
import { NavbarSidebarRoot } from '../navbar-sidebar'
import { NavbarAutentication } from './navbar-autentication'
import { NavbarGhostButton } from './navbar-ghost-button'
import { NavbarLink } from './navbar-link'
import { NavbarItems } from './navbar_items'

export const Navbar = () => {
  return (
    <nav
      className={`${poppins.className} h-20 flex border-b justify-between font-medium bg-white`}
    >
      <NavbarLink />
      <NavbarSidebarRoot.NavbarSidebar />
      <NavbarItems />
      <NavbarAutentication />
      <NavbarGhostButton />
    </nav>
  )
}
