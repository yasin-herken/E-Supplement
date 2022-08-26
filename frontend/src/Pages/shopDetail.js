import React, { useState } from 'react'
import Breadbrumb from '../Components/Breadcrumb/breadbrumb'
import Footer from '../Components/Footer/footer'
import Header from '../Components/Header/header'
import Hero from '../Components/Hero/hero'
import Humberger from '../Components/Humberger/humberger'
import ProductDetail from '../Components/ProductDetail/productDetail'
import RelatedProduct from '../Components/RelatedProduct/relatedProduct'

function ShopDetail() {
  const [isOpen,setIsOpen] = useState(false)
  return (
    <>
      <Humberger isOpen={isOpen} setIsOpen={setIsOpen} />
      <Header setIsOpen={setIsOpen} />
      <Hero status={false} show={false}/>
      <Breadbrumb />
      <ProductDetail />
      <RelatedProduct />
      <Footer />
    </>
  )
}

export default ShopDetail