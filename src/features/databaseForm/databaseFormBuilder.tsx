import { IterableBuilder } from "../builder";
import { PropertyField } from "./propertyField";
import { createDatabaseSchema } from "./methods/createDatabaseSchema";
import { useDatabaseForm } from "./useDatabaseForm";
import { FormBuilder } from "../form";

export class DatabaseFormBuilder<T extends Record<string, PropertyField<any>>> extends IterableBuilder<T> {
  self = DatabaseFormBuilder;

  build() {
    var form = new FormBuilder(createDatabaseSchema(this.data)).config("sync", "onChange").build();
    return useDatabaseForm(form, this.data);
  }
}
