import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1;
      console.log("redux");
      state.products.push(action.payload);
      state.total += action.payload.price * action.payload.quantity;

      const result = state.products
        ?.map((item, i, array) => {
          const defaultValue = {
            productId: item.productId,
            quantity: 0,
            price: item.price,
          };
          //   console.log(item.productId)
          const finalValue = array
            .filter((other) => other.productId === item.productId) //we filter the same items
            .reduce((prevVal, currentVal) => {
              //we reduce them into a single entry
              //  console.log(prevVal.quantity + currentVal.quantity , "prevVal ++ ")
              prevVal.quantity =
                prevVal.quantity + parseInt(currentVal.quantity);
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

      state.products = result;
    },

    deleteProductArray: (state, action) => {
      const deletedElement = state.products?.filter(
        (item) => item.productId === action.payload
      );
      const updatedProducts = state.products?.filter(
        (item) => item.productId !== action.payload
      );

      state.products = updatedProducts;
      console.log(deletedElement[0].price);
      state.total =
        state.total - deletedElement[0].price * deletedElement[0].quantity;
    },

    updateQuantity: (state, action) => {
      var oldQuantity;
      var price;
      // console.log(action.payload.quantity)
      const updatedElement = state.products?.map((item) => {
        if (item.productId === action.payload.id) {
          oldQuantity = item.quantity;
          price = item.price;
          return { ...item, quantity: action.payload.quantity };
        }

        return item;
      });

      //console.log(updatedElement)
      state.products = updatedElement;
      var totalPrice = 0.0;
      const x = state.products?.map((item) => {
        totalPrice = totalPrice + item.price * item.quantity;
        return item;
      });
      state.total = totalPrice;
      //state.total =
      //state.total + (action.payload.quantity - oldQuantity) * price;
    },

    updateTotal: (state) => {
      var totalPrice = 0.0;
      const updatedElement = state.products?.map((item) => {
        totalPrice = totalPrice + item.price * item.quantity;
      });

      console.log("total");
      state.total = totalPrice;
    },
  },
});

export const { addProduct, deleteProductArray, updateQuantity, updateTotal } =
  cartSlice.actions;
export default cartSlice.reducer;
