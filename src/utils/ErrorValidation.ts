
export class ErrorValidation extends Error {
  issues?: { path: string; message: string }[];

  constructor({
    message,
    issues,
  }: {
    message?: string;
    issues?: { path: string; message: string }[];
  }) {
    super(message);
    this.message = message ?? "Se ha producido un error de validación";
    this.issues = issues;
  }
}