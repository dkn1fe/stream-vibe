import { Button } from '@/shared/ui/button'
import footerList from '@/shared/utils/footerList'

const Footer = () => {
	return (
		<footer className='bg-[#0F0F0F]'>
			<div className='container m-auto pt-20 px-4 '>
				<div className='flex flex-wrap justify-between '>
					{footerList.map(category => (
						<div key={category.id} className=' mb-10 max-sm:w-1/2'>
							<h3 className='font-bold mb-2 text-white'>{category.title}</h3>
							<ul>
								{category.items.map((item, index) => (
									<li
										key={index}
										className='flex items-center text-[#999999] group cursor-pointer'
									>
										<span className='group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-gray-500 group-hover:to-gray-700 transition-all duration-500 ease-in-out'>
											{item.name
												? item.name
												: item.image && (
														<Button
															variant='default'
															className='bg-[#1A1A1A] '
														>
															<img
																src={item.image}
																alt='Social Icons'
																className='h-8 w-8 '
															/>
														</Button>
												  )}
										</span>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>

				<div className='border-t border-[#262626] mt-12'></div>

				<div className='flex justify-between items-center text-[#999999] my-5 pb-10 max-sm:flex-col max-sm:gap-4 '>
					<div className=' text-center lg:text-left '>
						@2023 streamvib, All Rights Reserved
					</div>

					<div className='flex flex-wrap gap-4 justify-center  '>
						<div className='group cursor-pointer pr-4 border-r border-[#262626]'>
							<span className='text-[#999999] group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-gray-500 group-hover:to-gray-700 transition-all duration-500 ease-in-out'>
								Terms of Use
							</span>
						</div>
						<div className='group cursor-pointer pr-4 border-r border-[#262626]'>
							<span className='text-[#999999] group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-gray-500 group-hover:to-gray-700 transition-all duration-500 ease-in-out'>
								Privacy Policy
							</span>
						</div>
						<div className='group cursor-pointer'>
							<span className='text-[#999999] group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-gray-500 group-hover:to-gray-700 transition-all duration-500 ease-in-out'>
								Cookie Policy
							</span>
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
