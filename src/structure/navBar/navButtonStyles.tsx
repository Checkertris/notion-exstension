import { cva } from "class-variance-authority";
import { NavButtonProps } from "./navBarProps";

export const navButtonVariants = cva(
  "z-50 inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: " text-secondary-foreground hover:bg-secondary/80 focus:bg-secondary/80 ",
        ghost: "",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        5: "h-5 w-5",
        6: "h-6 w-6",
        10: "h-10 w-10",
      },
      rounded: {
        md: "rounded-md",
        lg: "rounded-lg",
        full: "rounded-full",
      },
      hovertext: {
        none: "",
        black: "text-muted-foreground transition-colors hover:text-foreground focus:text-foreground",
      },
      weight: {
        md: "font-medium",
        sb: "font-semibold",
      },
      animate: {
        true: "group",
      },
    },
    defaultVariants: {
      size: 6,
      animate: true,
      variant: "ghost",
      rounded: "lg",
      hovertext: "black",
      weight: "sb",
    },
  }
);

export const navIconVariants = cva("", {
  variants: {
    size: {
      4: "h-4 w-4",
      5: "size-5",
      6: "size-6",
    },
    fill: {
      true: "fill-white",
    },
    transition: {
      true: " transition-all group-hover:scale-110",
    },
  },
  defaultVariants: {
    size: 5,
  },
});

export const navButtonStyles: Record<string, NavButtonProps> = {
  main: {
    button: { variant: "default", rounded: "full", hovertext: "none", size: 10 },
    icon: { fill: true, transition: true },
  },
  secondary: {
    button: {},
    icon: {},
  },
  bottom: {
    button: {},
    icon: {},
  },
};
