import { createSlice } from "@reduxjs/toolkit";
import {
  fetchSearchFilms,
  fetchPossibleFilm,
} from "@/shared/api/searchFilmsApi";

interface SearchFilms{
   possibleFilms:Array<any[]> | null
   searchFilms:Array<any[]> | null
   searchFilmsStatus:'loading' | 'idle' | 'error',
   possibleFilmsStatus:'loading' | 'idle' | 'error',
   searchText:string
}

const initialState:SearchFilms = {
  possibleFilms: null,
  searchFilms: null,
  searchFilmsStatus: "loading",
  possibleFilmsStatus:'loading',
  searchText:'',
};

export const searchFilmsSlice = createSlice({
  name: "searchFilms",
  initialState,
  reducers: {
    onChangeSearchText:(state,action) => {
      state.searchText = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSearchFilms.pending, (state) => {
      state.searchFilmsStatus = "loading";
    }),
      builder.addCase(fetchSearchFilms.fulfilled, (state, action) => {
        state.searchFilmsStatus = "idle";
        state.searchFilms = action.payload.films
      }),
      builder.addCase(fetchSearchFilms.rejected, (state) => {
        state.searchFilmsStatus = "error";
      }),
      builder.addCase(fetchPossibleFilm.pending,(state)=>{
        state.possibleFilmsStatus = 'loading'
      })
      builder.addCase(fetchPossibleFilm.fulfilled, (state, action) => {
        state.possibleFilmsStatus = 'idle'
        state.possibleFilms = action.payload.items
      });
      builder.addCase(fetchPossibleFilm.rejected,(state)=>{
        state.possibleFilmsStatus = 'error'
      })
  },
});

export const {onChangeSearchText} = searchFilmsSlice.actions;
export default searchFilmsSlice.reducer;
