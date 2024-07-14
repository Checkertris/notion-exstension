import RHF from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Builder from "../builders";
import { FormSchema, FormDefaultValues, FormValues, UseFormReturn } from "./iForm";
import useForm from "./useForm";

export default class FormBuilder<S extends FormSchema> extends Builder<UseFormReturn<S>> {
  schema: S;
  defaultValues?: FormDefaultValues<S>;
  configuration?: {
    syncMode?: "async" | "sync";
    validationMode?: "onBlur" | "onChange" | "onSubmit" | "onTouched" | "all";
    reValidateMode?: "onBlur" | "onChange" | "onSubmit";
  };

  constructor(schema: S) {
    super();
    this.schema = schema;
  }

  default(values: FormDefaultValues<S>) {
    this.defaultValues = values;
    return this;
  }

  config(syncMode: "async" | "sync", validationMode?: "onBlur" | "onChange" | "onSubmit" | "onTouched" | "all", reValidateMode?: "onBlur" | "onChange" | "onSubmit") {
    this.configuration = { syncMode, validationMode, reValidateMode };
    return this;
  }

  build() {
    var form = RHF.useForm<FormValues<S>>({
      mode: this.configuration.validationMode,
      reValidateMode: this.configuration.reValidateMode,
      resolver: yupResolver(this.schema, {}, { mode: this.configuration.syncMode }),
      defaultValues: this.defaultValues,
    });

    return useForm<S>(form, this.defaultValues);
  }
}
