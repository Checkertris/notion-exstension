// import { PropertyManager, GenericProps } from "./propertyManager";
// import { PropertyType } from "~/services/api/notion";
// import { getFromPath } from "~/utils";

// export class Relation<F extends FormList> extends PropertyManager<PropertyType.relation, F> {
//   constructor(generic: GenericProps<PropertyType.relation, F>, type: "self-relation") {
//     switch (type) {
//       case "self-relation":
//         var post = (form: F) => ({ details: { database_id: getFromPath(form, generic.path).database.id } });
//         super(generic, { post: post });
//     }
//   }
// }
