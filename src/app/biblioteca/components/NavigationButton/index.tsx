"use client";

import { ArrowLeftIcon, CirclePlusIcon } from "lucide-react";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

function NavigationButton() {
  const segment = useSelectedLayoutSegment();
  
  return segment ? (
    <Link href={`/biblioteca`}>
      <BackButton />
    </Link>
  ) : (
    <Link href={"/biblioteca/nuevo"}>
      <AddButton />
    </Link>
  );
}

function AddButton() {
  return (
    <button className="btn btn-md flex gap-4 items-center">
      Añadir
      <CirclePlusIcon size={24} />
    </button>
  );
}

function BackButton() {
  return (
    <button className="btn btn-md flex gap-4 items-center">
      Volver
      <ArrowLeftIcon size={24} />
    </button>
  )
}

export default NavigationButton;
