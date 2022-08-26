import React, { useEffect, useState } from 'react'
import Logo from '../../assets/img/logo.png';
function Navbar({setIsOpen}) {
  let isOpen = false;
  const humbergerHandler = (e) =>{
    e.preventDefault()
    isOpen?setIsOpen(false):setIsOpen(true)
    isOpen?isOpen=false:isOpen=true
    console.log(isOpen)
  }

  return (
    <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <div className="header__logo">
              <a href="/">
                <img src={Logo} alt="" />
              </a>
            </div>
          </div>
          <div className="col-lg-6">
            <nav className="header__menu">
              <ul>
                <li className="active">
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="./shop-grid.html">Shop</a>
                </li>
                <li>
                  <a href="#">Pages</a>
                  <ul className="header__menu__dropdown">
                    <li>
                      <a href="/shop-detail">Shop Details</a>
                    </li>
                    <li>
                      <a href="./shoping-cart.html">Shoping Cart</a>
                    </li>
                    <li>
                      <a href="./checkout.html">Check Out</a>
                    </li>
                    <li>
                      <a href="./blog-details.html">Blog Details</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="./blog.html">Blog</a>
                </li>
                <li>
                  <a href="./contact.html">Contact</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="col-lg-3">
            <div className="header__cart">
              <ul>
                <li>
                  <a href="#">
                    <i className="fa fa-heart" /> <span>1</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-shopping-bag" /> <span>3</span>
                  </a>
                </li>
              </ul>
              <div className="header__cart__price">
                item: <span>$150.00</span>
              </div>
            </div>
          </div>
        </div>
        <div className="humberger__open" onClick={humbergerHandler}>
          <i className="fa fa-bars" />
        </div>
      </div>
  )
}

export default Navbar