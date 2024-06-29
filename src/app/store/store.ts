import { configureStore } from "@reduxjs/toolkit";
import moviesSlice  from "./moviesSlice";
import searchFilmsSlice  from "./searchFilmsSlice";
import moviesPageSlice from "./moviesPageSlice";

export const store = configureStore({
  reducer: {
    moviesSlice,
    searchFilmsSlice,
    moviesPageSlice
  },
});

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
