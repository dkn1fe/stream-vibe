import { Button } from '@/shared/ui/button'
import banner from '@/layouts/banner/banner.png'

export const PlanBanner = () => {
	return (
		<div className='container mx-auto px-4'>
			<div  style={{background:`url(${banner})`}} className='px-6 md:px-14 py-12 flex flex-col lg:flex-row items-center justify-between bg-cover bg-center h-auto md:h-[313px] border-solid border-[#262626] border-1 rounded-lg'>
				<div className='text-center lg:text-left text-white mb-6 md:mb-0'>
					<h2 className='text-3xl md:text-5xl font-bold'>
						Start your free trial today!
					</h2>
					<p className='mt-2 md:mt-5 text-sm md:text-lg text-[#999999]'>
						This is a clear and concise call to action that encourages users to
						sign up for a free trial of StreamVibe.
					</p>
				</div>
				<Button className='bg-[red] py-6 px-5 ' color='red' variant='default'>
					Start a Free Trial
				</Button>
			</div>
		</div>
	)
}

export default PlanBanner
