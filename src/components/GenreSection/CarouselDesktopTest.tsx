// import { useState } from 'react'

// import {
// 	Carousel,
// 	CarouselContent,
// 	CarouselItem,
// 	CarouselNext,
// 	CarouselPrevious,
// } from '../../shared/ui/carousel'
// import GenreCard from './GenreCard'
// import genreList from '../../shared/utils/genreList'
// import SliderIndicator from './CarouselProgress'

// const CarouselDesktopTest = () => {


// 	return (
// 		<Carousel>
// 			<div className='container pt-20'>
// 				<div className='flex justify-between'>
// 					<div>
// 						<h2 className='text-4xl text-white mb-3'>
// 							Explore our wide variety of categories
// 						</h2>
// 						<p className='text-[#999999] text-sm leading-7'>
// 							Whether you're looking for a comedy to make you laugh, a drama to
// 							make you think, or a documentary to learn something new
// 						</p>
// 					</div>
// 					<div className='flex items-center bg-[#0F0F0F] px-4 py-4 rounded-lg'>
// 						<SliderIndicator selectedIndex={currentSlide} />
// 						<div className='ml-2'>
// 							<CarouselPrevious onClick={() => handlePreviousSlide()}>
// 								Previous
// 							</CarouselPrevious>
// 							<CarouselNext onClick={() => handleNextSlide()}>
// 								Next
// 							</CarouselNext>
// 						</div>
// 					</div>
// 				</div>
// 			</div>

// 			<CarouselContent className='flex w-1/5'>
// 				{genreList.map((genre) => (
// 					<CarouselItem key={genre.id}>
// 						<GenreCard genre={genre} />
// 					</CarouselItem>
// 				))}
// 			</CarouselContent>
// 		</Carousel>
// 	)
// }

// export default CarouselDesktopTest
