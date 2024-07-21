import { reduceObject } from "~/utils";
import { IterableBuilder } from "../builder";
import { FormBuilderList } from "./iFormList";
import useFormList from "./useFormList";

export default class FormListBuilder<T extends FormBuilderList> extends IterableBuilder<T> {
  self = FormListBuilder<T>;

  build() {
    var managers = reduceObject(this.data, { value: ([name, builder]) => builder.build() });
    return useFormList(managers as any);
  }
}
