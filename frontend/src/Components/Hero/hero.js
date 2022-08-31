import React,{useState, useEffect} from "react";
import Categories from "./categories";
import Search from "./search";
import { productList } from "../../Axios";

function Hero({ status, show }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    productList(products)
      .then((res) => {
        console.log(res);
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  
  // category determination
   var categoriesArr = [];
  products.map(
    (m) => (categoriesArr = categoriesArr.concat(m.categories))
  );
  
  const withoutDuplicates = [...new Set(categoriesArr)];

  return (
    <section className="hero">
      <div className="container">
        <div className="row">
          <Categories show={show} categories={withoutDuplicates} />
          <Search status={status} />
        </div>
      </div>
    </section>
  );
}

export default Hero;
