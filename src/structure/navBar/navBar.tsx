import { NavBarButton } from "./navBarButton";
import { PageAdress } from "../config/pageConfig";
import { navButtonStyles } from "./navButtonStyles";
import NavBarData from "./navBarProps";
import { HoverEffect } from "~/services/aceternity/hoverEffect";
import { useRouterContext } from "../router";

const { main, secondary, bottom } = navButtonStyles;

export const NavBarInfo: NavBarData = {
  main: PageAdress.gallery,
  secondary: [PageAdress.myWidget, PageAdress.settings],
  bottom: [PageAdress.account],
};

const secondaryNavButton = NavBarInfo.secondary.map((page) => () => <NavBarButton page={page} {...secondary} key={page} />);

const NavBar = () => {
  const { currentPage } = useRouterContext();
  const overrideIndex = NavBarInfo.secondary.indexOf(currentPage);

  return (
    <aside className="inset-y fixed left-0 z-20 flex w-[57px] h-full flex-col border-r bg-white">
      <div className="border-b pt-2.5 px-2 pb-2 grid justify-center">
        <NavBarButton page={NavBarInfo.main} {...main} />
      </div>
      <HoverEffect overrideIndex={overrideIndex} backgroundColor="bg-zinc-100" roundness="rounded-3xl" className="grid gap-1 p-2 justify-center" items={secondaryNavButton} />
      <nav className="mt-auto grid gap-1 p-2 mb-5 justify-center ">
        {NavBarInfo.bottom.map((page) => (
          <NavBarButton page={page} {...bottom} key={page} />
        ))}
      </nav>
    </aside>
  );
};

export default NavBar;
