import React from "react";

export function useGenericContext<T extends any | unknown>(defaultValue: T) {
  const context = React.createContext<T | undefined>(defaultValue);

  const useContext = (): T => {
    const c = React.useContext(context);

    if (c === undefined) {
      throw new Error("No Context Found: make sure to use the hook inside the Context Provider children");
    }
    return c;
  };

  return [context.Provider, useContext] as const;
}
