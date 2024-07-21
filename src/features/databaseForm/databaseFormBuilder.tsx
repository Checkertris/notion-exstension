import { form } from "../form";
import { IterableBuilder } from "../builder";

import { PropertyField } from "./propertyField";
import { createDatabaseSchema } from "./methods/createDatabaseSchema";
import { UseDatabaseFormReturn } from "./useDatabaseFormReturn";
import { useDatabaseForm } from "./useDatabaseForm";

export class DatabaseFormBuilder<TKey extends string> extends IterableBuilder<UseDatabaseFormReturn<TKey>, Record<TKey, PropertyField>, PropertyField> {
  self = DatabaseFormBuilder<string>;

  build() {
    var formReturn = form(createDatabaseSchema(this.data)).config("sync", "onChange").build();
    return useDatabaseForm(formReturn, this.data);
  }
}
