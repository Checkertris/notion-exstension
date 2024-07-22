import { PropertyType } from "~/features/notion";
import { PropertyField } from "../propertyField";
import { DatabaseFormBuilder } from "../databaseFormBuilder";

export function property<T extends PropertyType>(type: T, label: string, description?: string): PropertyField<T> {
  return { type: type, label: label, description: description };
}

export function databaseForm() {
  return new DatabaseFormBuilder({});
}
