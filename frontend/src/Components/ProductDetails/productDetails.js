import React, { useState, useEffect } from "react";
import { A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import product1 from "../../assets/img/product/product-1.jpg";
import product2 from "../../assets/img/product/product-2.jpg";
import product3 from "../../assets/img/product/product-3.jpg";
import product4 from "../../assets/img/product/product-4.jpg";
import { useSelector,useDispatch } from "react-redux";
import axios from "axios";
import { addProduct, updateProductArray } from "../../redux/cartRedux";

const ProductDetails = (props) => {
  const user = useSelector((state) => state.user.currentUser);
  const cart2 = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  var bool = false;

  const [img, setImg] = useState(product1);
  const [input, setInput] = useState(0);
  const [cart, setCart] = useState({});
  const [newProduct, setNewProduct] = useState({ quantity: 1, productId: "",price :0});


  const swipeHandler = (e) => {
    setImg(e.target.src);
  };

  const inputHandler = (e) => {
    const value = e.target.value.replace(/[^\d]/, "");

    if (+value !== 0) {
      setInput(value);
    }
  };

  useEffect(() => {
    setNewProduct({ quantity: input, productId: props.product._id ,price : props.product.price});
  }, [input]);

  useEffect(() => {
    //console.log("hi")
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

  const updateCard = async (product) => {
    try {
      const res = await axios.put(
        `http://localhost:5000/api/carts/${cart?._id}`,
        product
      );

      console.log(res.data);
      setCart(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const addCartHandler = () => {
    cart.products.push(newProduct);

    const result = cart.products
      ?.map((item, i, array) => {
        const defaultValue = {
          productId: item.productId,
          quantity: 0,
          price : item.price,
        };
     //   console.log(item.productId)
        const finalValue = array
          .filter((other) => other.productId === item.productId) //we filter the same items
          .reduce((prevVal, currentVal) => {
            //we reduce them into a single entry
          //  console.log(prevVal.quantity + currentVal.quantity , "prevVal ++ ")
            prevVal.quantity = prevVal.quantity + parseInt(currentVal.quantity);
           // console.log(prevVal.quantity , "prevVal")
           // console.log(currentVal.quantity , "currentVal")
            

            return prevVal;
          }, defaultValue);

        return finalValue;
      })
      .filter((item, thisIndex, array) => {
        //now our new array has duplicates, lets remove them
        const index = array.findIndex(
          (otherItem, otherIndex) =>
            otherItem.productId === item.productId &&
            otherIndex !== thisIndex &&
            otherIndex > thisIndex
        );

        return index === -1;
      });

    console.log(result);
 

    cart.products = result;
    
    ///dispatch(updateProductArray(result))
    dispatch(addProduct(newProduct))
    updateCard(cart);

  };

  const addFavorite = () => {
    //favorites.push(props.productId)

  };

  return (
    <section className="product-details spad">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <div className="product__details__pic">
              <div className="product__details__pic__item">
                <img
                  className="product__details__pic__item--large"
                  src={img}
                  alt=""
                />
              </div>
              <Swiper
                className="product__details__pic__slider owl-carousel"
                spaceBetween={20}
                modules={[Autoplay, A11y]}
                autoHeight={false}
                speed={1200}
                loop="true"
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                slidesPerView={4}
              >
                <SwiperSlide className="swiper-image">
                  <img
                    data-imgbigurl={product2}
                    src={product2}
                    alt=""
                    onClick={swipeHandler}
                  ></img>
                </SwiperSlide>
                <SwiperSlide className="swiper-image">
                  <img
                    data-imgbigurl={product3}
                    src={product3}
                    alt=""
                    onClick={swipeHandler}
                  ></img>
                </SwiperSlide>
                <SwiperSlide className="swiper-image">
                  <img
                    data-imgbigurl={product4}
                    src={product4}
                    alt=""
                    onClick={swipeHandler}
                  ></img>
                </SwiperSlide>
                <SwiperSlide className="swiper-image">
                  <img
                    data-imgbigurl={product1}
                    src={product1}
                    alt=""
                    onClick={swipeHandler}
                  ></img>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="product__details__text">
              <h3>{props.product.title}</h3>
              <div className="product__details__rating">
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star-half-o" />
                <span>(18 reviews)</span>
              </div>
              <div className="product__details__price">
                $ {parseInt(props.product.price).toFixed(2)}
              </div>
              <p>{props.product.shortDesc}</p>
              <div className="product__details__quantity">
                <div className="quantity">
                  <div className="pro-qty">
                    <input
                      type="number"
                      min={0}
                      //defaultValue={1}
                      value={input}
                      onChange={inputHandler}
                      //  onKeyPress={preventMinus}
                    />
                  </div>
                </div>
              </div>
              <button
                onClick={addCartHandler}
                className="btnn fourth"
                disabled={user === null}
              >
                ADD TO CARD
              </button>

              <button href="#" className="heart-icon" onClick={addFavorite}>
                {bool ? (
                  <span className="icon_heart_alt" style={{ color: "red" }} />
                ) : (
                  <span className="icon_heart" style={{ color: "red" }} />
                )}
              </button>
              <ul>
                <li>
                  <b>Availability </b>{" "}
                  <span>
                    {props.product.inStock ? "In Stock" : "Not available"}
                  </span>
                </li>
                <li>
                  <b>Categories </b>{" "}
                  {props.product.categories?.map((item) => (
                    <span>
                      {item} <samp> ,</samp>
                    </span>
                  ))}
                </li>

                <li>
                  <b>Share on</b>
                  <div className="share">
                    <a href="#">
                      <i className="fa fa-facebook" />
                    </a>
                    <a href="#">
                      <i className="fa fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fa fa-instagram" />
                    </a>
                    <a href="#">
                      <i className="fa fa-pinterest" />
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="product__details__tab">
              <ul className="nav nav-tabs" role="tablist">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    data-toggle="tab"
                    href="#tabs-1"
                    role="tab"
                    aria-selected="true"
                  >
                    Description
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    data-toggle="tab"
                    href="#tabs-2"
                    role="tab"
                    aria-selected="false"
                  >
                    Information
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    data-toggle="tab"
                    href="#tabs-3"
                    role="tab"
                    aria-selected="false"
                  >
                    Reviews <span>(1)</span>
                  </a>
                </li>
              </ul>
              <div className="tab-content">
                <div className="tab-pane active" id="tabs-1" role="tabpanel">
                  <div className="product__details__tab__desc">
                    <h6>Products Infomation</h6>
                    <p>{props.product.desc}</p>
                  </div>
                </div>
                <div className="tab-pane" id="tabs-2" role="tabpanel">
                  <div className="product__details__tab__desc">
                    <h6>Usage</h6>
                    <p>{props.product.usage}</p>
                  </div>
                </div>
                <div className="tab-pane" id="tabs-3" role="tabpanel">
                  <div className="product__details__tab__desc">
                    <h6>Product Reviews</h6>
                    <p></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
