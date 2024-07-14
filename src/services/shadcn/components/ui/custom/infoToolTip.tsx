import { cn } from "~/services/shadcn/lib/utils";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../tooltip";

function InfoToolTip({ children }: { children? }) {
  return (
    <div className="flex items-center space-x-2 mx-1 relative">
      <TooltipProvider delayDuration={0}>
        <Tooltip>
          <TooltipTrigger asChild>
            <span className={cn("w-3 h-3", "icon-[mynaui--info-circle]")}></span>
          </TooltipTrigger>
          <TooltipContent asChild>
            <div className="w-80">{children}</div>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}

export default InfoToolTip;
