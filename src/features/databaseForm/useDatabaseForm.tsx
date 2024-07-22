import { UseFormReturn } from "../form";
import { DatabaseSchema } from "./types";
import { PropertyField } from "./propertyField";

export const useDatabaseForm = <TKey extends string>(form: UseFormReturn<DatabaseSchema<TKey>>, properties: Record<TKey, PropertyField<any>>) => {
  return { ...form, properties };
};
