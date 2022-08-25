import React from 'react'
import product1 from "../../assets/img/product/product-1.jpg"
import product2 from "../../assets/img/product/product-2.jpg"
import product3 from "../../assets/img/product/product-3.jpg"
import product4 from "../../assets/img/product/product-4.jpg"
import product5 from "../../assets/img/product/product-5.jpg"
import product6 from "../../assets/img/product/product-6.jpg"
import product7 from "../../assets/img/product/product-7.jpg"
import product8 from "../../assets/img/product/product-8.jpg"
import product9 from "../../assets/img/product/product-9.jpg"
import product10 from "../../assets/img/product/product-10.jpg"
import product11 from "../../assets/img/product/product-11.jpg"
import product12 from "../../assets/img/product/product-12.jpg"

const productMenu = () => {
  return (
    <>
     <section className="product spad">
        <div className="container">
            <div className="row">
            <div className="col-lg-3 col-md-5">
                    <div className="sidebar">
                        <div className="sidebar__item">
                            <h4>Department</h4>
                            <ul>
                                <li><a href="#">Fresh Meat</a></li>
                                <li><a href="#">Vegetables</a></li>
                                <li><a href="#">Fruit & Nut Gifts</a></li>
                                <li><a href="#">Fresh Berries</a></li>
                                <li><a href="#">Ocean Foods</a></li>
                                <li><a href="#">Butter & Eggs</a></li>
                                <li><a href="#">Fastfood</a></li>
                                <li><a href="#">Fresh Onion</a></li>
                                <li><a href="#">Papayaya & Crisps</a></li>
                                <li><a href="#">Oatmeal</a></li>
                            </ul>
                        </div>
                        <div className ="sidebar__item">
                            <h4>Price</h4>
                            <div className="price-range-wrap">
                                <div className="price-range ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content"
                                    data-min="10" data-max="540">
                                    <div className="ui-slider-range ui-corner-all ui-widget-header"></div>
                                    <span tabIndex="0" className="ui-slider-handle ui-corner-all ui-state-default"></span>
                                    <span tabIndex="0" className="ui-slider-handle ui-corner-all ui-state-default"></span>
                                </div>
                                <div className="range-slider">
                                    <div className="price-input">
                                        <input type="text" id="minamount"></input>
                                        <input type="text" id="maxamount"></input>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="sidebar__item sidebar__item__color--option">
                            <h4>Colors</h4>
                            <div className="sidebar__item__color sidebar__item__color--white">
                                <label htmlFor="white">
                                    White
                                    <input type="radio" id="white"></input>
                                </label>
                            </div>
                            <div className="sidebar__item__color sidebar__item__color--gray">
                                <label htmlFor="gray">
                                    Gray
                                    <input type="radio" id="gray"></input>
                                </label>
                            </div>
                            <div className="sidebar__item__color sidebar__item__color--red">
                                <label htmlFor="red">
                                    Red
                                    <input type="radio" id="red"></input>
                                </label>
                            </div>
                            <div className="sidebar__item__color sidebar__item__color--black">
                                <label htmlFor="black">
                                    Black
                                    <input type="radio" id="black"></input>
                                </label>
                            </div>
                            <div className="sidebar__item__color sidebar__item__color--blue">
                                <label htmlFor="blue">
                                    Blue
                                    <input type="radio" id="blue"></input>
                                </label>
                            </div>
                            <div className="sidebar__item__color sidebar__item__color--green">
                                <label htmlFor="green">
                                    Green
                                    <input type="radio" id="green"></input>
                                </label>
                            </div>
                        </div>
                        <div className="sidebar__item">
                            <h4>Popular Size</h4>
                            <div className="sidebar__item__size">
                                <label htmlFor="large">
                                    Large
                                    <input type="radio" id="large"></input>
                                </label>
                            </div>
                            <div className="sidebar__item__size">
                                <label htmlFor="medium">
                                    Medium
                                    <input type="radio" id="medium"></input>
                                </label>
                            </div>
                            <div className="sidebar__item__size">
                                <label htmlFor="small">
                                    Small
                                    <input type="radio" id="small"></input>
                                </label>
                            </div>
                            <div className="sidebar__item__size">
                                <label htmlFor="tiny">
                                    Tiny
                                    <input type="radio" id="tiny"></input>
                                </label>
                            </div>
                        </div>
                        <div className="sidebar__item">
                            <div className="latest-product__text">
                                <h4>Latest Products</h4>
                                <div className="latest-product__slider owl-carousel">
                                    <div className="latest-prdouct__slider__item">
                                        <a href="#" className="latest-product__item">
                                            <div className="latest-product__item__pic">
                                                <img style={{backgroundImage:`url("${product1}")`}} alt=""></img>
                                            </div>
                                            <div className="latest-product__item__text">
                                                <h6>Crab Pool Security</h6>
                                                <span>$30.00</span>
                                            </div>
                                        </a>
                                        <a href="#" className="latest-product__item">
                                            <div className="latest-product__item__pic">
                                                <img style={{backgroundImage:`url("${product1}")`}} alt=""></img>
                                            </div>
                                            <div className="latest-product__item__text">
                                                <h6>Crab Pool Security</h6>
                                                <span>$30.00</span>
                                            </div>
                                        </a>
                                        <a href="#" className="latest-product__item">
                                            <div className="latest-product__item__pic">
                                                <img style={{backgroundImage:`url("${product1}")`}} alt=""></img>
                                            </div>
                                            <div className="latest-product__item__text">
                                                <h6>Crab Pool Security</h6>
                                                <span>$30.00</span>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="latest-prdouct__slider__item">
                                        <a href="#" className="latest-product__item">
                                            <div className="latest-product__item__pic">
                                                <img style={{backgroundImage:`url("${product1}")`}} alt=""></img>
                                            </div>
                                            <div className="latest-product__item__text">
                                                <h6>Crab Pool Security</h6>
                                                <span>$30.00</span>
                                            </div>
                                        </a>
                                        <a href="#" className="latest-product__item">
                                            <div className="latest-product__item__pic">
                                                <img style={{backgroundImage:`url("${product1}")`}} alt=""></img>
                                            </div>
                                            <div className="latest-product__item__text">
                                                <h6>Crab Pool Security</h6>
                                                <span>$30.00</span>
                                            </div>
                                        </a>
                                        <a href="#" className="latest-product__item">
                                            <div className="latest-product__item__pic">
                                                <img style={{backgroundImage:`url("${product1}")`}} alt="logo"></img>
                                            </div>
                                            <div className="latest-product__item__text">
                                                <h6>Crab Pool Security</h6>
                                                <span>$30.00</span>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-9 col-md-7">
                    
                    <div className="filter__item">
                        <div className="row">
                            <div className="col-lg-4 col-md-5">
                                <div className="filter__sort">
                                    <span>Sort By</span>
                                    <select>
                                        <option value="0">Default</option>
                                        <option value="0">Default</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4">
                                <div className="filter__found">
                                    <h6><span>16</span> Products found</h6>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-3">
                                <div className="filter__option">
                                    <span className="icon_grid-2x2"></span>
                                    <span className="icon_ul"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="product__item">
                                <div className="product__item__pic set-bg" style={{backgroundImage:`url("${product1}")`}}>
                                    <ul className="product__item__pic__hover">
                                        <li><a href="#"><i className="fa fa-heart"></i></a></li>
                                        <li><a href="#"><i className="fa fa-retweet"></i></a></li>
                                        <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
                                    </ul>
                                </div>
                                <div className="product__item__text">
                                    <h6><a href="#">Crab  Security</a></h6>
                                    <h5>$30.00</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="product__item">
                                <div className="product__item__pic set-bg" style={{backgroundImage:`url("${product2}")`}}>
                                    <ul className="product__item__pic__hover">
                                        <li><a href="#"><i className="fa fa-heart"></i></a></li>
                                        <li><a href="#"><i className="fa fa-retweet"></i></a></li>
                                        <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
                                    </ul>
                                </div>
                                <div className="product__item__text">
                                    <h6><a href="#">Crab Pool Security</a></h6>
                                    <h5>$30.00</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="product__item">
                                <div className="product__item__pic set-bg" style={{backgroundImage:`url("${product3}")`}}>
                                    <ul className="product__item__pic__hover">
                                        <li><a href="#"><i className="fa fa-heart"></i></a></li>
                                        <li><a href="#"><i className="fa fa-retweet"></i></a></li>
                                        <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
                                    </ul>
                                </div>
                                <div className="product__item__text">
                                    <h6><a href="#">Crab Pool Security</a></h6>
                                    <h5>$30.00</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="product__item">
                                <div className="product__item__pic set-bg" style={{backgroundImage:`url("${product4}")`}}>
                                    <ul className="product__item__pic__hover">
                                        <li><a href="#"><i className="fa fa-heart"></i></a></li>
                                        <li><a href="#"><i className="fa fa-retweet"></i></a></li>
                                        <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
                                    </ul>
                                </div>
                                <div className="product__item__text">
                                    <h6><a href="#">Crab Pool Security</a></h6>
                                    <h5>$30.00</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="product__item">
                                <div className="product__item__pic set-bg" style={{backgroundImage:`url("${product5}")`}}>
                                    <ul className="product__item__pic__hover">
                                        <li><a href="#"><i className="fa fa-heart"></i></a></li>
                                        <li><a href="#"><i className="fa fa-retweet"></i></a></li>
                                        <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
                                    </ul>
                                </div>
                                <div className="product__item__text">
                                    <h6><a href="#">Crab Pool Security</a></h6>
                                    <h5>$30.00</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="product__item">
                                <div className="product__item__pic set-bg" style={{backgroundImage:`url("${product6}")`}}>
                                    <ul className="product__item__pic__hover">
                                        <li><a href="#"><i className="fa fa-heart"></i></a></li>
                                        <li><a href="#"><i className="fa fa-retweet"></i></a></li>
                                        <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
                                    </ul>
                                </div>
                                <div className="product__item__text">
                                    <h6><a href="#">Crab Pool Security</a></h6>
                                    <h5>$30.00</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="product__item">
                                <div className="product__item__pic set-bg" style={{backgroundImage:`url("${product7}")`}}>
                                    <ul className="product__item__pic__hover">
                                        <li><a href="#"><i className="fa fa-heart"></i></a></li>
                                        <li><a href="#"><i className="fa fa-retweet"></i></a></li>
                                        <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
                                    </ul>
                                </div>
                                <div className="product__item__text">
                                    <h6><a href="#">Crab Pool Security</a></h6>
                                    <h5>$30.00</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="product__item">
                                <div className="product__item__pic set-bg" style={{backgroundImage:`url("${product8}")`}}>
                                    <ul className="product__item__pic__hover">
                                        <li><a href="#"><i className="fa fa-heart"></i></a></li>
                                        <li><a href="#"><i className="fa fa-retweet"></i></a></li>
                                        <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
                                    </ul>
                                </div>
                                <div className="product__item__text">
                                    <h6><a href="#">Crab Pool Security</a></h6>
                                    <h5>$30.00</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="product__item">
                                <div className="product__item__pic set-bg" style={{backgroundImage:`url("${product9}")`}}>
                                    <ul className="product__item__pic__hover">
                                        <li><a href="#"><i className="fa fa-heart"></i></a></li>
                                        <li><a href="#"><i className="fa fa-retweet"></i></a></li>
                                        <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
                                    </ul>
                                </div>
                                <div className="product__item__text">
                                    <h6><a href="#">Crab Pool Security</a></h6>
                                    <h5>$30.00</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="product__item">
                                <div className="product__item__pic set-bg" style={{backgroundImage:`url("${product9}")`}}>
                                    <ul className="product__item__pic__hover">
                                        <li><a href="#"><i className="fa fa-heart"></i></a></li>
                                        <li><a href="#"><i className="fa fa-retweet"></i></a></li>
                                        <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
                                    </ul>
                                </div>
                                <div className="product__item__text">
                                    <h6><a href="#">Crab Pool Security</a></h6>
                                    <h5>$30.00</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="product__item">
                                <div className="product__item__pic set-bg" style={{backgroundImage:`url("${product10}")`}}>
                                    <ul className="product__item__pic__hover">
                                        <li><a href="#"><i className="fa fa-heart"></i></a></li>
                                        <li><a href="#"><i className="fa fa-retweet"></i></a></li>
                                        <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
                                    </ul>
                                </div>
                                <div className="product__item__text">
                                    <h6><a href="#">Crab Pool Security</a></h6>
                                    <h5>$30.00</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="product__item">
                                <div className="product__item__pic set-bg" style={{backgroundImage:`url("${product11}")`}}>
                                    <ul className="product__item__pic__hover">
                                        <li><a href="#"><i className="fa fa-heart"></i></a></li>
                                        <li><a href="#"><i className="fa fa-retweet"></i></a></li>
                                        <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
                                    </ul>
                                </div>
                                <div className="product__item__text">
                                    <h6><a href="#">Crab Pool Security</a></h6>
                                    <h5>$30.00</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="product__pagination">
                        <a href="#">1</a>
                        <a href="#">2</a>
                        <a href="#">3</a>
                        <a href="#"><i className="fa fa-long-arrow-right"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default productMenu