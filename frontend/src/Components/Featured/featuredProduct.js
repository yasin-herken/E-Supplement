import React from 'react'
import featured1 from '../../assets/img/featured/feature-1.jpg';
import featured2 from '../../assets/img/featured/feature-2.jpg';
import featured3 from '../../assets/img/featured/feature-3.jpg';
import featured4 from '../../assets/img/featured/feature-4.jpg';
import featured5 from '../../assets/img/featured/feature-5.jpg';
import featured6 from '../../assets/img/featured/feature-6.jpg';
import featured7 from '../../assets/img/featured/feature-7.jpg';
import featured8 from '../../assets/img/featured/feature-7.jpg';
import ProductItem from '../ProductItem/productItem';

function FeaturedProduct() {
  return (
    <section className="featured spad">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="section-title">
            <h2>Featured Product</h2>
          </div>
          <div className="featured__controls">
            <ul>
              <li className="active" data-filter="*">
                All
              </li>
              <li data-filter=".oranges">Oranges</li>
              <li data-filter=".fresh-meat">Fresh Meat</li>
              <li data-filter=".vegetables">Vegetables</li>
              <li data-filter=".fastfood">Fastfood</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="row featured__filter">
        <div className="col-lg-3 col-md-4 col-sm-6 mix oranges fresh-meat">
        <ProductItem imgPath = {featured1} productName = "KUŞBAŞI" productPrice = "200.00"/>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 mix vegetables fastfood">
        <ProductItem imgPath = {featured2} productName = "MUz" productPrice = "200.00"/>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 mix vegetables fresh-meat">
        <ProductItem imgPath = {featured3} productName = "İNCİR" productPrice = "200.00"/>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 mix fastfood oranges">
        <ProductItem imgPath = {featured4} productName = "KARPUZ" productPrice = "200.00"/>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 mix fresh-meat vegetables">
        <ProductItem imgPath = {featured5} productName = "ÜZÜM" productPrice = "200.00"/>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 mix oranges fastfood">
        <ProductItem imgPath = {featured6} productName = "HAMBURGER" productPrice = "200.00"/>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 mix fresh-meat vegetables">
        <ProductItem imgPath = {featured7} productName = "MANGO" productPrice = "200.00"/>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 mix fastfood vegetables">
        <ProductItem imgPath = {featured8} productName = "MANGO" productPrice = "200.00"/>
        </div>
      </div>
    </div>
  </section>
  )
}

export default FeaturedProduct