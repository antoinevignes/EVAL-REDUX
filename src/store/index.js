import { configureStore } from "@reduxjs/toolkit";
import postSlice from "./slice/postSlice.js";

const store = configureStore({
  reducer: { posts: postSlice },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([]),
});

export default store;
