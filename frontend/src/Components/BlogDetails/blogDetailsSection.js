import React from 'react'
import BlogDetailContent from './blogDetailContent';
import BlogDetailSidebar from './blogDetailSidebar';
import BlogDetailsText from './blogDetailsText';
function BlogDetailsSection() {
  return (
    <section className="blog-details spad">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-5 order-md-1 order-2">
            <BlogDetailSidebar />
          </div>
          <div className="col-lg-8 col-md-7 order-md-1 order-1">
            <BlogDetailsText />
            <BlogDetailContent />
          </div>
        </div>
      </div>
    </section>
  )
}

export default BlogDetailsSection