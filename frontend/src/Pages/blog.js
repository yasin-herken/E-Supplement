import React, { useState, useEffect } from 'react'
import Humberger from "../Components/Humberger/humberger.js";
import Header from "../Components/Header/header.js";
import Hero from "../Components/Hero/hero.js";

import Footer from "../Components/Footer/footer.js";
import BlogDetailsHero from '../Components/Hero/blogDetailsHero.js';
import BlogDetailsSection from '../Components/BlogDetails/blogDetailsSection.js';
import RelatedBlog from '../Components/RelatedBlog/relatedBlog.js';
import Breadbrumb from '../Components/Breadcrumb/breadbrumb.js';
import BlogSection from '../Components/Blog/blogSection.js';
function Blog() {
    const [isOpen, setIsOpen] = useState(false)
    useEffect(() => {
    }, [isOpen])
  return (
    <>
    <Humberger isOpen={isOpen} setIsOpen={setIsOpen} />
    <Header setIsOpen={setIsOpen} />
    <Hero status={false} show={false} />
    <Breadbrumb pageName = "Blog"/>
    <BlogSection />
    <Footer />
</>
  )
}

export default Blog