import React, { useEffect, useState } from "react";

const ProductCard = (props) => {
  const [val, setVal] = useState(1);

  const handleChange = (event) => {
    setVal(event.target.value);
  };
  
  var price = parseFloat(props.productPrice);
  price = price.toFixed(2)
  var total = price * val;
  total = total.toFixed(2)  

  return (
    <tr>
      <td className="shoping__cart__item">
        <img src={props.imgPath} alt="" />
        <h5>{props.productName}</h5>
      </td>
      <td className="shoping__cart__price">${price}</td>
      <td className="shoping__cart__quantity">
        <div className="quantity">
          <div className="pro-qty">
            <input
              type="number"
              min="0" max="5000"
              defaultValue={val}
              onChange={handleChange}
            />
          </div>
        </div>
      </td>
      <td className="shoping__cart__total">${total}</td>
      <td className="shoping__cart__item__close">
        <span className="icon_close" />
      </td>
    </tr>
  );
};

export default ProductCard;

