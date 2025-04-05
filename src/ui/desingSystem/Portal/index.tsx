import { canUseDOM } from "@/helpers/canUseDOM";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

type PortalProps = {
  container: "modals-portal";
  children: React.ReactNode;
};

export function Portal({ container, children }: PortalProps) {  
  const [containerEl, setContainerEl] = useState<HTMLElement | null>(null)
  
  useEffect(() => {
    if (canUseDOM) {
      const el = document.getElementById(container);
      if (el) {
        setContainerEl(el);
      } else {
        console.error(`No se encontró el contenedor ${container}`);
      }
    }
  }, [container])
  
  if (!canUseDOM || !containerEl) {
    return null;
  }
  return ReactDOM.createPortal(children, containerEl);
}
