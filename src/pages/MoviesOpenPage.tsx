import { Header } from "@/components/Header/Header";
import { MoviesBanner } from "@/components/MoviesOpenPage/moviesBanner/MoviesBanner";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onGetMoviesById, onGetStaffById } from "@/shared/api/moviesApiById";
import { AppDispatch, RootState } from "@/app/store/store";
import { MoviesInfo } from "@/components/MoviesOpenPage/moviesInfo/MoviesInfo";
import PlanBanner from "@/components/PlanBanner/PlanBanner";
import Spinner from "@/components/spinner/Spinner";
import Footer from "@/components/Footer/Footer";

export const MoviesOpenPage = () => {
  const { moviesId } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const { moviesInfoStatus } = useSelector(
    (state: RootState) => state.moviesPageSlice
  );

  useEffect(() => {
    dispatch(onGetMoviesById(moviesId));
    dispatch(onGetStaffById(moviesId));
  }, [moviesId]);

  return (
    <>
      <div className="container">
        <header>
          <Header />
        </header>
        {moviesInfoStatus === "loading" && <Spinner />}
        {moviesInfoStatus === "idle" && (
          <>
            <main className="py-20">
              <MoviesBanner />
            </main>
            <section className="pb-10">
              <MoviesInfo />
            </section>
          </>
        )}
        <section className="py-20">
          <PlanBanner />
        </section>
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  );
};
