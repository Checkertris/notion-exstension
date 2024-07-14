import { cn } from "~/services/shadcn/lib/utils";

export const SingleDivider = (props: { className; children }) => {
  return <main className={cn(props.className, "px-4 flex-1 justify-items-center grid gap-y-6 gap-x-4")}>{props.children}</main>;
};

export const ThreeDivider = (props: { children; className? }) => <SingleDivider className={cn(props.className, "md:grid-cols-2 lg:grid-cols-3")} children={props.children} />;
