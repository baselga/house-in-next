import { CirclePlusIcon } from "lucide-react";

import { cx } from "@/helpers/cx";
import { useFormActionContext } from "@/ui/forms/Form/shared/useFormActionContext";

type CreateButtonProps = {
  label?: string;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const CreateButton = (props: CreateButtonProps) => {
  const { label = "Crear", className, disabled, ...rest } = props;
  const { isPending } = useFormActionContext();

  const isDisabled = disabled || isPending;

  return (
    <button
      className={cx("btn btn-primary flex gap-2", className && className)}
      disabled={isDisabled}
      {...rest}
    >
      <span>{label}</span>
      {isPending ? (
        <span className="loading loading-spinner"></span>
      ) : (
        <CirclePlusIcon size={24} />
      )}
    </button>
  );
};
