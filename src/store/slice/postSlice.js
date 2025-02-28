/* eslint-disable react-hooks/rules-of-hooks */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import useApi from "../../service/api.service";

const api = useApi();

export const fetchPosts = createAsyncThunk(
  "posts/fetchPosts",
  async (_, thunkAPI) => {
    return (await api.fetchPosts()).data;
  }
);

export const fetchComments = createAsyncThunk(
  "posts/fetchComments",
  async (postId, thunkAPI) => {
    return (await api.fetchComments(postId)).data;
  }
);

const initialState = {
  posts: [],
  post: {},
  comments: [],
  comment: {},
};

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addComment(state, action) {
      state.comment = action.payload;
      state.comments.push(state.comment);
      state.comment = {};
    },
    addPost(state, action) {
      state.post = action.payload;
      state.posts.push(state.post);
      state.post = {};
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.posts = action.payload;
      })
      .addCase(fetchComments.fulfilled, (state, action) => {
        state.comments = action.payload;
      });
  },
});

export const { addComment, addPost } = postSlice.actions;

export default postSlice.reducer;
