import { createAsyncThunk } from '@reduxjs/toolkit'
import { getRandomNumber } from '../utils/utils'
import { _mainUrl } from './api'

export const onGetMoviesList = createAsyncThunk(
	'movies/onGetMoviesList',
	async () => {
		const randomNumberArray = getRandomNumber()

		const requests = randomNumberArray.map(item =>
			fetch(`${_mainUrl}/films/${item}`, {
				method: 'GET',
				headers: {
					'X-API-KEY': '828e27e0-7181-4ca9-a019-cb15dd15d2ca',
					'Content-Type': 'application/json',
				},
			})
		)

		const responses = await Promise.all(requests)
		const movies = await Promise.all(responses.map(item => item.json()))
		return movies
	}
)

export const onGetTrendingMovies = createAsyncThunk(
	'movies/onGetTrendingMovies',
	async () => {
		const response = await fetch(
			`${_mainUrl}/films/top?type=TOP_100_POPULAR_FILMS&page=1`,
			{
				method: 'GET',
				headers: {
					'X-API-KEY': '828e27e0-7181-4ca9-a019-cb15dd15d2ca',
					'Content-Type': 'application/json',
				},
			}
		)
		const data = await response.json()
		return data.films
	}
)

export const onGetNewReleases = createAsyncThunk(
	'movies/onGetNewReleases',
	async () => {
		const response = await fetch(
			`${_mainUrl}/films/top?type=TOP_AWAIT_FILMS&page=1`,
			{
				method: 'GET',
				headers: {
					'X-API-KEY': '828e27e0-7181-4ca9-a019-cb15dd15d2ca',
					'Content-Type': 'application/json',
				},
			}
		)
		const data = await response.json()
		return data.films
	}
)

export const onGetMustWatchMovies = createAsyncThunk(
	'movies/onGetMustWatchMovies',
	async () => {
		const response = await fetch(
			`${_mainUrl}/films/top?type=TOP_250_BEST_FILMS&page=1`,
			{
				method: 'GET',
				headers: {
					'X-API-KEY': '828e27e0-7181-4ca9-a019-cb15dd15d2ca',
					'Content-Type': 'application/json',
				},
			}
		)
		const data = await response.json()
		return data.films
	}
)

export const onGetTrendingShows = createAsyncThunk(
	'shows/onGetTrendingShows',
	async () => {
		const response = await fetch(
			`${_mainUrl}/films?order=RATING&type=TV_SHOW&ratingFrom=0&ratingTo=10&yearFrom=1000&yearTo=3000&page=1`,
			{
				method: 'GET',
				headers: {
					'X-API-KEY': '828e27e0-7181-4ca9-a019-cb15dd15d2ca',
					'Content-Type': 'application/json',
				},
			}
		)
		const data = await response.json()
		return data.items
	}
)

export const onGetNewReleasesShows = createAsyncThunk(
	'shows/onGetNewReleasesShows',
	async () => {
		const response = await fetch(
			`${_mainUrl}/films/top?type=TOP_AWAIT_FILMS&page=1`,
			{
				method: 'GET',
				headers: {
					'X-API-KEY': '828e27e0-7181-4ca9-a019-cb15dd15d2ca',
					'Content-Type': 'application/json',
				},
			}
		)
		const data = await response.json()
		return data.films
	}
)

export const onGetMustWatchShows = createAsyncThunk(
	'shows/onGetMustWatchShows',
	async () => {
		const response = await fetch(
			`${_mainUrl}/films/collections?type=TOP_250_TV_SHOWS&page=1`,
			{
				method: 'GET',
				headers: {
					'X-API-KEY': '828e27e0-7181-4ca9-a019-cb15dd15d2ca',
					'Content-Type': 'application/json',
				},
			}
		)
		const data = await response.json()
		return data.items
	}
)
