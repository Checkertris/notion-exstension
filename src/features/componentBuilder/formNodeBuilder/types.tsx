import { PageNodeBuilder } from "./nodeBuilders";

export type InferUseFormReturnList<T extends PageNodeBuilder<any>> = T extends PageNodeBuilder<infer A> ? A : never;
