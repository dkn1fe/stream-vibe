import 'react-phone-number-input/style.css'
import CustomPhoneInput from './CustomPhoneInput'
import { Checkbox } from '@/shared/ui/checkbox'

const SupportForm = () => {
	return (
		<form className='bg-[#0F0F0F] p-12 rounded-lg flex flex-col border border-solid border-[#262626]'>
			<div className='grid grid-cols-1 md:grid-cols-2 gap-12 mb-6'>
				<div>
					<label className='block text-white mb-2' htmlFor='firstName'>
						First Name
					</label>
					<input
						className='w-full p-5 border border-solid border-[#262626] rounded-lg bg-[#141414] text-white'
						type='text'
						id='firstName'
						placeholder='Enter First Name'
					/>
				</div>
				<div>
					<label className='block text-white mb-2' htmlFor='lastName'>
						Last Name
					</label>
					<input
						className='w-full p-5 border border-solid border-[#262626] rounded-lg bg-[#141414] text-white'
						type='text'
						id='lastName'
						placeholder='Enter Last Name'
					/>
				</div>
			</div>
			<div className='grid grid-cols-1 md:grid-cols-2 gap-12 mb-6'>
				<div>
					<label className='block text-white mb-2' htmlFor='email'>
						Email
					</label>
					<input
						className='w-full p-5 border border-solid border-[#262626] rounded-lg bg-[#141414] text-white'
						type='email'
						id='email'
						placeholder='Enter your Email'
					/>
				</div>
				<div>
					<label className='block text-white mb-2' htmlFor='phoneNumber'>
						Phone Number
					</label>
					<div>
						<CustomPhoneInput />
					</div>
				</div>
			</div>
			<div className='mb-6'>
				<label className='block text-white mb-2' htmlFor='message'>
					Message
				</label>
				<textarea
					className='w-full p-5 border border-solid border-[#262626] rounded-lg bg-[#141414] text-white h-[206px]'
					id='message'
					placeholder='Enter your Message'
				></textarea>
			</div>
			<div className='flex flex-col md:flex-row items-center justify-between mb-6'>
				<div className='flex items-center mb-4 md:mb-0'>
					<Checkbox id='terms' />
					<label className='text-white ml-2' htmlFor='terms'>
						I agree with Terms of Use and Privacy Policy
					</label>
				</div>
				<button
					className='p-4 bg-red-600 text-white rounded hover:bg-red-700'
					type='submit'
				>
					Send Message
				</button>
			</div>
		</form>
	)
}

export default SupportForm
