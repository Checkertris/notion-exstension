export const replaceUnderscore = (string: string) => string.replace(/\_/gi, " ");

export const camelCase = (str: string): string => {
  var list = str.split(" ");
  list = list.map((word) => word.charAt(0).toUpperCase() + word.slice(1));
  return list.join();
};

const fixTextSpacing = (str: string) => {
  var output = str;
  output = output.replace(/ +/gi, " "); //remove spaces more than 1
  output = output.replace(/ ,/gi, ","); //remove space before comma
  output = output.replace(/[ ]*/, ""); //remove first spaces
  output = output.replace(/[ ]*$/, ""); //remove last spaces
  return output;
};

export const numberRegex = /\d/;
export const letterRegex = /[a-z]/;
export const bracketRegex = /\(([^)]+)\)/;
