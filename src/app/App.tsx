import { HomePage } from "@/pages/HomePage";
import { MoviesOpenPage } from "@/pages/MoviesOpenPage";
import { MoviesShowPage } from "@/pages/MoviesShowPage";
import { SearchPage } from "@/pages/SearchPage";
import { ShowsOpenPage } from "@/pages/ShowsOpenPage";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/movies&show" element={<MoviesShowPage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/movies/:moviesId" element={<MoviesOpenPage />} />
      <Route path="/shows/:showsId" element={<ShowsOpenPage />} />
    </Routes>
  );
}
