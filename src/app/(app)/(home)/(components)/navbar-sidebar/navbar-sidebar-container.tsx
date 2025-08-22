'use client'

import { ScrollArea } from '@/components/ui/scroll-area'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet'
import { useNavbarStore } from '@/store/navbar-store'
import { NavbarSidebarAutentication } from './navbar-sidebar-autentication'
import { NavbarSidebarButtonLink } from './navbar-sidebar-button-link'

export const NavbarSidebarContainer = () => {
  const { isOpen, setOpen } = useNavbarStore()
  return (
    <Sheet open={isOpen} onOpenChange={setOpen}>
      <SheetContent side="left" className="p-0 transition-none">
        <SheetHeader className="p-4 border-b">
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        <ScrollArea className="flex flex-col overflow-y-auto h-full pb-2">
          <NavbarSidebarButtonLink />
          <NavbarSidebarAutentication />
        </ScrollArea>
      </SheetContent>
    </Sheet>
  )
}
