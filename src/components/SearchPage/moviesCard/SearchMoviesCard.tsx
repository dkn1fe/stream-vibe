import { useSelector } from "react-redux";
import { RootState } from "@/app/store/store";
import Spinner from "@/components/spinner/Spinner";

export const SearchMoviesCard = () => {
  const { searchFilms, searchFilmsStatus } = useSelector(
    (state: RootState) => state.searchFilmsSlice
  );

  return (
    <>
      {searchFilmsStatus === "loading" && <Spinner />}
      {searchFilmsStatus === "idle" && (
        <div className="flex flex-wrap gap-4 pt-4">
          {searchFilms &&
            searchFilms.map((item) => (
              <div
                key={item.id}
                className="relative cursor-pointer [border:none] column-gap-2 max-w-[200px]"
              >
                <img
                  src={item.posterUrlPreview}
                  className="w-full rounded-xl"
                  alt={item.title}
                />
              </div>
            ))}
        </div>
      )}
    </>
  );
};
