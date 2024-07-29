import { boolean, object, string } from "yup";
import { DatabaseData, SimplePropertyData, ParentOfDatabase } from "~/features/notion";
import { LiteralRecord, reduceObject } from "~/utils";
import { yupCustom, isNewSchema } from "~/services/yup";
import { PropertyField } from "./iDatabaseForm";

type PropertiesSchema<T extends Record<string, PropertyField>> = LiteralRecord<{
  [k in keyof T]: typeof propertySchema
}>

const propertySchema = yupCustom<SimplePropertyData>().required("select a property")

const oldSchema = <T extends Record<string, PropertyField>>(properties: T) => {
  return object({
    database: yupCustom<DatabaseData>(),
    ...reduceObject(properties, { value: () => propertySchema }) as PropertiesSchema<T>
  })
}

const newSchema = object({
  parent: yupCustom<ParentOfDatabase>().required("select a parent page"),
  name: string().required("enter database name"),
})

const BaseSchema = object({
  isNew: boolean().required("select a database")
})

export function createDatabaseSchema<TKey extends string>(properties: Record<TKey, PropertyField>) {
  return isNewSchema(BaseSchema, newSchema, oldSchema(properties))
}
