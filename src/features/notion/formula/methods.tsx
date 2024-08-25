import { reduceObject } from "~/tools/utils";
import { functionWrapper } from "./utils";
import { parameter, variable } from "./paramters";
import { valueType, InferValueType } from "./types";

export class at<T extends valueType> extends parameter<T> {
  constructor(array: parameter<T[]>, index: number) {
    super(functionWrapper("at", array.string, index.toString()));
  }
}

export class find<T extends valueType> extends parameter<T> {
  constructor(array: parameter<T[]>, content: (current: variable<T>) => string) {
    super(functionWrapper("find", array.string, content(new variable("current"))));
  }
}

type InferVariables<T extends Record<string, parameter<any>>> = {
  [k in keyof T]: variable<InferValueType<T[k]>>;
};

export class lets<T extends valueType, V extends Record<string, parameter<any>>> extends parameter<T> {
  constructor(variables: V, content: (vars: InferVariables<V>) => string) {
    var entries = Object.entries(variables);
    var output = entries.length == 1 ? `let(` : `lets(`;
    output += entries.map(([key, parameter]) => parameter.string + `,` + key + `,`);
    output += content(reduceObject(entries, { value: ([key, value]) => new variable<InferValueType<typeof value>>(key) }));
    output += `)`;
    super(output);
  }
}

export class includes<T extends valueType> extends parameter<boolean> {
  constructor(array: parameter<T[]>, value: parameter<T>) {
    super(functionWrapper("includes", array.string, value.string));
  }
}

export class If<T extends valueType> extends parameter<T> {
  constructor(condition: string, t: parameter<T>, f: parameter<T>) {
    super(functionWrapper("if", condition, t.string, f.string));
  }
}

// export class findValueWithKey<T extends valueType> extends parameter<T> {
//   constructor(map: parameter<[any][]>, key: parameter<any>, keyIndex: number, valueIndex: number) {
//     var mapItem = new find(map, (current) => new at(current, keyIndex).string + " == " + key.string);
//     var mapItemValue = new at(mapItem, valueIndex);
//     super(mapItemValue.string);
//   }
// }
