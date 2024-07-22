import { FieldPathByValue } from "react-hook-form";
import { AnyObject } from "./dataUtils";
export { getFromPath } from "./getFromPath";
export { Path, PathValue } from "react-hook-form";

export type IsExtends<A, B, Y = true, N = false> = A extends B ? Y : N;

export type IsEqual<A, B, Y = true, N = false> = (<G>() => G extends A ? 1 : 2) extends <G>() => G extends B ? 1 : 2 ? Y : N;

export const isExtends = <T,>(value): value is T => value as IsExtends<typeof value, T>;

export const isEqual = <T,>(value): value is T => value as IsEqual<typeof value, T>;

export function equalsFunc<T, V, Y, N>(v1: T, v2: V, yes: Y, no: N): IsEqual<T, V, Y, N> {
  if (isEqual<T>(v2)) return yes as any
  return no as any
}

export function extendsFunc<T, V, Y, N>(v1: T, v2: V, yes: Y, no: N): IsExtends<T, V, Y, N> {
  if (isExtends<T>(v2)) return yes as any
  return no as any
}

export type PathByValue<T extends AnyObject, K> = FieldPathByValue<T, K>;

export type KeyByValue<T extends Record<any, any>, K extends any> = keyof {
  [k in keyof T as T[k] extends K ? k : never]: any
}

export function getFromKey<TValue, T extends any = any, TKey extends KeyByValue<T, TValue> = KeyByValue<T, TValue>>(record: T, key: TKey) {
  return record[key] as TValue
}

export type RecordValue<T extends Record<any, any>> = T extends Record<any, infer A> ? A : never;

export type InferKeys<T extends AnyObject[], TKey extends keyof InferArrayItem<T>> = Infer2<Infer1<T, TKey>>

type InferArrayItem<T extends any[]> = T extends Array<infer A> ? A : never

type Infer1<T extends AnyObject[], TKey extends keyof InferArrayItem<T>> = {
  [k in keyof T]: T[k][Extract<TKey, keyof T[k]>]
}

type Infer2<T extends string[]> = keyof {
  [k in keyof T as Extract<T[k], string>]: any
}

