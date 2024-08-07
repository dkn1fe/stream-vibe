import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/shared/ui/tabs";
import { plans } from "@/shared/utils/planCardInfo";
import { MobilePlan } from "./MobilePlan";

export const SubscriptionMobile = () => {
    const basicPlan = plans && plans[0];
    const standartPlan = plans && plans[1];
    const premiumPlan = plans && plans[2];

    return (
        <div className="flex justify-center items-center">
            <Tabs defaultValue="basic" className="w-full max-w-[400px]">
                <TabsList className="flex bg-black justify-center mb-5 space-x-2">
                    <TabsTrigger value='basic'>Basic</TabsTrigger>
                    <TabsTrigger value='standart'>Standart</TabsTrigger>
                    <TabsTrigger value='premium'>Premium</TabsTrigger>
                </TabsList>
                <TabsContent value="basic">
                    <MobilePlan plan={basicPlan} />
                </TabsContent>
                <TabsContent value="standart">
                    <MobilePlan plan={standartPlan} />
                </TabsContent>
                <TabsContent value="premium">
                    <MobilePlan plan={premiumPlan} />
                </TabsContent>
            </Tabs>
        </div>
    );
};
