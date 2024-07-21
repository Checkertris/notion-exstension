import { useGenericContext } from "./useGenericContext";

export type ContextPair<T> = ReturnType<typeof useGenericContext<T>>;

export type Context<T> = ContextPair<T>[1];

export type ContextProvider<T> = ContextPair<T>[0];

export type ContextList<T extends Record<string, any>> = {
  [k in keyof T]: Context<T[k]>;
}