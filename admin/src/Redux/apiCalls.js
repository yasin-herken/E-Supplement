import { loginFailure, loginStart, loginSuccess } from "./userRedux.js";
import { publicRequest, userRequest } from "../requestMethod.js";
import {
    getProductFailure,
    getProductStart,
    getProductSuccess,
    deleteProductFailure,
    deleteProductStart,
    deleteProductSuccess,
    updateProductFailure,
    updateProductStart,
    updateProductSuccess,
    addProductFailure,
    addProductStart,
    addProductSuccess,
  } from "./productRedux";
  export const login = (user) =>async (dispatch) => {
    console.log("LoginStart")
    dispatch(loginStart());
    try {
      console.log("Login request to the database")
      const res = await publicRequest.post("/auth/login", user);
      console.log(res.data)
      dispatch(loginSuccess(res.data));
      console.log("Successfull")
    } catch (err) {
      dispatch(loginFailure());
      console.log(err)
    }
  };
  export const logout = () => (dispatch) => {
    dispatch({
      type: "RESET"
    })
  }
  export const getProducts = async (dispatch) => {
    dispatch(getProductStart());
    try {
      const res = await publicRequest.get("/products/all");
      console.log("apiCalls")
      dispatch(getProductSuccess(res.data));
    } catch (err) {
      dispatch(getProductFailure());
    }
  };

  export const deleteProduct = async (id, dispatch) => {
    dispatch(deleteProductStart());
    try {
      // const res = await userRequest.delete(`/products/${id}`);
      dispatch(deleteProductSuccess(id));
    } catch (err) {
      dispatch(deleteProductFailure());
    }
  };

  export const updateProduct = async (id, product, dispatch) => {
    dispatch(updateProductStart());
    try {
      // update
      dispatch(updateProductSuccess({ id, product }));
    } catch (err) {
      dispatch(updateProductFailure());
    }
  };

  export const addProduct = async (product, dispatch) => {
    dispatch(addProductStart());
    try {
      const res = await userRequest.post(`/products`, product);
      dispatch(addProductSuccess(res.data));
    } catch (err) {
      dispatch(addProductFailure());
    }
  };