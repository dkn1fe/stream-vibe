import { ArrowRight } from 'lucide-react'
import { Genre } from '@/shared/types/genreTypes'

interface GenreCardProps {
	genre: Genre
}

const GenreCard: React.FC<GenreCardProps> = ({ genre }) => {
	return (
		<div className='bg-[#1A1A1A] p-6 rounded-lg transform transition-transform duration-300 hover:scale-105 my-4 flex-grow-1 mx-2 border-solid border-2 border-[#262626] '>
			<img src={genre.image} alt={genre.title} className='rounded w-full' />

			<div className='flex items-center justify-between mt-2 text-white'>
				<h3>{genre.title}</h3>

				<ArrowRight color='white' />
			</div>
		</div>
	)
}

export default GenreCard
