import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/shared/ui/button";
import { useEffect, useState } from "react";
import { MoviesShowsCarouselProps } from "../../../shared/types/moviesShowsTypes";
import useEmblaCarousel from "embla-carousel-react";
import ShowsCarouselProgress from "./ShowsCarouselProgress";
import { Link } from "react-router-dom";

const ShowsCarousel: React.FC<MoviesShowsCarouselProps> = ({
  title,
  movies,
  styles,
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onPrevButtonClick = () => {
    if (!emblaApi) return;
    emblaApi.scrollTo(selectedIndex - 5);
  };

  const onNextButtonClick = () => {
    if (!emblaApi) return;
    emblaApi.scrollTo(selectedIndex + 5);
  };

  const onSelect = () => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  };

  useEffect(() => {
    if (!emblaApi) return;

    emblaApi.on("select", onSelect);

    if (movies && movies.length > 0) {
      setScrollSnaps(emblaApi.scrollSnapList());
    }
  }, [emblaApi, movies]);

  const totalIndicators = Math.ceil(scrollSnaps.length / 5);

  const onDotButtonClick = (index: number) => {
    if (!emblaApi) return;
    emblaApi.scrollTo(index * 5);
  };

  return (
    <div className="container py-10 mt-12">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-4xl text-white">{title}</h2>
        <div className="flex items-center bg-[#0F0F0F] p-4 rounded-lg max-xl:hidden">
          <Button className="p-2" onClick={onPrevButtonClick}>
            <ChevronLeft size={30} color="white" />
          </Button>

          <ShowsCarouselProgress
            totalIndicators={totalIndicators}
            onDotButtonClick={onDotButtonClick}
            selectedIndex={selectedIndex / 5}
          />

          <Button className="p-2 " onClick={onNextButtonClick}>
            <ChevronRight size={30} color="white" />
          </Button>
        </div>
      </div>
      <div className="relative overflow-hidden">
        <div ref={emblaRef} className="overflow-hidden">
          <div className="flex pt-10">
            {Array.isArray(movies) && movies.length > 0 ? (
              movies.map((item, index) => (
                <div key={index} className={styles.card}>
                  <img
                    src={item.image || item.posterUrl}
                    alt={item.title}
                    className={styles.image}
                  />
                  <Link to={`/shows/${item.kinopoiskId || item.filmId}`}>
                    <div className="mt-2">
                      {title === "Popular Top 10 in Genres" && (
                        <div className="w-16 bg-[#E50000] rounded-md p-2 text-white text-xs">
                          Top 10 In
                        </div>
                      )}
                      {title === "New Releases" && (
                        <div className=" bg-[#141414] rounded-lg border border-solid border-[#262626]  p-2 text-[#999999] text-center text-xs">
                          Released in {item.year}
                        </div>
                      )}
                      {title === "Must - Watch Movies" && (
                        <div className="bg-[#141414] rounded-lg border border-solid border-[#262626] w-1/2 p-2 text-[#999999] text-right">
                          <span className="mr-2">Rating:</span>
                          <span className=" bg-[#585656] rounded-md p-1">
                            {item.rating}
                          </span>
                        </div>
                      )}
                      <div className="flex items-center justify-between  text-white">
                        <h3 className={styles.title}>{item.title}</h3>
                        {(title === "Our Genres" ||
                          title === "Popular Top 10 in Genres") && (
                          <ArrowRight color="white" />
                        )}
                      </div>
                    </div>
                  </Link>
                </div>
              ))
            ) : (
              <div className="text-white">No movies available</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowsCarousel;
