export abstract class AnyValueTool<T> {
    abstract extract(data): T
}

export abstract class FormattableValueTool<T> extends AnyValueTool<T> {
    abstract format(value: T): any
}

export abstract class ValueTool<T> extends FormattableValueTool<T> {
    abstract create(...args): T
}

export class PrimitiveValueTool<T> extends FormattableValueTool<T> {
    create(value: T) {
        return value
    }
    extract = (data) => data
    format = (data) => data
}

export abstract class ReadonlyValueTool<T> extends AnyValueTool<T> {

}
