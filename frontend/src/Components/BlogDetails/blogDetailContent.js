import React from 'react'
import DetailAuthorImg from "../../assets/img/blog/details/details-author.jpg";
function BlogDetailContent() {
  return (
    <div className="blog__details__content">
    <div className="row">
      <div className="col-lg-6">
        <div className="blog__details__author">
          <div className="blog__details__author__pic">
            <img src={DetailAuthorImg} alt="" />
          </div>
          <div className="blog__details__author__text">
            <h6>Michael Scofield</h6>
            <span>Admin</span>
          </div>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="blog__details__widget">
          <ul>
            <li><span>Categories:</span> Food</li>
            <li><span>Tags:</span> All, Trending, Cooking, Healthy Food, Life Style</li>
          </ul>
          <div className="blog__details__social">
            <a href="#"><i className="fa fa-facebook" /></a>
            <a href="#"><i className="fa fa-twitter" /></a>
            <a href="#"><i className="fa fa-google-plus" /></a>
            <a href="#"><i className="fa fa-linkedin" /></a>
            <a href="#"><i className="fa fa-envelope" /></a>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default BlogDetailContent