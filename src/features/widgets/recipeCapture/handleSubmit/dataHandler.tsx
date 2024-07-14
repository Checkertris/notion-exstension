// import { getEnumKeyStrings } from "~/utils";
// import { RecipeCaptureForm } from "../types";
// import { Select, SelectOption } from "~/services/api/notion";
// import { LiquidUnits, MassUnits } from "~/tools/units";

// const RecipeCaptureDataHandler = (form: RecipeCaptureForm) => {
//   const newRecipeCaptureDatabase = ({ I, OV, OU, PU, P, CV, R }: { I; OV; OU; PU; P; CV; R }): string => {
//     var propertyInfos = [] as PropertyInfo[];
//     propertyInfos.push({ name: I, type: PropertyType.rich_text });
//     propertyInfos.push({ name: OU, type: PropertyType.select, details: createOriginalUnitsDetails() });
//     propertyInfos.push({ name: OV, type: PropertyType.number });
//     propertyInfos.push({ name: PU, type: PropertyType.multi_select, details: createPreferedUnitsDetails() });
//     propertyInfos.push({ name: P, type: PropertyType.number });
//     propertyInfos.push({ name: CV, type: PropertyType.formula, details: createCalculatedValueDetails({ OV: OV, OU: OU, PU: PU, P: P, R: R }) });

//     //update relation info with newly created database id
//     var newDatabaseId;
//     createNewDatabase(form.recipe_parser.recipe_name, propertyInfos).then((response) => {
//       newDatabaseId = response.id;
//       updateDatabaseProperties(newDatabaseId, [{ name: "Recipe", type: PropertyType.relation, details: { database_id: newDatabaseId } }] as PropertyInfo[]);
//     });

//     return newDatabaseId;
//   };

//   const createRecipeCapturePages = (databaseId, recipeDatabaseId, databaseTitle, { I, OV, OU, R }: { I; OV; OU; R }) => {
//     var recipeProperties = [
//       {
//         name: databaseTitle,
//         type: PropertyType.title,
//         details: { title: [{ text: { content: "form.recipe_parser.recipe_name" } }] },
//       },
//     ];
//     var recipeId = "";
//     createNewPage(recipeDatabaseId, recipeProperties).then((response) => (response.id = recipeId));

//     form.recipe_parser.ingredients.forEach((item) => {
//       var properties = [] as PropertyInfo[];
//       properties.push({ name: I, type: PropertyType.rich_text, details: [{ text: { content: item.content.body } }] });
//       properties.push({ name: R, type: PropertyType.relation, details: [{ id: recipeId }] });
//       properties.push({ name: OV, type: PropertyType.number, details: item.value });
//       properties.push({ name: OU, type: PropertyType.select, details: { name: item.units.valueOf() } });
//       createNewPage(databaseId, properties);
//     });
//   };

//   const ProcessInfo = () => {
//     if (form.database_config.database == "new") {
//       var ingredient = "Ingredient";
//       var originalValue = "original value";
//       var originalUnits = "original units";
//       var preferedUnits = "prefered units";
//       var portion = "portion";
//       var calculatedValue = "calculated value";
//       var recipe = "Recipe";

//       var databaseId = newRecipeCaptureDatabase({ I: ingredient, OV: originalValue, OU: originalUnits, PU: preferedUnits, P: portion, CV: calculatedValue, R: recipe });
//       createRecipeCapturePages(databaseId, databaseId, "Name", { I: ingredient, OV: originalValue, OU: originalUnits, R: recipe });
//     } else {
//       databaseId = form.database_config.database.id;

//       var recipeProperty = form.database_config.database.properties.find((property) => (property.name = form.database_config.property_names.recipe));
//       var recipeDatabseId = recipeProperty.details.database_id;

//       var titleProperty = form.database_config.database.properties.find((property) => property.type == PropertyType.title);
//       var titlePropertyName = titleProperty.name;

//       var I = form.database_config.property_names.ingredient;
//       var OU = form.database_config.property_names.original_units;
//       var OV = form.database_config.property_names.original_value;
//       var R = form.database_config.property_names.recipe;

//       createRecipeCapturePages(databaseId, recipeDatabseId, titlePropertyName, { I: I, OV: OV, OU: OU, R: R });
//     }
//   };
// };
