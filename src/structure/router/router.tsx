import { useState } from "react";
import { PageAdress } from "~/structure/config/pageConfig";
import { RouterContext } from "./RouterContext";

const Router = (props: { defaultValue: PageAdress; children }) => {
  const [currentPage, setCurrentPage] = useState<PageAdress>(props.defaultValue);

  return <RouterContext.Provider value={{ currentPage, setPage: setCurrentPage }}>{props.children}</RouterContext.Provider>;
};

export default Router;
