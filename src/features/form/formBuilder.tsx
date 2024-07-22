import RHF from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Builder } from "~/features/builder";
import { FormSchema, FormDefaultValues, FormValues, UseFormReturn } from "./iForms";
import useForm from "./useForm";

export class FormBuilder<T extends FormSchema> implements Builder<UseFormReturn<T>> {
  schema: T
  defaultValues?: FormDefaultValues<T>;
  configuration?: {
    syncMode?: "async" | "sync";
    validationMode?: "onBlur" | "onChange" | "onSubmit" | "onTouched" | "all";
    reValidateMode?: "onBlur" | "onChange" | "onSubmit";
  };

  constructor(schema: T) {
    this.schema = schema;
  }

  default(values: FormDefaultValues<T>) {
    this.defaultValues = values;
    return this;
  }

  config(syncMode: "async" | "sync", validationMode?: "onBlur" | "onChange" | "onSubmit" | "onTouched" | "all", reValidateMode?: "onBlur" | "onChange" | "onSubmit") {
    this.configuration = { syncMode, validationMode, reValidateMode };
    return this;
  }

  build() {
    var form = RHF.useForm<FormValues<T>>({
      mode: this.configuration.validationMode,
      reValidateMode: this.configuration.reValidateMode,
      resolver: yupResolver(this.schema, {}, { mode: this.configuration.syncMode }),
      defaultValues: this.defaultValues,
    });

    return useForm<T>(form, this.defaultValues);
  }
}
