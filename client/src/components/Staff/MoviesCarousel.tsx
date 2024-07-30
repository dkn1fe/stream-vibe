import { Film } from "@/shared/types/staffTypes"
import { FC, useEffect } from "react"
import { getMoviesName } from "@/shared/utils/utils"
import { useDispatch, useSelector } from "react-redux"
import { onGetMoviesStaff } from "@/shared/api/staffApiById"
import { AppDispatch, RootState } from "@/app/store/store"
import useEmblaCarousel from 'embla-carousel-react'
import { Button } from "@/shared/ui/button"
import { Link } from "react-router-dom"
import { clearMoviesStaff } from "@/app/store/staffSlice"
import { Skeleton } from '@/shared/ui/skeleton'

interface MoviesCarouselProps {
    films: Film[]
    staffId: number | undefined
}

export const MoviesCarousel: FC<MoviesCarouselProps> = ({ films, staffId }) => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ slidesToScroll: 3 })

    const { staffMovies, staffMoviesStatus } = useSelector((state: RootState) => state.staffSlice)
    const dispatch = useDispatch<AppDispatch>()


    useEffect(() => {
        if (staffId && films?.length > 0) {
            const moviesId: number[] = getMoviesName(films)
            dispatch(clearMoviesStaff())
            dispatch(onGetMoviesStaff(moviesId))
        }
    }, [staffId, films, dispatch])

    const scrollPrev = () => {
        if (emblaApi) emblaApi.scrollPrev()
    }

    const scrollNext = () => {
        if (emblaApi) emblaApi.scrollNext()
    }

    return (
        <div className="p-10">
            <div className="relative p-10">
                <h3 className="text-white text-2xl mb-4">Популярные фильмы</h3>
                <div className="overflow-hidden" ref={emblaRef}>
                    <div className="flex space-x-4">
                        {staffMoviesStatus === 'loading' ? (
                            Array(6).fill(0).map((_, index) => (
                                <div className="relative flex-shrink-0 p-2" key={index}>
                                    <Skeleton className="w-[200px] h-[250px]" />
                                </div>
                            ))
                        ) : (
                            staffMovies && [...staffMovies as any]
                                .sort((a, b) => parseFloat(b.ratingImdb) - parseFloat(a.ratingImdb))
                                .map((movie) => (
                                    <div className="relative flex-shrink-0 p-2" key={movie.kinopoisId}>
                                        <Link to={`/movies/${movie.kinopoiskId}`}>
                                            <div className="relative cursor-pointer p-2">
                                                <img src={movie.posterUrlPreview} alt={movie.nameOriginal} className="w-[200px] h-[250px] rounded-lg" />
                                                <p className="absolute top-3 left-3 bg-green-600 text-white px-2 py-1 rounded-full text-xs font-bold shadow-lg">
                                                    {movie.ratingImdb}
                                                </p>
                                            </div>
                                        </Link>
                                    </div>
                                ))
                        )}
                    </div>
                </div>
                <Button
                    onClick={scrollPrev}
                    className="absolute left-1 top-1/2 transform -translate-y-1/2 bg-white text-black p-2 rounded-full z-10 shadow-lg"
                >
                    ‹
                </Button>
                <Button
                    onClick={scrollNext}
                    className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-white text-black p-2 rounded-full z-10 shadow-lg"
                >
                    ›
                </Button>
            </div>
        </div>
    )
}
