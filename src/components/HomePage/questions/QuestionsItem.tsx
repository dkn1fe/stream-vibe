import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/shared/ui/accordion";
import { questionsList } from "@/shared/utils/questionsList";

export const QuestionsItem = () => {
  return (
    <>
      <div className="grid md:grid-cols-2 pt-8 md:pl-8">
        {questionsList.map((item) => (
          <Accordion key={item.id} type="single" collapsible className="w-full">
            <AccordionItem
              value={`item-${item.id}`}
              className="border-b border-[#444]"
            >
              <div className="flex items-center justify-start gap-3 pt-8">
                <div className="p-3 flex justify-center items-center text-white bg-[#1F1F1F] bg-opacity-80 w-[50px] rounded-lg">
                  0{item.id}
                </div>
                <AccordionTrigger className="flex justify-between w-full text-white md:text-[18px]">
                  {item.title}
                </AccordionTrigger>
              </div>
              <AccordionContent className="text-[#999999] text-[16px] pt-4 md:p-4">
                {item.title}
              </AccordionContent>
              {item.id <= 6 && (
                <div
                  className="h-[1px] mt-4 max-w-[500px]"
                  style={{
                    background:
                      "linear-gradient(to right, #E50000 0%, #E50000 17%, transparent 100%)",
                  }}
                />
              )}
            </AccordionItem>
          </Accordion>
        ))}
      </div>
    </>
  );
};
