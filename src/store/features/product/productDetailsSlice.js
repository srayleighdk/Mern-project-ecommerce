import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getProductDetails = createAsyncThunk(
  "productDetails/getproductDetails",
  async (id) => {
    const { data } = await axios.get(`/api/v1/product/${id}`);
    return data;
  }
);

export const productDetailsSlice = createSlice({
  name: "productDetails",
  initialState: {},
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getProductDetails.pending, (state, action) => {
        return {
          loading: true,
          products: [],
        };
      })
      .addCase(getProductDetails.fulfilled, (state, action) => {
        return {
          loading: false,
          product: action.payload.product,
        };
      })
      .addCase(getProductDetails.rejected, (state, action) => {
        return {
          loading: false,
          error: action.payload,
        };
      });
  },
});

export default productDetailsSlice.reducer;
