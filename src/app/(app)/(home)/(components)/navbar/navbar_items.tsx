'use client'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { useNavbarStore } from '@/store/navbar-store'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export const NavbarItems = () => {
  const pathname = usePathname()
  const { items } = useNavbarStore()
  return (
    <div className="items-center gap-4 hidden lg:flex">
      {items.map((item) => {
        const isActive = pathname === item.href
        return (
          <Button
            asChild
            key={item.href}
            variant="elevated"
            className={cn(
              'rounded-full hover:border-primary px-3.5 text-lg',
              isActive &&
                'bg-black text-white hover:bg-black hover:text-white hover:shadow-gray-200'
            )}
          >
            <Link href={item.href}>{item.children}</Link>
          </Button>
        )
      })}
    </div>
  )
}
