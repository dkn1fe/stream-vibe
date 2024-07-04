import { useSelector } from "react-redux";
import { MoviesDescription } from '@/components/MoviesOpenPage/moviesInfo/MoviesDescription'
import { RootState } from "@/app/store/store";
import { MoviesStaff } from "@/components/MoviesOpenPage/moviesInfo/MoviesStaff";
import { EpisodeInfo } from "../episodeInfo/EpisodeInfo";
import { ShowsDataInfo } from "./ShowsDataInfo";

export const ShowsInfo = () => {
  const {staffShows,staffShowsStatus, showsInfoStatus,showsInfo } = useSelector(
    (state: RootState) => state.showsPageSlice
  );
console.log(showsInfo)
  return (
    <div className="flex flex-col md:flex-row gap-4">
      <div className="flex flex-col gap-4 md:w-2/3">
      <EpisodeInfo/>
        <MoviesDescription
         status = {showsInfoStatus}
          description={
            showsInfo.description ||
            showsInfo.shortDescription ||
            showsInfo.slogan
          }
        />
        <MoviesStaff status = {staffShowsStatus} staffMovies={staffShows as any[]} />
      </div>
      <div className="md:w-1/3">
        <ShowsDataInfo />
      </div>
    </div>
  );
};
