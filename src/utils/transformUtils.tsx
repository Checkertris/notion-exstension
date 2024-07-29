import FlexibleArray from "~/tools/flexibleArray";
import { RecordValue, ArrayValue, AnyObject, KeyByValue, Path } from "./utilityTypes";
import { tuple } from "./typeUtils";

type ObjEntryPair<T extends Record<any, any>> = [keyof T, T[keyof T]]
type ArrayTransform<T extends any[], TReturn> = (...item: FlexibleArray.Revert<ArrayValue<T>>) => TReturn
export function reduceArray<T extends any[], K extends PropertyKey = number, V = ArrayValue<T>>(array: T, transform?: { key?: ArrayTransform<T, K>, value?: ArrayTransform<T, V>, filter?: ArrayTransform<T, boolean> }): Record<K, V> {
    return array.reduce((prev, item, index) => {
        if (transform.filter ? transform.filter(...item) : true) {
            var key = transform.key ? transform.key(...item) : index
            var value = transform.value ? transform.value(...item) : item
            return { ...prev, [key]: value }
        }
    })
}
export function reduceObject<T extends Record<any, any>, K extends PropertyKey = keyof T, V = RecordValue<T>>(obj: T, transform?: { key?: ArrayTransform<ObjEntryPair<T>[], K>, value?: ArrayTransform<ObjEntryPair<T>[], V>, filter?: ArrayTransform<ObjEntryPair<T>[], boolean> }): Record<K, V> {
    var objTransform = {
        key: transform?.key ? transform.key : (val) => val[0],
        value: transform?.value ? transform.value : (val) => val[1],
        filter: transform?.filter ? transform.filter : () => true,
    }
    return reduceArray(obj.entries(obj), objTransform)
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

    if (list1Diff.length > 0 || list2Diff.length > 0) return tuple(list1Diff, list2Diff)
    else return false
}


export function getFromKey<TValue, T extends any = any, TKey extends KeyByValue<T, TValue> = KeyByValue<T, TValue>>(record: T, key: TKey) {
    return record[key] as TValue
}

export function setFromPath<T>(obj: T, path: Path<T>, value) {
    const pathParts = path.split('.');
    let newObj = obj;

    pathParts.forEach((part, index) => {
        if (newObj[part]) {
            if (index < pathParts.length - 1) {
                newObj = newObj[part];
            } else {
                newObj[part] = value;
            }
        }
    });

    return newObj
};


export function cloneObj<T, TArgs extends any[]>(instance: T, ctor: new (...args: TArgs) => T, ...args: TArgs): T {
    const copy = new (ctor.constructor as { new(...args: TArgs): T })(...args);
    Object.assign(copy, instance);
    return copy;
}

export function applyMixins(target: any, constructors: any[]) {
    constructors.forEach((baseCtor) => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach((name) => {
            Object.defineProperty(
                target.prototype,
                name,
                Object.getOwnPropertyDescriptor(baseCtor.prototype, name) ||
                Object.create(null)
            );
        });
    });
}