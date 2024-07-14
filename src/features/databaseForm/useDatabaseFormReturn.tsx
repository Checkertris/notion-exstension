import { PropertyType } from "~/services/api/notion";

import { PropertyField } from "./propertyField";
import { DatabaseSchema } from "./types";
import { UseFormReturn } from "../form";

export interface UseDatabaseFormReturn<TKey extends string = string> extends UseFormReturn<DatabaseSchema<TKey>> {
  properties: Record<TKey, PropertyField<PropertyType>>;
}
