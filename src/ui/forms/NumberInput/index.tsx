import { cx } from "@/helpers/cx";
import { useCallback } from "react";
import { useFormContext } from "react-hook-form";

type NumberInputProps = {
  source: string;
  label?: string;
  required?: boolean;
  disabled?: boolean;
  helperText?: string;
  placeholder?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const NumberInput = (props: NumberInputProps) => {
  const { source, label, disabled, helperText, required, placeholder, ...rest } = props;

  const { register, formState } = useFormContext();
  const { errors } = formState;

  const registerProp = register(source, {
    disabled,
    required,
  })

  const onChange = useCallback(    
    (e: React.ChangeEvent<HTMLInputElement>) => {      
      const value = e.target.value;
      if (value === "") {
        registerProp.onChange({target: { value: undefined }});
      } else {
        registerProp.onChange(e);
      }
    },
    [registerProp],
  )
  

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
        type="number"
        className={cx("input w-full", hasError && "input-error")}
        placeholder={placeholder}
        {...registerProp}
        onChange={onChange}
        {...rest}
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
