
export interface Movie {
	image?: string
	posterUrl?: string
	title: string
	year?: number
	rating?: number
}

export interface Styles {
	card: string
	image: string
	title: string
}

export interface MoviesShowsCarouselProps {
	title: string
	movies: Movie[]
	styles: Styles
}
