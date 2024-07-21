import { enumKeysToQuickOptions, quickFieldProps, quickSelectProps, quickCheckboxProps, QuickTextField, quickTextAreaProps, quickTextFieldProps, QuickCheckbox, QuickSelect, QuickTextArea } from "~/components/quickComponents";
import { icon } from "~/constants";
import { ContextList } from "~/hooks";
import { getFromPath, PathByValue, KeyByValue } from "~/utils";
import { FormField, ErrorMessage } from "~/features/form";
import { AnyFormValues, AnyFormBuilder, AnyUseFormReturn } from "~/features/formList";
import { InputNodeBuilder } from "../InputNodeBuilder";
import { PageNodeBuilder, InferReturnList } from "../nodeBuilders";
type InferInputValue<T extends quickFieldProps<any>> = T extends quickFieldProps<infer A> ? A : never;

export abstract class QuickInputBuilder<TPage extends PageNodeBuilder, TForm extends AnyUseFormReturn, TFormValue = unknown, TKey extends KeyByValue<InferReturnList<TPage>, TForm>, TProps extends quickFieldProps<any> = quickFieldProps<any>> extends InputNodeBuilder<TPage, TFormBuilder> {
  abstract component: (props: TProps) => JSX.Element;

  path: PathByValue<TForm, TFormValue>;
  component_props: Omit<TProps, "onChange" | "defaultValue">;
  transform?: (value: InferInputValue<TProps>) => Promise<TFormValue>;

  constructor(key: TKey, path: PathByValue<AnyFormValues<InferUseFormReturns<TPage>[TKey]>, TFormValue>) {
    super(key);
    this.path = path;
  }

  addPlaceHolder(placeholder: string) {
    this.component_props.placeholder = placeholder;
  }

  addTransform(transform: (value: InferInputValue<TProps>) => Promise<TFormValue>) {
    this.transform = transform;
  }

  buildContent(props: { name: string; form: UseDatabaseFormReturn<string>; }): JSX.Element {
    var Component = () => {
      const { control, defaultValues } = props.form

      var onChange = (field) => (this.transform ? (value) => this.transform(value).then(field.onChange) : field.onChange);
      var defaultValue = getFromPath(defaultValues, this.path as any);

      return (
        <FormField
          control={control}
          name={this.path as any}
          render={({ field, fieldState }) => (
            <>
              <this.component {...(this.component_props as any)} defaultValue={defaultValue} onChange={onChange(field)} />
              <ErrorMessage value={fieldState.error.message} />
            </>
          )}
        />
      );
    };

    return <Component />;
  }
}

export abstract class Checkbox<T extends PageNodeBuilder, F extends AnyFormBuilder, V> extends QuickInputBuilder<T, F, V, quickCheckboxProps> {
  component = QuickCheckbox;

  addText(text: string) {
    this.component_props.text = text;
  }
}

export abstract class Select<T extends PageNodeBuilder, F extends AnyFormBuilder, V> extends QuickInputBuilder<T, F, V, quickSelectProps> {
  component = QuickSelect;

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

export abstract class Text<T extends PageNodeBuilder, F extends AnyFormBuilder, V> extends QuickInputBuilder<T, F, V, quickTextFieldProps> {
  component = QuickTextField;

  mode(mode: "onBlur" | "onChange") {
    this.component_props.mode = mode;
    return this;
  }
}

export abstract class TextArea<T extends PageNodeBuilder, F extends AnyFormBuilder, V> extends QuickInputBuilder<T, F, V, quickTextAreaProps> {
  component = QuickTextArea;

  mode(mode: "onBlur" | "onChange") {
    this.component_props.mode = mode;
    return this;
  }

  resizeable() {
    this.component_props.resize = "true";
    return this;
  }
}
