import { FieldPathByValue, Path as RHFPath } from "react-hook-form";
type FilterUndefined<T> = T extends undefined ? never : T;
type FilterNull<T> = T extends null ? never : T;
type FilterUndefinedAndNull<T> = FilterUndefined<FilterNull<T>>;

type ExtractFromObject<O extends Record<PropertyKey, unknown>, K> = K extends keyof O ? O[K] : K extends keyof FilterUndefinedAndNull<O> ? FilterUndefinedAndNull<O>[K] | undefined : undefined;

type ExtractFromArray<A extends readonly any[], K> = any[] extends A ? (A extends readonly (infer T)[] ? T | undefined : undefined) : K extends keyof A ? A[K] : undefined;

type GetWithArray<O, K> = K extends []
  ? O
  : K extends [infer Key, ...infer Rest]
  ? O extends Record<PropertyKey, unknown>
    ? GetWithArray<ExtractFromObject<O, Key>, Rest>
    : O extends readonly any[]
    ? GetWithArray<ExtractFromArray<O, Key>, Rest>
    : undefined
  : never;

type Path<T> = T extends `${infer Key}.${infer Rest}` ? [Key, ...Path<Rest>] : T extends `${infer Key}` ? [Key] : [];

type Get<O, K> = GetWithArray<O, Path<K>>;

export function getFromPath<O, K extends RHFPath<O> | FieldPathByValue<O, any>>(obj: O, path: K): Get<O, K>;
export function getFromPath(obj: Record<string, unknown>, path: string): unknown {
  const keys = path.split(".");

  let currentObj = obj;
  for (const key of keys) {
    const value = currentObj[key];
    if (value === undefined || value === null) {
      return undefined;
    }

    currentObj = value as Record<string, unknown>;
  }

  return currentObj;
}
