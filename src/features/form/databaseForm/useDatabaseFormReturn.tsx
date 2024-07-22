import { PropertyField } from "./propertyField";
import { DatabaseSchema } from "./types";
import { UseFormReturn } from "../form";
import { PropertyType } from "~/services/api/notion";

export interface UseDatabaseFormReturn<TKey extends string = string> extends UseFormReturn<DatabaseSchema<TKey>> {
  properties: Record<TKey, PropertyField<PropertyType>>;
}
