import { UseFormReturn as RHFUseFormReturn } from "react-hook-form";
import { useState } from "react";
import { FormSchema, FormDefaultValues, FormValues } from "./iForm";

export default function useForm<S extends FormSchema>(form: RHFUseFormReturn<FormValues<S>>, defaultValues: FormDefaultValues<S>) {
  const [formValues, setFormValues] = useState<FormValues<S> | null>(null);

  async function handleSubmit() {
    await form.handleSubmit(
      (sucess) => {
        setFormValues(sucess);
      },
      (error) => {
        setFormValues(null);
        console.log(error);
      }
    );
    return formValues;
  }

  return { ...form, defaultValues, handleSubmit };
}
