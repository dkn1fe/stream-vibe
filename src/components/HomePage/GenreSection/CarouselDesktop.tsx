import GenreCard from './GenreCard'
import genreList from '../../../shared/utils/genreList'

interface CarouselProps {
	emblaRef: any
}

const CarouselDesktop: React.FC<CarouselProps> = ({ emblaRef }) => {
	return (
		<div className='overflow-hidden w-full' ref={emblaRef}>
			<div className='flex pt-10'>
				{genreList.map(genre => (
					<div
						className='flex-shrink-0 w-1/5 max-lg:w-1/3 max-sm:w-1/2'
						key={genre.id}
					>
						<GenreCard genre={genre} />
					</div>
				))}
			</div>
		</div>
	)
}

export default CarouselDesktop
