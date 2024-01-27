import api from "@/api/api";

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// seller signup
export const productAdd = createAsyncThunk(
  "product/productAdd",
  async (
    product,
    { rejectWithValue, fulfillWithValue }
  ) => {
    try {
      
      const { data } = await api.post("/product-add", product, {
        withCredentials: true,
      });

      console.log(data);
      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const productGet = createAsyncThunk(
  "product/productGet",
  async (
    { parPage, page, searchValue },
    { rejectWithValue, fulfillWithValue }
  ) => {
    try {
      const { data } = await api.get(
        `/product-get?page=${page}&&searchValue=${searchValue}&&parPage=${parPage}`,
        {
          withCredentials: true,
        }
      );

      console.log(data);
      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const productReducer = createSlice({
  name: "product",
  initialState: {
    successMessage: "",
    errorMessage: "",
    loader: false,
    products: [],
    totalproducts: 0,
  },

  reducers: {
    messageClear: (state) => {
      state.errorMessage = "";
      state.successMessage = "";
    },
  },

  extraReducers: {
    // admin login
    [productAdd.pending]: (state) => {
      state.loader = true;
    },
    [productAdd.fulfilled]: (state, { payload }) => {
      state.loader = false;
      state.successMessage = payload.message;
    },
    [productAdd.rejected]: (state, { payload }) => {
      state.loader = false;
      state.errorMessage = payload?.error;
    },

    [productGet.fulfilled]: (state, { payload }) => {
      state.totalproduct = payload.totalproduct;
      state.products = payload.products;
    },
  },
});

export const { messageClear } = productReducer.actions;
export default productReducer.reducer;
