import { poppins } from '@/fonts/fonts'
import { cn } from '@/lib/utils'
import Link from 'next/link'

export const NavbarLink = () => {
  return (
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
  )
}
