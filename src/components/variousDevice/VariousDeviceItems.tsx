import { Card, CardContent, CardDescription } from "@/shared/ui/card";
import { variouseDevicesList } from "@/shared/utils/devicesList";

export const VariousDeviceItems = () => {
   const gradientStyle = {
        background: 'rgba(0, 0, 0, 0.06), linear-gradient(230deg, rgba(229, 0, 0, 0.5) 0%, rgba(229, 0, 0, 0.5) 81.37%)'
      };
  return (
    <>
      <div className="grid gap-10 grid-cols-3">
        <Card className="bg-black bg-opacity-10" style={gradientStyle}>
          <CardContent>
            <div className="p-4">
              <div className="flex items-center gap-3">
                <div className="p-4 px-5 bg-black rounded-xl">
                  <img src={variouseDevicesList[0].img} />
                </div>
                <div className="">
                  <p className="text-[20px] text-white">
                    {variouseDevicesList[0].title}
                  </p>
                </div>
              </div>
              <div className="max-w-[333px]">
                <p>
                  StreamVibe is optimized for both Android and iOS smartphones.
                  Download our app from the Google Play Store or the Apple App
                  Store
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};
