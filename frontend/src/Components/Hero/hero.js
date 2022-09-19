import React, { useState, useEffect } from "react";
import Categories from "./categories";
import Search from "./search";
import { categoryList } from "../../Axios";
import { publicRequest } from "../../requestMethods";

function Hero({ status, show }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await publicRequest("categories/all");
        setCategories(res.data);
      } catch (err) {
        console.log(err);
      }
  };
  fetchProducts();
}, []);



// category determination
/*  var categoriesArr = [];
 products.map(
   (m) => (categoriesArr = categoriesArr.concat(m.categories))
 );
 
 const withoutDuplicates = [...new Set(categoriesArr)];*/

return (
  <section className="hero">
    <div className="container">
      <div className="row">
        <Categories show={show} categories={categories} />
        <Search status={status} />
      </div>
    </div>
  </section>
);
}

export default Hero;
