"use client";

import { z } from "zod";

import { Form } from "@/ui/forms/Form";
import { TextInput } from "@/ui/forms/TextInput";
import { createBoockFormAction } from "../actions/createBook.formAction";
import { createBookSchema } from "../actions/createBook.schema";
import { CreateButton } from "@/ui/forms/CreateButton";
import { redirect } from "next/navigation";
import { useCallback } from "react";
import { AuthorInput } from "./AuthorInput";
import { Author } from "@/db/author/author.type";

export const BoockForm = ({ authors }: { authors: Author[] }) => {
  const onSuccess = useCallback(() => {
    redirect("/biblioteca");
  }, []);

  return (
    <Form<z.output<typeof createBookSchema>>
      className="card bg-base-200 w-full px-4 py-4"
      action={createBoockFormAction}
      schema={createBookSchema}
      onSuccess={onSuccess}
      defaultValues={{
        title: "",
        url: "",
      }}
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
        <TextInput source="url" label="Url de la imágen" />
        <AuthorInput source="authorId" authors={authors} />
      </div>
    </Form>
  );
};
