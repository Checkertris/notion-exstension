export enum LiquidUnits {
  tsp,
  tbsp,
  cup,
  ml,
  l,
  fl_oz,
}
export enum MassUnits {
  lb,
  g,
  kg,
  oz,
}
export enum OtherUnits {
  whole,
}

export type Units = LiquidUnits | MassUnits | OtherUnits;
export type UnitsType = "Liquid" | "Mass" | "Others";
