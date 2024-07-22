import { createContext, useContext } from "react";

import { UseDatabaseFormReturn } from "../useDatabaseFormReturn";

export const DatabaseFormContext = createContext<UseDatabaseFormReturn<string>>(undefined);
export const useDatabaseFormContext = () => useContext(DatabaseFormContext);
