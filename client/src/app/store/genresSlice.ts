import { genresApi } from "@/shared/api/genresApi";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    genresFilms:[],
    genresStatus:"idle",
    raiting:10,
    years:new Date().getFullYear(),
    activeGenres:''
}

export const genresSlice = createSlice({
    name:'genres',
    initialState,
    reducers:{
        chooseGenresFilm:(state,action)=>{
            state.activeGenres = action.payload
        },
        chooseRaiting:(state,action)=>{
            state.raiting = action.payload
        },
        chooseYears:(state,action)=>{
            state.years = action.payload
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(genresApi.pending,(state)=>{
             state.genresStatus = 'loading'
        }),
        builder.addCase(genresApi.fulfilled,(state,action)=>{
            state.genresFilms = action.payload.flatMap((response) => response.items);
            state.genresStatus = 'idle'
        })
    }
})

export const {chooseGenresFilm,chooseRaiting,chooseYears} = genresSlice.actions
export default genresSlice.reducer