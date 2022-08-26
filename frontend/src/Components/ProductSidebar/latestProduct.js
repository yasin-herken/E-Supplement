import React from 'react'
import { Navigation, Pagination, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const latestProduct = () => {
  return (
    <>
            <div className="sidebar__item">
                  <div className="latest-product__text">
                    <h4>Latest Products</h4>

                    <Swiper
                      modules={[Autoplay, Navigation, Pagination, A11y]}
                      speed={600}
                      loop="true"
                      autoplay={{ delay: 5000, disableOnInteraction: false }}
                      slidesPerView="auto"
                      pagination={{ clickable: true }}
                      breakpoints={{
                        320: {
                          slidesPerView: 1,
                          spaceBetween: 20,
                        },
                        1200: {
                          slidesPerView: 1,
                          spaceBetween: 20,
                        },
                      }}
                    >
                      <SwiperSlide>
                        <a href="#" className="latest-product__item">
                          <div className="latest-product__item__pic">
                            <img
                              src={require("../../assets/img/product/product-5.jpg")}
                              alt=""
                            ></img>         
                          </div>
                          <div className="latest-product__item__text">
                              <h6>Crab Pool Security</h6>
                              <span>$30.00</span>
                            </div>
                        </a>

                        <a href="#" className="latest-product__item">
                          <div className="latest-product__item__pic">
                            <img
                              src={require("../../assets/img/product/product-4.jpg")}
                              alt=""
                            ></img>
                          </div>
                          <div className="latest-product__item__text">
                              <h6>Crab Pool Security</h6>
                              <span>$30.00</span>
                            </div>
                        </a>
                        <a href="#" className="latest-product__item">
                          <div className="latest-product__item__pic">
                            <img
                              src={require("../../assets/img/product/product-3.jpg")}
                              alt=""
                            ></img>
                          
                          </div>
                          <div className="latest-product__item__text">
                              <h6>Crab Pool Security</h6>
                              <span>$30.00</span>
                            </div>
                        </a>
                      </SwiperSlide>

                      <SwiperSlide>
                        <a href="#" className="latest-product__item">
                          <div className="latest-product__item__pic">
                            <img
                              src={require("../../assets/img/product/product-2.jpg")}
                              alt=""
                            ></img>
                           
                          </div>
                          <div className="latest-product__item__text">
                              <h6>Crab Pool Security</h6>
                              <span>$30.00</span>
                            </div>
                        </a>
                        <a href="#" className="latest-product__item">
                          <div className="latest-product__item__pic">
                            <img
                              src={require("../../assets/img/product/product-1.jpg")}
                              alt=""
                            ></img>
                          
                          </div>
                          <div className="latest-product__item__text">
                              <h6>Crab Pool Security</h6>
                              <span>$30.00</span>
                            </div>
                        </a>
                        <a href="#" className="latest-product__item">
                          <div className="latest-product__item__pic">
                            <img
                              src={require("../../assets/img/product/product-11.jpg")}
                              alt=""
                            ></img>
                          
                          </div>
                          <div className="latest-product__item__text">
                              <h6>Crab Pool Security</h6>
                              <span>$30.00</span>
                            </div>
                        </a>
                      </SwiperSlide>

                    </Swiper>
                  </div>
                </div>
    </>
  )
}

export default latestProduct