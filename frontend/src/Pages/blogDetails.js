import React, { useState, useEffect } from 'react'
import Humberger from "../Components/Humberger/humberger.js";
import Header from "../Components/Header/header.js";
import Hero from "../Components/Hero/hero.js";

import Footer from "../Components/Footer/footer.js";
import BlogDetailsHero from '../Components/Hero/blogDetailsHero.js';
import BlogDetailsSection from '../Components/BlogDetails/blogDetailsSection.js';
import RelatedBlog from '../Components/RelatedBlog/relatedBlog.js';
function BlogDetails() {
    const [isOpen, setIsOpen] = useState(false)
    useEffect(() => {
    }, [isOpen])
    return (
        <>
            <Humberger isOpen={isOpen} setIsOpen={setIsOpen} />
            <Header setIsOpen={setIsOpen} />
            <Hero status={false} show={false} />
            <BlogDetailsHero />
            <BlogDetailsSection />
            <RelatedBlog />
            <Footer />
        </>
    )
}

export default BlogDetails