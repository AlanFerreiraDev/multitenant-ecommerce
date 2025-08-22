import { Button } from '@/components/ui/button'
import Link from 'next/link'

export const NavbarAutentication = () => {
  return (
    <div className="hidden xl:flex">
      <Button
        asChild
        variant="secondary"
        className="border-l border-t-0 border-b-0 border-r-0 rounded-none px-12 h-full bg_white hover:bg-pink-400 transition-colors text-lg"
      >
        <Link href="/sign-in">Log In</Link>
      </Button>
      <Button
        asChild
        className="border-l border-t-0 border-b-0 border-r-0 px-12 h-full rounded-none bg_black text-white hover:bg-pink-400 hover:text-black transition-colors text-lg"
      >
        <Link href="/sign-up">Start selling</Link>
      </Button>
    </div>
  )
}
