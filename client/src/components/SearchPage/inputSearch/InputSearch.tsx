import { Input } from "@/shared/ui/input";
import { Search } from "lucide-react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSearchFilms } from "@/shared/api/searchFilmsApi";
import { AppDispatch, RootState } from "@/app/store/store";
import { onChangeSearchText } from "@/app/store/searchFilmsSlice";

export const InputSearch = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { searchText } = useSelector(
    (state: RootState) => state.searchFilmsSlice
  );

  useEffect(() => {
    const handler = setTimeout(() => {
      if (searchText.trim()) {
        dispatch(fetchSearchFilms(searchText));
      }
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [searchText, dispatch]);

  return (
    <form>
      <div className="relative mt-8 md:w-[55%]">
        <Input
          value={searchText}
          onChange={(e) => dispatch(onChangeSearchText(e.target.value))}
          className="w-full my-8"
          placeholder="films, serials"
        />
        <Search
          size={18}
          className="absolute top-1/2 right-2 transform -translate-y-1/2"
        />
      </div>
    </form>
  );
};
