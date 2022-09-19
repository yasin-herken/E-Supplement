import React, { useEffect, useState } from 'react'
import featured1 from '../../assets/img/featured/feature-1.jpg';
import featured2 from '../../assets/img/featured/feature-2.jpg';
import featured3 from '../../assets/img/featured/feature-3.jpg';
import featured4 from '../../assets/img/featured/feature-4.jpg';
import featured5 from '../../assets/img/featured/feature-5.jpg';
import featured6 from '../../assets/img/featured/feature-6.jpg';
import featured7 from '../../assets/img/featured/feature-7.jpg';
import featured8 from '../../assets/img/featured/feature-7.jpg';
import { publicRequest } from '../../requestMethods';
import ProductItem from '../ProductItem/productItem';

function FeaturedProduct() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await publicRequest("/products/all");
        setProducts(res.data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchProducts()
  }, [])

  return (
    <section className="featured spad">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title">
              <h2>Featured Product</h2>
            </div>
            <div className="featured__controls">
              <ul>
                <li className="active" data-filter="*">
                  All
                </li>
                <li data-filter=".oranges">Oranges</li>
                <li data-filter=".fresh-meat">Fresh Meat</li>
                <li data-filter=".vegetables">Vegetables</li>
                <li data-filter=".fastfood">Fastfood</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row featured__filter">
          {
            products && products.map((product) => {
              return (
                <div className="col-lg-3 col-md-4 col-sm-6 mix fresh-meat" key={product._id}>
                  <ProductItem productId={product._id} imgPath={product.img} productName={product.title} productPrice={product.price} />
                </div>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

export default FeaturedProduct