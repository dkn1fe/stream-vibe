import React from 'react'

interface MobileCarouselProgressProps {
	selectedIndex: number
}

const CarouselProgressMobile: React.FC<MobileCarouselProgressProps> = ({
	selectedIndex,
}) => {
	return (
		<div className='flex items-center mx-2 w-1/2 xl:hidden'>
			<div className='h-1 rounded bg-gray-500 w-full'>
				<div
					className='h-1 rounded bg-red-500 transition-all duration-300'
					style={{ width: `${(selectedIndex + 1) * 25}%` }}
				/>
			</div>
		</div>
	)
}

export default CarouselProgressMobile
