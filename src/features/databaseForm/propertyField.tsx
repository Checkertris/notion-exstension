import { PropertyType } from "~/features/notion";
import { Property } from "~/services/api/notion/notionData/propertyTools/tools/propertyTool";

export interface PropertyField<T extends PropertyType = PropertyType> {
  type: T;
  label: string;
  description?: string;
  filter?: (property: Property<T>) => boolean;
}
