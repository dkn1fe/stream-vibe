import { RootState } from "@/app/store/store";
import { Popcorn } from 'lucide-react';
import { useSelector } from "react-redux";
import { ChooseGenre } from "./ChooseGenre";
import { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Skeleton } from "@/shared/ui/skeleton";
import { ChooseOption } from "./ChooseOption";
import { chooseRaiting, chooseYears } from "@/app/store/genresSlice";

interface GenresProps {
    genre: string
}

export const Genres: FC<GenresProps> = ({ genre }) => {
    const { genresFilms, genresStatus, activeGenres, raiting, years } = useSelector((state: RootState) => state.genresSlice);
    const [genreFilm, setGenreFilm] = useState([]);
    console.log(years)

    useEffect(() => {
        if (genresFilms && activeGenres) {
            const filteredFilms = genresFilms
                ?.filter(film => film && film.genres.some(genreItem => genreItem.genre === activeGenres))
                .filter(film => film.ratingImdb <= raiting)
                .filter(film => film.year <= years);

            const uniqueFilms = Array.from(
                new Map(filteredFilms.map(film => [film.kinopoiskId, film])).values()
            );
            setGenreFilm(uniqueFilms);
        } else {
            setGenreFilm([]);
        }
    }, [activeGenres, genresFilms, raiting, years]);

    return (
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-10">
            <div className="flex flex-col gap-4 lg:gap-20">
                <ChooseGenre genre={genre} />
                <ChooseOption handleChoose={chooseRaiting} title="Rating" min={3} max={10} step={0.5} defaultValue={10} />
                <ChooseOption handleChoose={chooseYears} title="Years" min={1960} max={new Date().getFullYear()} step={1} defaultValue={new Date().getFullYear()} />
            </div>
            <div className="flex flex-wrap justify-center pt-5 lg:justify-start gap-4 lg:gap-4 flex-grow">
                {genresStatus === 'loading' && (
                    Array.from({ length: 30 }).map((_, index) => (
                        <Skeleton key={index} className="h-[200px] w-[140px] sm:h-[300px] sm:w-[200px]" />
                    ))
                )}
                {genresStatus === 'idle' && genreFilm.length > 0 ? (
                    genreFilm.map((item: { posterUrlPreview: string, kinopoiskId: number, ratingImdb: number }) => (
                        <Link key={item.kinopoiskId} to={`/movies/${item.kinopoiskId}`}>
                            <div className="relative">
                                <img className="w-[140px] h-[200px] sm:w-[200px] sm:h-[300px]" src={item.posterUrlPreview} alt="Film Poster" />
                                <div className="absolute top-2 left-2 bg-green-600 text-white rounded-lg px-2 py-1 opacity-90 text-xs sm:text-base">
                                    {item.ratingImdb}
                                </div>
                            </div>
                        </Link>
                    ))
                ) : (
                    <div className="flex items-center justify-center w-full h-[300px] sm:h-[400px] lg:h-[500px]">
                        <div className="flex flex-col items-center gap-3">
                            <Popcorn color="white" size={80} />
                            <p className="text-white text-center text-xl">No films found for the selected genre and rating.</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
