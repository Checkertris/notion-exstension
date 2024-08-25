import { Accordion, AccordionContent, AccordionItem } from "~/services/shadcn/components/ui/accordion";

interface AppMultiAccordionProps {
  current: number;
  items: JSX.Element[];
}

export const AppMultiAccordion = ({ items, current }: AppMultiAccordionProps) => {
  return (
    <Accordion type="single" collapsible value={current != undefined && current.toString()}>
      {items.map((item, index) => (
        <AccordionItem className={current != index && "hidden"} value={index.toString()} key={index}>
          <AccordionContent>{item}</AccordionContent>
        </AccordionItem>
      ))}
      <AccordionItem className={current != undefined && "hidden"} value="">
        <AccordionContent />
      </AccordionItem>
    </Accordion>
  );
};
