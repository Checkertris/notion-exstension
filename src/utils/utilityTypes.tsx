import { PropertyType } from "~/features/notion";
import { IsEqual } from "./typeUtils";
export { Path, PathValue, FieldPathByValue as PathByValue } from "react-hook-form";

export type ToString<N extends number | string> = `${N}`

export type AnyObject = {
  [k: string]: any;
};

export type LiteralRecord<T extends AnyObject> = IsEqual<keyof T, string, {}, T>;

export type FixedLengthArray<T, L extends number, TObj = [T, ...ReadonlyArray<T>]> = TObj & {
  readonly length: L;
  [I: number]: T;
};

export type RecordValue<T extends Record<any, any>> = T extends Record<any, infer A> ? A : never
export type ArrayValue<T extends any[]> = T extends Array<infer A> ? A : never
export type AnyValue<T> = T extends Array<infer A> ? A : T extends Record<any, infer A> ? A : never


export type KeyByValue<T extends Record<any, any>, K extends any> = keyof {
  [k in keyof T as T[k] extends K ? k : never]: any
}

type KeyList<T extends AnyObject[], TKey extends keyof ArrayValue<T>> = {
  [k in keyof T]: T[k][Extract<TKey, keyof T[k]>]
}
type KeylistAsOptions<T extends string[]> = keyof {
  [k in keyof T as Extract<T[k], string>]: any
}
export type InferOptions<T extends AnyObject[], TKey extends keyof ArrayValue<T>> = KeylistAsOptions<KeyList<T, TKey>>

export type Refine<T> = {
  [k in keyof T]: T[k]
}

export type Ctor<T = {}, TArgs extends any[] = any[]> = new (...args: TArgs) => T;
export type Prot<T extends Ctor<any>> = T extends Ctor<infer A> ? A : never

export type Item<K extends PropertyKey, V> = { [k in K]: V }

export type AnyFunc = (...args) => any