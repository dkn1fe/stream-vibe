import { Header } from "@/components/Header/Header";
import { MoviesBanner } from "@/components/MoviesShowPage/moviesBanner/MoviesBanner";
import MoviesCategory from "@/components/MoviesShowPage/moviesCategory/MoviesCategory";
import ShowsCategory from "@/components/MoviesShowPage/showsCategory/ShowsCategory";

export const MoviesShowPage = () => {
  return (
    <div className="container">
      <header>
        <Header />
      </header>
      <main className="py-[40px]">
        <MoviesBanner />
      </main>
      <section className="py-[40px]">
        <MoviesCategory />
      </section>
      <section className="py-[40px]">
        <ShowsCategory />
      </section>
    </div>
  );
};
