import { useCallback, useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/shared/ui/button'
import useEmblaCarousel from 'embla-carousel-react'

import CarouselDesktop from './CarouselDesktop'
import CarouselProgress from './CarouselProgress'
import CarouselProgressMobile from './CarouselProgressMobile'

export const GenreSection = () => {
	const [emblaRef, emblaApi] = useEmblaCarousel()
	const [selectedIndex, setSelectedIndex] = useState(0)

	const scrollPrev = useCallback(() => {
		if (emblaApi) {
			const newIndex = emblaApi.selectedScrollSnap() - 5
			emblaApi.scrollTo(newIndex < 0 ? 0 : newIndex)
		}
	}, [emblaApi])

	const scrollNext = useCallback(() => {
		if (emblaApi) {
			const newIndex = emblaApi.selectedScrollSnap() + 5
			emblaApi.scrollTo(newIndex < 0 ? 0 : newIndex)
		}
	}, [emblaApi])

	useEffect(() => {
		if (!emblaApi) return

		const onSelect = () => {
			setSelectedIndex(emblaApi.selectedScrollSnap() / 5)
		}

		emblaApi.on('select', onSelect)
		onSelect()

		return () => {
			emblaApi.off('select', onSelect)
		}
	}, [emblaApi])

	return (
		<div className='container  py-10 mt-12 '>
			<div className='flex justify-between '>
				<div>
					<h2 className='text-4xl text-white mb-3'>
						Explore our wide variety of categories
					</h2>
					<p className='text-[#999999] text-sm md:text-lg pt-2 md:leading-7'>
						Whether you're looking for a comedy to make you laugh, a drama to
						make you think, or a documentary to learn something new
					</p>
				</div>
				<div className='flex items-center bg-[#0F0F0F] px-4 rounded-lg max-xl:hidden'>
					<Button onClick={scrollPrev} className='p-2'>
						<ChevronLeft size={30} color='white' />
					</Button>

					<CarouselProgress selectedIndex={selectedIndex} />

					<Button className='p-2' onClick={scrollNext}>
						<ChevronRight size={30} color='white' />
					</Button>
				</div>
			</div>

			<CarouselDesktop emblaRef={emblaRef} />

			<div className='flex justify-center '>
				<CarouselProgressMobile selectedIndex={selectedIndex} />
			</div>
		</div>
	)
}

export default GenreSection
