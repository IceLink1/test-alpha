import { createSlice } from "@reduxjs/toolkit";
import {
  createProduct,
  fetchProducts,
  fetchProductsById,
} from "./ProductsAction";
import { Product } from "../../models/Product.model";

const initialState = {
  products: [] as Product[],
  loading: false,
  error: "",
};

export const ProductSlice = createSlice({
  name: "Product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        if (action.payload) {
          state.products = action.payload;
          state.loading = false;
        }
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "";
      })

      .addCase(fetchProductsById.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchProductsById.fulfilled, (state, action) => {
        if (action.payload) {
          state.products = [action.payload];
          state.loading = false;
        }
      })
      .addCase(fetchProductsById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "";
      })

      .addCase(createProduct.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(createProduct.fulfilled, (state, action) => {
        if (action.payload) {
          state.products = [...state.products, action.payload];
          state.loading = false;
        }
      })
      .addCase(createProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "";
      });
  },
});

export const {} = ProductSlice.actions;

export default ProductSlice.reducer;
