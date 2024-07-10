import { configureStore } from "@reduxjs/toolkit";
import moviesSlice  from "./moviesSlice";
import searchFilmsSlice  from "./searchFilmsSlice";
import moviesPageSlice from "./moviesPageSlice";
import showsPageSlice from "./showsPageSlice";
import  authSlice from "./AuthSlice";

export const store = configureStore({
  reducer: {
    moviesSlice,
    searchFilmsSlice,
    moviesPageSlice,
    showsPageSlice,
    authSlice
  },
});

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
