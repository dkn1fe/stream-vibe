import { RootState } from "@/app/store/store";
import { useSelector } from "react-redux";
import { MoviesYear } from "./MoviesYear";
import { MoviesCountries } from "./MoviesCountries";
import { MoviesRatings } from "./MoviesRatings";
import { MoviesGenres } from "./MoviesGenres";
import { MoviesPeople } from "./MoviesPeople";

export const MoviesDataInfo = () => {
  const { moviesInfo, staffMovies, moviesInfoStatus } = useSelector(
    (state: RootState) => state.moviesPageSlice
  );

  const screenwriter = staffMovies.find(
    (item: any) => item.professionText === "Сценаристы"
  );
  const producer = staffMovies.find(
    (item: any) => item.professionText === "Продюсеры"
  );
  return (
    <div className="bg-[#1A1A1A] max-w-[520px] min-h-[947px] md:min-h-[880px]  p-[35px] rounded-[12px] border border-solid border-[#262626]">
      <MoviesYear status={moviesInfoStatus} year={moviesInfo?.year as number} />
      <MoviesCountries
        status={moviesInfoStatus}
        countries={moviesInfo?.countries}
      />
      <MoviesRatings
        status={moviesInfoStatus}
        streamVibeRating={moviesInfo?.ratingKinopoisk}
        IMDdRating={moviesInfo?.ratingImdb}
      />
      <MoviesGenres status={moviesInfoStatus} genres={moviesInfo?.genres} />
      <MoviesPeople
        status={moviesInfoStatus}
        producer={producer}
        screenwriter={screenwriter}
      />
    </div>
  );
};
