import PlanBanner from "../PlanBanner/PlanBanner";
import { PlanTitle } from "./PlanTitle";

export const Plan = () => {
  return (
    <div className="container">
        <PlanTitle />
        <div className="py-20">
          <PlanBanner/>
        </div>
    </div>
  );
};
