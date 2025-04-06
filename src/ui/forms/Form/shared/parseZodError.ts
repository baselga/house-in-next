import { ZodError } from "zod";
import { FormState } from "./formState";

export function parseZodError({
  zodError,
  message,
  values,
}: {
  zodError: ZodError,
  values?: Record<string, unknown>
  message?: string
}): FormState {  
  return {
    message: message || "Los datos del formulario no son validos",
    error: {
      issues: zodError.issues.map((issue) => ({
        path: issue.path[0],
        message: issue.message,
      })),
      values
    },
    isSuccess: false,
  };
}
