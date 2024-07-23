import React  from "react";
import clsx from "clsx";

interface IndicatorProps {
  selectedIndex: number;
}

const CarouselProgress: React.FC<IndicatorProps> = ({ selectedIndex }) => {
  return (
    <div className="flex items-center mx-2">
      {[...Array(4)].map((_, index) => (
        <div
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

export default CarouselProgress;
