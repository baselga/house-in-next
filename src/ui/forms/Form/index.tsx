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

const defaultFormState: Omit<FormState, "data"> = {
  isSuccess: false,
};

type FormProps<K extends FieldValues, T = undefined> = {
  children: ReactNode | ReactNode[];
  className?: string;
  action: (state: FormState<T>, data: FormData) => FormState<T> | Promise<FormState<T>>;
  schema: ZodSchema;
  onSuccess?: (state: FormState<T>) => void;
} & UseFormProps<K>;

export function Form<K extends FieldValues, T = undefined>(props: FormProps<K, T>) {
  const { children, className, action, schema, onSuccess, ...rest } = props;
  const notify = useNotify();
  const methods = useForm<K>({
    resolver: zodResolver(schema),
    ...rest,
  });

  const [state, formAction, isPending] = useActionState(
    action,
    defaultFormState
  );

  useEffect(() => {
    if (state.error?.issues) {
      state.error.issues.forEach((issue) =>
        methods.setError(issue.path as Path<K>, {
          type: "manual",
          message: issue.message,
        })
      );
    }
  }, [methods, state.error]);

  useEffect(() => {
    if (!isPending) {
      if (state.isSuccess) {        
        notify(
          state.message || "Se han guardado los datos correctamente.",
          "success"
        );
        if (onSuccess) {
          onSuccess(state);
        }
      } 
      if (!state.isSuccess && state.message)  {
        notify(state.message, "warning");
      }
    }
  }, [isPending, notify, onSuccess, state]);

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
