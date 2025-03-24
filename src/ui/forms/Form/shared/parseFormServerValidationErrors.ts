import { ZodError } from "zod";
import { FormState } from "./formState";

export function parseFormServerValidationErrors(
  zodError: ZodError,
  message?: string
): FormState {
  return {
    message: message || "Los datos del formulario no son validos",
    issues: zodError.issues.map((issue) => ({
      path: issue.path[0],
      message: issue.message,
    })),
    isSuccess: false,
  };
}
