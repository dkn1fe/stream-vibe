import { RootState } from "@/app/store/store";
import { MoviesCountries } from "@/components/MoviesOpenPage/moviesInfo/MoviesCountries";
import { MoviesGenres } from "@/components/MoviesOpenPage/moviesInfo/MoviesGenres";
import { MoviesPeople } from "@/components/MoviesOpenPage/moviesInfo/MoviesPeople";
import { MoviesRatings } from "@/components/MoviesOpenPage/moviesInfo/MoviesRatings";
import { MoviesYear } from "@/components/MoviesOpenPage/moviesInfo/MoviesYear";
import { useSelector } from "react-redux";

export const ShowsDataInfo = () => {
  const { showsInfo, staffShows, showsInfoStatus } = useSelector(
    (state: RootState) => state.showsPageSlice
  );

  const screenwriter = staffShows.find(
    (item: {professionText:string}) => item.professionText === "Сценаристы"
  );
  const producer = staffShows.find(
    (item: {professionText:string}) => item.professionText === "Продюсеры"
  );

  return (
    <div className="bg-[#1A1A1A] max-w-[520px] min-h-[947px] md:min-h-[880px]  p-[35px] rounded-[12px] border border-solid border-[#262626]">
      <MoviesYear status={showsInfoStatus} year={showsInfo?.year as number} />
      <MoviesCountries
        status={showsInfoStatus}
        countries={showsInfo?.countries}
      />
      <MoviesRatings
        status={showsInfoStatus}
        streamVibeRating={showsInfo?.ratingKinopoisk}
        IMDdRating={showsInfo?.ratingImdb}
      />
      <MoviesGenres status={showsInfoStatus} genres={showsInfo?.genres} />
      <MoviesPeople
        status={showsInfoStatus}
        producer={producer}
        screenwriter={screenwriter}
      />
    </div>
  );
};
