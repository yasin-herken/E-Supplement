import React from 'react'
import banner from '../../assets/img/hero/banner.jpg';
function Search({status}) {
    return (
        <div className="col-lg-9">
            <div className="hero__search">
                <div className="hero__search__form">
                    <form action="#">
                        <div className="hero__search__categories">
                            All Categories
                            <span className="arrow_carrot-down" />
                        </div>
                        <input type="text" placeholder="What do yo u need?" />
                        <button type="submit" className="site-btn">
                            SEARCH
                        </button>
                    </form>
                </div>
                <div className="hero__search__phone">
                    <div className="hero__search__phone__icon">
                        <i className="fa fa-phone" />
                    </div>
                    <div className="hero__search__phone__text">
                        <h5>+65 11.188.888</h5>
                        <span>support 24/7 time</span>
                    </div>
                </div>
            </div>
            {status?<div className="hero__item set-bg" style={{backgroundImage:`url("${banner}")`}}>
                <div className="hero__text">
                    <span>FRUIT FRESH</span>
                    <h2>
                        Vegetable <br />
                        100% Organic
                    </h2>
                    <p>Free Pickup and Delivery Available</p>
                    <a href="#" className="primary-btn">
                        SHOP NOW
                    </a>
                </div>
            </div>:null}
        </div>
    )
}

export default Search