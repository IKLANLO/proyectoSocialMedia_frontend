import postsService from './postsService';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  posts: [],
  isLoading: false,
  post: {},
}

export const getAll = createAsyncThunk('posts/getAll', async () => {
  try {
    return await postsService.getAll()
  } catch (error) {
    console.error(error);
  }
})

export const getById = createAsyncThunk('posts/getById', async (id) => {
  try {
    return await postsService.getById(id)
  } catch (error) {
    console.error(error);
  }
})

export const newPost = createAsyncThunk('posts/newPost', async (data) => {
  try {
    return await postsService.newPost(data)
  } catch (error) {
    console.error(error)
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
    .addCase(getById.fulfilled, (state, action) => {
      state.post = action.payload
    })
    .addCase(newPost.fulfilled, (state, action) => {
      console.log('action.payload', action.payload)
      state.posts.push(action.payload)
    })
  }
})

export const { reset } = postsSlice.actions
export default postsSlice.reducer