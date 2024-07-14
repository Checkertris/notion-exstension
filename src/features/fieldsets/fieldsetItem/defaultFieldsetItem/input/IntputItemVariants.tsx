import { quickSelectProps, quickCheckboxProps, QuickTextField, quickTextAreaProps, quickTextFieldProps, QuickCheckbox, QuickSelect, QuickTextArea } from "~/components/quickComponents";
import { icon } from "~/constants";
import { enumKeysToQuickOptions } from "~/components/quickComponents";
import { PathByType } from "~/utils";

import { InputItemBuilder } from "./inputItemBuilder";
import { FormListValues, FormListBuilders } from "~/features/formList";

export class Checkbox<T extends FormListBuilders, K extends keyof T, V> extends InputItemBuilder<T, K, V, quickCheckboxProps> {
  component = QuickCheckbox;

  constructor(form: K, path: PathByType<FormListValues<T>[K], V>, text: string) {
    super(form, path);
    this.component_props.text = text;
  }
}

export class Select<T extends FormListBuilders, K extends keyof T, V> extends InputItemBuilder<T, K, V, quickSelectProps> {
  component = QuickSelect;

  constructor(form: K, path: PathByType<FormListValues<T>[K], V>) {
    super(form, path);
  }

  addEnumOptions(enumme) {
    this.component_props.options.concat(enumKeysToQuickOptions(enumme));
    return this;
  }

  addOption(label: string, value?: string, icon?: icon) {
    this.component_props.options.push({ label: label, value: value ? value : label, Icon: icon });
    return this;
  }

  addEmptyMessage(message: string) {
    this.component_props.emptyMessage = message;
    return this;
  }
}

export class Text<T extends FormListBuilders, K extends keyof T, V> extends InputItemBuilder<T, K, V, quickTextFieldProps> {
  component = QuickTextField;

  constructor(form: K, path: PathByType<FormListValues<T>[K], V>) {
    super(form, path);
  }

  mode(mode: "onBlur" | "onChange") {
    this.component_props.mode = mode;
    return this;
  }
}

export class TextArea<T extends FormListBuilders, K extends keyof T, V> extends InputItemBuilder<T, K, V, quickTextAreaProps> {
  component = QuickTextArea;

  constructor(form: K, path: PathByType<FormListValues<T>[K], V>) {
    super(form, path);
  }
  mode(mode: "onBlur" | "onChange") {
    this.component_props.mode = mode;
    return this;
  }

  resizeable() {
    this.component_props.resize = "true";
    return this;
  }
}
