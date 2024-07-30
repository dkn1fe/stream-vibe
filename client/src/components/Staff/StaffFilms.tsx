import { FC } from "react";
import { Film } from "@/shared/types/staffTypes";
import { Link } from "react-router-dom";
import { Skeleton } from "@/shared/ui/skeleton";

interface StaffFilmsProps {
    films: Film[];
    status: string;
}

export const StaffFilms: FC<StaffFilmsProps> = ({ films, status }) => {

    const uniqueFilms: Film[] = Array.from(new Set(films.map(film => film.filmId)))
        .map(id => films.find(film => film.filmId === id))
        .filter((film): film is Film => film !== undefined);

    return (
        <div className="flex flex-col gap-2 mt-3">
            <h3 className="text-[22px] text-[#999999]">Лучшие фильмы</h3>
            {status === 'loading' ? (
                Array(7).fill(0).map((_, index) => (
                    <div key={index} className="flex items-center gap-2">
                        <Skeleton className="w-[200px] h-[20px] rounded-lg" />
                        <Skeleton className="w-[50px] h-[20px] rounded-lg" />
                    </div>
                ))
            ) : (
                uniqueFilms && uniqueFilms
                    .sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating))
                    .slice(0, 7)
                    .map(item => (
                        <div key={item.filmId} className="flex items-center gap-2">
                            <Link to={`/movies/${item.filmId}`} className="text-white hover:text-gray-400 ease-in duration-75">
                                {item.nameRu !== null || undefined ? item.nameRu : item.nameEn}
                            </Link>
                            {item.rating >= '8' && (
                                <p className="text-[#15803d]">{item.rating || '—'}</p>
                            )}
                            {item.rating >= '6' && item.rating < '8' && (
                                <p className="text-[#ca8a04]">{item.rating || '—'}</p>
                            )}
                            {item.rating < '6' && (
                                <p className="text-[#dc2626]">{item.rating || '—'}</p>
                            )}
                        </div>
                    ))
            )}
        </div>
    );
}
