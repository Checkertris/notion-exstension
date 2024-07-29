import { useRef } from "react";
import { reduceObject, terminateSym } from "~/utils";
import { UseFormReturn, UseFormListReturn, UseFormReturnValuesList } from "./iForms";

export function useFormList<T extends Record<string, UseFormReturn>>(input: T): UseFormListReturn<T> {
  const forms = useRef(input).current;

  async function handleSubmit(): Promise<UseFormReturnValuesList<T> | false> {
    return reduceObject(forms, {
      value: async (key, form) => {
        var result = await form.handleSubmit()
        if (!result) return terminateSym
        return result
      }
    }) as any
  }

  function trigger() {
    return Object.values((form) => form.trigger())
  }

  return { trigger, handleSubmit };
}
