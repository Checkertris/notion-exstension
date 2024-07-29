import { BuilderOf, BuilderRecordReturn, buildVariants, NonEmptyIterator } from "../builder";
import { UseFormListReturn, UseFormReturn } from "./iForms";
import { useFormList } from "./useFormList";

export class FormListBuilder<T extends Record<string, BuilderOf<UseFormReturn>>> extends NonEmptyIterator<T, () => UseFormListReturn<BuilderRecordReturn<T>>> {
    forms: T
    constructor(forms: T) {
        super()
        this.forms = forms
    }

    add<K extends string, V extends BuilderOf<UseFormReturn>>(form: { [k in K]: V }) {
        return new FormListBuilder({ ...this.forms, ...form })
    }

    _build() {
        var forms = buildVariants.record<[], T>(this._data)
        return useFormList(forms)
    }
}