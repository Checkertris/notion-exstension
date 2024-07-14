import { FieldPathByValue } from "react-hook-form";
import { AnyObject } from "./dataUtils";
export { getFromPath } from "./getFromPath";
export { Path } from "react-hook-form";

export type RecordValue<T extends Record<any, any>> = T extends Record<any, infer A> ? A : never;

export type IsExtends<A, B, Y = true, N = false> = A extends B ? Y : N;

export type IsEqual<A, B, Y = true, N = false> = (<G>() => G extends A ? 1 : 2) extends <G>() => G extends B ? 1 : 2 ? Y : N;

export const isExtends = <T,>(value): value is T => value as IsExtends<typeof value, T>;

export const isEqual = <T,>(value): value is T => value as IsEqual<typeof value, T>;

export type PathByValue<T extends AnyObject, K> = FieldPathByValue<T, K>;

export type KeyByValue<T extends Record<any, any>, K extends any> = keyof {
  [k in keyof T as T[k] extends T ? k : never]: T[k] extends K ? K : never;
};
