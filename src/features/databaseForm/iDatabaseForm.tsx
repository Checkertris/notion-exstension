import { UseFormReturn } from "react-hook-form";
import { createDatabaseSchema } from "./createDatabaseSchema";
import { PropertyType } from "../notion";

export interface PropertyField {
  label: string;
  type: PropertyType
  description?: string;
}

export type DatabaseSchema<TKey extends string> = ReturnType<typeof createDatabaseSchema<TKey>>;

export interface UseDatabaseFormReturn<TKey extends string = string> extends UseFormReturn<DatabaseSchema<TKey>> {
  properties: Record<TKey, PropertyField>;
}
