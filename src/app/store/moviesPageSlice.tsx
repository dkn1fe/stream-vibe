import { createSlice } from "@reduxjs/toolkit";
import { onGetMoviesById, onGetStaffById } from "@/shared/api/moviesApiById";

const initialState: any = {
  staffMovies: [],
  staffMoviesStatus: "loading",
  moviesInfoStatus: "loading",
  moviesInfo: [],
};

export const moviesPageSlice = createSlice({
  name: "moviesPageSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(onGetMoviesById.pending, (state) => {
      state.moviesInfoStatus = "loading"
    }),
      builder.addCase(onGetMoviesById.fulfilled, (state, action) => {
        state.moviesInfo = action.payload 
        state.moviesInfoStatus = "idle"
      })
    builder.addCase(onGetStaffById.pending, (state) => {
      state.staffMoviesStatus = "loading";
    }),
      builder.addCase(onGetStaffById.fulfilled, (state, action) => {
        state.staffMovies = action.payload
        state.staffMoviesStatus = "idle"
      })
  }
})

export const {} = moviesPageSlice.actions
export default moviesPageSlice.reducer
