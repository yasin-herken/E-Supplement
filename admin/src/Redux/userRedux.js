import { createSlice } from "@reduxjs/toolkit";
let initialState = {
  user: {},
  isFetching: false,
  error: false
}
const userSlice = createSlice({
  name: "user",
  initialState
  ,
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.user = action.payload;
    },
    loginFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    logout: (state) => {
      console.log("here")
      state.user = null;
    },
  },
});

export const { loginStart, loginSuccess, loginFailure, logout } = userSlice.actions;

export const selectUser = (state)=>state.user;

export default userSlice.reducer;