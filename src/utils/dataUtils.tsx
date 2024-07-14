import { IsEqual, isExtends, RecordValue } from "./typeUtils";

export type AnyObject = {
  [k: string]: any;
};

export type LiteralRecord<T extends AnyObject> = IsEqual<keyof T, string, {}, T>;

export type FixedLengthArray<T, L extends number, TObj = [T, ...ReadonlyArray<T>]> = TObj & {
  readonly length: L;
  [I: number]: T;
};

export function recordLength<T extends Record<any, any>>(record: T) {
  return Object.keys(record).length;
}

export type FlexibleRecord<T> = T | Record<PropertyKey, T>;
export function flexibleRecord<T>(value: T, defaultKey: PropertyKey) {
  if (isExtends<Record<any, any>>(value)) return value;
  else return { [defaultKey]: value };
}

type InferParams<T> = T extends Array<infer A> ? A : [keyof T, RecordValue<T>];
export function reduceObject<T extends any[] | Record<any, any>, V extends any, K extends PropertyKey = keyof T, t = InferParams<T>>(ref: T, func?: { value?: (input: t) => V; key?: (input: t) => K; filter?: (input: t) => boolean }): Record<K, V> {
  var isArray = typeof ref == typeof refArray;
  var refArray = isArray ? ref : Object.entries(ref);
  return refArray.reduce((prevObj, entry) => {
    if (func?.filter ? func.filter(entry) : true) {
      var key = func?.key ? func.key(entry) : isArray ? entry : entry[0];
      var value = func?.value ? func.value(entry) : isArray ? entry : entry[1];
      prevObj[key] = value;
    }
    return prevObj;
  }, {} as Record<K, V>);
}
