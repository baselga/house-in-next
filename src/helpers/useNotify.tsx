import { useCallback } from "react";
import { toast, ToastPosition } from "react-toastify";

const toastOptions = {
  position: "bottom-right" as ToastPosition,
  theme: "dark",
};

export function useNotify() {
  const notify = useCallback(
    (
      message: string,
      type?: "default" | "info" | "success" | "warning" | "error"
    ) => {
      switch (type) {
        case "info":
          toast.info(message, toastOptions);
          break;
        case "success":
          toast.success(message, toastOptions);
          break;
        case "warning":
          toast.warning(message, toastOptions);
          break;
        case "error":
          toast.error(message, toastOptions);
          break;
        case "default":
        default:
          toast(message, toastOptions);
          break;
      }
    },
    []
  );

  return notify;
}
