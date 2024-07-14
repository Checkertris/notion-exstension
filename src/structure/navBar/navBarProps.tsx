import { PageAdress } from "~/structure/config/pageConfig";
import { VariantProps } from "class-variance-authority";
import { navIconVariants, navButtonVariants } from "./navButtonStyles";

export interface NavButtonProps {
  className?: string;
  page?: PageAdress;
  button: VariantProps<typeof navButtonVariants>;
  icon: {} & VariantProps<typeof navIconVariants>;
}

export default interface NavBarData {
  main: PageAdress;
  secondary: PageAdress[];
  bottom: PageAdress[];
}
