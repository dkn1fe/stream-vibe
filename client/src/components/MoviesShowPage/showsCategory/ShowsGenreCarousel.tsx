

import { ShowGenre } from "./ShowsGenre";
import genreList from "@/shared/utils/genreList";
import genreListSecond from "@/shared/utils/genreListSecond";

export const ShowsGenreCarousel = () => {
    return (
        <>
            <ShowGenre
                title="Our Genres"
                movies={genreList}
                styles={{
                    card: "bg-[#1A1A1A] p-6 rounded-lg transform transition-transform duration-300 hover:scale-105 my-4 border-solid border-2 border-[#262626] flex-shrink-0 w-[19%] mx-2 mb-4 max-lg:w-1/3 max-sm:w-1/2 max-xl:w-1/4",
                    image: "rounded w-full",
                    title: "flex items-center justify-between  text-white",
                }}
            />

            <ShowGenre
                title="Popular Top 10 in Genres"
                movies={genreListSecond}
                styles={{
                    card: "bg-[#1A1A1A] p-6 rounded-lg transform transition-transform duration-300 hover:scale-105 my-4 border-solid border-2 border-[#262626] flex-shrink-0 w-[19%] mx-2 mb-4 max-lg:w-1/3 max-sm:w-1/2 max-xl:w-1/4",
                    image: "rounded w-full",
                    title: "flex items-center justify-between mt-2 text-white",
                }}
            />
        </>
    );
};
