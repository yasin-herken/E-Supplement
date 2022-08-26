import React from 'react'
import Navbar from './navbar'
import Topbar from './topbar'

function Header({setIsOpen}) {
  return (
    <header className="header">
      <Topbar />
      <Navbar setIsOpen={setIsOpen} />
    </header>
  )
}

export default Header