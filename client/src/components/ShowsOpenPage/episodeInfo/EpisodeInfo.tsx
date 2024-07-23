import { RootState } from "@/app/store/store";
import { useSelector } from "react-redux";
import { getZero } from "@/shared/utils/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/shared/ui/accordion";

export const EpisodeInfo = () => {
  const { dataAboutEpisode } = useSelector(
    (state: RootState) => state.showsPageSlice
  );

  return (
    <div className="bg-[#1A1A1A] p-[40px] rounded-[12px] max-w-[1000px] min-h-[400px]">
      <h3 className="text-white text-2xl">Seasons and Episodes</h3>
      {dataAboutEpisode.map((item: any) => (
        <div
          key={item.number}
          className="max-w-[900px] mt-5 bg-[#0F0F0F] py-[24px] px-[50px] rounded-[12px]"
        >
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value={`item-${item.number}`}>
              <AccordionTrigger
                className="flex gap-2 border-t border-b border-gray-600 py-2"
              >
                <div className="flex items-center gap-2">
                  <h3 className="text-white text-xl">
                    Season {getZero(item.number)}
                  </h3>
                  <p className="text-[#999999] text-sm">
                    {item.episodes.length} episodes
                  </p>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col justify-start pt-10 gap-10">
                  {item.episodes.map((episode: any) => (
                    <div
                      key={episode.episodeNumber}
                      className="flex flex-col border-t border-b border-gray-600 py-5"
                    >
                      <div className="flex items-center gap-5">
                        <h3 className="text-[#999999] text-[30px]">
                          {getZero(episode.episodeNumber)}
                        </h3>
                        <div className="flex flex-col items-start justify-start">
                          <h3 className="text-white text-lg">
                            {episode.nameRu || episode.nameEn}
                          </h3>
                          <p className="text-[#999999]">
                            {episode.synopsis || "none"}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      ))}
    </div>
  );
};
