"use server";

import { type FormState } from "@/ui/forms/Form/shared/formState";
import { createBookSchema } from "./createBook.schema";
import { parseFormServerValidationErrors } from "@/ui/forms/Form/shared/parseFormServerValidationErrors";

export async function createBoockFormAction(
  prevSatate: FormState,
  formData: FormData
): Promise<FormState> {
  const data = Object.fromEntries(formData);

  const parsed = createBookSchema.safeParse(data);
  console.log("Server Action CreateBook", parsed);

  if (!parsed.success) {
    return parseFormServerValidationErrors(parsed.error);
  }  

  // Aquí insertaremos el libro en la base de datos
  await new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });

  return { message: "Libro añadido.", isSuccess: true };
}
