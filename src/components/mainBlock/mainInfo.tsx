import { Button } from "@/shared/ui/button";
import { Play } from "lucide-react";

export const MainInfo = () => {
  const availWidth = window.screen.availWidth;
  return (
    <div className="relative bg-[#1F1F1F] text-center mx-auto">
      <h2 className="text-white text-[32px] md:text-6xl  pt-10">
        The Best Streaming Experience
      </h2>
      {availWidth <= 550 && (
        <p className="text-[#B3B3B3] pt-10">
          StreamVibe is the best streaming experience for watching your favorite
          movies and shows on demand, anytime, anywhere.
        </p>
      )}
      {availWidth > 600 && (
        <p className="max-w-[1140px] text-[18px] max-[1440px]:max-w-[1080px] text-[#B3B3B3] max-[1440px]:text-[14px] pt-5 mx-auto">
          StreamVibe is the best streaming experience for watching your favorite
          movies and shows on demand, anytime, anywhere. With StreamVibe, you
          can enjoy a wide variety of content, including the latest
          blockbusters, classic movies, popular TV shows, and more. You can also
          create your own watchlists, so you can easily find the content you
          want to watch.
        </p>
      )}
      <Button className="bg-[red] mt-10" color="red" variant="default">
        <div className="flex items-center gap-1">
          <Play fill="white" size={20} />
          <p>Start Watching Now</p>
        </div>
      </Button>
    </div>
  );
};
