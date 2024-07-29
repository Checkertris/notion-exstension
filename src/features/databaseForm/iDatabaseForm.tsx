import { PropertyType } from "../notion";
import { UseFormReturn } from "../form";
import { createDatabaseSchema } from "./createDatabaseSchema";

export interface PropertyField {
  label: string;
  type: PropertyType
  description?: string;
}

export type DatabaseSchema<TKey extends string> = ReturnType<typeof createDatabaseSchema<TKey>>;

export interface UseDatabaseFormReturn<TKey extends string = string> extends UseFormReturn<DatabaseSchema<TKey>> {
  properties: Record<TKey, PropertyField>;
}
