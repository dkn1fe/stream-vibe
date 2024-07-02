import { FC } from "react";
import { Calendar } from "lucide-react";
import { Skeleton } from "@/shared/ui/skeleton";

interface MoviesYearProps {
  year: number | null;
  status: "loading" | "idle" | "error";
}

export const MoviesYear: FC<MoviesYearProps> = ({ year, status }) => {
  return (
    <>
      <div className="flex pt-2 gap-2 text-[#999999]">
        <Calendar />
        <h3>Released Year</h3>
      </div>
      {status === "loading" ? (
        <Skeleton className="w-24 h-6 mt-2" />
      ) : (
        <p className="text-white pt-2">{year ?? "Unknown Year"}</p>
      )}
    </>
  );
};
