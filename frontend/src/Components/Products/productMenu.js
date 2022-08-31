import React, { useState, useEffect } from "react";
import product1 from "../../assets/img/product/product-1.jpg";
import ProductSidebar from "../ProductSidebar/productSidebar";
import ItemFilter from "../ItemFilter/itemFilter";
import ProductItem from "../ProductItem/productItem";
import { productList } from "../../Axios";


const ProductMenu = () => {
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
  console.log(withoutDuplicates);

  

  return (
    <>
      <section className="product spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-5">
              <ProductSidebar categories = {withoutDuplicates}/>
            </div>
            <div className="col-lg-9 col-md-7">
              <ItemFilter />
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
              <div className="product__pagination">
                <a href="#">1</a>
                <a href="#">2</a>
                <a href="#">3</a>
                <a href="#">
                  <i className="fa fa-long-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductMenu;
