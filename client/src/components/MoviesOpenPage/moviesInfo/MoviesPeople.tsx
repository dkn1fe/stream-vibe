import { FC } from "react";
import { Skeleton } from "@/shared/ui/skeleton";

interface MoviesPeopleProps {
  screenwriter: {
    staffId: number;
    nameRu: string | null;
    nameEn: string | null;
    description: string | null;
    posterUrl: string;
  };
  producer: {
    staffId: number;
    nameRu: string | null;
    nameEn: string | null;
    description: string | null;
    posterUrl: string;
  };
  status: 'loading' | 'idle' | 'error';
}

export const MoviesPeople: FC<MoviesPeopleProps> = ({
  screenwriter,
  producer,
  status,
}) => {
  const peopleInfo = [
    {
      title: "Сценарист",
      name: screenwriter?.nameRu || screenwriter?.nameEn,
      img: screenwriter?.posterUrl,
    },
    {
      title: "Продюсер",
      name: producer?.nameRu || producer?.nameEn,
      img: producer?.posterUrl,
    },
  ];

  return (
    <>
      <div className="flex flex-col gap-2">
        {status === 'loading' ? (
          Array.from({ length: 2 }).map((_, index) => (
            <div key={index}>
              <Skeleton className="h-[20px] w-[100px] mt-8" />
              <div className="*-cursor-pointer max-w-[420px] p-2 marker:border border-solid border-[#262626] rounded-[8px] mt-2">
                <div className="flex items-center gap-2">
                  <Skeleton className="h-[50px] w-[50px]  rounded-[12px]" />
                  <Skeleton className="h-[20px] w-[150px]" />
                </div>
              </div>
            </div>
          ))
        ) : (
          peopleInfo.map((item, index) => (
            <div key={index}>
              <h3 className="text-[#999999] pt-8">{item.title}</h3>
              <div className="bg-[#141414] cursor-pointer max-w-[420px] p-2 marker:border border-solid border-[#262626] rounded-[8px]">
                <div className="flex items-center gap-2">
                  <img className="max-w-[50px] rounded-[12px]" src={item.img} />
                  <h3 className="text-white">{item.name}</h3>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
};
