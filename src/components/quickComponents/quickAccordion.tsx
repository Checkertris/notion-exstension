import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "~/services/shadcn/components/ui/accordion";

interface QuickAccordionProps {
  children?;
  open?: boolean;
}

export const QuickAccordion = ({ children, open }: QuickAccordionProps) => {
  return (
    <Accordion type="single" collapsible value={open && "this"}>
      <AccordionItem value="this">
        <AccordionContent>{children}</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

//        {trigger && <AccordionTrigger>{trigger}</AccordionTrigger>}
