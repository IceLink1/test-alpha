import { createAsyncThunk } from "@reduxjs/toolkit";

export const API =
  "https://c1417e44-5b01-4d62-a359-51933bbbd473.us-east-1.cloud.genez.io/api";

export const fetchProducts = createAsyncThunk("/product", async () => {
  try {
    const products = await fetch(API, {
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

export const createProduct = createAsyncThunk(
  "/product/crate",
  async (data: any) => {
    try {
      const products = await fetch(API, {
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
  }
);

export const fetchProductsById = createAsyncThunk(
  "/product/id",
  async (id: string) => {
    try {
      const products = await fetch(`${API}/${id}`, {
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
