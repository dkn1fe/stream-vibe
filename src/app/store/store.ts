import { configureStore } from "@reduxjs/toolkit";
import moviesSlice  from "./moviesSlice";
import searchFilmsSlice  from "./searchFilmsSlice";

export const store = configureStore({
  reducer: {
    moviesSlice,
    searchFilmsSlice
  },
});

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
