import React from "react";
import product1 from "../../assets/img/product/product-1.jpg";
import product2 from "../../assets/img/product/product-2.jpg";
import product3 from "../../assets/img/product/product-3.jpg";
import product4 from "../../assets/img/product/product-4.jpg";
import product5 from "../../assets/img/product/product-5.jpg";
import product6 from "../../assets/img/product/product-6.jpg";
import product7 from "../../assets/img/product/product-7.jpg";
import product8 from "../../assets/img/product/product-8.jpg";
import product9 from "../../assets/img/product/product-9.jpg";
import product10 from "../../assets/img/product/product-10.jpg";
import product11 from "../../assets/img/product/product-11.jpg";
import ProductSidebar from "../ProductSidebar/productSidebar";
import ItemFilter from "../ItemFilter/itemFilter";
import ProductItem from "../ProductItem/productItem";

const productMenu = () => {
  return (
    <>
      <section className="product spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-5">
             <ProductSidebar/>
            </div>
            <div className="col-lg-9 col-md-7">
              <ItemFilter/>
              <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-6">
                <ProductItem imgPath = {product1} productName = "KUŞBAŞI" productPrice = "200.00"/>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                <ProductItem imgPath = {product2} productName = "MUZ" productPrice = "29.00"/>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                  <ProductItem imgPath = {product3} productName = "İNCİR" productPrice = "30.00"/>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                <ProductItem imgPath = {product4} productName = "ÜZÜM" productPrice = "19.99"/>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                <ProductItem imgPath = {product5} productName = "HAMBURGER" productPrice = "77.99"/>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                <ProductItem imgPath = {product6} productName = "MANGO" productPrice = "23.00"/>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                <ProductItem imgPath = {product7} productName = "KARPUZ" productPrice = "15.00"/>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                <ProductItem imgPath = {product8} productName = "ELMA" productPrice = "15.00"/>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                <ProductItem imgPath = {product9} productName = "KURU ÜZÜM" productPrice = "15.00"/>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                <ProductItem imgPath = {product10} productName = "TVUK BUT" productPrice = "15.00"/>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                <ProductItem imgPath = {product11} productName = "MEYVE SUYU" productPrice = "15.00"/>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                <ProductItem imgPath = {product11} productName = "MEYVE SUYU" productPrice = "15.00"/>
                </div>
              </div>
              <div className="product__pagination">
                <a href="#">1</a>
                <a href="#">2</a>
                <a href="#">3</a>
                <a href="#">
                  <i className="fa fa-long-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default productMenu;
