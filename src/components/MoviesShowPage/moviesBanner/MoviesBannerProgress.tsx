import React from "react";
import clsx from "clsx";

interface IndicatorProps {
  selectedIndex: number;
  onDotButtonClick: (index: number) => void;
  scrollSnaps: [];
}

export const MoviesBannerProgress: React.FC<IndicatorProps> = ({
  selectedIndex,
  onDotButtonClick,
  scrollSnaps,
}) => {
  return (
    <div className="flex items-center mx-2">
      {scrollSnaps.map((_, index) => (
        <div
          onClick={() => onDotButtonClick(index)}
          key={index}
          className={clsx(
            "h-1 mx-1 rounded transition-all duration-300",
            index === selectedIndex ? "w-6 bg-red-500" : "w-4 bg-gray-500"
          )}
        />
      ))}
    </div>
  );
};

export default MoviesBannerProgress;
