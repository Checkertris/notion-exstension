import { PageProps } from "~/structure/config/pageConfig";
import { useRouterContext } from "./RouterContext";

const RouterOutput = () => {
  const { currentPage } = useRouterContext();

  return PageProps[currentPage].element;
};

export default RouterOutput;
