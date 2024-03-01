import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import authService from './authService';

const initialState = {
  user: null,
  token: null,
  isError: false,
  isSuccess: false,
  message: ''
}

export const register = createAsyncThunk('auth/register', async (user, thunkAPI) => {
  try {
    return await authService.register(user)
    
  } catch (error) {
    console.error(error);
    const message = error.response.data.message
    return thunkAPI.rejectWithValue(message)
  }
})

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.isSuccess = true
        state.message = action.payload.message
      })
      .addCase(register.rejected, (state, action) => {
        state.isError = true
        state.message = action.payload
      })
  }
})

export default authSlice.reducer