import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import authService from './authService';

const initialState = {
  user: null,
  token: null
}

export const register = createAsyncThunk('auth/register', async (user) => {
  try {
    return await authService.register(user)
  } catch (error) {
    console.error(error);
  }
  console.log('desde el store', user);
})

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {}
})

export default authSlice.reducer