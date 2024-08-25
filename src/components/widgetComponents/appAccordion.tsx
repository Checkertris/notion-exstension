import { Accordion, AccordionContent, AccordionItem } from "~/services/shadcn/components/ui/accordion";

interface AppAccordionProps {
  children?;
  open?: boolean;
}

export const AppAccordion = ({ children, open }: AppAccordionProps) => {
  return (
    <Accordion type="single" collapsible value={open && "this"}>
      <AccordionItem value="this">
        <AccordionContent>{children}</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};