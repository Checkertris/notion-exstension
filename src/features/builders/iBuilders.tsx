import Builder from "./builder";

export interface DataPassingBuilder<TName extends string, T> extends Builder {
  build(props?: { [key in TName]: T } & any): any;
}

export interface ChildBuilder extends DataPassingBuilder<"name", string> {}
