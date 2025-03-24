import { useContext } from "react";
import { FormActionContext } from "../formActionContext";

export function useFormActionContext() {
  const context = useContext(FormActionContext);
  if (context === null) {
    throw new Error("ERROR: useFormActionContext. FormActionContext is null");
  }
  return context;
}
