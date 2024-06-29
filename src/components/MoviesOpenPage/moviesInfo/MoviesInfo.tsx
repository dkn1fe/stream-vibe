import { useSelector } from "react-redux";
import { MoviesDescription } from "./MoviesDescription";
import { RootState } from "@/app/store/store";
import { MoviesStaff } from "./MoviesStaff";
import { MoviesDataInfo } from "./MoviesDataInfo";

export const MoviesInfo = () => {
  const { moviesInfo, staffMovies } = useSelector(
    (state: RootState) => state.moviesPageSlice
  );

  return (
    <div className="flex flex-col md:flex-row gap-4">
      <div className="flex flex-col gap-4 md:w-2/3">
        <MoviesDescription
          description={
            moviesInfo.description ||
            moviesInfo.shortDescription ||
            moviesInfo.slogan
          }
        />
        <MoviesStaff staffMovies={staffMovies as any[]} />
      </div>
      <div className="md:w-1/3">
        <MoviesDataInfo />
      </div>
    </div>
  );
};
