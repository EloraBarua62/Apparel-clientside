import api from '@/api/api'
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'


export const adminLogin = createAsyncThunk("auth/adminLogin" , async(info, {rejectWithValue, fulfillWithValue} ) => {
    try{

      const {data} = await api.post('/admin-login' , info , {withCredentials: true})
      localStorage.setItem('accessToken' , data.token);
      return fulfillWithValue(data);
    }
    catch(error){
        return rejectWithValue(error.response.data)
    }
})

export const authReducer = createSlice({
    name: 'auth',
    initialState: {
        successMessage: '',
        errorMessage: '',
        loader: false,
        userInfo: ''
    },

    reducers: {
        messageClear : (state) => {
          state.errorMessage = ""
          state.successMessage = ""
        }
    },

    extraReducers: {
      [adminLogin.pending] : (state) => {
        state.loader = true
      },

      [adminLogin.fulfilled] : (state, {payload}) => {
        state.loader = false
        // console.log(action.payload)
        state.successMessage = payload.message
      },
      [adminLogin.rejected] : (state, {payload}) => {
        state.loader = false
        // console.log(action.payload)
        state.errorMessage = payload.error
      },


    }
})

export const { messageClear } = authReducer.actions;
export default authReducer.reducer;

