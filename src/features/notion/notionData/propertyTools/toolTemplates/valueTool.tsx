
export abstract class ValueToolBase<T> {
    abstract extract(data): T
}

export abstract class ValueTool<T> extends ValueToolBase<T> {
    abstract create(...args): T
    abstract format(value: T): any
}

export class PrimitiveValueTool<T> extends ValueTool<T> {
    create = (value: T) => value
    extract = (data) => data
    format = (data) => data
}

export abstract class ReadonlyValueTool<T> extends ValueToolBase<T> {

}


