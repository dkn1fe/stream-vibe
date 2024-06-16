import { Card, CardContent, CardDescription } from "@/shared/ui/card";
import { variouseDevicesList } from "@/shared/utils/devicesList";

export const VariousDeviceItems = () => {
  return (
    <>
      <div className="grid gap-10 pt-10 md:grid-cols-3">
        {variouseDevicesList.map((item) => (
          <Card key={item.id} className="bg-black bg-opacity-30 max-h-[283px]">
            <CardContent>
              <div className="p-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 px-4 bg-[#141414] rounded-xl">
                    <img src={item.img} alt={item.title} />
                  </div>
                  <div>
                    <p className="text-[20px] text-white">{item.title}</p>
                  </div>
                </div>
                <div className="max-w-[333px] text-[#999999] pt-3">
                  <p>
                    StreamVibe is optimized for both Android and iOS
                    smartphones. Download our app from the Google Play Store or
                    the Apple App Store.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
};
