import { PlanCardType } from "@/shared/types/planCardTypes";
import { Button } from "@/shared/ui/button";
import { Card, CardContent } from "@/shared/ui/card";
import { FC } from "react";

interface PlanCardInfoProps {
  planCardInfo: PlanCardType[]
}

export const PlanCard: FC<PlanCardInfoProps> = ({ planCardInfo }) => {
  return (
    <div className="grid lg:grid-cols-3 gap-8">
      {planCardInfo.map((item) => (
        <Card className="max-h-[425px] bg-[#1A1A1A] p-6 rounded-lg shadow-lg">
          <CardContent>
            <div className="flex flex-col items-start space-y-4">
              <h3 className="text-white text-xl font-semibold">{item.title}</h3>
              <p className="text-gray-400">{item.description}</p>
              <h3 className="text-white text-4xl font-bold">
                ${item.price}
                <span className="text-gray-400 text-lg font-normal">
                  / month
                </span>
              </h3>
            </div>
            <div className="flex space-x-4 mt-6">
              <Button
                variant="secondary"
                className="bg-black text-white px-5 py-3 rounded-md"
              >
                Start Free Trial
              </Button>
              <Button className="bg-red-600 text-white px-5 py-3 rounded-md">
                Choose Plan
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
