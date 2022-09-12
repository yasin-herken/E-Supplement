import React, { useEffect } from 'react'
import Logo from '../../assets/img/logo.png';
import Language from '../../assets/img/language.png';

function Humberger({isOpen,setIsOpen}) {
    const humbergerHandler = (e) =>{
        e.preventDefault()
        isOpen?setIsOpen(false):setIsOpen(true)
    }
    useEffect(()=>{
    },[isOpen])
  return (
    <>
        <div className={isOpen?"humberger__menu__overlay active":"humberger__menu__overlay"} onClick={humbergerHandler} />
        <div className={isOpen?"humberger__menu__wrapper show__humberger__menu__wrapper":"humberger__menu__wrapper"} >
          <div className="humberger__menu__logo">
            <a href="#"><img src={Logo} alt="" /></a>
          </div>
          <div className="humberger__menu__cart">
            <ul>
              <li><a href="#"><i className="fa fa-heart" /> <span>1</span></a></li>
              <li><a href="#"><i className="fa fa-shopping-bag" /> <span>3</span></a></li>
            </ul>
            <div className="header__cart__price">item: <span>$150.00</span></div>
          </div>
          <div className="humberger__menu__widget">
            <div className="header__top__right__language">
              <img src={Language} alt="" />
              <div>English</div>
              <span className="arrow_carrot-down" />
              <ul>
                <li><a href="#">Turkish</a></li>
                <li><a href="#">English</a></li>
              </ul>
            </div>
            <div className="header__top__right__auth">
              <a href="#"><i className="fa fa-user" /> Login</a>
            </div>
          </div>
          <nav className="navbar navbar-expand-lg navbar-light">
            <ul className='navbar-nav'>
              <li className="nav-item active"><a className="nav-link" href="/">Home</a></li>
              <li className="nav-item"><a className="nav-link" href="/shop">Shop</a></li>
              <li className="nav-item dropdown"><a className="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">Pages</a>
                <ul className="dropdown-menu" id="navbardrop" style={{border:"none"}}>
                  <li ><a className='dropdown-item' href="/shop-detail">Shop Details</a></li>
                  <li ><a className='dropdown-item' href="/shoping-cart">Shoping Cart</a></li>
                  <li ><a className='dropdown-item' href="/checkout">Check Out</a></li>
                  <li ><a className='dropdown-item' href="/blog-details">Blog Details</a></li>
                </ul>
              </li>
              <li className='nav-item'><a className="nav-link" href="/blog">Blog</a></li>
              <li className='nav-item'><a className="nav-link" href="/blog">Contact</a></li>
            </ul>
          </nav>
          <div id="mobile-menu-wrap" />
          <div className="header__top__right__social">
            <a href="#"><i className="fa fa-facebook" /></a>
            <a href="#"><i className="fa fa-twitter" /></a>
            <a href="#"><i className="fa fa-linkedin" /></a>
            <a href="#"><i className="fa fa-pinterest-p" /></a>
          </div>
          <div className="humberger__menu__contact">
            <ul>
              <li><i className="fa fa-envelope" /> hello@colorlib.com</li>
              <li>Free Shipping for all Order of $99</li>
            </ul>
          </div>
        </div>
    </>
  )
}

export default Humberger