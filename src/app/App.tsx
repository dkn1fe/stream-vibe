import { HomePage } from "@/pages/HomePage";
import { MoviesShowPage } from "@/pages/MoviesShowPage";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/movies&show" element={<MoviesShowPage />} />
    </Routes>
  );
}
