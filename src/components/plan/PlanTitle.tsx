import { PlanTabs } from "./PlanTabs";

export const PlanTitle = () => {
  return (
    <div className="flex flex-col justify-between mb-10 md:space-x-8">
      <div className="flex max-w-[1297px] flex-col justify-start mb-6 md:mb-0">
        <h3 className="text-white text-[35px] max-[1440px]:text-[28px] max-[600px]:text-[20px]">
          Choose the plan that's right for you
        </h3>
        <p className="pt-2 text-[18px] max-[1440px]:text-[16px] max-[600px]:text-[14px] text-[#999999]">
          Join StreamVibe and select from our flexible subscription options
          tailored to suit your viewing preferences. Get ready for non-stop
          entertainment!
        </p>
      </div>
      <div className="md:-mt-12">
      <PlanTabs />
      </div>
    </div>
  );
};
