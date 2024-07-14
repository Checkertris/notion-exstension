import { TermTuple } from "./ingredientData";
import { Units } from "~/tools/units";
import { average, numberRegex, letterRegex } from "~/utils";

function getFractionFromString(str: string): number {
  var strs = str.split(" ");
  var value = 0;
  strs.forEach((str) => {
    var fractionTerm = str.split("/");
    if (fractionTerm.length == 1) {
      value += Number(fractionTerm[0]);
    } else if (fractionTerm.length == 2) {
      value += Number(fractionTerm[0]) / Number(fractionTerm[1]);
    } else {
      throw ReferenceError("invalid fraction, input was " + str);
    }
  });
  return value;
}

function getRangeFromString(str: string): number {
  var strs = str.split("-");
  if (strs.length == 2) {
    return average(Number(strs[0]), Number(strs[1]));
  } else {
    throw ReferenceError("invalid range, input was" + str);
  }
}

function getValueFromDigits(str: string): number {
  if (str.includes("/")) {
    return getFractionFromString(str);
  } else if (str.includes("-")) {
    return getRangeFromString(str);
  } else {
    return Number(str);
  }
}

function getTermTuple<T>(str: string, startFunc: (str: string) => number, endFunc: (str: string, startIndex?: number) => number, termFunc: (stringTerm: string) => T): TermTuple<T> {
  var startIndex = startFunc(str);
  var endIndex = endFunc(str, startIndex);
  if (startIndex < 0 || endIndex < 0) return undefined;

  var stringTerm = str.slice(startIndex, endIndex);
  return [termFunc(stringTerm), [startIndex, endIndex]];
}

export function getUnitsTuple(str: string, word: string, units: Units): TermTuple<Units> {
  var startFunc = (str) => str.search(new RegExp(word, "i"));
  var endFuc = (str, start) => start + word.length;
  return getTermTuple(str, startFunc, endFuc, () => units);
}

export function getDigitsTuple(str: string): TermTuple<number> {
  var startFunc = (str) => str.search(new RegExp(numberRegex));
  var endFuc = (str, start) => start + str.slice(start).search(new RegExp(letterRegex, "i"));
  return getTermTuple(str, startFunc, endFuc, getValueFromDigits);
}
