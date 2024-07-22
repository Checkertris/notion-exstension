import { functionWrapper } from "./utils";
import { valueType } from "./types";

export abstract class parameter<T extends valueType> {
  public string: string;

  constructor(str: string) {
    this.string = str;
  }
}

export class value<T extends valueType> extends parameter<T> {
  constructor(value: T) {
    super(JSON.stringify(value));
  }
}

export class variable<T extends valueType> extends parameter<T> {
  constructor(name: string) {
    super(name);
  }
}

export class prop<T extends valueType> extends parameter<T> {
  constructor(name: string) {
    super(functionWrapper("prop(", `"` + name + `")`));
  }
}

export class relatedProp<T extends valueType> extends parameter<T> {
  constructor(relation: string, relationProp: string) {
    super(new prop(relation).string + `.map(current.` + new prop(relationProp).string + `)`);
  }
}
