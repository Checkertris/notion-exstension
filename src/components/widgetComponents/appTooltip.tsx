import { Tooltip, TooltipTrigger, TooltipProvider, TooltipContent } from "~/services/shadcn/components/ui/tooltip";
import { cn } from "~/services/shadcn/lib/utils";

export const AppTooltip = ({ label, children }: { label: string; children }) => {
  return (
    <TooltipProvider>
      <Tooltip key={cn(label, "-tooltip")}>
        <TooltipTrigger key={cn(label, "-trigger")} asChild>
          {children}
        </TooltipTrigger>
        <TooltipContent key={cn(label, "-content")} side="right" sideOffset={5}>
          {label}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
