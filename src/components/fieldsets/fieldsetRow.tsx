import { cva, cn } from "../tools";
import { anyLength } from "../tools/utils";
import React from "react";

const fieldsetRowVariants = cva("", {
    variants: {
        count: {
            2: "grid-cols-[repeat(auto-fit,minmax(154px,1fr))]",
            3: "grid-cols-[repeat(auto-fit,minmax(96px,1fr))]",
        },
    },
});

export const FieldsetRow = (props: { children: JSX.Element[] }) => {
    return <div className={cn(fieldsetRowVariants({ count: anyLength(props.children) as 2 | 3 }))}>{props.children}</div>;
}
