import { NavbarItem, navbarItems } from '@/data/navbar-items'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface NavbarState {
  isOpen: boolean
  items: NavbarItem[]
  setOpen: (open: boolean) => void
}

export const useNavbarStore = create<NavbarState>()(
  persist(
    (set) => ({
      isOpen: false,
      items: navbarItems,
      setOpen: (open) => set({ isOpen: open }),
    }),
    {
      name: 'navbar-store',
    }
  )
)
