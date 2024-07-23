import { createSlice } from "@reduxjs/toolkit";
import {
  onGetMoviesAndShowById,
  onGetStaffById,
} from "@/shared/api/moviesApiById";
import { onGetShowEpisodeById } from "@/shared/api/showsApiById";

const initialState: any = {
  staffShows: [],
  staffShowsStatus: "loading",
  showsInfoStatus: "loading",
  showsInfo: [],
  dataAboutEpisode: [],
  dataAboutEpisodeStatus: "loading",
};

export const showsPageSlice = createSlice({
  name: "showsPageSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(onGetMoviesAndShowById.pending, (state) => {
      state.showsInfoStatus = "loading";
    }),
      builder.addCase(onGetMoviesAndShowById.fulfilled, (state, action) => {
        state.showsInfo = action.payload;
        state.showsInfoStatus = "idle";
      });
    builder.addCase(onGetShowEpisodeById.pending, (state) => {
      state.dataAboutEpisodeStatus = "loading";
    }),
      builder.addCase(onGetShowEpisodeById.fulfilled, (state, action) => {
        state.dataAboutEpisodeStatus = "idle",
        state.dataAboutEpisode = action.payload.items
      });
    builder.addCase(onGetStaffById.pending, (state) => {
      state.staffShowsStatus = "loading";
    }),
      builder.addCase(onGetStaffById.fulfilled, (state, action) => {
        state.staffShows = action.payload;
        state.staffShowsStatus = "idle";
      });
  },
});

export const {} = showsPageSlice.actions;
export default showsPageSlice.reducer;
