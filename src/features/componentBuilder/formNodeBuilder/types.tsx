import { NodeBuilder } from "./nodeBuilders";

export type InferUseFormReturnList<T extends NodeBuilder<any>> = T extends NodeBuilder<infer A> ? A : never;
