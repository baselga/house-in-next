"use client";
import { cx } from "@/helpers/cx";
import { useEffect, useMemo, useRef } from "react";
import { Portal } from "../Portal";

type ModalProps = {
  open: boolean;
  onClose: () => void;
  position?: "middle" | "top" | "bottom" | "left" | "right";
} & React.HTMLAttributes<HTMLDialogElement>;

export const Modal = ({ children, open, className, position = "middle", ...rest }: ModalProps) => {
  const modalRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (open) {
      modalRef.current?.show();
    } else {
      modalRef.current?.close();
    }
  }, [open]);

  const postionClass =  useMemo(() => {
    switch (position) {      
      case "top":
        return "modal-top";
      case "bottom":
        return "modal-bottom";
      case "left":
        return "modal-left";
      case "right":
        return "modal-right";
      case "middle":
      default:
        return "modal-middle";
    }
  }, [position])

  return (
    <Portal container="modals-portal">
      <dialog ref={modalRef} className={cx("modal modal-middle", postionClass, className)} {...rest}>
        <div className="modal-box bg-base-300">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          {children}          
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </Portal>
  );
};
