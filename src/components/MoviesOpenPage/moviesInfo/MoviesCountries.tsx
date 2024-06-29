import { Globe } from "lucide-react";
import { FC } from "react";

interface MoviesCountriesProps {
  countries: { country: string }[];
}

export const MoviesCountries:FC<MoviesCountriesProps> = ({ countries }) => {
  return (
    <>
      <div className="flex pt-8 gap-2 text-[#999999]">
        <Globe />
        <h3>Countries</h3>
      </div>
      <div className="flex flex-wrap gap-2 pt-4">
        {countries?.length > 0 ? (
          countries.map((item: { country: string }, index: number) => (
            <div
              key={index}
              className="bg-[#141414] h-[40px] flex justify-center items-center px-[15px] border border-solid border-[#262626] rounded-[8px]"
            >
              <h3 className="text-white text-center p-2">{item.country}</h3>
            </div>
          ))
        ) : (
          <p className="text-white">No countries available</p>
        )}
      </div>
    </>
  );
};
