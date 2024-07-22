import { RecordLength, reduceObject } from "./dataUtils";
import { isEqual, isExtends, IsEqual } from "./typeUtils";

export default FlexibleRecord

namespace FlexibleRecord {

    export type Type<T> = T | Record<string, T>;

    export type Convert<T> = IsEqual<RecordLength<T>, 1, T[keyof T], T>

    export function convert<T>(value: T): Convert<T> {
        if (isEqual<RecordLength<T>>(1)) return value[Object.keys(value)[0]]
        return value
    }

    export function iterate<T, TReturn>(value: Type<T>, func: (data: T) => TReturn): Type<TReturn> | false {
        if (isExtends<T>(value)) return func(value)
        else if (isExtends<Record<string, T>>(value)) return reduceObject(value, { value: ([key, value]) => func(value) })
    }

    export async function asyncIterate<T, TReturn>(record: Type<T>, func: (data) => Promise<TReturn>): Promise<Type<Promise<TReturn>> | false> {
        if (isExtends<T>(record)) return await func(record)
        else if (isExtends<Record<string, T>>(record)) return await reduceObject(record, { value: ([key, value]) => func(value) })
    }
}
