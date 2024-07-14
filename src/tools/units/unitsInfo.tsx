import { LiquidUnits, MassUnits, Units, UnitsType, OtherUnits } from "./unitsEnum";
import { reduceObject } from "~/utils";

interface UnitsData {
  readonly type: UnitsType;
  readonly units: Units;
  readonly text: string;
  readonly ratio: number;
  readonly searchTerms: string[];
}

const internal = [
  { units: LiquidUnits.tsp, text: "teaspoon", ratio: 5 },
  { units: LiquidUnits.tbsp, text: "tablespoon", ratio: 15 },
  { units: LiquidUnits.cup, text: "cup", ratio: 237 },
  { units: LiquidUnits.ml, text: "milliliter", ratio: 1 },
  { units: LiquidUnits.l, text: "liter", ratio: 1000 },
  { units: LiquidUnits.fl_oz, text: "fluid ounce", ratio: 29 },
  { units: MassUnits.lb, text: "pound", ratio: 454 },
  { units: MassUnits.g, text: "gram", ratio: 1 },
  { units: MassUnits.kg, text: "kilogram", ratio: 1000 },
  { units: MassUnits.oz, text: "ounce", ratio: 28 },
];

export const getUnitsType = (input): UnitsType => {
  if (LiquidUnits[input]) {
    return "Liquid";
  } else if (MassUnits[input]) {
    return "Mass";
  } else if (OtherUnits[input]) {
    return "Others";
  }
};

const create = (): Record<string, UnitsData> => {
  return reduceObject(internal, {
    key: (data) => data.units.valueOf(),
    value: (data) => {
      var searchTerms = [data.units.toString(), data.text, data.text];
      return { type: getUnitsType(data.units), units: data.units, text: data.text, ratio: data.ratio, searchTerms: searchTerms };
    },
  });
};

const UnitsInfo = create();

export default UnitsInfo;
