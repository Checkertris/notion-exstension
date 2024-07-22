
export type Builder<T extends any = any> = {
  build(...args): T;
}