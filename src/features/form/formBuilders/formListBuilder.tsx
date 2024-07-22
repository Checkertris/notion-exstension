import FlexibleRecord from "~/utils/flexibleRecord";
import { UseFormListReturn, UseFormReturn, UseFormReturnBuilders } from "../iForms";
import { IterableBuilder, Builder } from "../../builder";
import { reduceObject } from "~/utils";
import useFormList from "../useFormList";

export class FormListBuilder<T extends Record<string, UseFormReturn>> extends IterableBuilder<UseFormReturnBuilders<T>, UseFormListReturn<FlexibleRecord.Convert<T>>> {
    self = FormListBuilder

    build(): UseFormListReturn<T> {
        var useFormReturnList = reduceObject(this.data, { value: ([name, builder]: [string, Builder<UseFormReturn>]) => builder.build() })
        return useFormList(FlexibleRecord.convert(useFormReturnList))
    }
}

