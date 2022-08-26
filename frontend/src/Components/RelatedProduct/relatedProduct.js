import React from 'react'
import Product1 from "../../assets/img/product/product-1.jpg";
import Product2 from "../../assets/img/product/product-2.jpg";
import Product3 from "../../assets/img/product/product-3.jpg";
import Product4 from "../../assets/img/product/product-4.jpg";
function RelatedProduct() {
  return (
    <section className="related-product">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title related__product__title">
                <h2>Related Product</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="product__item">
                <div className="product__item__pic set-bg" style={{backgroundImage:`url("${Product1}")`}}>
                  <ul className="product__item__pic__hover">
                    <li><a href="#"><i className="fa fa-heart" /></a></li>
                    <li><a href="#"><i className="fa fa-retweet" /></a></li>
                    <li><a href="#"><i className="fa fa-shopping-cart" /></a></li>
                  </ul>
                </div>
                <div className="product__item__text">
                  <h6><a href="#">Crab Pool Security</a></h6>
                  <h5>$30.00</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="product__item">
                <div className="product__item__pic set-bg" style={{backgroundImage:`url("${Product2}")`}}>
                  <ul className="product__item__pic__hover">
                    <li><a href="#"><i className="fa fa-heart" /></a></li>
                    <li><a href="#"><i className="fa fa-retweet" /></a></li>
                    <li><a href="#"><i className="fa fa-shopping-cart" /></a></li>
                  </ul>
                </div>
                <div className="product__item__text">
                  <h6><a href="#">Crab Pool Security</a></h6>
                  <h5>$30.00</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="product__item">
                <div className="product__item__pic set-bg" style={{backgroundImage:`url("${Product3}")`}}>
                  <ul className="product__item__pic__hover">
                    <li><a href="#"><i className="fa fa-heart" /></a></li>
                    <li><a href="#"><i className="fa fa-retweet" /></a></li>
                    <li><a href="#"><i className="fa fa-shopping-cart" /></a></li>
                  </ul>
                </div>
                <div className="product__item__text">
                  <h6><a href="#">Crab Pool Security</a></h6>
                  <h5>$30.00</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="product__item">
                <div className="product__item__pic set-bg" style={{backgroundImage:`url("${Product4}")`}}>
                  <ul className="product__item__pic__hover">
                    <li><a href="#"><i className="fa fa-heart" /></a></li>
                    <li><a href="#"><i className="fa fa-retweet" /></a></li>
                    <li><a href="#"><i className="fa fa-shopping-cart" /></a></li>
                  </ul>
                </div>
                <div className="product__item__text">
                  <h6><a href="#">Crab Pool Security</a></h6>
                  <h5>$30.00</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default RelatedProduct