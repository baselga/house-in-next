"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ReactNode, useActionState, useEffect } from "react";
import {
  FieldValues,
  FormProvider,
  Path,
  useForm,
  UseFormProps,
} from "react-hook-form";
import { ZodSchema } from "zod";

import { useNotify } from "@/helpers/useNotify";
import { FormActionProvider } from "./formActionContext";
import { type FormState } from "./shared/formState";

const defaultFormState: FormState = {
  isSuccess: false,
};

type FormProps<k extends FieldValues> = {
  children: ReactNode | ReactNode[];
  className?: string;
  action: (state: FormState, data: FormData) => FormState | Promise<FormState>;
  schema: ZodSchema;
  onSuccess?: () => void;
} & UseFormProps<k>;

export function Form<k extends FieldValues>(props: FormProps<k>) {
  const { children, className, action, schema, onSuccess, ...rest } = props;
  const notify = useNotify();
  const methods = useForm<k>({
    resolver: zodResolver(schema),
    ...rest,
  });

  const [state, formAction, isPending] = useActionState(
    action,
    defaultFormState
  );
  

  useEffect(() => {
    if (state.issues) {
      state.issues.forEach((issue) =>
        methods.setError(issue.path as Path<k>, {
          type: "manual",
          message: issue.message,
        })
      );
    }
  }, [methods, state.issues]);

  useEffect(() => {
    if (!isPending) {
      if (state.isSuccess) {
        notify(
          state.message || "Se han guardado los datos correctamente.",
          "success"
        );
        if (onSuccess) {
          onSuccess();
        }
      } 
      if (!state.isSuccess && state.message)  {
        notify(state.message, "warning");
      }
    }
  }, [isPending, notify, onSuccess, state.isSuccess, state.message]);

  return (
    <FormProvider {...methods}>
      <FormActionProvider state={state} isPending={isPending}>
        <form className={className} action={formAction}>
          {children}
        </form>
      </FormActionProvider>
    </FormProvider>
  );
}
