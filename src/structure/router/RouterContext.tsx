import { createContext, useContext } from "react";
import { PageAdress } from "~/structure/config/pageConfig";

interface RouterReturn {
  currentPage: PageAdress;
  setPage: (page: PageAdress) => void;
}

export const RouterContext = createContext<RouterReturn>(undefined);
export const useRouterContext = () => useContext(RouterContext);
