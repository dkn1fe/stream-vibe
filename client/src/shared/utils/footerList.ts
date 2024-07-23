interface FooterItem {
	id: number
	title: string
	items: { name?: string; image?: string }[]
}

const footerList: FooterItem[] = [
	{
		id: 1,
		title: 'Home',
		items: [
			{ name: 'Categories' },
			{ name: 'Devices' },
			{ name: 'Pricing' },
			{ name: 'FAQ' },
		],
	},
	{
		id: 2,
		title: 'Movies',
		items: [
			{ name: 'Genres' },
			{ name: 'Trending' },
			{ name: 'New Release' },
			{ name: 'Popular' },
		],
	},
	{
		id: 3,
		title: 'Shows',
		items: [
			{ name: 'Genres' },
			{ name: 'Trending' },
			{ name: 'New Release' },
			{ name: 'Popular' },
		],
	},
	{
		id: 4,
		title: 'Support',
		items: [{ name: 'Contact Us' }],
	},
	{
		id: 5,
		title: 'Subscription',
		items: [{ name: 'Plans' }, { name: 'Features' }],
	},
	{
		id: 6,
		title: 'Connect with us',
		items: [
			{ image: '/Facebook.png' },
			{ image: '/Linkedin.png' },
			{ image: '/Twitter.png' },
		],
	},
]

export default footerList
