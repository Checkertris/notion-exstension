import { useRouterContext } from "~/structure/router/RouterContext";
import { QuickTooltip } from "~/components/quickComponents/quickTooltip";
import { PageProps } from "~/structure/config/pageConfig";
import { NavButtonProps } from "./navBarProps";
import { cn } from "~/services/shadcn/lib/utils";
import { navButtonVariants, navIconVariants } from "./navButtonStyles";

export const NavBarButton = ({ button, icon, page, className }: NavButtonProps) => {
  const { setPage: setCurrentPage, currentPage } = useRouterContext();
  const { icon: Icon, label } = PageProps[page];
  const toggled = currentPage == page;

  return (
    <QuickTooltip label={label}>
      <button className={cn(className, navButtonVariants(button))} onClick={() => setCurrentPage(page)}>
        <Icon className={cn(navIconVariants(icon))} />
      </button>
    </QuickTooltip>
  );
};
