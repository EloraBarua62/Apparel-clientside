import api from "@/api/api";
import jwt from "jwt-decode";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


// seller signup
export const adminSignup = createAsyncThunk(
  "auth/adminSignup",
  async (info, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await api.post("/admin-signup", info, {
        withCredentials: true,
      });
      console.log(data);
      localStorage.setItem("accessToken", data.token);
      return fulfillWithValue(data);
    } catch (error) {
      console.log(error.response.data);
      return rejectWithValue(error.response.data);
    }
  }
);


// admin login function
export const adminLogin = createAsyncThunk(
  "auth/adminLogin",
  async (info, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await api.post("/admin-login", info, {
        withCredentials: true,
      });
      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// seller login function
export const sellerLogin = createAsyncThunk(
  "auth/sellerLogin",
  async (info, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await api.post("/seller-login", info, {
        withCredentials: true,
      });
      const name = data.userInfo.name;
      const email = data.userInfo.email;
      const password = data.userInfo.password;
      localStorage.setItem("accessToken", data.token);
      localStorage.setItem("userInfo", JSON.stringify({ name, email }));
      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// seller signup
export const sellerSignup = createAsyncThunk(
  "auth/sellerSignup",
  async (info, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await api.post("/seller-signup", info, {
        withCredentials: true,
      });
      console.log(data);
      localStorage.setItem("accessToken", data.token);
      return fulfillWithValue(data);
    } catch (error) {
      console.log(error.response.data);
      return rejectWithValue(error.response.data);
    }
  }
);

// get user info
export const getUserInfo = createAsyncThunk(
  "auth/getUserInfo",
  async (_, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await api.post("/get-info", {
        withCredentials: true,
      });
      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const returnRole = () => {
  let token_string = '';
  if (typeof window !== "undefined") {
    token_string = localStorage.getItem("accessToken");
    if (token_string?.length > 0) {
      const decodeToken = jwt(token_string);
      const expireTime = new Date(decodeToken.exp * 1000);

      if (new Date() > expireTime) {
        localStorage.removeItem("accessToken");
        return "";
      } else return decodeToken.role;
    } else return "";
   }    
  else
    return "";
};

export const authReducer = createSlice({
  name: "auth",
  initialState: {
    successMessage: "",
    errorMessage: "",
    loader: false,
    userInfo: "",
    role: returnRole(),
    token: "",
  },

  reducers: {
    messageClear: (state) => {
      state.errorMessage = "";
      state.successMessage = "";
    },
  },

  extraReducers: {
    // admin signup
    [adminSignup.pending]: (state) => {
      state.loader = true;
    },
    [adminSignup.fulfilled]: (state, { payload }) => {
      state.loader = false;
      state.successMessage = payload.message;
    },
    [adminSignup.rejected]: (state, { payload }) => {
      state.loader = false;
      state.errorMessage = payload.error;
    },

    // admin login
    [adminLogin.pending]: (state) => {
      state.loader = true;
    },
    [adminLogin.fulfilled]: (state, { payload }) => {
      state.loader = false;
      state.successMessage = payload.message;
      state.token = payload.token;
      state.role = returnRole();
    },
    [adminLogin.rejected]: (state, { payload }) => {
      state.loader = false;
      state.errorMessage = payload.error;
    },

    // seller login
    [sellerLogin.pending]: (state) => {
      state.loader = true;
    },
    [sellerLogin.fulfilled]: (state, { payload }) => {
      state.loader = false;
      state.successMessage = payload.message;
      state.token = payload.token;
      state.role = returnRole();
    },
    [sellerLogin.rejected]: (state, { payload }) => {
      state.loader = false;
      state.errorMessage = payload.error;
    },

    // seller signup
    [sellerSignup.pending]: (state) => {
      state.loader = true;
    },
    [sellerSignup.fulfilled]: (state, { payload }) => {
      state.loader = false;
      state.successMessage = payload.message;
    },
    [sellerSignup.rejected]: (state, { payload }) => {
      state.loader = false;
      state.errorMessage = payload.error;
    },

    [getUserInfo.fulfilled]: (state, { payload }) => {
      state.loader = false;
      state.userInfo = payload.userInfo;
    },
  },
});

export const { messageClear } = authReducer.actions;
export default authReducer.reducer;
