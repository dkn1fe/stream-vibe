import { FC } from "react";

interface MoviesDescriptionProps {
  description: string;
}

export const MoviesDescription: FC<MoviesDescriptionProps> = ({
  description,
}) => {
  return (
    <div className="bg-[#1A1A1A] max-w-full md:max-w-[1000px] p-[35px] md:p-[30px] rounded-[12px] border border-solid border-[#262626]">
      <h3 className="text-lg md:text-xl text-[#999999]">Description</h3>
      <p className="text-white pt-3">{description || "None"}</p>
    </div>
  );
};
