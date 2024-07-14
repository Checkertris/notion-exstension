import { PropertyType, SelectColor } from "../enums";
import { DatabaseData } from "./databaseData";
import { NotionData } from "./notionData";

export abstract class PropertyData<T extends PropertyType = PropertyType> extends NotionData {
  property_type: T;

  abstract formatDetails(): object;

  abstract extractDetails(details: any);

  // isMatch(database: DatabaseData) {
  //   var testProperty = database.properties.find((property) => property.id == this.id)
  //   if (!testProperty) return "id"

  //   var testProps = Object.entries(testProperty)
  //   var thisProps = Object.entries(this)

  //   thisProps.forEach((prop, index)  => {
  //     if (prop != testProps[index])
  //   })

  // }

  extract([name, content]: [string, any]) {
    this.name = name;
    this.id = content.id;
    var details = content[this.property_type.toString()];
    this.extractDetails(details);
    return this;
  }

  format(): object {
    var key;
    if (this.id) key = this.id;
    else if (this.name) key = this.name;
    else {
      console.log(this);
      throw ReferenceError("invalid property");
    }
    return { [key]: { [this.property_type]: { ...this.formatDetails() } } };
  }
}

export class GenericPropertyData<T extends PropertyType> extends PropertyData<T> {
  details: any;

  formatDetails(): object {
    return this.details;
  }

  extractDetails(details: any) {
    this.details = details;
  }
}

export class Formula extends PropertyData<PropertyType.formula> {
  expression: string;

  extractDetails(details: any) {
    this.expression = details.expression;
  }

  formatDetails(): object {
    return { expression: this.expression };
  }
}
export abstract class SelectBase<T extends PropertyType.select | PropertyType.multi_select> extends PropertyData<T> {
  type: T;
  options: SelectOption[];

  extractDetails(details: any) {
    this.options = details.map((item) => ({ name: item.name, color: SelectColor[item.color] }));
  }

  formatDetails(): object {
    return this.options.map(({ name, color }) => {
      return { name, color: color.toString() };
    });
  }
}

export class Select extends SelectBase<PropertyType.select> {}

export class MultiSelect extends SelectBase<PropertyType.multi_select> {}

export interface SelectOption {
  name: string;
  color: SelectColor;
}

export interface Relation extends PropertyData<PropertyType.relation> {
  database_id: string;
  synced_property_name?: string;
  synced_property_id?: string;
}
