import { FC } from "react";
import { Calendar } from "lucide-react";

interface MoviesYearProps {
  year: number;
}

export const MoviesYear: FC<MoviesYearProps> = ({ year }) => {
  return (
    <>
      <div className="flex pt-2 gap-2 text-[#999999]">
        <Calendar />
        <h3>Released Year</h3>
      </div>
      <p className="text-white pt-2">{year || "Unknown Year"}</p>
    </>
  );
};
