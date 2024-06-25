import MoviesCarousel from './MoviesCarousel'
import genreList from '../../../shared/utils/genreList'
import genreListSecond from '@/shared/utils/genreListSecond'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { AppDispatch, RootState } from '@/app/store/store'
import {
	onGetTrendingMovies,
	onGetNewReleases,
	onGetMustWatchMovies,
} from '@/shared/api/moviesApi'

const MoviesCategory = () => {
	const dispatch = useDispatch<AppDispatch>()

	const { trendingMovies } = useSelector(
		(state: RootState) => state.moviesSlice)

	const { newReleases } = useSelector(
		(state: RootState) => state.moviesSlice)

	const { mustWatchMovies } = useSelector(
		(state: RootState) => state.moviesSlice)
		

	useEffect(() => {
		dispatch(onGetTrendingMovies())
		dispatch(onGetNewReleases())
		dispatch(onGetMustWatchMovies())
	}, [dispatch])

	return (
		<div className='mt-[80px]'>
			<div className='relative'>
				<div className='border border-solid border-[#262626] rounded-lg overflow-hidden'>
					<div className='text-white px-6 py-3 bg-[#E50000] absolute -top-5 left-10 rounded-lg'>
						Movies
					</div>

					<MoviesCarousel
						title='Our Genres'
						movies={genreList}
						styles={{
							card: 'bg-[#1A1A1A] p-6 rounded-lg transform transition-transform duration-300 hover:scale-105 my-4 border-solid border-2 border-[#262626] flex-shrink-0 w-[19%] mx-2 mb-4 max-lg:w-1/3 max-sm:w-1/2 max-xl:w-1/4',
							image: 'rounded w-full',
							title: 'flex items-center justify-between  text-white',
						}}
					/>

					<MoviesCarousel
						title='Popular Top 10 in Genres'
						movies={genreListSecond}
						styles={{
							card: 'bg-[#1A1A1A] p-6 rounded-lg transform transition-transform duration-300 hover:scale-105 my-4 border-solid border-2 border-[#262626] flex-shrink-0 w-[19%] mx-2 mb-4 max-lg:w-1/3 max-sm:w-1/2 max-xl:w-1/4',
							image: 'rounded w-full',
							title: 'flex items-center justify-between mt-2 text-white',
						}}
					/>

					<MoviesCarousel
						title='Trending Now'
						movies={trendingMovies}
						styles={{
							card: 'bg-[#1A1A1A] p-6 rounded-lg transform transition-transform duration-300 hover:scale-105 my-4 border-solid border-2 border-[#262626] flex-shrink-0 w-[19%] h-[377px]  mx-2 mb-4 max-lg:w-1/3 max-sm:w-1/2 max-xl:w-1/4',
							image: 'rounded w-full h-[90%]',
							title: 'flex items-center justify-between mt-2 text-white ',
						}}
					/>
					<MoviesCarousel
						title='New Releases'
						movies={newReleases}
						styles={{
							card: 'bg-[#1A1A1A] p-6 rounded-lg transform transition-transform duration-300 hover:scale-105 my-4 border-solid border-2 border-[#262626] flex-shrink-0 w-[19%] h-[377px]  mx-2 mb-4 max-lg:w-1/3 max-sm:w-1/2 max-xl:w-1/4',
							image: 'rounded w-full h-[90%]',
							title: 'flex items-center justify-between mt-2 text-white',
						}}
					/>
					<MoviesCarousel
						title='Must - Watch Movies'
						movies={mustWatchMovies}
						styles={{
							card: 'bg-[#1A1A1A] p-6 rounded-lg transform transition-transform duration-300 hover:scale-105 my-4 border-solid border-2 border-[#262626] flex-shrink-0 w-[19%] h-[377px]  mx-2 mb-4 max-lg:w-1/3 max-sm:w-1/2 max-xl:w-1/4',
							image: 'rounded w-full h-[90%]',
							title: 'flex items-center justify-between mt-2 text-white',
						}}
					/>
				</div>
			</div>
		</div>
	)
}

export default MoviesCategory
