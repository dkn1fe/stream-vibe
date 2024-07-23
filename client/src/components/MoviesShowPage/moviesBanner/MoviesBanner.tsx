import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useDotButton } from "@/shared/hooks/useDotButton";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/shared/ui/button";
import { MoviesBannerCard } from "./MoviesBannerCard";
import MoviesBannerProgress from "./MoviesBannerProgress";
import { AppDispatch, RootState } from "@/app/store/store";
import { useEffect } from "react";
import { onGetMoviesList } from "@/shared/api/moviesApi";

export const MoviesBanner = () => {
  const dispatch = useDispatch<AppDispatch>();
  
  const { moviesCarouselList } = useSelector(
    (state: RootState) => state.moviesSlice
  );
  
  const [emblaRef, emblaApi] = useEmblaCarousel();
  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

    useEffect(() => {
      dispatch(onGetMoviesList());
    }, []);

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
  }, [emblaApi]);

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="relative w-full h-[800px]">
      <div ref={emblaRef} className="overflow-hidden w-full h-full">
        <div className="flex">
          {moviesCarouselList && moviesCarouselList.map((item:any,index: number) => (
            <MoviesBannerCard
              index = {index}
              title={item.nameOriginal}
              description={item.shortDescription}
              coverUrl={item.coverUrl}
            />
          ))}
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex items-center justify-between w-full px-8">
        <Button onClick={onPrevButtonClick} className="p-2">
          <ChevronLeft size={30} color="white" />
        </Button>

        <MoviesBannerProgress
          scrollSnaps={scrollSnaps as []}
          onDotButtonClick={onDotButtonClick}
          selectedIndex={selectedIndex}
        />

        <Button className="p-2" onClick={onNextButtonClick}>
          <ChevronRight size={30} color="white" />
        </Button>
      </div>
    </div>
  );
};
