import { IsEqual, RecordValue } from "./typeUtils";

export type AnyObject = {
  [k: string]: any;
};

export type LiteralRecord<T extends AnyObject> = IsEqual<keyof T, string, {}, T>;

export type FixedLengthArray<T, L extends number, TObj = [T, ...ReadonlyArray<T>]> = TObj & {
  readonly length: L;
  [I: number]: T;
};

export function recordLength<T extends Record<any, any>>(record: T) {
  return Object.keys(record).length as RecordLength<T>
}

export function shiftRecord(record: Record<any, any>) {
  var entries = Object.entries(record)
  entries.shift()
  return reduceObject(entries)
}

export type LiteralString<T extends string> = Exclude<T, string>

export const terminateSym = Symbol()
type InferParams<T> = T extends Array<infer A> ? A : [keyof T, RecordValue<T>];
export function reduceObject<T extends any[] | Record<any, any>, V extends any, K extends PropertyKey = keyof T, t = InferParams<T>>(ref: T, func?: { value?: (input: t) => V; key?: (input: t) => K; filter?: (input: t) => boolean }): Record<K, V> {
  var isArray = typeof ref == typeof refArray;
  var refArray = isArray ? ref : Object.entries(ref);
  var terminate: boolean
  return refArray.reduce((prevObj, entry) => {
    if (terminate) return false
    if (func?.filter ? func.filter(entry) : true) {
      var key = func?.key ? func.key(entry) : isArray ? entry : entry[0];
      var value = func?.value ? func.value(entry) : isArray ? entry : entry[1];
      prevObj[key] = value;
      if (key == terminateSym || value == terminateSym) terminate = true
    }
    return prevObj;
  }, {} as Record<K, V>);
}

type MutateKey<A extends string, B extends string> = `${A}${B}`
type MutateObj<T extends AnyObject, S extends string> = {
  [k in keyof T as MutateKey<Extract<k, string>, S>]: T[k]
}
export function mutateObj<T extends Record<string, any>, S extends string>(object: T, term: S) {
  return reduceObject(object, { key: ([key, value]: [string, any]) => key + term }) as MutateObj<T, S>
}

export function findDifference<T extends AnyObject>(list1: T[], list2: T[], key: keyof T) {
  var list1Diff: T[]
  list1.forEach((list1Item) => {
    if (!list2.find((list2Item) => list1Item[key] == list2Item[key])) list1Diff.push(list1Item)
  })

  var list2Diff: T[]
  list2.forEach((list2Item) => {
    if (!list1.find((list1Item) => list1Item[key] == list2Item[key])) list1Diff.push(list2Item)
  })

  if (list1Diff.length > 0 || list2Diff.length > 0) return [list1Diff, list2Diff] as [T[], T[]]
  else return false
}

type LengthObject<T, K extends keyof T = keyof T> = [K] extends [never]
  ? []
  : K extends K ? [0, ...LengthObject<Omit<T, K>>] : never

export type RecordLength<T> = LengthObject<T>["length"] extends number ? LengthObject<T>["length"] : never

