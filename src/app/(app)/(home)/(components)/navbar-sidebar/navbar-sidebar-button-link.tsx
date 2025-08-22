'use client'

import { useNavbarStore } from '@/store/navbar-store'
import Link from 'next/link'

export const NavbarSidebarButtonLink = () => {
  const { setOpen, items } = useNavbarStore()

  return (
    <>
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="w-full text-left p-4 hover:bg-black hover:text-white flex items-center text-base font-medium"
          onClick={() => setOpen(false)}
        >
          {item.children}
        </Link>
      ))}
    </>
  )
}
