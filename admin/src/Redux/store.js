import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userReducer from "./userRedux";
import productReducer from "./productRedux";
import {
  persistStore,
  persistReducer,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const combinedReducer = combineReducers({
  user: userReducer,
  product: productReducer,
});
const rootReducer = (state, action) => {
  console.log("asdasds")
  if (action.type === 'RESET') {
    console.log("asd")
    state = undefined
  }
  return combinedReducer(state, action)
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

const Persistor = persistStore(store);
export {Persistor}
export default store;