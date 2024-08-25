import { cva, VariantProps, cn } from "../tools";
import React from "react";

export const fieldsetItemVariants = cva("grid", {
    variants: {
        gap: {
            2: "gap-2",
            3: "gap-3",
            4: "gap-4",
        },
        indent: {
            true: "ml-4 mr-3",
        },
    },
    defaultVariants: {
        gap: 3,
    },
});

export const FieldsetItem = (props: { name?: string, children: JSX.Element } & VariantProps<typeof fieldsetItemVariants>) => {
    return (
        <div className={cn(fieldsetItemVariants({ ...props }))}>
            {props.name && <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">{props.name}</label>}
            {props.children}
        </div>
    );
}


