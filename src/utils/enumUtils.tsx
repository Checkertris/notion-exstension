import { isNumber } from "./mathUilts";
import { replaceUnderscore } from "./stringUtils";

export const getEnumKeyStrings = (enumme, removeUnderscore: boolean = false): string[] => {
  var keys = Object.keys(enumme);
  if (isNumber(keys[0])) keys = keys.filter((value) => !isNumber(value));
  if (removeUnderscore) keys = keys.map((key) => replaceUnderscore(key));
  return keys;
};
