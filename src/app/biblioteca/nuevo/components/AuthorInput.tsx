"use client";

import { useState } from "react";
import { useController, useFormContext } from "react-hook-form";
import { z } from "zod";

import { type Author } from "@/db/author/author.type";
import useEvent from "@/helpers/useEvent";
import { Modal } from "@/ui/desingSystem/Modal";
import { CreateButton } from "@/ui/forms/CreateButton";
import { Form } from "@/ui/forms/Form";
import { type FormState } from "@/ui/forms/Form/shared/formState";
import { TextInput } from "@/ui/forms/TextInput";
import { createAuthorFormAction, type CreateAuthorRespData } from "../actions/createAuthor.formAction";
import { createAuthorSchema } from "../actions/createAuthor.schema";

const defaultValues = {
  name: "",
};

type AuthorInputProps = {
  source: string;
  authors: Author[];
};
export const AuthorInput = (props: AuthorInputProps) => {
  const { source, authors } = props;  
  const [open, setOpen] = useState(false);
  const [choices, setChoices] = useState(authors.map((author) => ({
    value: author.id,
    name: author.name,
  })));

  const { control } = useFormContext();

  const { field, formState } = useController({
    name: source,
    control,
  });


  const onSuccess = useEvent(
    ({data}: FormState<CreateAuthorRespData>) => {
      if(data){
        setChoices([...choices, {
          value: data.id,
          name: data.name,
        }])
        field.onChange(data?.id);
        setOpen(false);
      }
    }
  )  

  const { errors } = formState;
  const hasError = !!errors[source];
  const messageError = errors[source]?.message || "";

  return (
    <>
      <fieldset className="fieldset w-full">
        <legend className="fieldset-legend">
          Autor<span className="text-error">{"*"}</span>
        </legend>
        <div className="flex">
          <select
            className="select rounded-r-none w-full"
            defaultValue=""
            {...field}
          >
            <option disabled></option>
            {choices.map((choice) => (
              <option
                key={choice.value}
                value={choice.value}
              >
                {choice.name}
              </option>
            ))}
          </select>          
          <button
            type="button"
            className="btn btn-primary rounded-l-none"
            onClick={() => setOpen(true)}
          >
            Añadir autor
          </button>
        </div>
        <p className="fieldset-label">
          {hasError && (
            <span className="text-error">{messageError.toString()}</span>
          )}
        </p>
      </fieldset>
      <Modal open={open} onClose={() => setOpen(false)}>
        <Form<z.output<typeof createAuthorSchema>, CreateAuthorRespData>
          action={createAuthorFormAction}
          schema={createAuthorSchema}
          defaultValues={defaultValues}
          onSuccess={onSuccess}
        >
          <h3 className="font-bold text-lg">Nuevo autor</h3>
          <TextInput
            source="name"
            label="Nombre"
            required
            placeholder="Introduce el nombre del autor"
          />
          <div className="modal-action">
            <CreateButton label="Crear" />
          </div>
        </Form>
      </Modal>
    </>
  );
};
