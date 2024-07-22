import FlexibleRecord from "~/utils/flexibleRecord";
import { UseFormReturn, UseFormReturnBuilders } from "./iForms";
import { RecordParentBuilder } from "~/features/builder";
import useFormList from "./useFormList";

export class FormListBuilder<T extends Record<string, UseFormReturn>> extends RecordParentBuilder<[], UseFormReturnBuilders<T>> {
    build() {
        return useFormList(FlexibleRecord.convert(this.buildChildren()))
    }
}

