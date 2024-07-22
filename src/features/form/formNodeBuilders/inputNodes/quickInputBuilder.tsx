import { InputNodeBuilder } from "../childNodeBuilder"
import { ParentNodeBuilder } from "../parentNodeBuilder";
import { InferForms } from "../types";
import { KeyByValue, Path, getFromPath } from "~/utils";
import { UseFormReturn, UseFormReturnValues, FormField, ErrorMessage } from "~/features/form";
import { quickFieldProps, enumKeysToQuickOptions, quickSelectProps, quickCheckboxProps, QuickTextField, quickTextAreaProps, quickTextFieldProps, QuickCheckbox, QuickSelect, QuickTextArea } from "~/components/quickComponents";
import { icon } from "~/constants";
import { PathValue } from "react-hook-form";

type Infer<T> = T extends quickFieldProps<infer A> ? A : never

export abstract class QuickInputBuilder<TPage extends ParentNodeBuilder<any>, TForm extends UseFormReturn = UseFormReturn, TProps extends quickFieldProps<any> = quickFieldProps<any>> extends InputNodeBuilder<TPage, TForm> {
    path: Path<UseFormReturnValues<TForm>>
    transform: (value: Infer<TProps>) => Promise<PathValue<UseFormReturnValues<TForm>, typeof this.path>>
    component_props: Omit<TProps, "onChange" | "defaultValues">
    abstract component: (props: TProps) => JSX.Element;

    constructor(key: KeyByValue<InferForms<TPage>, TForm>, path: Path<UseFormReturnValues<TForm>>) {
        super(key)
        this.path = path
    }

    addPlaceHolder(placeholder: string) {
        this.component_props.placeholder = placeholder;
    }

    addTransform(transform: (value: Infer<TProps>) => Promise<PathValue<UseFormReturnValues<TForm>, typeof this.path>>) {
        this.transform = transform;
    }

    buildContent(form: TForm): JSX.Element {
        var Component = () => {
            const { control, defaultValues } = form

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

export abstract class Checkbox<T extends ParentNodeBuilder<any>, F extends UseFormReturn> extends QuickInputBuilder<T, F, quickCheckboxProps> {
    component = QuickCheckbox;

    addText(text: string) {
        this.component_props.text = text;
    }
}

export abstract class Select<T extends ParentNodeBuilder<any>, F extends UseFormReturn> extends QuickInputBuilder<T, F, quickSelectProps> {
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

export abstract class Text<T extends ParentNodeBuilder<any>, F extends UseFormReturn> extends QuickInputBuilder<T, F, quickTextFieldProps> {
    component = QuickTextField;

    mode(mode: "onBlur" | "onChange") {
        this.component_props.mode = mode;
        return this;
    }
}

export abstract class TextArea<T extends ParentNodeBuilder<any>, F extends UseFormReturn> extends QuickInputBuilder<T, F, quickTextAreaProps> {
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




