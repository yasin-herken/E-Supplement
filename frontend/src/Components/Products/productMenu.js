import React, { useState, useEffect } from "react";
import product1 from "../../assets/img/product/product-1.jpg";
import ProductSidebar from "../ProductSidebar/productSidebar";
import ItemFilter from "../ItemFilter/itemFilter";
import ProductItem from "../ProductItem/productItem";
import { productList, categoryList } from "../../Axios";
import { useLocation } from "react-router-dom";
import ProductTable from "../ProductTable/productTable";
import PriceSlider from "../ProductSidebar/priceSlider";
import { Form, Option } from "react-bootstrap";
import { publicRequest } from "../../requestMethods";

const ProductMenu = (props) => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filter, setFilter] = useState({ category: "vitamin" });
  const [price, setPrice] = useState([])


  const location = useLocation();
  //console.log(location.pathname)

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilter({
      ...filter,
      [e.target.name]: value,
    })
  }

  //console.log(filter.category);

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

  //console.log(props.cat.item);



  useEffect(() => {
    console.log(price);
  }, [price]);

  const priceHandler = (a) => {
    setPrice(a);
    setFilter({
      ...filter,
      price: price,
    })

  }



  return (
    <>
      <section className="product spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-5">
              {/*<ProductSidebar categories={categories} />*/}
            </div>
            <div className="col-lg-9 col-md-7">

              {/* FILTER MENU*/}
              <div className="filter__item">
                <div className="row">
                  <div className="col-lg-4 col-md-5">
                    <div className="filter__sort">
                      <span> CATEGORIES </span>
                      <Form.Select name="category" aria-label="Default select example" onChange={handleFilters}>
                        {categories.map((item) => (
                          <option key={item.id}>{item.category}</option>
                        ))}
                      </Form.Select>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4">
                    <PriceSlider priceHandler={priceHandler} />
                  </div>
                  <div className="col-lg-4 col-md-3">
                    <div className="filter__option">
                      <span className="icon_grid-2x2"></span>
                      <span className="icon_ul"></span>
                    </div>
                  </div>
                </div>
              </div>
              {/* FILTER MENU ENDS*/}
              <ProductTable filters={filter} />

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
