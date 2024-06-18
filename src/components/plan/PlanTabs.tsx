import { useState } from "react";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@radix-ui/react-tabs";
import { PlanCard } from "./PlanCard";

export const PlanTabs = () => {
  const [activeTab, setActiveTab] = useState("Monthly");

  return (
    <Tabs defaultValue="Monthly" onValueChange={setActiveTab}>
      <div className="flex pb-8 md:justify-end gap-3 items-center">
        <TabsList className="px-3 py-2 flex justify-center items-center gap-3 [border-radius:10px] bg-[#0F0F0F]">
          <TabsTrigger
            value="Monthly"
            className={`text-white flex items-center justify-center rounded-xl [transition:.3s] px-5 py-2 ${
              activeTab === "Monthly"
                ? "bg-[#1F1F1F] text-white font-semibold"
                : ""
            }`}
          >
            Monthly
          </TabsTrigger>
          <TabsTrigger
            value="Yearly"
            className={`text-white flex items-center justify-center rounded-xl [transition:.3s] px-4 py-2 ${
              activeTab === "Yearly"
                ? "bg-[#1F1F1F] text-white font-semibold"
                : ""
            }`}
          >
            Yearly
          </TabsTrigger>
        </TabsList>
      </div>
      <TabsContent value="Monthly">
        <PlanCard />
      </TabsContent>
      <TabsContent value="Yearly">
        <PlanCard />
      </TabsContent>
    </Tabs>
  );
};
