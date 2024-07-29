import { createContext, useContext } from "react";

import { UseDatabaseFormReturn } from "../iDatabaseForm";

export const DatabaseFormContext = createContext<UseDatabaseFormReturn<string>>(undefined);
export const useDatabaseFormContext = () => useContext(DatabaseFormContext);
