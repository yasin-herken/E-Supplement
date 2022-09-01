import React, { useState, useEffect } from "react";
import ProductItem from "../ProductItem/productItem";
import product1 from "../../assets/img/product/product-1.jpg";
import axios from "axios";


const ProductTable = (props) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  console.log(props.filters.category);

  useEffect(() => {
    console.log("hi")
    const getProducts = async () => {
      try {
        const res = await axios.get(
          props.filters.category
            ? `http://localhost:3000/api/products/all?category=${props.filters.category}`
            : "http://localhost:3000/api/products/all"
        );
        setProducts(res.data);
        console.log(res.data)
      } catch (err) {console.log(err)}
    };
    getProducts();
  }, [props.filters.category]);

  return (
    <div className="row">
      {products.map((item) => (
        <div className="col-lg-4 col-md-6 col-sm-6">
          <ProductItem
            imgPath={product1}
            productName={item.title}
            productPrice={item.price}
          />
        </div>
      ))}
    </div>
  );
};

export default ProductTable;
