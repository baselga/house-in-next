"use server";

import { type SagaBook } from "@/db/bookSaga/bookSaga.type";
import { createBookSaga } from "@/db/bookSaga/bookSaga.useCase";
import { type FormState } from "@/ui/forms/Form/shared/formState";
import { parseErrorValidation } from "@/ui/forms/Form/shared/parseErrorValidation";
import { parseZodError } from "@/ui/forms/Form/shared/parseZodError";
import { createBookSagaSchema } from "./createBookSaga.schema";

export type CreateBookSagaRespData = SagaBook | undefined;

export async function createBookSagaFormAction(
  prevSatate: FormState<CreateBookSagaRespData>,
  formData: FormData
): Promise<FormState<CreateBookSagaRespData>> {
  const data = Object.fromEntries(formData);

  const parsed = createBookSagaSchema.safeParse(data);

  if (!parsed.success) {
    return parseZodError({ zodError: parsed.error, values: data });
  }

  try {    
    const newValues = await createBookSaga(parsed.data);

    return {
      message: "Saga creada.",
      data: newValues,
      isSuccess: true,
    };
  } catch (error) {
    return parseErrorValidation({ error, values: parsed.data });
  }
}
