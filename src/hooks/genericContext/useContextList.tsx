import { ContextPair, ContextList } from "./types";
import { useGenericContext } from "./useGenericContext";
import { reduceObject } from "~/utils";

export function useContextList<T extends Record<string, any>>(items: T) {
  var pairs = reduceObject(items, { value: ([name, item]: [string, any]) => useGenericContext(item) });

  var contextWrapper = Object.entries(pairs).reduce(
    (Wrapper, [name, [Provider, user]]) => {
      return (props: { children }) => {
        return (
          <Wrapper>
            <Provider value={items[name]}>{props.children}</Provider>
          </Wrapper>
        );
      };
    },
    (props: { children }) => {
      return <>{props.children}</>;
    }
  );

  var contextUsers = reduceObject(pairs, { value: ([name, [provider, user]]: [string, ContextPair<any>]) => user }) as ContextList<T>;

  return [contextWrapper, contextUsers] as const;
}
