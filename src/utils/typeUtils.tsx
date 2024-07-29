export type IsExtends<A, B, Y = true, N = false> = A extends B ? Y : N;
export const isExtends = <T,>(value): value is T => ({}) as IsExtends<typeof value, T>;

export type IsEqual<A, B, Y = true, N = false> = (<G>() => G extends A ? 1 : 2) extends <G>() => G extends B ? 1 : 2 ? Y : N;
export const isEqual = <T,>(value): value is T => ({}) as IsEqual<typeof value, T>;

export function truthTest<B extends boolean, Y, N>(test: B, tru: Y, fals: N): B extends true ? Y : N {
    if (test) return tru as any
    return fals as any
}

type LengthObject<T, K extends keyof T = keyof T> = [K] extends [never]
    ? []
    : K extends K ? [0, ...LengthObject<Omit<T, K>>] : never
export type TupleLength<T extends any[]> = T["length"]

export type RecordLength<T extends Record<any, any>> = Extract<LengthObject<T>["length"], number>
export const recordLength = <T extends Record<any, any>>(record: T) => 1 as RecordLength<T>

export type AnyLength<T> = T extends any[] ? TupleLength<T> : RecordLength<T>
export const anyLength = <T,>(itearble: T) => 1 as AnyLength<T>

export const tuple = <T extends any[]>(...args: T): T => args

