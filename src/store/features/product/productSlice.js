import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getProduct = createAsyncThunk(
  "product/getProduct",
  async (params) => {
    const { keyword, page } = params;
    const { data } = await axios.get("/api/v1/products", {
      params: { keyword: keyword, page: page },
    });
    return data;
  }
);

export const productSlice = createSlice({
  name: "product",
  initialState: {},
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getProduct.pending, (state, action) => {
        return {
          loading: true,
          products: [],
        };
      })
      .addCase(getProduct.fulfilled, (state, action) => {
        return {
          loading: false,
          products: action.payload.products,
          productsCount: action.payload.productsCount,
          resultPerPage: action.payload.resultPerPage,
          filteredProductsCount: action.payload.filteredProductsCount,
          count: action.payload.count,
        };
      })
      .addCase(getProduct.rejected, (state, action) => {
        return {
          loading: false,
          error: action.payload,
        };
      });
  },
});

export default productSlice.reducer;
