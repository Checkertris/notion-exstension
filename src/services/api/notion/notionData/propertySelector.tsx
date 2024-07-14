import { Formula, Select, MultiSelect, GenericPropertyData } from "./propertyData";
import { PropertyType } from "../enums";

export class PropertySelector {
  private getClass(type: keyof typeof PropertyType) {
    switch (type) {
      case "formula":
        return Formula;
      case "select":
        return Select;
      case "multi_select":
        return MultiSelect;
      default:
        return GenericPropertyData;
    }
  }

  constructor() {}

  extract(key: string, property: any) {
    var thisClass = this.getClass(property.type);
    return {};
  }
}
