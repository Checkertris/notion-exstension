import { object, string } from "yup";
import { yupCustom, unique } from "~/services/api/yup";
import { PropertyType, DatabaseData } from "~/services/api/notion";
import { newSym, workspaceSym } from "~/constants";
import { isEqual, mergeObjects, reduceObject } from "~/utils";
import { PropertyField } from "../propertyField";

const methods = [unique];

function propertySchema(type: PropertyType) {
  return string().required("select a property").unique("duplicate property");
}

function propertiesSchema(properties: Record<string, PropertyField<PropertyType>>) {
  return reduceObject(properties, { value: ([key, property]) => propertySchema(property.type) });
}

const newSchema = {
  parent: yupCustom<string | typeof workspaceSym>().required("select a parent page"),
  name: string().required("enter database name"),
};

const BaseSchema = {
  database: yupCustom<DatabaseData | typeof newSym>().required("select a database"),
};

export function createDatabaseSchema<TKey extends string>(properties: Record<TKey, PropertyField<PropertyType>>) {
  return object(mergeObjects(BaseSchema, newSchema, propertiesSchema(properties))).when(["database"], ([database]: [DatabaseData | typeof newSym]) => {
    if (isEqual<typeof newSym>(database)) {
      return object({ ...BaseSchema, ...newSchema });
    } else {
      return object({ ...BaseSchema, ...propertiesSchema(properties) });
    }
  });
}
