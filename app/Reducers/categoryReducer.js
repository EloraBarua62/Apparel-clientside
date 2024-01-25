import api from "@/api/api";

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// seller signup
export const categoryAdd = createAsyncThunk(
  "category/categoryAdd",
  async ({ category, sub_category, image },{ rejectWithValue, fulfillWithValue }) => {
    try {
      const formData = new FormData();
      formData.append('category', category);
      formData.append('sub_category', sub_category);
      formData.append('image', image);
      
      const { data } = await api.post("/category-add", formData, {
        withCredentials: true,
      });

      console.log(data);
      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);


export const categoryGet = createAsyncThunk(
  "category/categoryGet",
  async (
    { parPage, page, searchValue },
    { rejectWithValue, fulfillWithValue }
  ) => {
    try {
      const { data } = await api.get(
        `/category-get?page=${page}&&searchValue=${searchValue}&&parPage=${parPage}`,
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

export const categoryReducer = createSlice({
  name: "category",
  initialState: {
    successMessage: "",
    errorMessage: "",
    loader: false,
    categories: [],
  },

  reducers: {
    messageClear: (state) => {
      state.errorMessage = "";
      state.successMessage = "";
    },
  },

  extraReducers: {
    // admin login
    [categoryAdd.pending]: (state) => {
      state.loader = true;
    },
    [categoryAdd.fulfilled]: (state, { payload }) => {
      state.loader = false;
      state.successMessage = payload.message;     
    },
    [categoryAdd.rejected]: (state, { payload }) => {
      state.loader = false;
      state.errorMessage = payload?.error;
    },
  },
});

export const { messageClear } = categoryReducer.actions;
export default categoryReducer.reducer;
