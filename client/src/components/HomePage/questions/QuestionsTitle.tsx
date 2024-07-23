import { Button } from "@/shared/ui/button";

export const QuestionsTitle = () => {
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-start items-start md:justify-between">
      <div className="flex max-w-[1297px] flex-col justify-start">
        <h3 className="text-white text-[35px] max-[1440px]:text-[28px] max-[600px]:text-[20px]">
          Frequently Asked Questions
        </h3>
        <p className="pt-2 text-[18px] max-[1440px]:text-[16px] max-[600px]:text-[14px] text-[#999999]">
          Got questions? We've got answers! Check out our FAQ section to find
          answers to the most common questions about StreamVibe.
        </p>
      </div>
      <Button className="bg-[red] mt-8 text-white">Ask a Question</Button>
    </div>
  );
};
