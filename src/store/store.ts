import { configureStore } from "@reduxjs/toolkit";
import postReducer from "../store/post/postSlice";
import usersReducer from "../store/users/userSlice";

export const store = configureStore({
  reducer: {
    posts: postReducer,
    users: usersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
