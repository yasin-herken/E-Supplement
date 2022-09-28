import React, { useState, useEffect } from "react";
import ProductSidebar from "../ProductSidebar/productSidebar";
import ProductTable from "../ProductTable/productTable";
import PriceSlider from "../ProductSidebar/priceSlider";
import { publicRequest } from "../../requestMethods";
import ProductSwiper from "../LatestProduct/productSwiper";
const ProductMenu = (props) => {
  const [categories, setCategories] = useState([]);
  const [filter, setFilter] = useState({ category: "", price: [0, 200] });
  const [price, setPrice] = useState([]);
  const [numberOfProducts,setNumberOfProducts] = useState(0);
  const handleFilters = (e) => {
    const value = e.target.value;
    setFilter({
      ...filter,
      category: value
    })
  }
  useEffect(() => {
    console.log(filter);
  }, [filter])
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
              <div className="sidebar">
                <div className="sidebar__item">
                  <ProductSidebar categories={categories} />
                </div>
                <div className="sidebar__item">
                  <PriceSlider priceHandler={priceHandler} />
                </div>
                <div className="sidebar__item">
                  <ProductSwiper />
                </div>
              </div>

            </div>
            <div className="col-lg-9 col-md-7">
              <div class="filter__item">
                <div class="row">
                  <div class="col-lg-4 col-md-5">
                    <div class="filter__sort">
                      <span>Sort By</span>
                      <select onChange={handleFilters} style={{ background: "transparent", border: "none" }}>
                        {
                          categories && categories.map((category) => {
                            return <option value={category.category} key={category._id}>{category.category}</option>
                          })
                        }
                      </select>
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-4">
                    <div class="filter__found">
                      <h6><span>{numberOfProducts}</span> Products found</h6>
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-3">
                    <div class="filter__option">
                      <span class="icon_grid-2x2"></span>
                      <span class="icon_ul"></span>
                    </div>
                  </div>
                </div>
              </div>
              <ProductTable filters={filter} setNumberOfProducts={setNumberOfProducts}/>
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
