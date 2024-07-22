import { equalsFunc, recordLength, RecordValue, Clamp } from "~/utils";
import { BaseIterator } from "./iterator";

export class ClampableIterator<T extends Record<string, any>, TClamp extends Clamp> extends BaseIterator<T> {
    protected clamp: TClamp

    constructor(data: T, clamp: TClamp) {
        super(data)
        this.clamp = clamp
    }

    add<K extends string, I extends RecordValue<T>>(item: { [k in K]: I }) {
        var self = new ClampableIterator({ ...this.data, ...item }, this.clamp)
        var min = new MinClamp({ ...this.data, ...item }, this.clamp[1])
        var max = new MaxClamp({ ...this.data, ...item })
        var length = recordLength(this.data)
        return equalsFunc(length, this.clamp[1], max, equalsFunc(length, this.clamp[0], min, self))
    }
}

class MinClamp<T extends Record<string, any>, TMax extends number> extends BaseIterator<T> {
    private max: TMax

    constructor(data: T, max: TMax) {
        super(data)
        this.max = max
    }

    add<K extends string, I extends RecordValue<T>>(item: { [k in K]: I }) {
        var min = new MinClamp({ ...this.data, ...item }, this.max)
        var max = new MaxClamp({ ...this.data, ...item })
        var length = recordLength(this.data)
        return equalsFunc(length, this.max, max, min)
    }

    return() {
        return this.data
    }

}

class MaxClamp<T extends Record<string, any>> extends BaseIterator<T> {
    return() {
        return this.data
    }
}