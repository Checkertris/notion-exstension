import { RecordValue, reduceObject, AnyValue, isExtends, tuple } from "~/utils";
import { BuilderArrayReturn, BuilderGiven, BuilderRecordReturn, BuilderReturn } from "./iBuilder";

export abstract class Iterator<T> {
    protected _data: T

    constructor(data?: T) {
        this._data = data
    }

    add(item: { [name: string]: AnyValue<T> }) {
        if (isExtends<any[]>(this._data)) this._data = tuple(this._data, Object.values) as Extract<T, any[]>
        this._data = { ...this._data, ...item }
    }
}

export const buildVariants = {
    record<A extends any[], T extends Record<any, BuilderGiven<A>>>(data: T, ...args: A): BuilderRecordReturn<T> {
        return reduceObject(data, { value: (key, builder) => builder.build(...args) })
    },
    recordToArray<A extends any[], T extends Record<any, BuilderGiven<A>>>(data: T, ...args: A): BuilderReturn<RecordValue<T>>[] {
        return Object.values(data).map((item) => item.build(...args))
    },
    named<A extends any[], T extends Record<any, BuilderGiven<[name: string, ...A]>>>(data: T, ...args: A): BuilderReturn<RecordValue<T>>[] {
        return Object.entries(data).map(([name, builder]) => builder.build(name, ...args))
    },
    array<A extends any[], T extends BuilderGiven<A>[]>(data: T, ...args: A): BuilderArrayReturn<T>[] {
        return data.map((builder) => builder.build(...args))
    }
}