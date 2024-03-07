import postsService from './postsService';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  posts: [],
  userPosts: [],
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

export const getByUser = createAsyncThunk('posts/getByUser', async (id) => {
  try {
    return await postsService.getByUser(id)
  } catch (error) {
    console.error(error)
  }
})

export const newPost = createAsyncThunk('posts/newPost', async (data) => {
  try {
    return await postsService.newPost(data)
  } catch (error) {
    console.error(error)
  }
})

export const deletePost = createAsyncThunk('posts/deletePost', async (data) => {
  try {
    return await postsService.deletePost(data)
  } catch (error) {
    console.error(error)
  }
})

export const putPost = createAsyncThunk('posts/putPost', async (data) => {
  try {
    return await postsService.putPost(data)
  } catch (error) {
    console.error(error)
  }
})

export const putLike = createAsyncThunk('posts/putLike', async (data) => {
  try {
    return await postsService.putLike(data)
  } catch (error) {
    console.error(error)
  }
})

export const deleteLike = createAsyncThunk('posts/deleteLike', async (data) => {
  try {
    return await postsService.deleteLike(data)
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
    .addCase(getByUser.fulfilled, (state, action) => {
      state.userPosts = action.payload
    })
    .addCase(newPost.fulfilled, (state, action) => {
      state.posts.push(action.payload)
    })
    .addCase(deletePost.fulfilled, (state, action) => {
      state.posts = state.posts.filter((post) => post._id !== action.meta.arg.id)
    })
    .addCase(putPost.fulfilled, (state, action) => {
      state.post = action.payload.post
    })
    .addCase(putLike.fulfilled, (state, action) => {
      const posts = state.posts.map((post) => {
        if (post._id === action.payload._id) {
          post = action.payload.post
        }
        return post
      })
      state.posts = posts
    })
    .addCase(deleteLike.fulfilled, (state, action) => {
      const posts = state.posts.map((post) => {
        if (post._id === action.payload._id) {
          post = action.payload.post
        }
        return post
      })
      state.posts = posts
    })
  }
})

export const { reset } = postsSlice.actions
export default postsSlice.reducer