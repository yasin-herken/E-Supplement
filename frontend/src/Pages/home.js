import React from 'react'
import Banner from '../Components/Banner/banner.js';
import Blog from '../Components/Blog/blog.js';
import Categories from '../Components/Categories/categories.js';
import FeaturedProduct from '../Components/Featured/featuredProduct.js';
import Footer from '../Components/Footer/footer.js';
import Header from '../Components/Header/header.js';
import Hero from '../Components/Hero/hero'
import LatestProduct from '../Components/LatestProduct/latestProduct.js';

function Home() {
    return (
        <>
            <Header />
            <Hero />
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