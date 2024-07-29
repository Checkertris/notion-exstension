
export type Builder = {
  build: (...args) => any
}

export type BuilderOfGiven<R, P extends any[]> = {
  build: (...args: P) => R
}

export type BuilderOf<T> = {
  build: (...args) => T
}

export type BuilderGiven<T extends any[]> = {
  build: (...args: T) => any
}

export type BuilderReturn<T extends Builder> = ReturnType<T["build"]>
export type BuilderArgs<T extends Builder> = Parameters<T["build"]>

export type BuilderRecordReturn<T extends Record<string, Builder>> = {
  [k in keyof T]: BuilderReturn<T[k]>
}

export type BuilderArrayReturn<T extends Builder[]> = {
  [k in keyof T]: BuilderReturn<T[k]>
}

