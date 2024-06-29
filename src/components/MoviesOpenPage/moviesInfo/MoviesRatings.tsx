import { Star } from "lucide-react";
import { FC } from "react";

const getStarComponents = (rating: number) => {
  const filledStars = Math.floor(rating / 2);
  const hasHalfStar = rating % 2 >= 1;
  const emptyStars = 5 - filledStars - (hasHalfStar ? 1 : 0);

  const stars = [];
  for (let i = 0; i < filledStars; i++) {
    stars.push(<Star key={`filled-${i}`} fill="red" color="red" />);
  }
  if (hasHalfStar) {
    stars.push(
      <Star
        key="half"
        fill="red"
        color="red"
        style={{ clipPath: "inset(0 50% 0 0)" }}
      />
    );
  }
  for (let i = 0; i < emptyStars; i++) {
    stars.push(<Star key={`empty-${i}`} fill="#999999" color="#999999" />);
  }
  return stars;
};

interface MoviesRatingsProps {
  streamVibeRating: number | null
  IMDdRating: number | null;
}

export const MoviesRatings: FC<MoviesRatingsProps> = ({
  streamVibeRating,
  IMDdRating,
}) => {
  const IMDdRaitingStars = getStarComponents(IMDdRating || 0); 
  const streamVibeRatingStars = getStarComponents(streamVibeRating || 0); 

  return (
    <>
      <div className="flex pt-8 gap-3 items-center text-[#999999]">
        <Star />
        <h3 className="text-lg">Ratings</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 pt-4 gap-4">
        <div className="bg-[#141414] w-full md:w-[200px] h-[97px] rounded-[8px] p-[12px] border border-solid border-[#262626]">
          <h3 className="text-white text-lg">IMDb</h3>
          <div className="flex pt-2 items-center">
            {IMDdRating !== null ? (
              IMDdRaitingStars
            ) : (
              <Star fill="#999999" color="#999999" />
            )}
            <div className="text-white pl-2">
              {IMDdRating !== null ? IMDdRating : 0}
            </div>
          </div>
        </div>
        <div className="bg-[#141414] w-full md:w-[200px] h-[97px] rounded-[8px] p-[12px] border border-solid border-[#262626]">
          <h3 className="text-white text-lg">StreamVibe</h3>
          <div className="flex pt-2 items-center">
            {streamVibeRating !== null ? (
              streamVibeRatingStars
            ) : (
              <Star fill="#999999" color="#999999" />
            )}
            <div className="text-white pl-2">
              {streamVibeRating !== null ? streamVibeRating : 0}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
