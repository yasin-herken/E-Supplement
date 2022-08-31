import React, { useState, useEffect } from 'react'
import Humberger from "../Components/Humberger/humberger.js";
import Header from "../Components/Header/header.js";
import Hero from "../Components/Hero/hero.js";
import Breadcrumb from "../Components/Breadcrumb/breadbrumb.js";

import Footer from "../Components/Footer/footer.js";
import CheckoutSection from '../Components/Checkout/checkoutSection.js';
import {CHECKOUT_SHOW} from "./defaultPageOption/showImg.js";
import {CHECKOUT_STATUS} from "./defaultPageOption/status.js";
function Checkout() {
  const [isOpen, setIsOpen] = useState(false)
  useEffect(() => {
  }, [isOpen])
  return (
    <>
      <Humberger isOpen={isOpen} setIsOpen={setIsOpen} />
      <Header setIsOpen={setIsOpen} />
      <Hero status={CHECKOUT_SHOW} show={CHECKOUT_STATUS} />
      <Breadcrumb pageName = "Checkout"/>
      <CheckoutSection />
      <Footer />
    </>

  )
}

export default Checkout