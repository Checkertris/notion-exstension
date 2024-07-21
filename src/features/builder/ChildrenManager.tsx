import { BuilderProps, Builder } from "./types";


export class ChildrenManager<T extends Builder> {
  private children: Record<string, T>;

  add<K extends string, T>(item: { [k in K]: T }) {
    this.children = { ...this.children, ...item };
    return this;
  }

  build(props: Omit<BuilderProps<T>, "name">) {
    return Object.entries(this.children).map(([name, child]) => child.build({ name, ...props }));
  }

}

