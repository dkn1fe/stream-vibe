import { useSelector } from "react-redux";
import { RootState } from "@/app/store/store";
import Spinner from "@/components/spinner/Spinner";

export const PossibleMoviesCard = () => {
  const { possibleFilms, possibleFilmsStatus } = useSelector(
    (state: RootState) => state.searchFilmsSlice
  );

  return (
    <>
      {possibleFilmsStatus === "loading" && <Spinner />}
      {possibleFilmsStatus === "idle" && (
        <div className="flex flex-wrap gap-4 pt-4">
          
          {possibleFilms &&
            possibleFilms.map((item) => (
              <div
                key={item.id as number}
                className="relative cursor-pointer [border:none] column-gap-2 max-w-[200px]"
              >
                <img
                  src={item.posterUrlPreview as string}
                  className="w-full rounded-xl"
                  alt={item.title as string}
                />
              </div>
            ))}
        </div>
      )}
    </>
  );
};
