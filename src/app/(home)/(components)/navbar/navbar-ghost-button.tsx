'use client'

import { Button } from '@/components/ui/button'
import { useNavbarStore } from '@/store/navbar-store'
import { MenuIcon } from 'lucide-react'

export const NavbarGhostButton = () => {
  const { setOpen } = useNavbarStore()

  return (
    <div className="flex xl:hidden items-center justify-center">
      <Button
        variant="ghost"
        className="size-12 border-transparent bg-white"
        onClick={() => setOpen(true)}
      >
        <MenuIcon />
      </Button>
    </div>
  )
}
