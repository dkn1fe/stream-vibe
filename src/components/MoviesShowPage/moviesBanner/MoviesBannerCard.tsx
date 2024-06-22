import { FC } from "react";

interface MoviesBannerCardProps {
  index: number;
  coverUrl: string;
  title: string;
  description: string;
}

export const MoviesBannerCard: FC<MoviesBannerCardProps> = ({
  index,
  coverUrl,
  title,
  description,
}) => {
  return (
    <>
      <div
        key={index}
        style={{ backgroundImage: `url(${coverUrl})` }}
        className="flex-shrink-0 flex-grow-0 basis-full rounded-lg relative w-full h-[800px] bg-cover"
      >
        <div className="absolute inset-0 bg-black opacity-60 rounded-lg"></div>
        <div className="flex flex-col items-center justify-center pt-[280px] absolute inset-0 text-center z-10">
          <h3 className="text-5xl font-extrabold tracking-tight text-white">
            {title}
          </h3>
          <p className="text-[#999] pt-4 text-center">
            {description}
          </p>
        </div>
      </div>
    </>
  );
};
