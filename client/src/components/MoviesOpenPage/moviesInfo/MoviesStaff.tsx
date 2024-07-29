import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/shared/ui/button";
import { FC, useCallback } from "react";
import { Skeleton } from "@/shared/ui/skeleton";
import useEmblaCarousel from "embla-carousel-react";
import { Link } from "react-router-dom";

interface MoviesStaffProps {
  staffMovies: { posterUrl: string, staffId: number }[];
  status: "loading" | "idle" | "error";
}

export const MoviesStaff: FC<MoviesStaffProps> = ({ staffMovies, status }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
  });

  const scrollBy = 5;

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return;
    const currentIndex = emblaApi.selectedScrollSnap();
    emblaApi.scrollTo(Math.max(currentIndex - scrollBy, 0));
  }, [emblaApi]);

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return;
    const currentIndex = emblaApi.selectedScrollSnap();
    emblaApi.scrollTo(
      Math.min(currentIndex + scrollBy, emblaApi.scrollSnapList().length - 1)
    );
  }, [emblaApi]);

  return (
    <div className="max-w-[1000px] bg-[#1A1A1A] rounded-[12px] p-[30px] border border-solid border-[#262626]">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-[#999999]">Cast</h3>
        <div className="flex gap-3">
          <Button
            variant="secondary"
            className="rounded-[100px] bg-[#141414]"
            onClick={onPrevButtonClick}
          >
            <ArrowLeft color="white" size={16} />
          </Button>
          <Button
            variant="secondary"
            className="rounded-[100px] bg-[#141414]"
            onClick={onNextButtonClick}
          >
            <ArrowRight color="white" size={16} />
          </Button>
        </div>
      </div>
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex">
          {status === "loading"
            ? Array.from({ length: 10 }).map((_, index) => (
              <div key={index} className="flex-shrink-0 pr-5">
                <Skeleton className="h-[120px] w-[80px] rounded-lg mt-2" />
              </div>
            ))
            : staffMovies.map((item, index) => (
              <div key={index} className="flex-shrink-0 pr-5" >
                <Link to={`/staff/${item.staffId}`}>
                  <img
                    src={item.posterUrl}
                    className="h-[120px] w-[80px] cursor-pointer rounded-lg mt-2"
                    alt={`Poster ${index + 1}`}
                  />
                  </Link>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
