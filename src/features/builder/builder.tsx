
export type Builder<TReturn extends any = any> = {
  build(...args): TReturn
}

export type BuilderReturn<T extends Builder> = ReturnType<T["build"]>

export type BuilderArgs<T extends Builder> = Parameters<T["build"]>

export type BuilderListReturn<T extends Record<string, Builder>> = {
  [k in keyof T]: BuilderReturn<T[k]>
}