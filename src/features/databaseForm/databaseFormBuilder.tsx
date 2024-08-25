import { PropertyField } from "./iDatabaseForm";
import { createDatabaseSchema } from "./createDatabaseSchema";
import { useDatabaseForm } from "./useDatabaseForm";
import { PropertyType } from "../notion";

export class DatabaseFormBuilder<T extends Record<string, PropertyField>> {
    add(label: string, type: PropertyType, description?: string) {
        return new DatabaseFormBuilder({ ...this._data, ...{ label, type, description } })
    }
    _build() {
        var form = new FormBuilder(createDatabaseSchema(this._data)).config("sync", "onChange").build();
        return useDatabaseForm(form, this._data);
    }
}