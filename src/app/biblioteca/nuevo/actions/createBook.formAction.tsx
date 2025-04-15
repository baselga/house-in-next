"use server";

import { type FormState } from "@/ui/forms/Form/shared/formState";
import { createBookSchema } from "./createBook.schema";
import { parseZodError } from "@/ui/forms/Form/shared/parseZodError";
import { parseErrorValidation } from "@/ui/forms/Form/shared/parseErrorValidation";
import { createBook } from "@/db/book/book.useCase";
import type { BookBase } from "@/db/book/book.type";

export type CreateBookRespData = BookBase | undefined;

export async function createBoockFormAction(
  prevSatate: FormState<CreateBookRespData>,
  formData: FormData
): Promise<FormState<CreateBookRespData>> {
  const data = Object.fromEntries(formData);

  const parsed = createBookSchema.safeParse(data);  
  if (!parsed.success) {    
    return parseZodError({
      zodError: parsed.error,
      values: data,
    });
  }  

  try {    
    const newValues = await createBook(parsed.data);

    return {
      message: "Libro añadido",
      data: newValues,
      isSuccess: true,
    };
  } catch (error) {    
    return parseErrorValidation({ error, values: parsed.data });
  }
}
