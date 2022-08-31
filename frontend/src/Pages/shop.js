import React from "react";
import Footer from "../Components/Footer/footer.js";
import Header from "../Components/Header/header.js";
import Humberger from "../Components/Humberger/humberger.js";
import ProductMenu from "../Components/Products/productMenu.js";


function Shop() {
  return (
    <>
      <Humberger />
      <Header />
      <ProductMenu />
      <Footer />
    </>
  );
}

export default Shop;
