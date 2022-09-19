import React from 'react'
import { Navigation, A11y, Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import lp1 from "../../assets/img/latest-product/lp-1.jpg";
import lp2 from "../../assets/img/latest-product/lp-2.jpg";
import lp3 from "../../assets/img/latest-product/lp-3.jpg";
function ProductSwiper() {
    return (
        <div className="latest-product__text">
            <h4>Latest Products</h4>
            <Swiper
                className='latest-product__slider owl-carousel'
                style={{ margin: "0" }}
                modules={[Autoplay, Pagination, Navigation, A11y]}
                autoHeight={false}
                speed={1200}
                loop="true"
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                slidesPerView={1}
            >
                <div className='latest-product__slider__item'>
                    <SwiperSlide key={1}>
                        <a href="#" className="latest-product__item">
                            <div className="latest-product__item__pic">
                                <img src={lp1} alt="" />
                            </div>
                            <div className="latest-product__item__text">
                                <h6>Crab Pool Security</h6>
                                <span>$30.00</span>
                            </div>
                        </a>
                        <a href="#" className="latest-product__item">
                            <div className="latest-product__item__pic">
                                <img src={lp2} alt="" />
                            </div>
                            <div className="latest-product__item__text">
                                <h6>Crab Pool Security</h6>
                                <span>$30.00</span>
                            </div>
                        </a>
                        <a href="#" className="latest-product__item">
                            <div className="latest-product__item__pic">
                                <img src={lp3} alt="" />
                            </div>
                            <div className="latest-product__item__text">
                                <h6>Crab Pool Security</h6>
                                <span>$30.00</span>
                            </div>
                        </a>
                    </SwiperSlide>
                </div>
                <div className='latest-product__slider__item'>
                    <SwiperSlide key={2}>
                        <a href="#" className="latest-product__item">
                            <div className="latest-product__item__pic">
                                <img src={lp1} alt="" />
                            </div>
                            <div className="latest-product__item__text">
                                <h6>Crab Pool Security</h6>
                                <span>$30.00</span>
                            </div>
                        </a>
                        <a href="#" className="latest-product__item">
                            <div className="latest-product__item__pic">
                                <img src={lp2} alt="" />
                            </div>
                            <div className="latest-product__item__text">
                                <h6>Crab Pool Security</h6>
                                <span>$30.00</span>
                            </div>
                        </a>
                        <a href="#" className="latest-product__item">
                            <div className="latest-product__item__pic">
                                <img src={lp3} alt="" />
                            </div>
                            <div className="latest-product__item__text">
                                <h6>Crab Pool Security</h6>
                                <span>$30.00</span>
                            </div>
                        </a>
                    </SwiperSlide>
                </div>
            </Swiper>
        </div>
    )
}

export default ProductSwiper