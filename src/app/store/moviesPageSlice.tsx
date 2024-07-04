import { createSlice } from "@reduxjs/toolkit";
import { onGetMoviesAndShowById, onGetStaffById } from "@/shared/api/moviesApiById";

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
    builder.addCase(onGetMoviesAndShowById.pending, (state) => {
      state.moviesInfoStatus = "loading"
    }),
      builder.addCase(onGetMoviesAndShowById.fulfilled, (state, action) => {
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
