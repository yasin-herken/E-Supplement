import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector,useDispatch } from "react-redux";
import { Card } from "react-bootstrap";
import {deleteProductArray, updateQuantity, updateTotal} from "../../redux/cartRedux";

const ProductCard = (props) => {
  const user = useSelector((state) => state.user.currentUser);

  const [val, setVal] = useState(props.quantity);
  const [product, setProduct] = useState({});
  const [cart, setCart] = useState({});
  const cart2 = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  var price = parseFloat(product.price);
  price = price.toFixed(2);
  var total = price * val;
  total = total.toFixed(2);

  const getCard = async () => {
    try {
      const res = await axios.get(
        `http://localhost:5000/api/carts/find/${user?.user._id}`
      );

      setCart(res.data);
      console.log(user?.user._id);
      console.log(res.data);
      console.log(cart2.products);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCard();
  }, [user]);

  /*const updateCard = async (product) => {
    //await getCard();
    console.log(cart?._id);
    console.log(cart);

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
  };*/

  useEffect(() => {
    const getProduct = async (id) => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/products/find/${id}`
        );

        setProduct(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getProduct(props.productId);
  }, [props.productId]);

  const inputHandler = (e) => {
    const value = e.target.value.replace(/[^\d]/, "");

    if (+value !== 0) {
      setVal(value);
    }
  };

  useEffect(() => {
   /* const newArray = cart2.products?.map((obj) => {
      if (obj.productId === props.productId) {
        return { ...obj, quantity: val };
      }

      return obj;
    });
    cart.products = newArray;*/
    /* updateCard(cart);*/
    //setCart(cart);

    dispatch(updateQuantity({id :props.productId,quantity : val}))
    dispatch(updateTotal)
  }, [val]);

  const deleteProduct = () => {
   // const updatedProducts = cart.products?.filter(
   //   (item) => item.productId !== props.productId
   // );
   // console.log(updatedProducts);
   // cart.products = updatedProducts;
   // updateCard(cart);
   // setCart(cart);

    dispatch(deleteProductArray(props.productId))
    console.log(cart2)
    window.location.reload(false);
  };

  return (
    <>{user ? <tr>
      <td className="shoping__cart__item">
        <img src={props.imgPath} alt="" />
        <h5>{product.title}</h5>
      </td>
      <td className="shoping__cart__price">
        $ {parseFloat(product.price).toFixed(2)}
      </td>
      <td className="shoping__cart__quantity">
        <div className="quantity">
          <div className="pro-qty">
            <input
              type="number"
              min="0"
              max="5000"
              value={val}
              onChange={inputHandler}
            />
          </div>
        </div>
      </td>
      <td className="shoping__cart__total">$ {total}</td>
      <td className="shoping__cart__item__close">
        <button className="icon_close" onClick={deleteProduct} />
      </td>
    </tr>: <div> PLEASE LOG IN</div>}
      
    </>
  );
};

export default ProductCard;
