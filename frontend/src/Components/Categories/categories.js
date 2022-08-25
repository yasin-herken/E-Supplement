import React from 'react'
import cat1 from '../../assets/img/categories/cat-1.jpg';
import cat2 from '../../assets/img/categories/cat-2.jpg';
import cat3 from '../../assets/img/categories/cat-3.jpg';
import cat4 from '../../assets/img/categories/cat-4.jpg';
import cat5 from '../../assets/img/categories/cat-5.jpg';
import { Navigation, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
function Categories() {
    return (
        <section className="categories">
            <div className="container">
                <div className="row">
                    <Swiper
                        className='categories__slider owl-carousel'
                        modules={[Autoplay, Navigation, A11y]}
                        speed={1200}
                        loop="true"
                        autoplay={{ delay: 5000, disableOnInteraction: false }}
                        slidesPerView={4}
                    >
                        <SwiperSlide>
                            <div className="col-lg-3">
                                <div
                                    className="categories__item set-bg"
                                    style={{ backgroundImage: `url("${cat1}")` }}
                                >
                                    <h5>
                                        <a href="#">Fresh Fruit</a>
                                    </h5>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="col-lg-3">
                                <div
                                    className="categories__item set-bg"
                                    style={{ backgroundImage: `url(${cat2})` }}
                                >
                                    <h5>
                                        <a href="#">Dried Fruit</a>
                                    </h5>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div
                                className="categories__item set-bg"
                                style={{ backgroundImage: `url(${cat3})` }}
                            >
                                <h5>
                                    <a href="#">Vegetables</a>
                                </h5>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="col-lg-3">
                                <div
                                    className="categories__item set-bg"
                                    style={{ backgroundImage: `url(${cat4})` }}
                                >
                                    <h5>
                                        <a href="#">drink fruits</a>
                                    </h5>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="col-lg-3">
                                <div
                                    className="categories__item set-bg"
                                    style={{ backgroundImage: `url(${cat5})` }}
                                >
                                    <h5>
                                        <a href="#">drink fruits</a>
                                    </h5>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
    )
}

export default Categories