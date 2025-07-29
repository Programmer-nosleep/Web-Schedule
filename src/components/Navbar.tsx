import React from "react"

type NavbarProps = React.HTMLAttributes<HTMLElement>

const Navbar: React.FC<NavbarProps> = ({ children, ...props }) => {
  return (
    <nav {...props}>
      {children}
    </nav>
  )
}

export default Navbar