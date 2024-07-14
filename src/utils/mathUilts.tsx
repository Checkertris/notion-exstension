export function clamp(number: number, min: number, max: number) {
  if (number > max) return max;
  else if (number < min) return min;
  else return number;
}

export const average = (a: number, b: number) => (Number(a) + Number(b)) / 2;

export const isNumber = (value): boolean => !isNaN(Number(value));

export function inRange(value: number, min: number, max: number, errorMessage?: string) {
  var trueness = min <= value && value <= max;
  if (!trueness && errorMessage) {
    console.log("value given: ", value, " range given:", min, max);
    throw RangeError(errorMessage);
  }
  return trueness;
}
