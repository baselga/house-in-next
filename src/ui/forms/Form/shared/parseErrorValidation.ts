import { ErrorValidation } from "@/utils/ErrorValidation";

export const parseErrorValidation = ({
  error,
  values,
}: {
  error: unknown;
  values: Record<string, unknown>;
}) => {
  if (error instanceof ErrorValidation) {
    return {
      message: error.message,
      error: {
        issues: error.issues,
        values,
      },
      isSuccess: false,
    };
  }
  return {
    message: "Se ha producido un error.",
    isSuccess: false,
  };
};
