import React from 'react'
import clsx from 'clsx'

interface IndicatorProps {
	selectedIndex: number
	onDotButtonClick: (index: number) => void
	totalIndicators: number
}

export const MoviesCarouselProgress: React.FC<IndicatorProps> = ({
	selectedIndex,
	onDotButtonClick,
	totalIndicators,
}) => {
	return (
		<div className='flex items-center mx-2'>
			{Array.from({ length: totalIndicators }).map((_, index) => (
				<div
					onClick={() => onDotButtonClick(index)}
					key={index}
					className={clsx(
						'h-1 mx-1 rounded transition-all duration-300',
						index === selectedIndex ? 'w-6 bg-red-500' : 'w-4 bg-gray-500'
					)}
				/>
			))}
		</div>
	)
}

export default MoviesCarouselProgress
