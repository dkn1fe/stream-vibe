import { createSlice } from "@reduxjs/toolkit";
import { onGetMoviesStaff, onGetStaffById } from "@/shared/api/staffApiById";
import { StaffInfoTypes } from "@/shared/types/staffTypes";

const initialState = {
    staffInfo: null as StaffInfoTypes | null,
    staffInfoStatus: 'idle' as 'loading' | 'idle' | 'error',
    staffMovies: null as null | StaffInfoTypes,
    staffMoviesStatus: 'idle' as 'loading' | 'idle' | 'error'
}

export const staffSlice = createSlice({
    name: 'staff',
    initialState,
    reducers: {
        clearMoviesStaff: (state) => {
            state.staffMovies = null
        }
    },
    extraReducers: (builder) => {
        builder.addCase(onGetStaffById.pending, (state) => {
            state.staffInfoStatus = 'loading'
        }),
        builder.addCase(onGetStaffById.fulfilled, (state, action) => {
            state.staffInfo = action.payload
            state.staffInfoStatus = 'idle'
        })
        builder.addCase(onGetStaffById.rejected, (state) => {
            state.staffInfoStatus = 'error'
        })
        builder.addCase(onGetMoviesStaff.pending, (state) => {
            state.staffMoviesStatus = 'loading'
        })
        builder.addCase(onGetMoviesStaff.fulfilled, (state, action) => {
            state.staffMovies = action.payload
            state.staffMoviesStatus = 'idle'
        })
        builder.addCase(onGetMoviesStaff.rejected, (state) => {
            state.staffMoviesStatus = 'error'
        })
    }
})

export const { clearMoviesStaff } = staffSlice.actions
export default staffSlice.reducer