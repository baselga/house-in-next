"use client";

import { z } from "zod";

import type { Author } from "@/db/author/author.type";
import type { SagaBook } from "@/db/bookSaga/bookSaga.type";
import { CreateButton } from "@/ui/forms/CreateButton";
import { Form } from "@/ui/forms/Form";
import { NumberInput } from "@/ui/forms/NumberInput";
import { TextInput } from "@/ui/forms/TextInput";
import { redirect } from "next/navigation";
import { useCallback } from "react";
import { createBoockFormAction, type CreateBookRespData } from "../actions/createBook.formAction";
import { createBookSchema } from "../actions/createBook.schema";
import { AuthorInput } from "./AuthorInput";
import { BookSagaInput } from "./BookSagaInput";

const defaultValues = {
  title: "",
  url: "",
}

export const BoockForm = ({
  authors,
  bookSagas,
}: {
  authors: Author[];
  bookSagas: SagaBook[];
}) => {
  const onSuccess = useCallback(() => {
    redirect("/biblioteca");
  }, []);

  return (
    <Form<z.output<typeof createBookSchema>, CreateBookRespData>
      className="card bg-base-200 w-full px-4 py-4"
      action={createBoockFormAction}
      schema={createBookSchema}
      onSuccess={onSuccess}
      defaultValues={defaultValues}
    >
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Nuevo libro</h2>
        <CreateButton label="Añadir" />
      </div>
      <div className="divider"></div>
      <div className="flex flex-col gap-4">
        <TextInput
          source="title"
          label="Título"
          required
          placeholder="Introduce el nombre del libro"
        />
        <TextInput source="urlImage" label="Url de la imágen" />
        <AuthorInput source="authorId" authors={authors} />
        <div className="flex gap-4">
          <BookSagaInput source="sagaBookId" bookSagas={bookSagas} />
          <NumberInput source="order" label="Orden" min={1} />
        </div>
      </div>
    </Form>
  );
};
