"use client";

import { useState } from "react";
import { useController, useFormContext } from "react-hook-form";
import { z } from "zod";

import { SagaBook } from "@/db/bookSaga/bookSaga.type";
import useEvent from "@/helpers/useEvent";
import { Modal } from "@/ui/desingSystem/Modal";
import { CreateButton } from "@/ui/forms/CreateButton";
import { Form } from "@/ui/forms/Form";
import { type FormState } from "@/ui/forms/Form/shared/formState";
import { TextInput } from "@/ui/forms/TextInput";
import { createBookSagaFormAction, CreateBookSagaRespData } from "../actions/createBookSaga.formAction";
import { createBookSagaSchema } from "../actions/createBookSaga.schema";

const defaultValues = {
  name: "",
};

type SagaInputProps = {
  source: string;
  bookSagas: SagaBook[];
};

export const BookSagaInput = (props: SagaInputProps) => {
  const { source, bookSagas } = props;
  const [open, setOpen] = useState(false);
  const [choices, setChoices] = useState(
    bookSagas.map((bookSaga) => ({
      value: bookSaga.id,
      name: bookSaga.name,
    }))
  );

  const { control } = useFormContext();

  const { field, formState } = useController({
    name: source,
    control,
  });
  
  const onSuccess = useEvent(
    ({data}: FormState<CreateBookSagaRespData>) => {
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
        <legend className="fieldset-legend">Saga</legend>
        <div className="flex">
          <select
            className="select rounded-r-none w-full"
            defaultValue=""
            {...field}
          >
            <option></option>
            {choices.map((choice) => (
              <option key={choice.value} value={choice.value}>
                {choice.name}
              </option>
            ))}
          </select>
          <button
            type="button"
            className="btn btn-primary rounded-l-none"
            onClick={() => setOpen(true)}
          >
            Añadir saga
          </button>
        </div>
        <p className="fieldset-label">
          {hasError && (
            <span className="text-error">{messageError.toString()}</span>
          )}
        </p>
      </fieldset>
      <Modal open={open} onClose={() => setOpen(false)}>
        <Form<z.output<typeof createBookSagaSchema>, CreateBookSagaRespData>
          action={createBookSagaFormAction}
          schema={createBookSagaSchema}
          defaultValues={defaultValues}
          onSuccess={onSuccess}
        >
          <h3 className="font-bold text-lg">Nueva saga</h3>
          <TextInput
            source="name"
            label="Titulo"
            required
            placeholder="Introduce el titulo de la saga"
          />
          <div className="modal-action">
            <CreateButton label="Crear" />
          </div>
        </Form>
      </Modal>
    </>
  );
};
