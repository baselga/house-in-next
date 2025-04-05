"use server";

import { type Author } from '@/db/author/author.type';
import { createAuthor } from '@/db/author/author.useCase';
import { type FormState } from "@/ui/forms/Form/shared/formState";
import { parseErrorValidation } from '@/ui/forms/Form/shared/parseErrorValidation';
import { parseZodError } from "@/ui/forms/Form/shared/parseZodError";
import { createAuthorSchema } from "./createAuthor.schema";

export type CreateAuthorRespData = Author | undefined

export async function createAuthorFormAction(
  prevSatate: FormState<CreateAuthorRespData>,
  formData: FormData
): Promise<FormState<CreateAuthorRespData>> {
  const data = Object.fromEntries(formData);
  
  const parsed = createAuthorSchema.safeParse(data);
  console.log("Server Action CreateAuthor", parsed);

  if (!parsed.success) {
    return parseZodError(parsed.error);
  }

  try {
    const newAuthor = await createAuthor(parsed.data)
  
    return { 
      message: "Author añadido.", 
      data: newAuthor,
      isSuccess: true 
    };
  } catch (error) {
    return parseErrorValidation(error)
  }
}
