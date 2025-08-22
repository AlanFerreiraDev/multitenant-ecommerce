'use client'

import { useNavbarStore } from '@/store/navbar-store'
import Link from 'next/link'

export const NavbarSidebarAutentication = () => {
  const { setOpen } = useNavbarStore()

  return (
    <div className="border-t">
      <Link
        key="/sign-in"
        href="/sign-in"
        className="w-full text-left p-4 hover:bg-black hover:text-white flex items-center text-base font-medium"
        onClick={() => setOpen(false)}
      >
        Sign in
      </Link>
      <Link
        key="/sign-up"
        href="/sign-up"
        className="w-full text-left p-4 hover:bg-black hover:text-white flex items-center text-base font-medium"
        onClick={() => setOpen(false)}
      >
        Start selling
      </Link>
    </div>
  )
}
