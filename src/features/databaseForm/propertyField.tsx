import { PropertyType } from "~/services/api/notion";
import { PropertyData } from "~/services/api/notion/notionData/propertyData";

export interface PropertyField<T extends PropertyType = PropertyType> {
  type: T;
  label: string;
  description?: string;
  filter?: (property: PropertyData<T>) => boolean;
}
