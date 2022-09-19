import React, { useState, useEffect } from "react";
import ProductItem from "../ProductItem/productItem";
import axios from "axios";

const ProductTable = (props) => {
  const [products, setProducts] = useState([]);

  const [filteredProducts, setFilteredProducts] = useState([]);

  //console.log(props.filters);
  var max;

  useEffect(() => {
    //console.log("hi")
    const getProducts = async () => {
      try {
        const res = await axios.get(
          props.filters.category
            ? `http://localhost:5000/api/products/all?category=${props.filters.category}`
            : "http://localhost:5000/api/products/all"
        );
        setProducts(res.data);
        setFilteredProducts(res.data)
        // console.log(res.data)
      } catch (err) {
        console.log(err);
      }
    };
    getProducts();
  }, [props.filters.category]);
  useEffect(()=>{
    props.setNumberOfProducts(products.length);
  },[props,products])

  useEffect(() => {
    //console.log("hi");
    max = props.filters.price ? props.filters.price[1] : 1000.0;
    //console.log(max);
    //console.log(filteredProducts);
    props.filters.category && setFilteredProducts(products.filter(p => p.price < max))
    //console.log(filteredProducts);
  }, [props.filters.price,props.filters.category]);

  return (
    <div className="row">
      {filteredProducts.map((item) => (
        <div key={item.id} className="col-lg-4 col-md-6 col-sm-6">
          <ProductItem 
            imgPath={item.img}
            productName={item.title}
            productPrice={item.price}
            productId = {item._id}
          />
        </div>
      ))}
    </div>
  );
};

export default ProductTable;
