import React ,{useEffect, useState} from 'react'
import Banner from '../Components/Banner/banner.js';
import Blog from '../Components/Blog/blog.js';
import CategoriesSlider from '../Components/CategoriesSlider/categoriesSlider.js';
import FeaturedProduct from '../Components/Featured/featuredProduct.js';
import Footer from '../Components/Footer/footer.js';
import Header from '../Components/Header/header.js';
import Hero from '../Components/Hero/hero'
import Humberger from '../Components/Humberger/humberger.js';
import LatestProduct from '../Components/LatestProduct/latestProduct.js';
import {HOME_STATUS} from "./defaultPageOption/status.js";
import {HOME_SHOW} from "./defaultPageOption/showImg.js";
function Home() {
    const [isOpen,setIsOpen] = useState(false)
    useEffect(()=>{
    },[isOpen])
    
    return (
        <>
            <Humberger isOpen={isOpen} setIsOpen={setIsOpen} />
            <Header setIsOpen={setIsOpen} />
            <Hero status={HOME_STATUS} show={HOME_SHOW} />
            <CategoriesSlider />
            <FeaturedProduct />
            <Banner />
            <LatestProduct />
            <Blog />
            <Footer />
        </>
    )
}

export default Home