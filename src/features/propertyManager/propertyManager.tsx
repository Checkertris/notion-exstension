// import { PropertyType, PropertyData, PropertyDetails } from "~/services/api/notion";
// import { FieldPathByValue } from "react-hook-form";
// import { getFromPath } from "~/utils";
// import { DatabaseFormValues } from "../databaseFormManager/types";

// export interface GenericProps<T extends PropertyType, F extends FormList> {
//   path: FieldPathByValue<F, DatabaseFormValues<any>>;
//   type: T;
//   label: string;
//   description?: string;
// }k

// export interface InternalProps<T extends PropertyType, F extends FormList> {
//   create?: (data: F) => PropertyDetails<T>;
//   post?: (data: F) => PropertyDetails<T>;
//   update?: (data: F) => PropertyDetails<T>;
// }

// export abstract class PropertyManager<T extends PropertyType = PropertyType, F extends FormList = unknown> {
//   form_props: PropertField<T>;
//   onCreate?: (data: F) => PropertyData<T>;
//   postCreate?: (data: F) => PropertyData<T>;
//   onUpdate?: (data: F) => PropertyData<T>;

//   constructor(generic: GenericProps<T, F>, internal: InternalProps<T, F>) {
//     this.onCreate = (form: F) => ({ name: this.form_props.label, details: internal.create(form), type: generic.type, id: undefined });
//     this.postCreate = (form: F) => ({ name: this.form_props.label, details: internal.post(form), type: generic.type, id: undefined });
//     this.onUpdate = (form: F) => ({ id: getFromPath(form, generic.path)[generic.label].id, details: internal.update(form), type: generic.type, name: undefined });
//   }
// }
