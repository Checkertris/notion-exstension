import { useEffect } from "react";
import { useTimeout } from "./useTimeout";

function useDebounce(callback, delay: number, dependencies) {
  const { reset, clear } = useTimeout(callback, delay);
  useEffect(reset, [...dependencies, reset]);
  useEffect(clear, []);
}
