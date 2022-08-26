import React, { useState } from 'react'
import Header from '../Components/Header/header'
import Hero from '../Components/Hero/hero'
import Humberger from '../Components/Humberger/humberger'

function ShopDetail() {
  const [isOpen,setIsOpen] = useState(false)
  return (
    <>
      <Humberger isOpen={isOpen} setIsOpen={setIsOpen} />
      <Header setIsOpen={setIsOpen} />
      <Hero status={false} />
    </>
  )
}

export default ShopDetail