import React,{useState,useEffect} from 'react'
import FavoriteList from '../Components/Favorites/favoriteList'
import Header from '../Components/Header/header.js';
import Hero from '../Components/Hero/hero.js';
import Humberger from "../Components/Humberger/humberger.js";
import Breadcrumb from "../Components/Breadcrumb/breadbrumb.js";
import Footer from "../Components/Footer/footer.js";
import {SHOPING_CARD_SHOW} from "./defaultPageOption/showImg.js";
import {SHOPING_CARD_STATUS} from "./defaultPageOption/status.js";
const Favorites = () => {
    const [isOpen,setIsOpen] = useState(false)
    useEffect(()=>{
    },[isOpen])
  return (
    <>
      <Humberger isOpen={isOpen} setIsOpen={setIsOpen}/>
      <Header setIsOpen={setIsOpen}/>
      <Hero status={SHOPING_CARD_STATUS} show={SHOPING_CARD_SHOW} />
      <Breadcrumb pageName = "Favorites"/>
      <FavoriteList />
      <Footer />
    </>

  )
}

export default Favorites