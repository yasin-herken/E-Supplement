import React from 'react'
import Categories from '../Components/Categories/categories.js';
import Header from '../Components/Header/header.js';
import Hero from '../Components/Hero/hero'

function Home() {
    return (
        <>
            <Header />
            <Hero />
            <Categories />
        </>
    )
}

export default Home