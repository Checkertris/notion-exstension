import { UseFormReturn } from "../form";
import { DatabaseSchema, PropertyField } from "./iDatabaseForm";

export const useDatabaseForm = <TKey extends string>(form: UseFormReturn<DatabaseSchema<TKey>>, properties: Record<TKey, PropertyField>) => {
  return { ...form, properties };
};
