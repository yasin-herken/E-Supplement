import React from 'react'
import BlogDetailSidebar from '../BlogDetails/blogDetailSidebar'
import BlogItem from './blogItem.js';
import BlogImg1 from "../../assets/img/blog/blog-1.jpg";
import BlogImg2 from "../../assets/img/blog/blog-2.jpg";
import BlogImg3 from "../../assets/img/blog/blog-3.jpg";
import BlogImg4 from "../../assets/img/blog/blog-4.jpg";
import BlogImg6 from "../../assets/img/blog/blog-6.jpg";
function BlogSection() {
  return (
    <section className="blog spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-5">
              <BlogDetailSidebar />
            </div>
            <div className="col-lg-8 col-md-7">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <BlogItem src={BlogImg2} />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <BlogItem src={BlogImg3} />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <BlogItem src={BlogImg1} />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                <BlogItem src={BlogImg4} />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                <BlogItem src={BlogImg4} />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                <BlogItem src={BlogImg6} />
                </div>
                <div className="col-lg-12">
                  <div className="product__pagination blog__pagination">
                    <a href="#">1</a>
                    <a href="#">2</a>
                    <a href="#">3</a>
                    <a href="#"><i className="fa fa-long-arrow-right" /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default BlogSection