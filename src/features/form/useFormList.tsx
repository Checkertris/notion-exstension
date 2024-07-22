import { useRef } from "react";
import { terminateSym } from "~/utils";
import FlexibleRecord from "~/utils/flexibleRecord";
import { UseFormReturn, UseFormListReturn } from "./iForms";

export default function useFormList<T extends FlexibleRecord.Type<UseFormReturn>>(input: T): UseFormListReturn<T> {
  const forms = useRef(input).current;

  async function handleSubmit() {
    return FlexibleRecord.asyncIterate(forms, async (form: UseFormReturn) => {
      var result = await form.handleSubmit()
      if (!result) return terminateSym
      return result
    })
  }

  function trigger() {
    FlexibleRecord.iterate(forms, (form) => form.trigger())
  }

  return { trigger, handleSubmit };
}
