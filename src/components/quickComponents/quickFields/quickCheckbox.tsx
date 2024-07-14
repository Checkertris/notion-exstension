import { Checkbox } from "~/services/shadcn/components/ui/checkbox";
import { cn } from "~/services/shadcn/lib/utils";
import { quickFieldProps } from "./props/quickFieldProps";

export interface quickCheckboxProps extends quickFieldProps<boolean> {
  text: string;
}

export const QuickCheckbox = ({ defaultValue, onChange, text }: quickCheckboxProps) => {
  return (
    <div className={cn("flex space-x-2")}>
      <div className="mt-1">
        <Checkbox defaultChecked={defaultValue} onCheckedChange={onChange} />
      </div>
      <p className="text-sm text-muted-foreground text-zinc-500">{text}</p>
    </div>
  );
};
