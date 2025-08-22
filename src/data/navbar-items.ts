export interface NavbarItem {
  children: string
  href: string
}

export const navbarItems: NavbarItem[] = [
  { children: 'Home', href: '/' },
  { children: 'About', href: '/about' },
  { children: 'Features', href: '/features' },
  { children: 'Pricing', href: '/pricing' },
  { children: 'Contact', href: '/contact' },
]
