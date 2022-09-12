import React, { useEffect, useState } from "react";
import Cart1 from "../../assets/img/cart/cart-1.jpg";
import Cart2 from "../../assets/img/cart/cart-2.jpg";
import Cart3 from "../../assets/img/cart/cart-3.jpg";
import ProductCard from "./productCard";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { updateTotal } from "../../redux/cartRedux";

function ShopingCard() {
  const user = useSelector((state) => state.user.currentUser);
  const [cart, setCart] = useState({});
  const cart2 = useSelector((state) => state.cart);
  const dispatch = useDispatch();


  useEffect(() => {
 
    const getCard = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/carts/find/${user?.user._id}`
        );

        setCart(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getCard();
  }, [user]);

  useEffect(() => {
    dispatch(updateTotal);
  }, [cart2, dispatch]);

  /*This function saves the current cart to mongodb*/
  const saveDb = (e) => {
    const updateCard = async (product) => {
      try {
        const res = await axios.put(
          `http://localhost:5000/api/carts/${cart?._id}`,
          product
        );

        console.log(res);
        setCart(res.data);
      } catch (err) {
        console.log(err);
      }

     
    };
    updateCard(cart2);
    return ("<Alert severity='success'>This is a success alert — check it out!</Alert>")
  };

  return (
    <section className="shoping-cart spad">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="shoping__cart__table">
              <table>
                <thead>
                  <tr>
                    <th className="shoping__product">Products</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th />
                  </tr>
                </thead>
                <tbody>
                  {cart2?.products?.map((item) => (
                    <ProductCard
                      imgPath={Cart1}
                      productId={item.productId}
                      quantity={item.quantity}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-10">
            <div className="shoping__cart__btns">
              <a href="/shop" className="primary-btn cart-btn">
                CONTINUE SHOPPING
              </a>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="shoping__cart__btns">
              <button onClick={saveDb}  className="btnn fourth"
                disabled={user === null}>
                SAVE CARD
              </button>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="shoping__continue">
              <div className="shoping__discount">
                <h5>Discount Codes</h5>
                <form action="#">
                  <input type="text" placeholder="Enter your coupon code" />
                  <button type="submit" className="site-btn">
                    APPLY COUPON
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="shoping__checkout">
              <h5>Cart Total</h5>
              <ul>
                <li>
                  Total <span>${parseFloat(cart2.total).toFixed(2)}</span>
                </li>
              </ul>
              <a href="#" className="primary-btn">
                PROCEED TO CHECKOUT
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ShopingCard;
