import { quickFieldProps } from "~/components/quickComponents";
import { PathByType, getFromPath } from "~/utils";
import { FormField, ErrorMessage } from "~/features/form";

import { DefaultFieldsetItemBuilder } from "../defaultFieldsetItemBuilder";
import { FormListBuilders, FormListUseFormReturns, FormListValues } from "~/features/formList";
import { ContextUserList } from "~/hooks";

type InferInputValue<T extends quickFieldProps<any>> = T extends quickFieldProps<infer A> ? A : never;

export abstract class InputItemBuilder<T extends FormListBuilders, TKey extends keyof T, TValue, TProps extends quickFieldProps<any>> extends DefaultFieldsetItemBuilder<T> {
  form: TKey;
  path: PathByType<FormListValues<T>[TKey], TValue>;
  transform?: (value: InferInputValue<TProps>) => Promise<TValue>;
  component_props: Omit<TProps, "onChange" | "defaultValue">;
  abstract component: (props: TProps) => JSX.Element;

  constructor(form: TKey, path: PathByType<FormListValues<T>[TKey], TValue>) {
    super();
    this.form = form;
    this.path = path;
  }

  addPlaceHolder(placeholder: string) {
    this.component_props.placeholder = placeholder;
  }

  addTransform(transform: (value: InferInputValue<TProps>) => Promise<TValue>) {
    this.transform = transform;
  }

  buildBody(context: ContextUserList<FormListUseFormReturns<T>>): JSX.Element {
    var Component = () => {
      const { control, defaultValues } = context[this.form]();

      return (
        <FormField
          control={control}
          name={this.path as any}
          render={({ field, fieldState }) => (
            <>
              <this.component {...(this.component as any)} defaultValue={getFromPath(defaultValues, this.path as any)} onChange={this.transform ? (value) => this.transform(value).then(field.onChange) : field.onChange} />
              <ErrorMessage value={fieldState.error.message} />
            </>
          )}
        />
      );
    };

    return <Component />;
  }
}
