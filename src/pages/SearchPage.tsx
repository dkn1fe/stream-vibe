import { InputSearch } from "@/components/SearchPage/inputSearch/InputSearch";
import { X } from "lucide-react";
import { useEffect } from "react";
import { fetchPossibleFilm } from "@/shared/api/searchFilmsApi";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/app/store/store";
import { PossibleMoviesCard } from "@/components/SearchPage/moviesCard/PossibleMoviesCard";
import { SearchMoviesCard } from "@/components/SearchPage/moviesCard/SearchMoviesCard";
import { useNavigate } from "react-router-dom";

export const SearchPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { searchFilms, searchText } = useSelector(
    (state: RootState) => state.searchFilmsSlice
  );

  const back = () => navigate(-1);

  useEffect(() => {
    dispatch(fetchPossibleFilm());
  }, [dispatch]);

  return (
    <>
      <div className="flex pt-5 pr-5 justify-end">
        <X onClick={back} className="cursor-pointer" color="white" size={40} />
      </div>
      <div className="container flex-wrap">
        <h2 className="text-white pt-4 text-4xl font-bold">Поиск</h2>
        <InputSearch />
        {(searchFilms === null ||
          (searchFilms.length === 0 && searchText === "") ||
          searchText.length === 0) && (
          <>
            <h2 className="text-white text-2xl font-bold">
              Возможно, тебя заинтересует
            </h2>
            <PossibleMoviesCard />
          </>
        )}
        {searchFilms && searchFilms.length === 0 && searchText !== "" && (
          <>
            <h2 className="text-white py-5 text-2xl font-bold">
              По вашему запросу
              <span className="text-[red]"> {searchText} </span> ничего не
              найдено.
            </h2>
            <h2 className="text-white pt-15 text-2xl font-bold">
              Возможно, тебя заинтересует
            </h2>
            <PossibleMoviesCard />
          </>
        )}
        {searchFilms && searchFilms.length !== 0 && (
          <>
            <h2 className="text-white pt-15 text-2xl font-bold">
              По вашему запросу найдено
            </h2>
            <SearchMoviesCard />
          </>
        )}
      </div>
    </>
  );
};
