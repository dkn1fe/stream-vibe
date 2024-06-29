import { LayoutGrid } from "lucide-react";
import { FC } from "react";

interface MoviesGenresProps {
  genres: { genre: string }[];
}

export const MoviesGenres: FC<MoviesGenresProps> = ({ genres }) => {
  return (
    <>
      <div className="flex gap-2 pt-8 text-[#999999]">
        <LayoutGrid />
        <h3>Genres</h3>
      </div>
      <div className="flex flex-wrap gap-2 pt-4">
        {genres?.length > 0 ? (
          genres.map((item: { genre: string }, index: number) => (
            <div
              key={index}
              className="bg-[#141414] h-[40px] flex justify-center items-center px-[15px] border border-solid border-[#262626] rounded-[8px]"
            >
              <h3 className="text-white text-center p-2">{item.genre}</h3>
            </div>
          ))
        ) : (
          <p className="text-white">No Genres available</p>
        )}
      </div>
    </>
  );
};
