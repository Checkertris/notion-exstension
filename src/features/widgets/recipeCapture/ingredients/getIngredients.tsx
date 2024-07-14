import { UnitsInfo } from "~/tools/units";
import { bracketRegex } from "~/utils";
import { IngredientData, IngredientDataGroup, TermTuple } from "./ingredientData";
import { getDigitsTuple, getUnitsTuple } from "./methods";

function filterBracketTerms(str: string): string {
  var brackets = str.match(new RegExp(bracketRegex, "g"));
  if (brackets) {
    var newStr = str;
    brackets.forEach((bracket) => {
      if (!getIngredientData(bracket)) newStr = newStr.replace(bracket, "");
    });
    return newStr;
  }
  return str;
}

function getIngredientData(str: string): IngredientData {
  var digitsTuple = getDigitsTuple(str);
  if (digitsTuple) {
    Object.values(UnitsInfo).forEach((unitsData) => {
      unitsData.searchTerms.forEach((searchTerm) => {
        var unitsTuple = getUnitsTuple(str, searchTerm, unitsData.units);
        if (unitsTuple) {
          var unitsEnd = unitsTuple[1][1];
          var bodyTuple: TermTuple<string> = [str.slice(unitsEnd), [unitsEnd, str.length - 1]];
          return { original: str, digits: digitsTuple, units: unitsTuple, body: bodyTuple };
        }
      });
    });
    var digitsEnd = digitsTuple[1][1];
    var bodyTuple: TermTuple<string> = [str.slice(digitsEnd), [digitsEnd, str.length - 1]];
    return { original: str, digits: digitsTuple, body: bodyTuple };
  }
  return undefined;
}

export default async function getIngredients(str: string): Promise<IngredientDataGroup[]> {
  var strs = str.split(`\n`);
  var reducedObj = await strs.reduce(({ current, groups }, currentStr) => {
    if (!!currentStr) {
      var newStr = filterBracketTerms(str);
      var ingredientData = getIngredientData(newStr);
      if (ingredientData) {
        current.ingredients.push(getIngredientData(newStr));
      } else {
        groups.push(current);
        var newCurrent: IngredientDataGroup = { heading: currentStr, ingredients: [] };
        return { current: newCurrent, groups };
      }
    }
    return { current, groups };
  }, {} as { current: IngredientDataGroup; groups: IngredientDataGroup[] });
  var results = reducedObj.groups;
  results.push(reducedObj.current);
  return results;
}
