// import { Formula } from "~/services/api/notion";
// import { prop, value, relatedProp } from "~/services/api/notion/formula/paramters";
// import { find, at, includes, lets, If } from "~/services/api/notion/formula/methods";
// import { UnitsDictionary } from "~/tools/units";
// import { FormValues } from "~/features/form";
// import { combineArrays, getEnumKeyStrings } from "~/utils";
// import { Select, SelectOption } from "~/services/api/notion";
// import { LiquidUnits, MassUnits, OtherUnits } from "~/tools/units";
// import { DatabaseFormValues } from "~/features/databaseManager";

// //original =  find([units, type, ratio][], current[0] == OU)  //[units,type,ratio]
// //prefered = find([units, type, ratio][], includes(PU, current[0]) && current[1] == original[1]) //[units,type,ratio]
// //OV / original[2] * prefered[2] * P + " " + preferedUnits[0]

// export function createCalculatedValueDetails({ database: { originalUnits, originalValue, preferedUnits, portion, recipe } }: { database: DatabaseFormValues<keyof typeof recipeCaptureProperties> }): Formula {
//   var OU = new prop<string>(originalUnits);
//   var OV = new prop<number>(originalValue);
//   var localPU = new prop<string[]>(preferedUnits);
//   var localP = new prop<string[]>(portion);

//   var PU = new If(localPU.string, localPU, new relatedProp(recipe, preferedUnits));
//   var P = new If(localP.string, localP, new relatedProp(recipe, portion));

//   var unitsMap: [string, string, number][] = Object.entries(UnitsDictionary).map(([key, data]) => [key, data.type, data.ratio]); //[units,type,ratio]
//   var getOriginal = (unitsMap) => new find(unitsMap, (current) => new at(current, 0).string + `==` + OU.string);
//   var getPrefered = (unitsMap, original) => new find(unitsMap, (current) => new includes(PU, new at(current, 0)).string + `&&` + new at(current, 1) + `==` + new at(original, 1));
//   var calculateResults = (original, prefered) => OV.string + `/` + new at(original, 2).string + `*` + new at(prefered, 2).string + `*` + P.string + ` ` + new at(prefered, 2).string;

//   var output = new lets({ unitsMap: new value(unitsMap) }, ({ unitsMap }) => {
//     return new lets({ original: getOriginal(unitsMap) }, ({ original }) => {
//       return new lets({ prefered: getPrefered(unitsMap, original) }, ({ prefered }) => {
//         return calculateResults(original, prefered);
//       }).string;
//     }).string;
//   }).string;

//   return { expression: output } as Formula;
// }

// function createOptions(enumme, color): SelectOption[] {
//   return getEnumKeyStrings(enumme, true).reduce((options, key) => {
//     options.push({ name: key, color: color });
//     return options;
//   }, [] as SelectOption[]);
// }
// const liquidOptions = (form: RecipeCaptureForm) => createOptions(LiquidUnits, form.colors.liquid);
// const massOptions = (form: RecipeCaptureForm) => createOptions(MassUnits, form.colors.mass);
// const otherOptions = (form: RecipeCaptureForm) => createOptions(OtherUnits, form.colors.others);

// export function createPreferedUnitsDetails({ main }: { main: RecipeCaptureForm }): Select {
//   return { options: combineArrays(liquidOptions(main), massOptions(main)) };
// }

// export function createOriginalUnitsDetails({ main }: { main: RecipeCaptureForm }): Select {
//   return { options: combineArrays(liquidOptions(main), massOptions(main), otherOptions(main)) };
// }
