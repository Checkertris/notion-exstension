
export const replaceUnderscore = (string: string) => string.replace(/\_/gi, " ");

export const camelCase = (str: string): string => {
  var list = str.split(" ");
  list = list.map((word) => word.charAt(0).toUpperCase() + word.slice(1));
  return list.join();
};

export const numberRegex = /\d/;
export const letterRegex = /[a-z]/;
export const bracketRegex = /\(([^)]+)\)/;


export function clamp(number: number, min: number, max: number) {
  if (number > max) return max;
  else if (number < min) return min;
  else return number;
}

export const average = (a: number, b: number) => (Number(a) + Number(b)) / 2;

export const isNumber = (value): boolean => !isNaN(Number(value));


export const getEnumKeyStrings = (enumme, removeUnderscore: boolean = false): string[] => {
  var keys = Object.keys(enumme);
  if (isNumber(keys[0])) keys = keys.filter((value) => !isNumber(value));
  if (removeUnderscore) keys = keys.map((key) => replaceUnderscore(key));
  return keys;
};