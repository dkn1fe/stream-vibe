import { RootState } from "@/app/store/store";
import { Skeleton } from "@/shared/ui/skeleton";
import { useSelector } from "react-redux";

export const MoviesBanner = () => {
  const { moviesInfo, moviesInfoStatus } = useSelector(
    (state: RootState) => state.moviesPageSlice
  );
  return (
    <>
      {moviesInfoStatus === "loading" && (
        <Skeleton className="h-[800px] w-full rounded-lg" />
      )}
      {
        <div
          style={{
            backgroundImage: `url(${
              moviesInfo.coverUrl || moviesInfo.posterUrlPreview
            })`,
          }}
          className="flex-shrink-0 flex-grow-0 basis-full rounded-lg relative w-full h-[800px] bg-cover"
        >
          <div className="absolute inset-0 bg-black opacity-60 rounded-lg"></div>
          <div className="flex flex-col items-center justify-center pt-[280px] absolute inset-0 text-center z-10">
            <h3 className="text-5xl font-extrabold tracking-tight text-white">
              {moviesInfo.nameOriginal ||
                moviesInfo.nameRu ||
                moviesInfo.nameEn}
            </h3>
            <p className="text-[#999] pt-4 text-center">
              {moviesInfo.shortDescription ||
                moviesInfo.slogan ||
                moviesInfo.description}
            </p>
          </div>
        </div>
      }
    </>
  );
};
