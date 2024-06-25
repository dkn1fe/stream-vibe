import genreList from '../../../shared/utils/genreList'
import genreListSecond from '@/shared/utils/genreListSecond'

import { useEffect } from 'react'
import { AppDispatch, RootState } from '@/app/store/store'
import { useDispatch, useSelector } from 'react-redux'
import {
	onGetTrendingShows,
	onGetNewReleasesShows,
	onGetMustWatchShows,
} from '@/shared/api/moviesApi'
import ShowsCarousel from './ShowsCarousel'

const ShowsCategory = () => {
	const dispatch = useDispatch<AppDispatch>()

	const { trendingShows } = useSelector((state: RootState) => state.moviesSlice)

	const { newReleasesShows } = useSelector(
		(state: RootState) => state.moviesSlice
	)
	const { mustWatchShows } = useSelector(
		(state: RootState) => state.moviesSlice
	)

	useEffect(() => {
		dispatch(onGetTrendingShows())
		dispatch(onGetNewReleasesShows())
		dispatch(onGetMustWatchShows())
	}, [dispatch])

	return (
		<div className='mt-[80px]'>
			<div className='relative'>
				<div className='border border-solid border-[#262626] rounded-lg overflow-hidden'>
					<div className='text-white px-6 py-3 bg-[#E50000] absolute -top-5 left-10 rounded-lg'>
						Shows
					</div>

					<ShowsCarousel
						title='Our Genres'
						movies={genreList}
						styles={{
							card: 'bg-[#1A1A1A] p-6 rounded-lg transform transition-transform duration-300 hover:scale-105 my-4 border-solid border-2 border-[#262626] flex-shrink-0 w-[19%] mx-2 mb-4 max-lg:w-1/3 max-sm:w-1/2 max-xl:w-1/4',
							image: 'rounded w-full',
							title: 'flex items-center justify-between  text-white',
						}}
					/>

					<ShowsCarousel
						title='Popular Top 10 in Genres'
						movies={genreListSecond}
						styles={{
							card: 'bg-[#1A1A1A] p-6 rounded-lg transform transition-transform duration-300 hover:scale-105 my-4 border-solid border-2 border-[#262626] flex-shrink-0 w-[19%] mx-2 mb-4 max-lg:w-1/3 max-sm:w-1/2 max-xl:w-1/4',
							image: 'rounded w-full',
							title: 'flex items-center justify-between mt-2 text-white',
						}}
					/>

					<ShowsCarousel
						title='Trending Now'
						movies={trendingShows}
						styles={{
							card: 'bg-[#1A1A1A] p-6 rounded-lg transform transition-transform duration-300 hover:scale-105 my-4 border-solid border-2 border-[#262626] flex-shrink-0 w-[19%] h-[377px]  mx-2 mb-4 max-lg:w-1/3 max-sm:w-1/2 max-xl:w-1/4',
							image: 'rounded w-full h-[90%]',
							title: 'flex items-center justify-between mt-2 text-white',
						}}
					/>
					<ShowsCarousel
						title='New Releases'
						movies={newReleasesShows}
						styles={{
							card: 'bg-[#1A1A1A] p-6 rounded-lg transform transition-transform duration-300 hover:scale-105 my-4 border-solid border-2 border-[#262626] flex-shrink-0 w-[19%] h-[377px]  mx-2 mb-4 max-lg:w-1/3 max-sm:w-1/2 max-xl:w-1/4',
							image: 'rounded w-full h-[90%]',
							title: 'flex items-center justify-between mt-2 text-white',
						}}
					/>
					<ShowsCarousel
						title='Must - Watch Movies'
						movies={mustWatchShows}
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

export default ShowsCategory
