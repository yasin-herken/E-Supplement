import React,{useEffect, useState} from "react";
import Footer from "../Components/Footer/footer.js";
import Header from "../Components/Header/header.js";
import Humberger from "../Components/Humberger/humberger.js";
import ProductDetail from "../Components/ProductDetails/productDetails.js";
import { publicRequest } from "../requestMethods.js";
import { useLocation } from "react-router-dom";
import product1 from "../assets/img/product/product-1.jpg";

const ProductDetails = () => {
    const location = useLocation();
    const [product, setProduct] = useState({});
    const id = location.search.split("=")[1];
  //  console.log(location.search);
    console.log(id);
    useEffect(() => {
        const getProduct = async () => {
          try {
            const res = await publicRequest.get("/products/find/" + id);
            setProduct(res.data);
            console.log(res.data)
          } catch {
            console.log("hh")
          }
        };
        getProduct();
      }, [id]);
  return (
    <>
      <Humberger />
      <Header />
      <ProductDetail id = {id} product = {product} imgPath = {product1}/>
      <Footer />
    </>
  );
};

export default ProductDetails;
