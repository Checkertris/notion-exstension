import { isExtends } from "~/utils/typeUtils"

export namespace FlexibleArray {

    export type Type<T> = T[] | T

    export type Revert<T> = T extends [infer A] ? T : T extends [infer A, ...infer B] ? T : [T]

    export type Convert<T> = T extends [infer A] ? A : T

    export function convert<T>(value: T): Convert<T> {
        if (isExtends<[any]>(value)) return value[0]
        return value as Extract<T, Convert<T>>
    }
}

export default FlexibleArray

