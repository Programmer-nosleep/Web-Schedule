import React from "react";

type NavbarProps = {
  children: React.ReactNode;
}

const Navbar: React.FC<NavbarProps> = ({ children }: { children: React.ReactNode }) => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-8 py-4 flex justify-between items-center">
      {children}
    </nav>
  )
}

export default Navbar