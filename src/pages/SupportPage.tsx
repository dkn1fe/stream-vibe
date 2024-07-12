import Footer from '@/components/Footer/Footer'
import { Header } from '@/components/Header/Header'
import { Questions } from '@/components/HomePage/questions/Questions'
import PlanBanner from '@/components/PlanBanner/PlanBanner'
import SupportBlock from '@/components/SupportPage/SupportBlock'

export const SupportPage = () => {
	return (
		<>
			<div className='container'>
				<header>
					<Header />
				</header>

				<main className='py-20'>
					<SupportBlock />
				</main>

				<section className='py-20'>
					<Questions />
				</section>

				<section className='py-20'>
					<PlanBanner />
				</section>

			</div>
			<footer>
				<Footer />
			</footer>
		</>
	)
}
