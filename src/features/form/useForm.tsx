import { UseFormReturn as RHFUseFormReturn } from "react-hook-form";
import { useState } from "react";
import { FormSchema, FormDefaultValues, FormValues, UseFormReturn } from "./iForms";

export default function useForm<T extends FormSchema>(form: RHFUseFormReturn<FormValues<T>>, defaultValues: FormDefaultValues<T>): UseFormReturn<T> {
  const [formValues, setFormValues] = useState<FormValues<T> | null>(null);

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
