import { cx } from "@/helpers/cx";
import { useFormContext } from "react-hook-form";

type SelectInputProps = {
  source: string;
  options: { value: string; label: string; disabled?: boolean }[];
  label?: string;
  helperText?: string;
  required?: boolean;
  disabled?: boolean;
} & React.SelectHTMLAttributes<HTMLSelectElement>;

export const SelectInput = (props: SelectInputProps) => {
  const { className, options, label, source, helperText, required, disabled } =
    props;

  const { register, formState } = useFormContext();
  const { errors } = formState;

  const hasError = !!errors[source];
  const messageError = errors[source]?.message || "";

  return (
    <fieldset className="fieldset">
      {label && (
        <legend className="fieldset-legend">
          {label}
          {required && <span className="text-error">{"*"}</span>}
        </legend>
      )}
      <select
        className={cx("select", className)}
        {...register(source, {
          disabled,
          required,
        })}
      >
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
            disabled={option.disabled}
          >
            {option.label}
          </option>
        ))}
      </select>
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
