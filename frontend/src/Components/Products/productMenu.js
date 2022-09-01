import React, { useState, useEffect } from "react";
import product1 from "../../assets/img/product/product-1.jpg";
import ProductSidebar from "../ProductSidebar/productSidebar";
import ItemFilter from "../ItemFilter/itemFilter";
import ProductItem from "../ProductItem/productItem";
import { productList, categoryList } from "../../Axios";
import { useLocation } from "react-router-dom";
import ProductTable from "../ProductTable/productTable";

const ProductMenu = (props) => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filter,setFilter] = useState({});


  const location = useLocation()
  //console.log(location.pathname)

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilter({
      ...filter,
      [e.target.name] : value,
    })
  }

  //console.log(filter.category);

  useEffect(() => {
    fetchProducts();
  }, []);

  //console.log(props.cat.item);

  const fetchProducts = () => {
  /*  productList(null, products)
      .then((res) => {
      //  console.log(res.data);
      //  console.log("fetchProducts");
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });*/

    categoryList(categories)
      .then((res) => {
       // console.log(res.data);
        setCategories(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <section className="product spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-5">
              <ProductSidebar categories={categories} />
            </div>
            <div className="col-lg-9 col-md-7">
              <div className="filter__item">
                <div className="row">
                  <div className="col-lg-4 col-md-5">
                    <div className="filter__sort">
                      <span> CATEGORIES </span>
                      <select name="category" onChange={handleFilters}>
                        {categories.map((item) => (
                          <option>{item.category}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4">
                    <div className="filter__found">
                      <h6>
                        <span>16</span> Products found
                      </h6>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-3">
                    <div className="filter__option">
                      <span className="icon_grid-2x2"></span>
                      <span className="icon_ul"></span>
                    </div>
                  </div>
                </div>
              </div>
              <ProductTable  filters={filter}  />
         
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
