"use client";

import { ArrowLeftIcon, CirclePlusIcon } from "lucide-react";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import * as S from "./styled";

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
    <S.Button>
      <span>Añadir</span>
      <CirclePlusIcon size={24} />
    </S.Button>
  );
}

function BackButton() {
  return (
    <S.Button>
      <span>Volver</span>
      <ArrowLeftIcon size={24} />
    </S.Button>
  );
}

export default NavigationButton;
