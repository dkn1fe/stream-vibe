import SupportForm from './SupportForm/SupportForm'

const SupportBlock = () => {
	return (
		<div className='container flex flex-col xl:flex-row justify-between items-center'>
			<div className='w-full md:w-[533px] flex flex-col justify-between'>
				<div className='flex flex-col justify-center'>
					<h1 className='text-5xl text-white mb-4'>
						Welcome to our support page!
					</h1>
					<p className='text-lg text-[#999999] mb-8'>
						We're here to help you with any problems you may be having with our
						product.
					</p>
				</div>
				<img
					className='self-center'
					src='src/layouts/support/support.png'
					alt='Support'
				/>
			</div>
			<div className='w-full md:w-[973px] mt-8 md:mt-0'>
				<SupportForm />
			</div>
		</div>
	)
}

export default SupportBlock
