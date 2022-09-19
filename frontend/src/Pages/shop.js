import React,{useState} from "react";
import Breadbrumb from "../Components/Breadcrumb/breadbrumb.js";
import Footer from "../Components/Footer/footer.js";
import Header from "../Components/Header/header.js";
import Hero from "../Components/Hero/hero.js";
import Humberger from "../Components/Humberger/humberger.js";
import ProductMenu from "../Components/Products/productMenu.js";
import { SHOPING_SHOW } from "./defaultPageOption/showImg.js";
import { SHOP_STATUS } from "./defaultPageOption/status.js";


function Shop() {
  const [cat,setCat] = useState("")
  //console.log(cat)
  return (
    <>
      <Humberger />
      <Header />
      <Hero status={SHOP_STATUS} show={SHOPING_SHOW} />
      <Breadbrumb />
      <ProductMenu cat = {cat} setCat = {setCat}/>
      <Footer />
    </>
  );
}

export default Shop;
