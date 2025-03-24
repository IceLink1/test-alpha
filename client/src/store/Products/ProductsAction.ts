import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk("/product", async () => {
  try {
    const products = await fetch("http://localhost:4000/api", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
    return products;
  } catch (error) {
    return console.log(error);
  }
});

export const createProduct = createAsyncThunk("/product/crate", async (data:any) => {
  try {
    const products = await fetch("http://localhost:4000/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => res.json());
    return products;
  } catch (error) {
    return console.log(error);
  }
});

export const fetchProductsById = createAsyncThunk(
  "/product/id",
  async (id: string) => {
    try {
      const products = await fetch(`http://localhost:4000/api/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => res.json());
      return products;
    } catch (error) {
      return console.log(error);
    }
  }
);
