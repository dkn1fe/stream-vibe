import { AppDispatch } from "@/app/store/store";
import { Header } from "@/components/Header/Header";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import {
  onGetMoviesAndShowById,
  onGetStaffById,
} from "@/shared/api/moviesApiById";
import { onGetShowEpisodeById } from "@/shared/api/showsApiById";
import { ShowsBanner } from "@/components/ShowsOpenPage/showsBanner/ShowsBanner";
import { ShowsInfo } from "@/components/ShowsOpenPage/showsInfo/ShowsInfo";

export const ShowsOpenPage = () => {
  const { showsId } = useParams();
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(onGetMoviesAndShowById(showsId));
    dispatch(onGetStaffById(showsId));
    dispatch(onGetShowEpisodeById(showsId));
  }, [showsId]);

  return (
    <>
      <div className="container">
        <header>
          <Header />
        </header>
        <main className="py-20">
          <ShowsBanner />
        </main>
        <section className="py-5">
          <ShowsInfo/>
        </section>
      </div>
    </>
  );
};
