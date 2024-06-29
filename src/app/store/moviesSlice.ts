import { createSlice } from '@reduxjs/toolkit'
import {
	onGetMoviesList,
	onGetTrendingMovies,
	onGetNewReleases,
	onGetMustWatchMovies,
	// onGetTrendingShows,
	// onGetNewReleasesShows,
	// onGetMustWatchShows,
} from '@/shared/api/moviesApi'

const initialState: any = {
	moviesCarouselList: null,
	trendingMovies: null,
	newReleases: null,
	mustWatchMovies: null,
	trendingShows: null,
	newReleasesShows: null,
	mustWatchShows: null,
}

export const moviesSlice = createSlice({
	name: 'movies',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder.addCase(onGetMoviesList.fulfilled, (state, action) => {
			state.moviesCarouselList = action.payload
		})

		// Movies
		builder.addCase(onGetTrendingMovies.fulfilled, (state, action) => {
			state.trendingMovies = action.payload
		})
		builder.addCase(onGetNewReleases.fulfilled, (state, action) => {
			state.newReleases = action.payload
		})
		builder.addCase(onGetMustWatchMovies.fulfilled, (state, action) => {
			state.mustWatchMovies = action.payload
		})

		// Shows
		// builder.addCase(onGetTrendingShows.fulfilled, (state, action) => {
		// 	state.trendingShows = action.payload
		// })
		// builder.addCase(onGetNewReleasesShows.fulfilled, (state, action) => {
		// 	state.newReleasesShows = action.payload
		// })
		// builder.addCase(onGetMustWatchShows.fulfilled, (state, action) => {
		// 	state.mustWatchShows = action.payload
		// })
	},
})

export const {} = moviesSlice.actions
export default moviesSlice.reducer
