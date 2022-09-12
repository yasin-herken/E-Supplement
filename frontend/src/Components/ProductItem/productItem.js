import React from "react";
import { useNavigate } from "react-router-dom";

const ProductItem = (props) => {
  var price = parseFloat(props.productPrice);
  price = price.toFixed(2);
  const navigate = useNavigate();
  console.log(props.productId)

  const handleProduct = (e) => {
    navigate(`/product-details/?category=${props.productId}`);
  };

  return (
    <>
      <div className="product__item">
        <div
          className="product__item__pic set-bg"
          style={{ backgroundImage: `url("${props.imgPath}")` }}
          onClick={handleProduct}
        >
          <ul className="product__item__pic__hover">
            <li>
              <a href="#">
                <i className="fa fa-heart"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-retweet"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-shopping-cart"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="product__item__text">
          <h6>
            <a href="#">{props.productName}</a>
          </h6>
          <h5>${price}</h5>
        </div>
      </div>
    </>
  );
};

export default ProductItem;
