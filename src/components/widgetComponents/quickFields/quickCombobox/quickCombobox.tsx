import { useState, useEffect } from "react";
import { cn } from "~/services/shadcn/lib/utils";
import { RoundSpinner } from "~/services/shadcn/components/ui/spinner";
import { Button } from "~/services/shadcn/components/ui/button";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator } from "~/services/shadcn/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "~/services/shadcn/components/ui/popover";
import { Check, ChevronsUpDown } from "lucide-react";
import { quickOption, QuickInputProps } from "@/quickFields";

export type quickCommandGroupProps<T> = {
  queryFunc?: () => Promise<quickOption<T>[]>;
  staticOptions?: quickOption<T>[];
};

export interface quickComboboxProps<T> extends QuickInputProps<T> {
  plural: string;
  loadOnEmpty: boolean;
  optionGroups: quickCommandGroupProps<T>[];
}

export const QuickCombobox = <T,>({ subject, plural, onChange, loadOnEmpty, className, popoverClassName, optionGroups }: quickComboboxProps<T>) => {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState<string>();

  const QuickCommandItem = ({ Icon, label, value }: quickOption<T>) => {
    return (
      <CommandItem
        value={label}
        onSelect={() => {
          setOpen(false);
          setCurrent(label);
          onChange(value);
        }}
      >
        <Check className={cn(`mr-2 w-3 h-3`, current != label && (Icon ? "hidden" : "opacity-0"))} />
        {Icon && <Icon className={cn(`mr-2 w-3 h-3`, current == label && "hidden")} />}
        {label}
      </CommandItem>
    );
  };

  const QuickCommandGroup = ({ queryFunc, staticOptions }: quickCommandGroupProps<T>) => {
    const [loading, setLoading] = useState(false);
    const [options, setOptions] = useState<quickOption<T>[]>(null);

    async function refreshOptions() {
      setOptions([]);
      setLoading(true);
      await queryFunc()?.then(setOptions);
      setLoading(false);
    }

    useEffect(() => {
      if (open) refreshOptions();
    }, [open]);

    return (
      <CommandGroup>
        {options?.map((option) => {
          return <QuickCommandItem {...option} key={option.label} />;
        })}
        {staticOptions?.map((option) => (
          <QuickCommandItem {...option} key={option.label} />
        ))}
        {queryFunc && loadOnEmpty && loading && (
          <CommandItem>
            <RoundSpinner name="mr-2 w-3 h-3 shrink-0 opacity-50"></RoundSpinner>
            loading...
          </CommandItem>
        )}
      </CommandGroup>
    );
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" role="combobox" className={cn("font-light h-9 justify-between", className)}>
          {current ? current : `Select a ${subject}...`}
          <ChevronsUpDown className={`ml-2 w-3 h-3 shrink-0 opacity-50`} />
        </Button>
      </PopoverTrigger>
      <PopoverContent className={cn("p-0", popoverClassName)}>
        <Command>
          <CommandInput placeholder={`Search ${plural}...`} className="h-9" />
          <CommandList>
            <CommandEmpty>{`no ${subject} found.`}</CommandEmpty>
            {optionGroups?.map((group, index) => (
              <div key={cn("div-", index)}>
                <QuickCommandGroup {...group} key={index} />
                {index !== optionGroups.length - 1 && <CommandSeparator key={cn("seperator-", index)} />}
              </div>
            ))}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};
