"use client";
import React, { useId, useRef } from "react";
import * as S from "./styled";

type DataList = {
  label?: string;
  choices: { value: string | number; name: string | number }[];
} & React.InputHTMLAttributes<HTMLInputElement>;
export const DataList = (props: DataList) => {
  const id = useId();
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLInputElement>(null);
  const { label, choices, ...rest } = props;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log({ value: e.target.value, ref: inputRef.current });
    if (inputRef.current && listRef.current) {
      const selectedOption = choices.find(
        (each) => each.name == e.target.value
      );
      if (selectedOption) {
        listRef.current.value = selectedOption.name.toString()
        inputRef.current.value = selectedOption.value.toString()
      } else {
          inputRef.current.value = e.target.value;
      }
    }
  };

  return (
    <S.Root>
      {label && <S.Label htmlFor={id}>{label}</S.Label>}
      <input {...rest} type="text" ref={inputRef} />
      <S.Input ref={listRef} list={id} onChange={onChange} />
      <S.DataList id={id} onChange={(e) => console.log("onSlect", e.target)}>
        on
        {choices.map((choice) => (
          <option key={choice.value}>
            {choice.name}
          </option>
        ))}
      </S.DataList>
    </S.Root>
  );
};
