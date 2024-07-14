import { icon, newSym } from "~/constants";
import { Plus } from "lucide-react";
import { getEnumKeyStrings } from "~/utils";

export interface quickOption<T> {
  value: T;
  label: string;
  Icon?: icon;
}

export interface quickFieldProps<T> {
  onChange?: (x: T) => void;
  className?: string;
  subject?: string;
  placeholder?: string;
  defaultValue?: T;
}

export function optionNew(subject?: string): quickOption<typeof newSym> {
  return {
    value: newSym,
    label: subject ? `New ${subject}` : `new`,
    Icon: Plus,
  };
}

export const enumKeysToQuickOptions = (enumme, icons?: icon[]): quickOption<string>[] => {
  var strings = getEnumKeyStrings(enumme);
  var keys = Object.keys(enumme);
  return strings.map((string, index) => ({ label: string, value: keys[index], icon: icons[index] }));
};
