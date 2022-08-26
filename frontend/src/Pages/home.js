import React ,{useEffect, useState} from 'react'
import Banner from '../Components/Banner/banner.js';
import Blog from '../Components/Blog/blog.js';
import Categories from '../Components/Categories/categories.js';
import FeaturedProduct from '../Components/Featured/featuredProduct.js';
import Footer from '../Components/Footer/footer.js';
import Header from '../Components/Header/header.js';
import Hero from '../Components/Hero/hero'
import Humberger from '../Components/Humberger/humberger.js';
import LatestProduct from '../Components/LatestProduct/latestProduct.js';

function Home() {
    const [isOpen,setIsOpen] = useState(false)
    useEffect(()=>{
    },[isOpen])
    return (
        <>
            <Humberger isOpen={isOpen} setIsOpen={setIsOpen} />
            <Header setIsOpen={setIsOpen} />
            <Hero status={true} show={true} />
            <Categories />
            <FeaturedProduct />
            <Banner />
            <LatestProduct />
            <Blog />
            <Footer />
        </>
    )
}

export default Home