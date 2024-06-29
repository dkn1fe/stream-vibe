import { FC } from "react";

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
}

export const MoviesPeople: FC<MoviesPeopleProps> = ({
  screenwriter,
  producer,
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
        {peopleInfo.map((item: any) => (
          <>
            <h3 className="text-[#999999] pt-8">{item.title}</h3>
            <div className="bg-[#141414] cursor-pointer max-w-[420px] p-2 marker:border border-solid border-[#262626] rounded-[8px]">
              <div className="flex items-center gap-2">
                <img className="max-w-[50px] rounded-[12px]" src={item.img} />
                <h3 className="text-white">{item.name}</h3>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
};
