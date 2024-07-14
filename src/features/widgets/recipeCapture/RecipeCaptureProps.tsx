// import { object, string, boolean } from "yup";
// import { PropertyType, SelectColor } from "~/services/api/notion";

// import { IngredientDataGroup } from "./ingredients/ingredientData";
// import getIngredients from "./ingredients/getIngredients";
// import { yupEnumKeys, yupCustom } from "~/services/api/yup";
// import RecipeOutput from "./ui/recipeOutput";

// const fieldsets = [
//   {
//     label: "Configure Database",
//     database: "main",
//     items: [
//       {
//         row: [
//           {
//             label: "Liquid",
//             input: { path: "colors.liquid", select: { options: enumToQuickOptions(SelectColor) } },
//           },
//           {
//             label: "Mass",
//             input: { path: "colors.mass", select: { options: enumToQuickOptions(SelectColor) } },
//           },
//           {
//             label: "Others",
//             input: { path: "colors.others", select: { options: enumToQuickOptions(SelectColor) } },
//           },
//         ],
//       },
//     ],
//   },
//   {
//     label: "Paste Recipe",
//     stretchHeight: true,
//     items: [
//       {
//         input: { path: "ingredients", transform: getIngredients, textArea: { placeholder: "Paste recipe...", resize: "false", mode: "onChange", className: "min-h-60" } },
//       },
//       {
//         output: { content: <RecipeOutput /> },
//       },
//     ],
//   },
//   {
//     label: "Options",
//     gap: 4,
//     items: [
//       {
//         input: { path: "name", text: { placeholder: "Recipe name", mode: "onBlur" } },
//       },
//       {
//         indent: true,
//         input: { path: "nested", checkbox: { text: "keep ingredientsnested under sub-headings" } },
//       },
//     ],
//   },
// ];

// const allArgs = widgetmanagerArgs(
//   {
//     schema: object({
//       color: object({
//         liquid: yupEnumKeys(SelectColor),
//         mass: yupEnumKeys(SelectColor),
//         others: yupEnumKeys(SelectColor),
//       }),
//       ingredients: yupCustom<IngredientDataGroup[]>().required("recipe ingredients required"),
//       name: string().required("recipe name required"),
//       nested: boolean(),
//     }),
//     defaultValues: {
//       nested: false,
//       color: { liquid: "default", mass: "default", others: "default" },
//     },
//     config: { syncMode: "sync", validationMode: "onSubmit" },
//   },
//   {
//     main: {
//       ingredients: {
//         label: "Ingredient",
//         type: PropertyType.rich_text,
//         description: "contains the ingredient's description",
//       },
//       recipe: {
//         label: "Recipe",
//         type: PropertyType.relation,
//         description: "the parent page that corresponds to the ingredient's recipe",
//         [PropertyAction.SELF_RELATION]: { database_id: "" },
//       },
//       originalUnits: {
//         label: "Original Units",
//         type: PropertyType.select,
//         description:
//           "the units used in the original recipe, this value can be changed by the user and the portion to calculate will change accordingly. note that any select options that do not match the names of the preset units of measurements will be overwritten",
//         [PropertyAction.TRANSFORM]: (potato) => potato,
//       },
//     },
//   }
// );

// const K = {
//   ingredients: { label: "Ingredient", type: PropertyType.rich_text, [PropertyAction.NONE]: {}, description: "contains the ingredient's description" },
//   recipe: { label: "Recipe", type: PropertyType.relation, [PropertyAction.SELF_RELATION]: { database_id: "" }, description: "the parent page that corresponds to the ingredient's recipe" },
//   originalUnits: {
//     label: "Original Units",
//     type: PropertyType.select,
//     [PropertyAction.TRANSFORM]: createOriginalUnitsDetails,
//     description:
//       "the units used in the original recipe, this value can be changed by the user and the portion to calculate will change accordingly. note that any select options that do not match the names of the preset units of measurements will be overwritten",
//   },
//   originalValue: {
//     label: "Original Value",
//     type: PropertyType.number,
//     [PropertyAction.NONE]: {},
//     description: "the amount specified in the original recipe, this value can be changed by the user and the portion to calculate will change accordingly.",
//   },
//   calculatedValue: {
//     label: "Calculated Value",
//     type: PropertyType.formula,
//     [PropertyAction.TRANSFORM]: createCalculatedValueDetails,
//     description: "for lookup of portion in parent Recipe, you can hide this property from view",
//   },
//   preferedUnits: {
//     label: "Prefered Units",
//     type: PropertyType.multi_select,
//     [PropertyAction.TRANSFORM]: createPreferedUnitsDetails,
//     description: "specifies the the prefered units the Original Value should be converted to. units specified in the child page will take priority, otherwise it will be taken from the parent Recipe.",
//   },
//   portion: {
//     label: "Portion",
//     type: PropertyType.number,
//     [PropertyAction.NONE]: {},
//     description: "for lookup of portion in parent Recipe, you can hide this property from view",
//   },
// };
