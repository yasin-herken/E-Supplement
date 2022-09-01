import React,{useState} from "react";
import Footer from "../Components/Footer/footer.js";
import Header from "../Components/Header/header.js";
import Humberger from "../Components/Humberger/humberger.js";
import ProductMenu from "../Components/Products/productMenu.js";


function Shop() {
  const [cat,setCat] = useState("")
  //console.log(cat)
  return (
    <>
      <Humberger />
      <Header />
      <ProductMenu cat = {cat} setCat = {setCat}/>
      <Footer />
    </>
  );
}

export default Shop;
