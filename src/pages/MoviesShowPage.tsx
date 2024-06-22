import { Header } from "@/components/Header/Header";
import { MoviesBanner } from "@/components/MoviesShowPage/moviesBanner/MoviesBanner";

export const MoviesShowPage = () => {
  return (
    <div className="container">
      <header>
        <Header />
      </header>
      <main className="py-[40px]">
        <MoviesBanner/>
      </main>
    </div>
  );
};
