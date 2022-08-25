import React from 'react'
import cat1 from '../../assets/img/categories/cat-1.jpg';
import cat2 from '../../assets/img/categories/cat-2.jpg';
import cat3 from '../../assets/img/categories/cat-3.jpg';
import cat4 from '../../assets/img/categories/cat-4.jpg';
import cat5 from '../../assets/img/categories/cat-5.jpg';
function Categories() {
    return (
        <section className="categories">
            <div className="container">
                <div className="row">
                    <div className="categories__slider owl-carousel">
                        <div className="col-lg-3">
                            <div
                                className="categories__item set-bg"
                                style={{backgroundImage:`url("${cat1}")`}}
                            >
                                <h5>
                                    <a href="#">Fresh Fruit</a>
                                </h5>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div
                                className="categories__item set-bg"
                                style={{backgroundImage:`url(${cat2})`}}
                            >
                                <h5>
                                    <a href="#">Dried Fruit</a>
                                </h5>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div
                                className="categories__item set-bg"
                                style={{backgroundImage:`url(${cat3})`}}
                            >
                                <h5>
                                    <a href="#">Vegetables</a>
                                </h5>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div
                                className="categories__item set-bg"
                                style={{backgroundImage:`url(${cat4})`}}
                            >
                                <h5>
                                    <a href="#">drink fruits</a>
                                </h5>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div
                                className="categories__item set-bg"
                                style={{backgroundImage:`url(${cat5})`}}
                            >
                                <h5>
                                    <a href="#">drink fruits</a>
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Categories