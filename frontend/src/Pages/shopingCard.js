import React,{useState,useEffect} from 'react'
import Header from '../Components/Header/header.js';
import Hero from '../Components/Hero/hero.js';
import Humberger from "../Components/Humberger/humberger.js";
import Breadcrumb from "../Components/Breadcrumb/breadbrumb.js";
import ShopingCards from '../Components/ShopingCard/shopingCard.js';
import Footer from "../Components/Footer/footer.js";
function ShopingCard() {
  const [isOpen,setIsOpen] = useState(false)
    useEffect(()=>{
    },[isOpen])
  return (
    <>
      <Humberger isOpen={isOpen} setIsOpen={setIsOpen}/>
      <Header setIsOpen={setIsOpen}/>
      <Hero status={false} show={false} />
      <Breadcrumb />
      <ShopingCards />
      <Footer />
    </>

  )
}

export default ShopingCard