import React, { createContext, useMemo } from "react";
import { FormState } from "./shared/formState";

type TypeFormActionContext = {
  state: FormState;
  isPending: boolean;
};

export const FormActionContext = createContext<TypeFormActionContext | null>(
  null
);

export function FormActionProvider({
  children,
  state,
  isPending,
}: { children: React.ReactNode } & TypeFormActionContext) {
  const context = useMemo(
    () => ({
      state,
      isPending,
    }),
    [isPending, state]
  );

  return (
    <FormActionContext.Provider value={context}>
      {children}
    </FormActionContext.Provider>
  );
}