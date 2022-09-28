import React from 'react'
import Logo from '../../assets/img/supplement.png';
import { NavLink } from "react-router-dom";
function Navbar({ setIsOpen }) {
  let isOpen = false;
  const humbergerHandler = (e) => {
    e.preventDefault()
    isOpen ? setIsOpen(false) : setIsOpen(true)
    isOpen ? isOpen = false : isOpen = true
    console.log(isOpen)
  }
  const getNavLink = (path) => {
    return path === window.location.pathname ? "active" : ""
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-3">
          <div className="header__logo">
            <NavLink to="/">
              <img src={Logo} alt="" />
            </NavLink>
          </div>
        </div>
        <div className="col-lg-6">
          <nav className="header__menu">
            <ul>
              <li className={(getNavLink("/"))}>
                <NavLink to="/">Home</NavLink>
              </li>
              <li className={(getNavLink("/shop"))}>
                <NavLink to="/shop">Shop</NavLink>
              </li>
              <li className={getNavLink("/shop-detail")+ getNavLink("/shoping-card")+getNavLink("/checkout")+getNavLink("/blog-details")}>
                <NavLink to="#">Pages</NavLink>
                <ul className="header__menu__dropdown">
                  <li >
                    <NavLink to="/shop-detail">Shop Details</NavLink>
                  </li>
                  <li>
                    <NavLink to="/shoping-card">Shoping Cart</NavLink>
                  </li>
                  <li>
                    <NavLink to="/checkout">Check Out</NavLink>
                  </li>
                  <li>
                    <NavLink to="/blog-details">Blog Details</NavLink>
                  </li>
                </ul>
              </li>
              <li className={(getNavLink("/blog"))}>
                <NavLink to="/blog">Blog</NavLink>
              </li>
              <li className={(getNavLink("/contact"))}>
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
          </nav>
        </div>
        <div className="col-lg-3">
          <div className="header__cart">
            <ul>
              <li>
                <NavLink to="/favorites">
                  <i className="fa fa-heart" /> <span>1</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/shoping-card">
                  <i className="fa fa-shopping-bag" /> <span>3</span>
                </NavLink>
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