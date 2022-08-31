import React, { useState, useEffect } from 'react'
import Humberger from "../Components/Humberger/humberger.js";
import Header from "../Components/Header/header.js";
import Hero from "../Components/Hero/hero.js";

import Footer from "../Components/Footer/footer.js";
import BlogDetailsHero from '../Components/Hero/blogDetailsHero.js';
import BlogDetailsSection from '../Components/BlogDetails/blogDetailsSection.js';
import RelatedBlog from '../Components/RelatedBlog/relatedBlog.js';
import {BLOG_DETAIL_SHOW} from "./defaultPageOption/showImg.js";
import {BLOG_DETAIL_STATUS} from "./defaultPageOption/status.js";
function BlogDetails() {
    const [isOpen, setIsOpen] = useState(false)
    useEffect(() => {
    }, [isOpen])
    return (
        <>
            <Humberger isOpen={isOpen} setIsOpen={setIsOpen} />
            <Header setIsOpen={setIsOpen} />
            <Hero status={BLOG_DETAIL_STATUS} show={BLOG_DETAIL_SHOW} />
            <BlogDetailsHero />
            <BlogDetailsSection />
            <RelatedBlog />
            <Footer />
        </>
    )
}

export default BlogDetails