<<<<<<< HEAD
import { cn } from '@/lib/utils'
import { Poppins } from 'next/font/google'
import Link from 'next/link'
import { NavbarSidebarRoot } from '../navbar-sidebar'
import { NavbarAutentication } from './navbar-autentication'
import { NavbarGhostButton } from './navbar-ghost-button'
import { NavbarItems } from './navbar_items'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['700'],
})

=======
import { poppins } from '@/fonts/fonts'
import { NavbarSidebarRoot } from '../navbar-sidebar'
import { NavbarAutentication } from './navbar-autentication'
import { NavbarGhostButton } from './navbar-ghost-button'
import { NavbarLink } from './navbar-link'
import { NavbarItems } from './navbar_items'

>>>>>>> main
export const Navbar = () => {
  return (
    <nav
      className={`${poppins.className} h-20 flex border-b justify-between font-medium bg-white`}
    >
<<<<<<< HEAD
      <Link href="/" className="pl-6 flex items-center">
        <span
          className={cn(
            'text-5xl font-semibold text-blue-400',
            poppins.className
          )}
        >
          porto-POC
        </span>
      </Link>
=======
      <NavbarLink />
>>>>>>> main
      <NavbarSidebarRoot.NavbarSidebar />
      <NavbarItems />
      <NavbarAutentication />
      <NavbarGhostButton />
    </nav>
  )
}
