import { parameter } from "./paramters";

export type valueType = string | number | boolean | any[];

export type InferValueType<T extends parameter<any>> = T extends parameter<infer A> ? A : never;
