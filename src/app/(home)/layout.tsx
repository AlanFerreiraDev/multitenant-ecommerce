import { FooterRoot } from './(components)/footer'
import { NavbarRoot } from './(components)/navbar'

interface Props {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavbarRoot.Navbar />
      <div className="flex-1 bg-[#F4F4F0]">{children}</div>
      <FooterRoot.Footer />
    </div>
  )
}

export default Layout
