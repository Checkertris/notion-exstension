import NavBar from "./navBar/navBar";
import { PageAdress } from "./config/pageConfig";
import Router from "./router/router";
import RouterOutput from "./router/routerOutput";
import { Header } from "./header/header";

const Main = () => {
  return (
    <Router defaultValue={PageAdress.myWidget}>
      <NavBar />
      <div className="flex flex-1 flex-col pb-4 pt-6 gap-4 pl-[57px]">
        <RouterOutput />
      </div>
    </Router>
  );
};

export default Main;
