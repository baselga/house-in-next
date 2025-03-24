import { cx } from "@/helpers/cx";
import { useFormContext } from "react-hook-form";

type TextInputProps = {
  source: string;
  label?: string;
  required?: boolean;
  disabled?: boolean;
  helperText?: string;
  placeholder?: string;
};

export const TextInput = (props: TextInputProps) => {
  const { source, label, disabled, helperText, required, placeholder } = props;

  const { register, formState } = useFormContext();
  const { errors } = formState;


  const hasError = !!errors[source];
  const messageError = errors[source]?.message || "";

  return (
    <fieldset className="fieldset">
      {label && (
        <legend className="fieldset-legend text-sm">
          {label}
          {required && <span className="text-error">{"*"}</span>}
        </legend>
      )}
      <input
        type="text"
        className={cx("input w-full", hasError && "input-error")}
        placeholder={placeholder}
        {...register(source, {
          disabled,
          required,
        })}
      />
      <p className="fieldset-label">
        {hasError ? (
          <span className="text-error">{messageError.toString()}</span>
        ) : (
          helperText
        )}
      </p>
    </fieldset>
  );
};
