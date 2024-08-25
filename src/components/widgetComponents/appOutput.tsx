import { Badge } from "~/services/shadcn/components/ui/badge";
import { cn } from "~/services/shadcn/lib/utils";

export const AppOutput = ({ children, className }: { children; className?: string }) => {
  return (
    <div className={cn("relative flex h-full min-h-60 flex-col rounded-xl bg-zinc-50 p-4", className)}>
      {children}
      <Badge variant="secondary" className="absolute right-3 bottom-3 bg-zinc-100">
        Output
      </Badge>
    </div>
  );
};
