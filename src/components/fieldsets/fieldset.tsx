import { VariantProps, cva, cn } from "@/tools";

//md:row-span-2 lg:row-span-1



export function ErrorMessage(props: { value: string; className?: string }) {
  return <p className={cn("text-[0.8rem] font-medium text-destructive", props.className)}>{props.value}</p>;
}




export const fieldsetVariants = cva("grid", {
  variants: {
    gap: {
      2: "gap-2",
      3: "gap-3",
      4: "gap-4",
      6: "gap-6",
    },
  },
  defaultVariants: {
    gap: 6,
  },
});

export const Fieldset = (props: { name: string, fullHeight: boolean, footer?: JSX.Element, children: JSX.Element } & VariantProps<typeof fieldsetVariants>) => {

  return (
    <div className="w-full max-w-md overflow-auto pt-0 shadow-sm">
      <fieldset className={cn("bg-white h-full rounded-lg border pt-4 px-4 pb-6", fieldsetVariants({ ...props }))}>
        <legend className="px-1 text-sm font-medium">{props.name}</legend>
        {props.fullHeight ? (
          props.children
        ) : (
          <div>
            <div className={fieldsetVariants({ ...props })}>{props.children}</div>
          </div>
        )}

        {props.footer}
      </fieldset>
    </div>
  );

}


