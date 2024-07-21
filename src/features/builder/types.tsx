
export type Builder<T extends any = any> = {
  build(props?): T;
}

export type BuilderProps<T extends Builder> = Parameters<T["build"]>[0]