import { InputNodeBuilder } from "./inputNodeBuilder"
import { ParentNodeBuilder, InferForms } from "../iFormNodeBuilder";
import { Path, getFromPath, PathValue, KeyByValue } from "~/utils";
import { UseFormReturn, UseFormReturnValues, FormField, ErrorMessage } from "~/features/form";
import { quickFieldProps, enumKeysToQuickOptions, quickSelectProps, quickCheckboxProps, QuickTextField, quickTextAreaProps, quickTextFieldProps, QuickCheckbox, QuickSelect, QuickTextArea } from "~/components/quickComponents";
import { icon } from "~/constants";

type InferProps<T> = T extends quickFieldProps<infer A> ? A : never
type InferPath<T extends UseFormReturn> = Path<UseFormReturnValues<T>>

export abstract class QuickInputBuilder<TParent extends ParentNodeBuilder<any>, TForm extends UseFormReturn = UseFormReturn, TPath extends InferPath<TForm> = InferPath<TForm>, TProps extends quickFieldProps<any> = quickFieldProps<any>> extends InputNodeBuilder<TParent, TForm> {
    path: TPath
    transform: (value: InferProps<TProps>) => Promise<PathValue<UseFormReturnValues<TForm>, TPath>>
    component_props: Omit<TProps, "onChange" | "defaultValues">
    abstract component: (props: TProps) => JSX.Element;

    constructor(key: KeyByValue<InferForms<TParent>, TForm>, path: TPath) {
        super(key)
        this.path = path
    }

    addPlaceHolder(placeholder: string) {
        this.component_props.placeholder = placeholder;
    }

    addTransform(transform: (value: InferProps<TProps>) => Promise<PathValue<UseFormReturnValues<TForm>, TPath>>) {
        this.transform = transform;
    }

    build(forms: InferForms<TParent>): JSX.Element {
        var Component = () => {
            const { control, defaultValues } = this.getForm(forms)

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

export class Checkbox<T extends ParentNodeBuilder<any>, F extends UseFormReturn, P extends InferPath<F>> extends QuickInputBuilder<T, F, P, quickCheckboxProps> {
    component = QuickCheckbox;

    addText(text: string) {
        this.component_props.text = text;
    }
}

export class Select<T extends ParentNodeBuilder<any>, F extends UseFormReturn, P extends InferPath<F>> extends QuickInputBuilder<T, F, P, quickSelectProps> {
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

export class Text<T extends ParentNodeBuilder<any>, F extends UseFormReturn, P extends InferPath<F>> extends QuickInputBuilder<T, F, P, quickTextFieldProps> {
    component = QuickTextField;

    mode(mode: "onBlur" | "onChange") {
        this.component_props.mode = mode;
        return this;
    }
}

export class TextArea<T extends ParentNodeBuilder<any>, F extends UseFormReturn, P extends InferPath<F>> extends QuickInputBuilder<T, F, P, quickTextAreaProps> {
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




