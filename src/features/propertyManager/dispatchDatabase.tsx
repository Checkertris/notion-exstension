// import { FormList } from "~/features/form";
// import { PropertyManager, PropertyAction } from "../propertyManager/propertyManager";
// import { newSym } from "~/constants";
// import { createNewDatabase, updateDatabase, PropertyType, DatabaseData } from "~/services/api/notion";
// import { isEqual } from "~/utils";
// import { DatabaseFormValues } from "../types";
// import { PropertyDataBase } from "~/services/api/notion/notionData/propertyData";

// interface DispatchProps<P extends string, F extends FormList> {
//   forms: F;
//   thisForm: DatabaseFormValues<P>;
//   properties: Record<P, PropertyManager<F>>;
// }

// export async function dispatchDatabase<P extends string, F extends FormList>({ forms, thisForm, properties }: DispatchProps<P, F>): Promise<DatabaseData> {
//   const propertyEntries = Object.entries(properties) as [P, PropertyManager<F>][];

//   function getPropertyData<T extends PropertyType>(property: PropertyManager<F, T>): PropertyDataBase<T> {
//     switch (property.action) {
//       case PropertyAction.APPLY:
//         return property.apply;
//       case PropertyAction.TRANSFORM:
//         return property.transform(forms);
//     }
//   }

//   if (typeof thisForm.database == typeof newSym) {
//     var newProperties: PropertyDataBase[] = propertyEntries.map(([key, prop]) => ({ name: prop.label, type: prop.type, details: getPropertyData(prop) }));
//     var newDatabase = await createNewDatabase({ title: thisForm.name, parent: thisForm.parent, properties: newProperties });

//     var selfRelations: PropertyDataBase<PropertyType.self_relation>[] = propertyEntries.map(([key, prop]) => {
//       if (prop.type == PropertyType.self_relation) return { name: prop.label, type: PropertyType.self_relation, details: getPropertyData(prop) };
//     });
//     if (selfRelations) return await updateDatabase({ id: newDatabase.id, properties: selfRelations });
//     return newDatabase;
//   } else if (isEqual<DatabaseData>(thisForm.database)) {
//     var newProperties: PropertyDataBase[] = Object.entries(properties).map(([key, property]: [string, PropertyManager<F>]) => ({ name: thisForm[key], type: property.type, details: getPropertyData(property) }));
//     return await updateDatabase({ id: thisForm.database.id, properties: newProperties });
//   } else {
//     console.log("database:", thisForm);
//     throw ReferenceError("invalid database");
//   }
// }
