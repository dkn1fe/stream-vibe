import { Skeleton } from "@/shared/ui/skeleton";
import { FC } from "react";

interface MoviesDescriptionProps {
  description: string;
  status: "loading" | "idle" | "error";
}

export const MoviesDescription: FC<MoviesDescriptionProps> = ({
  description,
  status,
}) => {
  return (
    <>
      <div className="bg-[#1A1A1A] max-w-full md:max-w-[1000px] p-[35px] md:p-[30px] rounded-[12px] border border-solid border-[#262626]">
        <h3 className="text-lg md:text-xl text-[#CCCCCC] font-semibold">Description</h3>
        {status === "loading" ? (
          <div className="space-y-4 mt-3">
            <Skeleton className="w-full h-5 rounded-md" />
            <Skeleton className="w-full h-5 rounded-md" />
            <Skeleton className="w-3/4 h-5 rounded-md" />
          </div>
        ) : (
          <p className="text-white pt-3">{description || "None"}</p>
        )}
      </div>
    </>
  );
};
