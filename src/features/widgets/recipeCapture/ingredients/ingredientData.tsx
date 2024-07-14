import { Units } from "~/tools/units";

export type TermTuple<T> = [term: T, range: [start: number, end: number]];

export interface IngredientData {
  digits: TermTuple<number>;
  units?: TermTuple<Units>;
  body: TermTuple<string>;
  original: string;
}

export interface IngredientDataGroup {
  heading: string;
  ingredients: IngredientData[];
}
