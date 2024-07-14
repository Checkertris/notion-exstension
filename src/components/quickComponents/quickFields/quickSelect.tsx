import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, GhostSelectTrigger } from "~/services/shadcn/components/ui/custom/select";
import { cn } from "~/services/shadcn/lib/utils";
import { quickOption, quickFieldProps } from "./props/quickFieldProps";

export interface quickSelectProps extends quickFieldProps<string> {
  options: quickOption<string>[];
  emptyMessage?: string;
  style?: "ghost";
}

export const QuickSelect = ({ options, style, defaultValue, className, onChange, emptyMessage, placeholder, subject }: quickSelectProps) => {
  const Trigger = style == "ghost" ? GhostSelectTrigger : SelectTrigger;
  const hasOptions = !!options;

  function getPlaceholder() {
    if (!hasOptions && emptyMessage) return emptyMessage;
    else if (placeholder) return placeholder;
    else return "select a " + subject;
  }

  return (
    <Select defaultValue={defaultValue} onValueChange={onChange}>
      <Trigger className={cn(className)}>
        <SelectValue placeholder={getPlaceholder()} />
      </Trigger>
      {hasOptions ? (
        <SelectContent>
          {options.map(({ value, label }) => (
            <SelectItem key={label} value={value}>
              {label}
            </SelectItem>
          ))}
        </SelectContent>
      ) : (
        !emptyMessage && <SelectContent />
      )}
    </Select>
  );
};
