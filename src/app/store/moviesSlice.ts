import { createSlice } from "@reduxjs/toolkit";
import { onGetMoviesList } from "@/shared/api/moviesApi";

const initialState: any = {
  moviesCarouselList: null,
};

export const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(onGetMoviesList.fulfilled, (state, action) => {
      state.moviesCarouselList = action.payload;
    });
  },
});

export const {} = moviesSlice.actions;
export default moviesSlice.reducer;
