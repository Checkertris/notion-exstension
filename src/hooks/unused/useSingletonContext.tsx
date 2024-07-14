import { once } from "lodash";
import { createContext, useContext } from "react";

const createSingletonContext = once(<T,>() => createContext({} as T));
const useSingletonContext = <T,>(): T => useContext(createSingletonContext<T>());
