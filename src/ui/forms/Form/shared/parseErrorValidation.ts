import { ErrorValidation } from "@/utils/ErrorValidation";

export const parseErrorValidation = (error: unknown) => {
  if (error instanceof ErrorValidation) {
    return {
      message: error.message,
      error: {
        issues: error.issues,
      },
      isSuccess: false
    };
  }
  return { 
    message: "Se ha producido un error.",       
    isSuccess: false 
  }
}