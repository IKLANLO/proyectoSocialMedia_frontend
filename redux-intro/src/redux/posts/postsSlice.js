import postsService from './postsService';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  posts: [],
  isLoading: false,
}

export const getAll = createAsyncThunk('posts/getAll', async () => {
  try {
    return await postsService.getAll()
  } catch (error) {
    console.error(error);
  }
})

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false
    }
  },
  extraReducers: (builder) => {
    builder
    .addCase(getAll.fulfilled, (state, action) => {
      state.posts = action.payload
    })
    .addCase(getAll.pending, (state) => {
      state.isLoading = true
    })
  }
})

export const { reset } = postsSlice.actions
export default postsSlice.reducer