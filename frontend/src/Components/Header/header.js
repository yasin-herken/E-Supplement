import React from 'react'
import Navbar from './navbar'
import Topbar from './topbar'

function Header() {
  return (
    <header className="header">
    <Topbar />
    <Navbar />
  </header>
  )
}

export default Header