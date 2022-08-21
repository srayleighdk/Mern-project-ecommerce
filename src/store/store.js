import { configureStore } from "@reduxjs/toolkit";

import productReducer from "./features/product/productSlice";
import productDetailsReducer from "./features/product/productDetailsSlice";

const store = configureStore({
  reducer: {
    product: productReducer,
    productDetails: productDetailsReducer,
  },
});

export default store;
