import { createDatabaseSchema } from "./methods/createDatabaseSchema";

export type DatabaseSchema<TKey extends string> = ReturnType<typeof createDatabaseSchema<TKey>>;

type K = DatabaseSchema<"mmmm">
